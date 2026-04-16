const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

export interface GhlCreateLocationInput {
  companyId: string;
  name: string;
  email: string;
  phone?: string;
  timezone?: string;
  snapshotId: string;
  firstName?: string;
  lastName?: string;
  country?: string;
}

export interface GhlLocation {
  id: string;
  name: string;
  email: string;
  companyId: string;
}

export interface GhlCreateUserInput {
  locationId: string;
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  type: "account";
  role: "admin" | "user";
  permissions?: Record<string, boolean>;
}

export interface GhlUser {
  id: string;
  email: string;
  locationId: string;
}

function authHeaders(apiKey: string) {
  return {
    Authorization: `Bearer ${apiKey}`,
    Version: GHL_API_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export async function createLocation(
  apiKey: string,
  input: GhlCreateLocationInput,
): Promise<GhlLocation> {
  const res = await fetch(`${GHL_API_BASE}/locations/`, {
    method: "POST",
    headers: authHeaders(apiKey),
    body: JSON.stringify({
      companyId: input.companyId,
      name: input.name,
      email: input.email,
      phone: input.phone,
      timezone: input.timezone ?? "America/Phoenix",
      snapshotId: input.snapshotId,
      firstName: input.firstName,
      lastName: input.lastName,
      country: input.country ?? "US",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GHL createLocation ${res.status}: ${body}`);
  }

  const data = (await res.json()) as { location: GhlLocation } | GhlLocation;
  return "location" in data ? data.location : data;
}

export async function createUser(
  apiKey: string,
  input: GhlCreateUserInput,
): Promise<GhlUser> {
  const res = await fetch(`${GHL_API_BASE}/users/`, {
    method: "POST",
    headers: authHeaders(apiKey),
    body: JSON.stringify({
      companyId: input.companyId,
      locationIds: [input.locationId],
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      type: input.type,
      role: input.role,
      permissions: input.permissions ?? {
        campaignsEnabled: true,
        campaignsReadOnly: false,
        contactsEnabled: true,
        workflowsEnabled: true,
        triggersEnabled: true,
        funnelsEnabled: true,
        websitesEnabled: true,
        opportunitiesEnabled: true,
        dashboardStatsEnabled: true,
        bulkRequestsEnabled: true,
        appointmentsEnabled: true,
        reviewsEnabled: true,
        onlineListingsEnabled: true,
        phoneCallEnabled: true,
        conversationsEnabled: true,
        assignedDataOnly: false,
        adwordsReportingEnabled: true,
        membershipEnabled: true,
        facebookAdsReportingEnabled: true,
        attributionsReportingEnabled: true,
        settingsEnabled: true,
        tagsEnabled: true,
        leadValueEnabled: true,
        marketingEnabled: true,
      },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GHL createUser ${res.status}: ${body}`);
  }

  const data = (await res.json()) as { user: GhlUser } | GhlUser;
  return "user" in data ? data.user : data;
}

export function snapshotIdForTier(
  tier: string,
): string {
  const normalized = tier.trim().toLowerCase();
  const map: Record<string, string | undefined> = {
    starter: process.env.GHL_SNAPSHOT_STARTER,
    growth: process.env.GHL_SNAPSHOT_GROWTH,
    scale: process.env.GHL_SNAPSHOT_SCALE,
  };
  const id = map[normalized];
  if (!id) {
    throw new Error(
      `No GHL snapshot configured for tier "${tier}". Set GHL_SNAPSHOT_${normalized.toUpperCase()} env var.`,
    );
  }
  return id;
}

export function buildPortalLoginUrl(): string {
  return (
    process.env.NEXT_PUBLIC_PORTAL_URL ??
    "https://app.adaptationliving.com"
  );
}
