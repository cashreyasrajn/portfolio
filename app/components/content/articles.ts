export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    slug: "itr-due-dates-2026",
    title: "ITR Filing Due Dates for AY 2026-27",
    excerpt:
      "A simple calendar of every deadline that matters, July 31, October 31, November 30, and which one applies to your case.",
    category: "Income Tax",
    date: "2026-06-20",
    readTime: "4 min",
  },
  {
    slug: "new-itr-forms-2026",
    title: "What's New in ITR Forms This Year",
    excerpt:
      "CBDT changes the forms almost every year. Here's a plain-English summary of what's new, and what you now need to disclose.",
    category: "Income Tax",
    date: "2026-05-15",
    readTime: "6 min",
  },
  {
    slug: "gst-returns-overdue",
    title: "What Happens If You Miss a GST Return",
    excerpt:
      "Late fees, interest, and a non-filer tag. The real cost of skipping a GSTR, and how to bring things back on track.",
    category: "GST",
    date: "2026-04-28",
    readTime: "5 min",
  },
  {
    slug: "udyam-registration-benefits",
    title: "Udyam Registration: Is It Worth It for Your Business?",
    excerpt:
      "The MSME benefits you've heard about, cheaper loans, easier compliance, GeM access, and whether your business actually qualifies.",
    category: "MSME",
    date: "2026-04-10",
    readTime: "7 min",
  },
  {
    slug: "tax-audit-44ab",
    title: "Section 44AB Tax Audit: Who Needs It in 2026",
    excerpt:
      "Thresholds changed in recent years. We break down who needs a tax audit this year, and how to prepare so the audit goes smoothly.",
    category: "Audit",
    date: "2026-03-22",
    readTime: "8 min",
  },
  {
    slug: "presumptive-taxation-44ad",
    title: "Section 44AD: Who Benefits from Presumptive Taxation",
    excerpt:
      "If your turnover is under Rs 2 crore (or Rs 3 crore with 5% digital receipts), 44AD might save you a tax audit. Here's how it works.",
    category: "Income Tax",
    date: "2026-02-14",
    readTime: "6 min",
  },
];

export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "income-tax",
    title: "Income Tax Services",
    description:
      "Everything from a single salaried ITR to a full assessment appeal. We file accurately, claim every valid deduction, and represent you before the department when needed.",
    bulletPoints: [
      "ITR-1 through ITR-7 filing",
      "Tax planning for individuals & businesses",
      "TDS deduction, payment & quarterly returns",
      "Notices, scrutiny & assessment representation",
      "ITAT appeals & rectification applications",
    ],
  },
  {
    slug: "gst",
    title: "GST Compliance",
    description:
      "GST done end-to-end, registration, monthly returns, reconciliation, audit, and refunds. I keep your input credit clean and your filings on time.",
    bulletPoints: [
      "New GST registration & amendment",
      "GSTR-1, 3B filing, monthly & quarterly",
      "GSTR-9 annual return & 9C reconciliation",
      "E-way bill setup & compliance",
      "Refund claims (export, inverted duty, excess payment)",
    ],
  },
  {
    slug: "audit",
    title: "Audit & Assurance",
    description:
      "Independent audits carried out as per Standards on Auditing issued by ICAI, for companies, firms, and trusts of every size.",
    bulletPoints: [
      "Statutory audit under Companies Act, 2013",
      "Tax audit under Section 44AB",
      "Internal audit & concurrent audit",
      "Stock & branch audit for banks",
      "Due diligence for acquisitions & investments",
    ],
  },
];