export type PlanKind = "diy" | "setup";

export type Plan = {
  slug: string;
  kind: PlanKind;
  name: string;
  tier: "Starter" | "Growth" | "Scale";
  priceMonthly: string;
  priceMonthlyNumeric: number;
  setupFee?: string;
  users: string;
  credits: string;
  support: string;
  description: string;
  idealFor: string[];
  includes: string[];
  whatHappens: Array<{ when: string; what: string }>;
  highlighted?: boolean;
  stripeCheckoutUrl?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  siblingSlug: string;
  siblingLabel: string;
};

export const plans: Plan[] = [
  {
    slug: "starter-diy",
    kind: "diy",
    name: "Starter DIY",
    tier: "Starter",
    priceMonthly: "$349.90",
    priceMonthlyNumeric: 349.9,
    users: "Up to 3 users",
    credits: "$50 one-time credits at signup",
    support: "Standard email support",
    description:
      "Full platform access for solo operators and early teams. CRM, calendars, forms, basic automation, and a website builder — ready the day you sign up.",
    idealFor: [
      "Solo founders and 1–3 person teams",
      "First-time CRM adopters who want to run it themselves",
      "Service businesses replacing a tangle of Calendly + Mailchimp + HubSpot free",
      "Anyone who wants to go live TODAY, not in 3 weeks",
    ],
    includes: [
      "Full the Adaptation Living Platform — every feature, every tier",
      "CRM with smart lists, custom fields, visual pipeline",
      "Calendar + booking pages with reminders",
      "Email + 2-way SMS + web chat",
      "Workflow builder (visual if/then)",
      "Reputation management (review requests + AI responses)",
      "Website + funnel builder with 200+ templates",
      "70+ directory listings sync (Google, Yelp, Apple Maps, 67 more)",
      "Invoicing + payments (Stripe)",
      "Branded mobile app (iOS + Android)",
      "Content AI, Workflow AI, Funnel AI",
      "Step-by-step onboarding inside the app",
    ],
    whatHappens: [
      { when: "Minute 1", what: "Stripe checkout confirms. Your login credentials arrive by email." },
      { when: "Minute 5", what: "Platform loaded with Starter snapshot: pipeline, calendar, follow-up workflow, review automation." },
      { when: "Day 1", what: "You're live. Import contacts, connect your domain, start answering leads." },
      { when: "Week 1", what: "Step-by-step in-app onboarding walks you through every feature." },
    ],
    highlighted: false,
    stripeCheckoutUrl: "https://buy.stripe.com/9B6fZhfK41e97a5de69MY0f",
    primaryCta: { label: "Start Starter DIY", href: "https://buy.stripe.com/9B6fZhfK41e97a5de69MY0f" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "starter-setup",
    siblingLabel: "Starter Setup (Done-For-You)",
  },
  {
    slug: "growth-diy",
    kind: "diy",
    name: "Growth DIY",
    tier: "Growth",
    priceMonthly: "$597.90",
    priceMonthlyNumeric: 597.9,
    users: "Up to 5 users",
    credits: "$50 one-time credits at signup",
    support: "Priority support",
    description:
      "Everything in Starter plus AI Voice + Chat agents, industry-specific workflows, pipeline automation, and custom reporting. The sweet spot for 90% of Phoenix businesses.",
    idealFor: [
      "Teams of 3–5 ready to scale past manual follow-up",
      "Businesses that miss too many calls and want AI answering 24/7",
      "Operators who want real conversion analytics",
      "Anyone replacing 5+ separate tools this quarter",
    ],
    includes: [
      "Everything in Starter DIY",
      "AI Voice Agent — answers calls, books appointments 24/7",
      "AI Chat Agent — web, SMS, Instagram DM, Facebook, WhatsApp",
      "Industry-specific workflow snapshots preloaded",
      "Pipeline automation with conditional branching",
      "Custom reporting dashboard",
      "Priority support queue (email + chat)",
      "5 users included (each additional: $50/mo)",
    ],
    whatHappens: [
      { when: "Minute 1", what: "Growth snapshot loads: AI agents configured, pipeline rules armed." },
      { when: "Day 1", what: "Your AI phone agent answers calls before you finish morning coffee." },
      { when: "Day 3", what: "AI chat agent trained on your website and FAQ library." },
      { when: "Week 1", what: "Priority onboarding call: walk through AI agent fine-tuning with an engineer." },
    ],
    highlighted: true,
    stripeCheckoutUrl: "https://buy.stripe.com/28EaEX41m3mh661fme9MY0g",
    primaryCta: { label: "Start Growth DIY", href: "https://buy.stripe.com/28EaEX41m3mh661fme9MY0g" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "growth-setup",
    siblingLabel: "Growth Setup (Done-For-You)",
  },
  {
    slug: "scale-diy",
    kind: "diy",
    name: "Scale DIY",
    tier: "Scale",
    priceMonthly: "$997.90",
    priceMonthlyNumeric: 997.9,
    users: "Up to 10 users",
    credits: "$50 one-time credits at signup",
    support: "Dedicated support contact",
    description:
      "Everything in Growth plus multi-location configuration, advanced workflow architecture, custom API integrations, and team training access.",
    idealFor: [
      "Multi-location businesses that need per-location pipelines",
      "Teams of 6–10 with complex role-based permissions",
      "Ops leaders running 10+ workflows simultaneously",
      "Businesses ready to connect the Adaptation Living Platform to their existing stack",
    ],
    includes: [
      "Everything in Growth DIY",
      "Multi-location configuration (unlimited locations)",
      "Advanced workflow architecture (conditional branching, multi-step sequences, waits, triggers)",
      "Custom API integrations with your existing tools",
      "Team training access (on-demand video library)",
      "Dedicated support contact (named rep, not a queue)",
      "10 users included (each additional: $50/mo)",
    ],
    whatHappens: [
      { when: "Minute 1", what: "Scale snapshot loads: multi-location shell, advanced workflow library." },
      { when: "Day 1", what: "Dedicated support rep introduces themselves by email + phone." },
      { when: "Week 1", what: "Team training kickoff: pick 2 hours of live training for your team." },
      { when: "Week 2", what: "API integration audit — we map your existing stack to the platform." },
    ],
    highlighted: false,
    stripeCheckoutUrl: "https://buy.stripe.com/cNicN5gO84qlfGBgqi9MY0i",
    primaryCta: { label: "Start Scale DIY", href: "https://buy.stripe.com/cNicN5gO84qlfGBgqi9MY0i" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "scale-setup",
    siblingLabel: "Scale Setup (Done-For-You)",
  },
  {
    slug: "starter-setup",
    kind: "setup",
    name: "Starter Setup",
    tier: "Starter",
    priceMonthly: "$194.90",
    priceMonthlyNumeric: 194.9,
    setupFee: "$1,500",
    users: "Up to 3 users",
    credits: "$100 one-time credits at signup",
    support: "Standard support",
    description:
      "Same platform as Starter DIY — but a veteran-owned Phoenix team builds and configures it for you. Contact import, domain linking, AI agent setup, workflow configuration, and team onboarding included.",
    idealFor: [
      "Busy operators who want it done right the first time",
      "Teams without a tech person internally",
      "Businesses migrating from 3+ separate tools",
      "Anyone who values 'ready to use' over 'DIY learning curve'",
    ],
    includes: [
      "Everything in Starter DIY platform access",
      "Contact database import (CSV, HubSpot export, CRM export)",
      "Custom domain linking + DNS configuration",
      "All API key integrations we build for you (Stripe, Google, Meta, etc.)",
      "Social media account linking (Facebook, Instagram, Google)",
      "Starter snapshot deployment (CRM pipeline, calendar, follow-up, review automation, Content AI)",
      "$100 wallet credits at launch (vs $50 on DIY)",
      "Live kickoff call with implementation engineer",
    ],
    whatHappens: [
      { when: "Day 0", what: "You book a 60-minute kickoff call via /intake." },
      { when: "Day 1–3", what: "We build: domain linking, contact import, pipeline setup, workflow configuration." },
      { when: "Day 7", what: "Walkthrough call: you see the finished system, we train your team." },
      { when: "Day 14", what: "Fully live. Month-to-month from here — no long-term contract." },
    ],
    highlighted: false,
    primaryCta: { label: "Book Setup Call", href: "/intake?plan=starter-setup" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "starter-diy",
    siblingLabel: "Starter DIY (Self-Serve)",
  },
  {
    slug: "growth-setup",
    kind: "setup",
    name: "Growth Setup",
    tier: "Growth",
    priceMonthly: "$394.90",
    priceMonthlyNumeric: 394.9,
    setupFee: "$2,500",
    users: "Up to 5 users",
    credits: "$100 one-time credits at signup",
    support: "Priority support",
    description:
      "Our most-picked setup package. Everything in Starter Setup plus custom AI agent training on your knowledge base, industry-specific workflows, custom reporting, and funnel templates pre-loaded.",
    idealFor: [
      "Teams of 3–5 who want AI agents trained properly, not pasted in",
      "Businesses with documented FAQs or SOPs ready to feed the AI",
      "Owners who want to hand off marketing to automation this quarter",
      "Anyone scared of the 'too technical to configure' problem",
    ],
    includes: [
      "Everything in Starter Setup",
      "Industry-specific workflow configurations (we've built 40+ templates)",
      "AI Voice + Chat agent training on YOUR knowledge base, FAQ, and tone",
      "Custom reporting dashboard with your KPIs",
      "Funnel + landing page templates pre-loaded",
      "Email campaign sequences (welcome, nurture, re-engagement) pre-built",
      "Social media post templates loaded into the planner",
      "Priority onboarding queue — live in 2 weeks, not 3",
    ],
    whatHappens: [
      { when: "Day 0", what: "Kickoff call + knowledge base intake (FAQs, SOPs, tone samples)." },
      { when: "Day 1–5", what: "We build: AI training, industry workflows, custom dashboard, funnel library." },
      { when: "Day 10", what: "AI agent QA — you test calls and chats on the live system." },
      { when: "Day 14", what: "Team training session (90 min). Go-live. Priority queue forever." },
    ],
    highlighted: true,
    primaryCta: { label: "Book Setup Call", href: "/intake?plan=growth-setup" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "growth-diy",
    siblingLabel: "Growth DIY (Self-Serve)",
  },
  {
    slug: "scale-setup",
    kind: "setup",
    name: "Scale Setup",
    tier: "Scale",
    priceMonthly: "$694.90",
    priceMonthlyNumeric: 694.9,
    setupFee: "$5,000",
    users: "Up to 10 users",
    credits: "$100 one-time credits at signup",
    support: "Dedicated contact",
    description:
      "Full multi-location build. Everything in Growth Setup plus custom API integrations, team training sessions, advanced workflow architecture, and multi-location configuration.",
    idealFor: [
      "Multi-location businesses (2+ physical offices or franchise units)",
      "Teams of 6–10 with role-based access requirements",
      "Ops leaders with existing tool stack to integrate",
      "Anyone who wants a proper change-management rollout, not a lift-and-shift",
    ],
    includes: [
      "Everything in Growth Setup",
      "Multi-location configuration (unlimited locations, cross-location workflows)",
      "Custom API integrations with your existing tools (Stripe Connect, QuickBooks, ERP, etc.)",
      "Team training sessions (up to 3 hours of live group training)",
      "Advanced workflow architecture (conditional branching, multi-step sequences, complex triggers)",
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
    primaryCta: { label: "Book Setup Call", href: "/intake?plan=scale-setup" },
    secondaryCta: { label: "Book A Demo First", href: "/demo" },
    siblingSlug: "scale-diy",
    siblingLabel: "Scale DIY (Self-Serve)",
  },
];

export function getPlan(slug: string): Plan | undefined {
  return plans.find((p) => p.slug === slug);
}

export const diyPlans = plans.filter((p) => p.kind === "diy");
export const setupPlans = plans.filter((p) => p.kind === "setup");
