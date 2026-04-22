export type Competitor = {
  name: string;
  slug: string;
  priceMonthly: string;
  positioningLine: string;
  tagline: string;
  ourEdge: string[];
  theirEdge: string[];
};

export const competitors: Competitor[] = [
  {
    name: "ActiveCampaign",
    slug: "activecampaign",
    priceMonthly: "$15–$145/mo (scales with contacts)",
    positioningLine:
      "Email-first marketing automation known for deep sequence logic and deliverability.",
    tagline:
      "the Adaptation Living platform vs ActiveCampaign — One platform for every channel, not just email.",
    ourEdge: [
      "Unlimited contacts — you never get punished for growing your list",
      "Two-way SMS, WhatsApp, Instagram DMs — not just email",
      "Built-in CRM, pipelines, calendars, and funnels included",
      "AI workflows, call tracking, and reputation tools in one login",
      "Flat monthly price, no per-contact tax",
    ],
    theirEdge: [
      "More mature email deliverability reputation and granular split-testing",
      "Larger native integration library for ecommerce stacks",
    ],
  },
  {
    name: "HubSpot",
    slug: "hubspot",
    priceMonthly: "$20–$3,600/mo (Marketing Hub Pro starts ~$800)",
    positioningLine:
      "Enterprise-grade CRM and marketing suite famous for polish, reporting, and seat-based pricing.",
    tagline:
      "the Adaptation Living platform vs HubSpot — Enterprise power without the enterprise invoice.",
    ourEdge: [
      "Flat $349.90/mo vs HubSpot's $800+/mo for comparable features",
      "Unlimited users — no per-seat bill every time you hire",
      "Two-way SMS and social DMs built in, not a paid add-on",
      "Funnels, websites, and calendars included — no Marketing Hub upgrade",
      "Concierge migration so you're live in days, not quarters",
    ],
    theirEdge: [
      "Deeper enterprise reporting and sales forecasting tools",
      "Massive third-party app marketplace and partner network",
    ],
  },
  {
    name: "ClickFunnels",
    slug: "clickfunnels",
    priceMonthly: "$97–$497/mo (Basic / Pro / Funnel Hacker)",
    positioningLine:
      "The original funnel builder, known for high-converting sales pages and a loyal info-product following.",
    tagline:
      "the Adaptation Living platform vs ClickFunnels — A business platform, not just a funnel page.",
    ourEdge: [
      "Full CRM and pipelines — funnels that actually close deals",
      "Two-way SMS, email, and DMs from one inbox",
      "Calendars, memberships, and reputation built in",
      "Unlimited contacts and users at every tier",
      "Automation across every channel, not just opt-in pages",
    ],
    theirEdge: [
      "Stronger funnel template library and course-creator community",
      "More refined drag-and-drop page editor for info marketers",
    ],
  },
  {
    name: "Keap",
    slug: "keap",
    priceMonthly: "$299–$599/mo",
    positioningLine:
      "Legacy small-business CRM known for pioneering 'Infusionsoft' email automation, now dated and per-seat priced.",
    tagline: "the Adaptation Living platform vs Keap — Modern AI built in, not bolted on.",
    ourEdge: [
      "Starts at $349.90/mo with unlimited users and contacts",
      "Native 2-way SMS, calls, and conversation inbox included",
      "Visual workflow builder beats Keap's pre-built campaigns",
      "No per-seat or per-contact price creep as you grow",
      "24/7 live chat plus concierge migration from Keap",
    ],
    theirEdge: [
      "Long-established brand with US-based phone support",
      "Mature integrations library for legacy QuickBooks stacks",
    ],
  },
  {
    name: "Linktree",
    slug: "linktree",
    priceMonthly: "$0–$24/mo",
    positioningLine:
      "The bio-link tool creators use to list URLs under an Instagram profile.",
    tagline: "the Adaptation Living platform vs Linktree — A business, not just a bio link.",
    ourEdge: [
      "Capture leads into a real CRM, not a click counter",
      "Full custom domains, CSS, and brand control",
      "Build funnels, courses, and checkout, not just links",
      "Automated SMS and email follow-up on every tap",
      "One platform replaces Linktree, Mailchimp, and Calendly",
    ],
    theirEdge: [
      "Free tier and 30-second setup for casual creators",
      "Simpler if you truly only need a link list",
    ],
  },
  {
    name: "Kartra",
    slug: "kartra",
    priceMonthly: "$119–$549/mo (Starter to Elite)",
    positioningLine:
      "All-in-one marketing suite for coaches and course creators with built-in funnels, video hosting, and memberships.",
    tagline:
      "the Adaptation Living platform vs Kartra — Grow past the contact cap without switching tools.",
    ourEdge: [
      "No contact or lead caps on any plan",
      "Real two-way SMS plus Instagram, WhatsApp, and Messenger",
      "Visual sales pipeline with forecasting and attribution",
      "Faster onboarding — live in hours, not weeks",
      "24/7 live chat, phone, and Zoom support included",
    ],
    theirEdge: [
      "Native video hosting with built-in tagging and behavior triggers",
      "Cleaner out-of-the-box membership site templates",
    ],
  },
  {
    name: "Vendasta",
    slug: "vendasta",
    priceMonthly: "$79–$579/mo + per-client fees",
    positioningLine:
      "A reseller marketplace that bundles third-party tools for agencies to resell to local businesses.",
    tagline:
      "the Adaptation Living platform vs Vendasta — One native platform, not a reseller bundle.",
    ourEdge: [
      "Flat monthly fee with unlimited sub-accounts",
      "Native features, not rebilled third-party vendors",
      "New clients live in minutes with snapshot stacks",
      "Predictable pricing with no per-client surprise charges",
      "Built-in reputation, SMS, CRM, and call tracking",
    ],
    theirEdge: [
      "Larger marketplace of pre-vetted fulfillment partners",
      "Stronger for agencies reselling done-for-you services",
    ],
  },
  {
    name: "SharpSpring",
    slug: "sharpspring",
    priceMonthly: "$449–$1,299/mo",
    positioningLine:
      "Constant Contact's mid-market marketing automation suite priced by contact volume.",
    tagline:
      "the Adaptation Living platform vs SharpSpring — Unlimited contacts, not contact-tiered billing.",
    ourEdge: [
      "$349.90/mo unlimited vs SharpSpring's contact-tiered bills",
      "2-way SMS and call tracking included, not add-ons",
      "Replaces three-plus tools most SharpSpring users stack",
      "White-label SaaS creation without developers",
      "24/7 support with hands-on migration concierge",
    ],
    theirEdge: [
      "Deeper native Salesforce and HubSpot CRM sync",
      "Longer track record in B2B marketing automation",
    ],
  },
  {
    name: "Klaviyo",
    slug: "klaviyo",
    priceMonthly: "$0–$2,300+/mo (scales with profiles; 250K list ~$2,300)",
    positioningLine:
      "The ecommerce email and SMS engine best known for Shopify-native segmentation and revenue attribution.",
    tagline:
      "the Adaptation Living platform vs Klaviyo — Stop duct-taping tools around your email list.",
    ourEdge: [
      "CRM, pipelines, and calendars — not just broadcast email",
      "Landing pages, funnels, and forms without Unbounce or Typeform",
      "Reputation management and review automation built in",
      "Flat pricing instead of list-size surcharges",
      "Appointment booking and course delivery under one roof",
    ],
    theirEdge: [
      "Deeper Shopify and ecommerce data integrations",
      "More advanced predictive analytics for product purchase behavior",
    ],
  },
  {
    name: "Zoho",
    slug: "zoho",
    priceMonthly: "$14–$52/user/mo",
    positioningLine:
      "A sprawling SMB software suite covering CRM, email, books, and 40+ separate apps.",
    tagline:
      "the Adaptation Living platform vs Zoho — One platform, not 40 apps to wire together.",
    ourEdge: [
      "Marketing, sales, and fulfillment in one login",
      "Unlimited users at a flat rate, not per-seat",
      "Native 2-way SMS, funnels, courses, and memberships",
      "Reputation management and review requests built in",
      "No integration tax between Zoho One's many modules",
    ],
    theirEdge: [
      "Cheaper entry price for solo users who only need CRM",
      "Deeper finance and HR modules via Zoho One",
    ],
  },
  {
    name: "Salesforce",
    slug: "salesforce",
    priceMonthly: "$25–$500/user/mo (plus $75K–$150K implementation)",
    positioningLine:
      "The enterprise CRM standard, known for unlimited customization and a massive consulting ecosystem.",
    tagline:
      "the Adaptation Living platform vs Salesforce — Enterprise capability without the consulting bill.",
    ourEdge: [
      "$349.90/mo flat vs $500/user/mo plus six-figure rollouts",
      "New hires productive in under an hour, not a quarter",
      "SMS, email, DMs, and calls — no AppExchange add-ons",
      "Landing pages, calendars, and automations built in",
      "No certified admin required to make a change",
    ],
    theirEdge: [
      "Unmatched customization depth for complex enterprise workflows",
      "Industry-specific Clouds (Health, Finance, Public Sector)",
    ],
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}
