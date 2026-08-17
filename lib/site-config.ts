// =============================================================
// QLENTRA — Central Site Configuration
// Update company info, pricing, links, and SEO defaults here.
// =============================================================

export const siteConfig = {
  name: "Qlentra",
  legalName: "Qlentra",
  descriptor: "Sales, Retention & Customer Experience Outsourcing",
  tagline: "Convert More. Retain Longer. Grow Smarter.",
  shortDescription:
    "Qlentra provides managed sales, customer retention, revenue recovery, and customer experience teams for membership and recurring-service businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.qlentracx.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "support@qlentracx.com",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/qlentra/discovery-call",
};

export const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "14-Day Pilot", href: "/pilot" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  navigation: [
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "14-Day Pilot", href: "/pilot" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592087025854",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/qlentracx/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/company/qlentra-cx/",
    icon: "linkedin",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@qlentracx",
    icon: "tiktok",
  },
  {
    label: "X",
    href: "https://x.com/QLENTRACX",
    icon: "x",
  },
];

export const pricingPackages = [
  {
    id: "sprint",
    name: "Qlentra Revenue Sprint",
    subtitle: "14-day focused pilot",
    price: "Starting at $950",
    period: "one-time",
    featured: false,
    features: [
      "One part-time managed agent",
      "Up to 40 campaign hours",
      "CRM workspace",
      "US local number & dialer",
      "Call recording",
      "Approved campaign script",
      "Daily performance reports",
      "Final campaign review",
    ],
    cta: "Discuss Your Requirements",
  },
  {
    id: "growth-desk",
    name: "Dedicated Growth Desk",
    subtitle: "One full-time managed agent",
    price: "Starting at $1,950",
    period: "/month",
    featured: true,
    features: [
      "One full-time dedicated agent",
      "CRM workspace & pipeline setup",
      "US local number & cloud dialer",
      "Call recording & QA scoring",
      "Weekly performance reviews",
      "Ongoing script refinement",
      "Daily reporting dashboard",
      "Escalation handling",
    ],
    cta: "Discuss Your Requirements",
  },
  {
    id: "growth-pod",
    name: "Qlentra Growth Pod",
    subtitle: "Two managed agents, shared supervision & QA",
    price: "Starting at $3,700",
    period: "/month",
    featured: false,
    features: [
      "Two dedicated managed agents",
      "Shared supervision & QA lead",
      "CRM workspace & pipeline setup",
      "US local numbers & cloud dialer",
      "Call recording & scorecards",
      "Weekly performance reviews",
      "Daily reporting dashboard",
      "Campaign & escalation management",
    ],
    cta: "Discuss Your Requirements",
  },
];

export const faqItems = [
  {
    question: "What types of businesses does Qlentra support?",
    answer:
      "Qlentra is built for membership and recurring-service businesses — including car wash memberships, residential cleaning and housekeeping companies, and other recurring home-service operators such as pest control, pool cleaning, lawn care, HVAC maintenance plans, mobile detailing, and fitness memberships.",
  },
  {
    question: "Does Qlentra provide the CRM and calling system?",
    answer:
      "Yes. Qlentra provides a CRM workspace, a cloud dialer, and US local phone numbers as part of the managed operation, so campaigns can launch without you needing to source and configure this infrastructure yourself.",
  },
  {
    question: "Where are Qlentra agents located?",
    answer:
      "Qlentra operates a remote-first managed team that serves US businesses. Agents are trained specifically on your scripts, offers, and service policies before any campaign goes live.",
  },
  {
    question: "Can we start with a short pilot?",
    answer:
      "Yes. The Qlentra 14-Day Revenue Sprint is designed to let you test a focused sales, retention, or revenue-recovery campaign on a defined scope before committing to a larger, ongoing operation.",
  },
  {
    question: "Does Qlentra work on commission only?",
    answer:
      "Commission-only is not Qlentra's standard operating model. Qlentra is a managed service built around structured campaigns, training, quality assurance, and reporting. Specific commercial structures can be discussed during a discovery call.",
  },
  {
    question: "Can Qlentra work with our existing software?",
    answer:
      "In many cases, yes. Qlentra can work within your existing CRM or booking software where feasible, or provide a dedicated CRM workspace for the campaign. This is confirmed during onboarding based on your specific tools.",
  },
  {
    question: "How are calls monitored and reviewed?",
    answer:
      "Calls are recorded, dispositioned in the CRM, and reviewed against quality scorecards. Daily reporting and weekly performance reviews are used to track outcomes and identify coaching opportunities.",
  },
  {
    question: "How is customer data handled?",
    answer:
      "Clients provide authorized customer data for the purposes of the campaign. Qlentra uses that data solely to operate the agreed campaign and does not use it for unrelated purposes. See our Privacy Policy for more detail.",
  },
  {
    question: "Can Qlentra agents collect card information over the phone?",
    answer:
      "No. Qlentra agents do not collect or store payment-card details by phone. Secure, client-provided payment links are used instead to keep payment collection outside of verbal card capture.",
  },
  {
    question: "What does the client need to provide?",
    answer:
      "Clients provide authorized customer data, approved offers and pricing, service policies, secure payment links, and any required product or service training so agents can represent your business accurately.",
  },
];
