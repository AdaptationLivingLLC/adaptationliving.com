import { NextResponse } from "next/server";
import { createContact, createNote, ghlConfigured } from "../../../../lib/ghl";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s\-().]{6,20}$/;
const URL_RE = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i;

const ALLOWED_ORIGINS = new Set([
  "https://adaptationliving.com",
  "https://www.adaptationliving.com",
]);

const MAX_BODY_BYTES = 16 * 1024;

const hits = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 60_000;

function throttle(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function normalizeUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin") ?? "";
    const referer = request.headers.get("referer") ?? "";
    const originOk =
      ALLOWED_ORIGINS.has(origin) ||
      [...ALLOWED_ORIGINS].some((o) => referer.startsWith(o));
    if (process.env.NODE_ENV === "production" && !originOk) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (!throttle(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    if (typeof body.website_confirm === "string" && body.website_confirm.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 202 });
    }

    const firstName =
      (typeof body.firstName === "string" ? body.firstName : "").trim().slice(0, 60);
    const lastName =
      (typeof body.lastName === "string" ? body.lastName : "").trim().slice(0, 60);
    const email =
      (typeof body.email === "string" ? body.email : "").trim().slice(0, 254);
    const phone =
      (typeof body.phone === "string" ? body.phone : "").trim().slice(0, 32);
    const rawWebsite =
      (typeof body.website === "string" ? body.website : "").trim().slice(0, 200);
    const website = normalizeUrl(rawWebsite);

    if (!firstName) {
      return NextResponse.json({ error: "First name required" }, { status: 400 });
    }
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    if (phone && !PHONE_RE.test(phone)) {
      return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
    }
    if (!rawWebsite || !URL_RE.test(rawWebsite)) {
      return NextResponse.json({ error: "Valid website URL required" }, { status: 400 });
    }

    if (!ghlConfigured()) {
      console.error("GHL env vars missing (GHL_API_KEY / GHL_LOCATION_ID)");
      return NextResponse.json(
        { error: "Grader is temporarily unavailable. Please call 623-219-1237." },
        { status: 503 }
      );
    }

    const tags = [
      "seo-grader",
      "website-prospect",
      "source:adaptationliving.com",
    ];

    const contactResult = await createContact({
      firstName,
      lastName: lastName || undefined,
      email,
      phone: phone || undefined,
      website,
      source: "seo-grader",
      tags,
    });

    const contactId: string | undefined = contactResult?.contact?.id;
    if (contactId) {
      await createNote(
        contactId,
        `[SEO Grader] Requested audit of ${website}\nName: ${firstName} ${lastName}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}`
      );
    }

    return NextResponse.json(
      { success: true, contactId },
      { status: 201, headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("GHL prospect creation error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
