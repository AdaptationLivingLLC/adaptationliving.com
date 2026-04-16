import { NextResponse } from "next/server";
import {
  constructWebhookEvent,
  getStripe,
  createLocation,
  createUser,
  snapshotIdForTier,
  buildPortalLoginUrl,
  type Stripe,
} from "@al/payments";
import { sendWelcomeEmail } from "@al/mail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GHL_AGENCY_API_KEY = process.env.GHL_AGENCY_API_KEY;
const GHL_AGENCY_ID = process.env.GHL_AGENCY_ID;

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json(
      { error: "missing stripe-signature header" },
      { status: 400 },
    );
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = constructWebhookEvent(rawBody, signature);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `signature verification failed: ${msg}` },
      { status: 400 },
    );
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true, ignored: event.type });
  }

  if (!GHL_AGENCY_API_KEY || !GHL_AGENCY_ID) {
    return NextResponse.json(
      {
        error:
          "GHL_AGENCY_API_KEY and GHL_AGENCY_ID must be set to provision sub-accounts",
      },
      { status: 500 },
    );
  }

  const session = event.data.object as Stripe.Checkout.Session;

  const stripe = getStripe();
  const full = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items.data.price.product", "customer"],
  });

  const email =
    full.customer_details?.email ??
    (typeof full.customer === "object" && full.customer !== null && "email" in full.customer
      ? (full.customer as Stripe.Customer).email ?? ""
      : "");
  const fullName = full.customer_details?.name ?? "";
  const phone = full.customer_details?.phone ?? undefined;
  const [firstName, ...rest] = fullName.trim().split(/\s+/);
  const lastName = rest.join(" ") || "Account";

  const tier =
    (full.metadata?.tier as string | undefined) ??
    (full.line_items?.data[0]?.price?.metadata?.tier as string | undefined) ??
    (typeof full.line_items?.data[0]?.price?.product === "object" &&
    full.line_items.data[0].price.product !== null &&
    "metadata" in full.line_items.data[0].price.product
      ? ((full.line_items.data[0].price.product as Stripe.Product).metadata?.tier as
          | string
          | undefined)
      : undefined);

  if (!email || !tier) {
    return NextResponse.json(
      {
        error: `cannot provision without email and tier. email=${!!email} tier=${tier ?? "missing"}`,
      },
      { status: 400 },
    );
  }

  const snapshotId = snapshotIdForTier(tier);
  const businessName = full.custom_fields?.find(
    (f) => f.key === "business_name",
  )?.text?.value ?? fullName ?? email;

  const location = await createLocation(GHL_AGENCY_API_KEY, {
    companyId: GHL_AGENCY_ID,
    name: businessName,
    email,
    phone,
    snapshotId,
    firstName: firstName ?? "New",
    lastName,
  });

  await createUser(GHL_AGENCY_API_KEY, {
    locationId: location.id,
    companyId: GHL_AGENCY_ID,
    firstName: firstName ?? "New",
    lastName,
    email,
    phone,
    type: "account",
    role: "admin",
  });

  if (full.customer && typeof full.customer === "string") {
    await stripe.customers.update(full.customer, {
      metadata: {
        ghl_location_id: location.id,
        ghl_tier: tier,
      },
    });
  }

  await sendWelcomeEmail({
    to: email,
    firstName: firstName ?? "there",
    tier,
    portalUrl: buildPortalLoginUrl(),
  });

  return NextResponse.json({
    received: true,
    provisioned: {
      location_id: location.id,
      tier,
      email,
    },
  });
}
