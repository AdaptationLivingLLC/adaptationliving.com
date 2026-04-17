// =============================================================================
// Adaptation Living — GoHighLevel (GHL) server-side API client.
// Uses env vars: GHL_API_KEY, GHL_LOCATION_ID. Server routes only.
// =============================================================================

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_BASE_URL = "https://services.leadconnectorhq.com";

function ghlHeaders() {
  return {
    Authorization: `Bearer ${GHL_API_KEY}`,
    "Content-Type": "application/json",
    Version: "2021-07-28",
  };
}

export function ghlConfigured(): boolean {
  return Boolean(GHL_API_KEY && GHL_LOCATION_ID);
}

export async function createContact(data: {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  website?: string;
  source?: string;
  tags?: string[];
}) {
  const { website, ...rest } = data;
  const customFields = website
    ? [{ key: "website", field_value: website }]
    : undefined;

  const response = await fetch(`${GHL_BASE_URL}/contacts/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      ...rest,
      locationId: GHL_LOCATION_ID,
      ...(customFields ? { customFields } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`GHL contact error: ${response.status}`);
  }

  return response.json();
}

export async function createNote(contactId: string, body: string) {
  if (!contactId || !body.trim()) return null;
  const response = await fetch(
    `${GHL_BASE_URL}/contacts/${contactId}/notes`,
    {
      method: "POST",
      headers: ghlHeaders(),
      body: JSON.stringify({ body: body.slice(0, 5000) }),
    }
  );
  if (!response.ok) return null;
  return response.json();
}
