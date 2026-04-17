# adaptationliving.com — Environment Variables

This folder holds your local, visible reference for the env vars the site needs.

## Files in this folder

| File | Purpose | Committed to git? |
|---|---|---|
| `adaptationliving.env.txt` | Your fillable reference. Paste values here, then copy them into Vercel. | **No** — gitignored |
| `README.md` | This file. Explains the system. | Yes |

## Workflow

1. Open `adaptationliving.env.txt`.
2. Fill in a value on the right of each `=` sign. Each variable has a comment above it explaining where to find the value.
3. Open Vercel → **adaptationliving.com project** → **Settings** → **Environment Variables**.
4. For each `KEY=value` line, click **Add**, enter the key name, paste the value, and select **Production + Preview**.
5. After saving all vars, go to **Deployments**, open the latest deployment, and click **Redeploy**.
6. Test the form on https://adaptationliving.com — submit your own email and confirm the contact arrives in GHL.

## Safety

- `adaptationliving.env.txt` is **gitignored**. It will not be committed even if you `git add .`.
- Never paste real API keys into Slack, GitHub issues, or any other public surface.
- If a key ever leaks, rotate it immediately: regenerate in the source service (GHL, Stripe, etc.), update Vercel, redeploy.

## Which vars are required to unblock what

| Feature | Requires |
|---|---|
| Home-page SEO grader form (self-hosted fallback) | `GHL_API_KEY`, `GHL_LOCATION_ID` |
| Home-page SEO grader widget (current GHL script embed) | Nothing — loaded directly from GHL |
| `/intake` form embed | `NEXT_PUBLIC_GHL_FORM_ID` |
| `/contact` calendar embed | `NEXT_PUBLIC_GHL_CALENDAR_ID` |
| Analytics (pageviews, conversions) | `NEXT_PUBLIC_GTM_ID` |
| Meta Ads pixel tracking | `NEXT_PUBLIC_FB_PIXEL_ID` |
| Microsoft Clarity heatmaps | `NEXT_PUBLIC_CLARITY_ID` |
| Google Search Console ownership | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` |
| Bing Webmaster Tools ownership | `NEXT_PUBLIC_BING_SITE_VERIFICATION` |
| Stripe checkout webhook | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` |
