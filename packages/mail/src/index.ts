import { Resend } from "resend";

let cached: Resend | null = null;

function getResend(): Resend {
  if (cached) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  cached = new Resend(key);
  return cached;
}

const FROM =
  process.env.MAIL_FROM ??
  "Adaptation OS <onboarding@adaptationliving.com>";

export interface WelcomeEmailInput {
  to: string;
  firstName: string;
  tier: string;
  portalUrl: string;
  supportPhone?: string;
}

export async function sendWelcomeEmail(input: WelcomeEmailInput) {
  const phone = input.supportPhone ?? "623-219-1237";
  const subject = `Welcome to Adaptation OS — your ${input.tier} account is live`;

  const html = `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#0B1D3A;color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Helvetica,Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0B1D3A;padding:40px 20px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0F2847;border:1px solid #162D50;border-radius:16px;overflow:hidden;">
      <tr><td style="padding:32px 32px 8px 32px;">
        <div style="font-size:11px;letter-spacing:3px;color:#D4AF37;text-transform:uppercase;margin-bottom:16px;">Adaptation OS</div>
        <h1 style="font-family:Georgia,serif;font-size:32px;font-weight:700;color:#ffffff;margin:0 0 16px 0;line-height:1.15;">Welcome, ${escapeHtml(input.firstName)}.</h1>
        <p style="color:#B8C4D4;font-size:16px;line-height:1.6;margin:0 0 12px 0;">Your <strong style="color:#ffffff;">${escapeHtml(input.tier)}</strong> account is provisioned and ready. CRM, AI agents, automation, funnels, calendars, reviews — all online, all yours.</p>
        <p style="color:#B8C4D4;font-size:16px;line-height:1.6;margin:0 0 24px 0;">Click below to log in. Your username is the email address you used at checkout; a temporary password was sent in a separate message.</p>
      </td></tr>
      <tr><td align="center" style="padding:0 32px 24px 32px;">
        <a href="${escapeHtml(input.portalUrl)}" style="display:inline-block;background:#D4AF37;color:#0B1D3A;font-weight:700;font-size:14px;letter-spacing:3px;text-transform:uppercase;padding:18px 36px;border-radius:4px;text-decoration:none;">Log In To Adaptation OS &rarr;</a>
      </td></tr>
      <tr><td style="padding:8px 32px 24px 32px;border-top:1px solid #162D50;">
        <h2 style="font-family:Georgia,serif;font-size:18px;color:#ffffff;margin:24px 0 12px 0;">Your first 15 minutes</h2>
        <ol style="color:#B8C4D4;font-size:15px;line-height:1.75;padding-left:20px;margin:0;">
          <li>Log in and change your password (Settings &rarr; My Profile).</li>
          <li>Import your contacts (Contacts &rarr; Import CSV) or connect your existing CRM.</li>
          <li>Connect a phone number and email sending domain (Settings &rarr; Phone / Email).</li>
          <li>Open the <em>Quick Start</em> dashboard for guided tours.</li>
        </ol>
      </td></tr>
      <tr><td style="padding:24px 32px;border-top:1px solid #162D50;">
        <p style="color:#B8C4D4;font-size:15px;line-height:1.6;margin:0 0 8px 0;">Need help? Reply to this email or call <strong style="color:#ffffff;">${escapeHtml(phone)}</strong>. A real human on our Phoenix team answers.</p>
        <p style="color:#B8C4D4;font-size:15px;line-height:1.6;margin:0;">Want us to build your funnels, campaigns, and automations for you? Reply "managed" and we will put you on a Done-For-You onboarding call.</p>
      </td></tr>
      <tr><td style="padding:20px 32px;background:#0B1D3A;border-top:1px solid #162D50;color:#8899AA;font-size:12px;line-height:1.6;">
        Adaptation Living LLC &bull; Veteran-Owned &bull; SAM.gov Registered (CAGE 95WK4)<br>
        3030 N Central Ave Suite 507, Phoenix, AZ 85012 &bull; ${escapeHtml(phone)}
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;

  const text = `Welcome, ${input.firstName}.

Your ${input.tier} account is provisioned and ready.

Log in: ${input.portalUrl}

Your username is the email you used at checkout. A temporary password was sent in a separate message.

Your first 15 minutes:
1. Log in and change your password (Settings > My Profile).
2. Import your contacts (Contacts > Import CSV).
3. Connect a phone number + email sending domain.
4. Open the Quick Start dashboard for guided tours.

Need help? Reply to this email or call ${phone}.

— Adaptation Living LLC
Veteran-Owned  SAM.gov Registered (CAGE 95WK4)
3030 N Central Ave Suite 507, Phoenix, AZ 85012`;

  const { data, error } = await getResend().emails.send({
    from: FROM,
    to: input.to,
    subject,
    html,
    text,
  });

  if (error) {
    throw new Error(`Resend error: ${JSON.stringify(error)}`);
  }
  return data;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
