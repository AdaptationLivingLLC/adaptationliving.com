export type PlanKind = "self" | "dfy";

export type Plan = {
  slug: string;
  kind: PlanKind;
  name: string;
  tier: "AI Agents" | "Launch" | "Growth" | "Scale";
  priceMonthly: string;
  priceMonthlyNumeric: number;
  setupFee: string;
  users: string;
  credits: string;
  support: string;
  description: string;
  idealFor: string[];
  includes: string[];
  whatHappens: Array<{ when: string; what: string }>;
  highlighted?: boolean;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  siblingSlug: string;
  siblingLabel: string;
};

const usageNote =
  "Phone calls, SMS, email volume, and AI processing are billed based on actual usage on top of your plan.";

export const plans: Plan[] = [
  // ─────────────────────────────────────────────────────────
  // SELF-SERVE
  // ─────────────────────────────────────────────────────────
  {
    slug: "ai-agents-self",
    kind: "self",
    name: "AI Agents",
    tier: "AI Agents",
    priceMonthly: "$397",
    priceMonthlyNumeric: 397,
    setupFee: "$997",
    users: "1 user",
    credits: "$50 one-time credits at signup",
    support: "Standard email support",
    description:
      "AI Voice and AI Chat agents — plus the minimum CRM, calendar, and messaging they need to actually do their job. For solo operators who want the agents working, not the full platform.",
    idealFor: [
      "Solo operators who just want the phone answered and chats handled",
      "Businesses that already have a website and only need AI agents bolted on",
      "Owners testing AI before committing to a full platform migration",
      "Anyone replacing a missed-call problem, not a tool stack",
    ],
    includes: [
      "AI Voice Agent — answers calls, captures leads, books appointments 24/7",
      "AI Chat Agent — web chat, SMS, Instagram DM, Facebook Messenger, WhatsApp",
      "CRM with contacts, smart lists, and tags (so agents know who they're talking to)",
      "Calendar + booking pages with reminders (so agents can actually book)",
      "2-way SMS + email (so agents can follow up)",
      "Full conversation history per contact",
      "1 user seat (additional users $75/mo)",
      "Standard email support",
    ],
    whatHappens: [
      { when: "Minute 1", what: "Stripe checkout confirms. Login credentials arrive by email." },
      { when: "Hour 1", what: "AI agents loaded with default config — answering calls and chats." },
      { when: "Day 1", what: "Tune your AI greeting, booking flow, and FAQ in the dashboard." },
      { when: "Week 1", what: "In-app onboarding walks you through fine-tuning." },
    ],
    highlighted: false,
    primaryCta: { label: "Start AI Agents", href: "/demo?plan=ai-agents-self" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "ai-agents-dfy",
    siblingLabel: "AI Agents DFY (We Configure It)",
  },
  {
    slug: "launch-self",
    kind: "self",
    name: "Launch",
    tier: "Launch",
    priceMonthly: "$797",
    priceMonthlyNumeric: 797,
    setupFee: "$1,997",
    users: "3 users",
    credits: "$50 one-time credits at signup",
    support: "Standard email support",
    description:
      "The full platform. Everything in AI Agents plus website + funnel builder, full automation, reputation management, payments, and the branded mobile app. The complete operating system for a small team.",
    idealFor: [
      "Small teams (1–3 people) ready to replace 5+ separate tools",
      "Businesses that need a real website AND AI agents AND a CRM",
      "Operators tired of duct-taping Calendly + Mailchimp + HubSpot free",
      "Anyone who wants the whole stack live in days, not weeks",
    ],
    includes: [
      "Everything in AI Agents, plus:",
      "Website + funnel builder with 200+ templates",
      "Visual workflow builder (drag-and-drop if/then automation)",
      "Reputation management (review requests + AI responses to Google reviews)",
      "70+ directory listings sync (Google, Yelp, Apple Maps, 67 more)",
      "Invoicing + payments via Stripe",
      "Branded mobile app (iOS + Android)",
      "Content AI, Workflow AI, Funnel AI",
      "Social media planner (Facebook, Instagram, Google, LinkedIn)",
      "3 user seats (additional users $75/mo)",
    ],
    whatHappens: [
      { when: "Minute 1", what: "Stripe checkout confirms. Login credentials arrive by email." },
      { when: "Minute 5", what: "Launch snapshot loads: pipeline, calendar, follow-up workflows, review automation." },
      { when: "Day 1", what: "Connect your domain, import contacts, agents start answering." },
      { when: "Week 1", what: "In-app onboarding walks you through every feature." },
    ],
    highlighted: false,
    primaryCta: { label: "Start Launch", href: "/demo?plan=launch-self" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "launch-dfy",
    siblingLabel: "Launch DFY (We Build It)",
  },
  {
    slug: "growth-self",
    kind: "self",
    name: "Growth",
    tier: "Growth",
    priceMonthly: "$1,497",
    priceMonthlyNumeric: 1497,
    setupFee: "$2,997",
    users: "5 users",
    credits: "$50 one-time credits at signup",
    support: "Priority support",
    description:
      "Launch plus the depth most growing teams need: AI agents trained on your knowledge base, industry-specific workflows, pipeline automation with branching, and a custom reporting dashboard. The sweet spot for most Phoenix businesses.",
    idealFor: [
      "Teams of 3–5 ready to scale past manual follow-up",
      "Businesses with documented FAQs ready to feed AI training",
      "Operators who want real conversion analytics, not just vanity metrics",
      "Anyone running 10+ automated touchpoints across the customer journey",
    ],
    includes: [
      "Everything in Launch, plus:",
      "AI agents trained on YOUR knowledge base, FAQs, and tone (not generic)",
      "Industry-specific workflow snapshots preloaded (40+ templates)",
      "Pipeline automation with conditional branching (multi-step sequences)",
      "Custom reporting dashboard with your KPIs",
      "Email campaign sequences (welcome, nurture, re-engagement) pre-built",
      "Priority support queue (email + chat)",
      "5 user seats (additional users $75/mo)",
    ],
    whatHappens: [
      { when: "Minute 1", what: "Growth snapshot loads: AI agents armed, pipeline rules active." },
      { when: "Day 1", what: "Your AI phone agent answers calls before you finish coffee." },
      { when: "Day 3", what: "AI chat agent trained on your website and FAQ library." },
      { when: "Week 1", what: "Priority onboarding call: walk through AI fine-tuning with an engineer." },
    ],
    highlighted: true,
    primaryCta: { label: "Start Growth", href: "/demo?plan=growth-self" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "growth-dfy",
    siblingLabel: "Growth DFY (We Build It)",
  },
  {
    slug: "scale-self",
    kind: "self",
    name: "Scale",
    tier: "Scale",
    priceMonthly: "$2,497",
    priceMonthlyNumeric: 2497,
    setupFee: "$4,997",
    users: "10 users",
    credits: "$50 one-time credits at signup",
    support: "Dedicated support contact",
    description:
      "Growth plus multi-location configuration, advanced workflow architecture, custom API integrations with your existing stack, and a dedicated support rep. For ops leaders running complex operations.",
    idealFor: [
      "Multi-location businesses (2+ offices, franchise units, or service areas)",
      "Teams of 6–10 with role-based permission requirements",
      "Ops leaders running 10+ workflows simultaneously",
      "Businesses ready to connect Adaptation OS to QuickBooks, ERP, or a custom system",
    ],
    includes: [
      "Everything in Growth, plus:",
      "Multi-location configuration (unlimited locations, cross-location workflows)",
      "Advanced workflow architecture (deep conditional branching, complex triggers)",
      "Custom API integrations with your existing tools (QuickBooks, ERP, Stripe Connect)",
      "Team training (on-demand video library)",
      "Dedicated support contact — a named human, not a queue",
      "10 user seats (additional users $75/mo)",
    ],
    whatHappens: [
      { when: "Minute 1", what: "Scale snapshot loads: multi-location shell, advanced workflow library." },
      { when: "Day 1", what: "Dedicated support rep introduces themselves by email + phone." },
      { when: "Week 1", what: "Team training kickoff — 2 hours of live training for your team." },
      { when: "Week 2", what: "API integration audit — we map your existing stack to the platform." },
    ],
    highlighted: false,
    primaryCta: { label: "Start Scale", href: "/demo?plan=scale-self" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "scale-dfy",
    siblingLabel: "Scale DFY (We Build It)",
  },

  // ─────────────────────────────────────────────────────────
  // DONE-FOR-YOU
  // ─────────────────────────────────────────────────────────
  {
    slug: "ai-agents-dfy",
    kind: "dfy",
    name: "AI Agents DFY",
    tier: "AI Agents",
    priceMonthly: "$997",
    priceMonthlyNumeric: 997,
    setupFee: "$1,997",
    users: "1 user",
    credits: "$100 one-time credits at signup",
    support: "Standard support",
    description:
      "Same AI Agents tier — but we configure the voice agent, train the chat agent on your business, link your calendar, and hand you a working system. Zero technical work on your end.",
    idealFor: [
      "Owners who just want the AI answering and booking, no setup learning curve",
      "Operators without a tech person internally",
      "Businesses migrating from a missed-call problem who need it solved this week",
      "Anyone who values 'ready to use' over 'figure it out yourself'",
    ],
    includes: [
      "Everything in AI Agents Self-Serve, plus we handle:",
      "AI Voice Agent script + flow configuration (greeting, booking, escalation)",
      "AI Chat Agent training on your website, FAQs, and tone",
      "Calendar setup (availability, buffer times, reminders)",
      "Phone number provisioning + A2P 10DLC registration",
      "Live kickoff call with implementation engineer",
      "$100 wallet credits at launch (vs $50 Self-Serve)",
    ],
    whatHappens: [
      { when: "Day 0", what: "60-minute kickoff call: we collect your FAQs, tone samples, calendar." },
      { when: "Day 1–3", what: "We build: voice agent flow, chat agent training, calendar setup." },
      { when: "Day 5", what: "QA call: you test the agents on a live phone and chat." },
      { when: "Day 7", what: "Live. We hand you the dashboard. Month-to-month from here." },
    ],
    highlighted: false,
    primaryCta: { label: "Book Setup Call", href: "/intake?plan=ai-agents-dfy" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "ai-agents-self",
    siblingLabel: "AI Agents Self-Serve",
  },
  {
    slug: "launch-dfy",
    kind: "dfy",
    name: "Launch DFY",
    tier: "Launch",
    priceMonthly: "$1,997",
    priceMonthlyNumeric: 1997,
    setupFee: "$2,997",
    users: "3 users",
    credits: "$100 one-time credits at signup",
    support: "Standard support",
    description:
      "Same Launch platform — but a veteran-owned Phoenix team builds and configures it for you. Custom website, AI agents, CRM, calendar, payments, social, and team onboarding all done before you log in.",
    idealFor: [
      "Busy operators who want it done right the first time",
      "Teams without a tech person internally",
      "Businesses migrating from 3+ separate tools",
      "Anyone who wants a real custom website AND a working CRM by week 2",
    ],
    includes: [
      "Everything in Launch Self-Serve, plus we handle:",
      "Custom website built and SEO-optimized for your industry",
      "Contact database import (CSV, HubSpot, prior CRM)",
      "Custom domain linking + DNS configuration",
      "All API integrations we build for you (Stripe, Google, Meta, etc.)",
      "Social media account linking (Facebook, Instagram, Google, LinkedIn)",
      "Launch snapshot deployment configured for your business",
      "Live kickoff call + team training session",
      "$100 wallet credits at launch (vs $50 Self-Serve)",
    ],
    whatHappens: [
      { when: "Day 0", what: "60-minute kickoff call via /intake." },
      { when: "Day 1–7", what: "We build: website, domain, contact import, pipeline, workflows." },
      { when: "Day 10", what: "Walkthrough call: you see the finished system, we train your team." },
      { when: "Day 14", what: "Fully live. Month-to-month from here — no long-term contract." },
    ],
    highlighted: false,
    primaryCta: { label: "Book Setup Call", href: "/intake?plan=launch-dfy" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "launch-self",
    siblingLabel: "Launch Self-Serve",
  },
  {
    slug: "growth-dfy",
    kind: "dfy",
    name: "Growth DFY",
    tier: "Growth",
    priceMonthly: "$2,997",
    priceMonthlyNumeric: 2997,
    setupFee: "$4,997",
    users: "5 users",
    credits: "$100 one-time credits at signup",
    support: "Priority support",
    description:
      "Our most-picked package. Everything in Launch DFY plus AI agent training on YOUR knowledge base, industry-specific workflows, custom reporting, and pre-built email campaign sequences. Live in 2 weeks.",
    idealFor: [
      "Teams of 3–5 who want AI agents trained properly, not pasted in",
      "Businesses with documented FAQs or SOPs ready to feed the AI",
      "Owners ready to hand off marketing to automation this quarter",
      "Anyone scared of the 'too technical to configure' problem",
    ],
    includes: [
      "Everything in Launch DFY, plus we handle:",
      "AI Voice + Chat agent training on YOUR knowledge base, FAQ, and tone",
      "Industry-specific workflow configurations (40+ templates customized)",
      "Custom reporting dashboard with your KPIs",
      "Funnel + landing page templates pre-loaded and branded",
      "Email campaign sequences (welcome, nurture, re-engagement) pre-built",
      "Social media post templates loaded into the planner",
      "Priority onboarding queue — live in 2 weeks, not 3",
    ],
    whatHappens: [
      { when: "Day 0", what: "Kickoff call + knowledge base intake (FAQs, SOPs, tone samples)." },
      { when: "Day 1–7", what: "We build: AI training, industry workflows, custom dashboard, funnel library." },
      { when: "Day 10", what: "AI agent QA — you test calls and chats on the live system." },
      { when: "Day 14", what: "Team training session (90 min). Go-live. Priority queue forever." },
    ],
    highlighted: true,
    primaryCta: { label: "Book Setup Call", href: "/intake?plan=growth-dfy" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "growth-self",
    siblingLabel: "Growth Self-Serve",
  },
  {
    slug: "scale-dfy",
    kind: "dfy",
    name: "Scale DFY",
    tier: "Scale",
    priceMonthly: "$4,997",
    priceMonthlyNumeric: 4997,
    setupFee: "$7,997",
    users: "10 users",
    credits: "$100 one-time credits at signup",
    support: "Dedicated contact",
    description:
      "Full multi-location build. Everything in Growth DFY plus custom API integrations with your existing stack, multi-location configuration, advanced workflow architecture, and a dedicated implementation engineer embedded for 30 days post-launch.",
    idealFor: [
      "Multi-location businesses (2+ physical offices or franchise units)",
      "Teams of 6–10 with role-based access requirements",
      "Ops leaders with existing tool stack to integrate",
      "Anyone who wants a proper change-management rollout, not a lift-and-shift",
    ],
    includes: [
      "Everything in Growth DFY, plus we handle:",
      "Multi-location configuration (unlimited locations, cross-location workflows)",
      "Custom API integrations with your existing tools (QuickBooks, ERP, Stripe Connect)",
      "Team training sessions (up to 3 hours of live group training)",
      "Advanced workflow architecture (conditional branching, multi-step sequences)",
      "Role + permission template setup for every team member",
      "Dedicated implementation engineer for 30 days post-launch",
      "Quarterly optimization reviews for the first year",
    ],
    whatHappens: [
      { when: "Day 0", what: "Kickoff + architecture workshop with your ops lead." },
      { when: "Week 1", what: "We build: multi-location shell, API integrations, advanced workflow library." },
      { when: "Week 2", what: "Role + permission mapping, team training kickoff, AI agent training per location." },
      { when: "Week 3", what: "UAT + go-live. Dedicated engineer stays embedded 30 days after launch." },
    ],
    highlighted: false,
    primaryCta: { label: "Book Setup Call", href: "/intake?plan=scale-dfy" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "scale-self",
    siblingLabel: "Scale Self-Serve",
  },
];

export function getPlan(slug: string): Plan | undefined {
  return plans.find((p) => p.slug === slug);
}

export const selfPlans = plans.filter((p) => p.kind === "self");
export const dfyPlans = plans.filter((p) => p.kind === "dfy");
export const PLAN_USAGE_NOTE = usageNote;
