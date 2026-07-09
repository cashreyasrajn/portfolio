export interface Service {
  icon: string;
  title: string;
  tagline: string;
  slug: string;
  description: string;
  points: string[];
  href: string;
}

export const services: Service[] = [
  {
    icon: "request_quote",
    title: "Income Tax",
    tagline: "Direct Tax & ITR",
    slug: "income-tax",
    description:
      "End-to-end income tax services for individuals, firms and companies — from routine return filing to complex assessment representation.",
    points: [
      "ITR filing (all forms)",
      "Tax planning & advisory",
      "TDS compliance & returns",
      "Assessment & appeal representation",
    ],
    href: "/services/income-tax",
  },
  {
    icon: "receipt_long",
    title: "GST",
    tagline: "Registration to Refunds",
    slug: "gst",
    description:
      "Complete GST compliance made simple — accurate filings, timely reconciliations, and dispute resolution handled by specialists.",
    points: [
      "GST registration",
      "Monthly & annual returns",
      "GSTR-9 & 9C audit",
      "Refund claims & LUT filing",
    ],
    href: "/services/gst",
  },
  {
    icon: "fact_check",
    title: "Audit & Assurance",
    tagline: "Statutory & Tax Audit",
    slug: "audit-assurance",
    description:
      "Independent audits that give your stakeholders confidence — conducted with the rigour expected by ICAI and the Companies Act, 2013.",
    points: [
      "Statutory audit (u/s 139)",
      "Tax audit (u/s 44AB)",
      "Internal & stock audit",
      "Due diligence assignments",
    ],
    href: "/services/audit-assurance",
  },
  {
    icon: "apartment",
    title: "Corporate Compliance",
    tagline: "ROC & MCA Filings",
    slug: "corporate-compliance",
    description:
      "Keep your company fully compliant with the MCA — every filing, every deadline, handled without the last-minute rush.",
    points: [
      "Annual ROC filings (AOC-4, MGT-7)",
      "DIN, DSC & Director changes",
      "Board resolutions & minutes",
      "Strike-off & revival matters",
    ],
    href: "/services/corporate-compliance",
  },
  {
    icon: "rocket_launch",
    title: "Business Setup",
    tagline: "Start to Scale",
    slug: "business-setup",
    description:
      "From choosing the right structure to raising your first round — practical advice that gets your business off the ground properly.",
    points: [
      "Pvt Ltd, LLP & OPC registration",
      "Udyam / MSME registration",
      "Startup India recognition",
      "Project reports & CMA data",
    ],
    href: "/services/business-setup",
  },
  {
    icon: "globe",
    title: "NRI & FEMA",
    tagline: "Cross-Border Tax",
    slug: "nri-fema",
    description:
      "Specialised support for Non-Resident Indians and foreign entities — DTAA benefits, repatriation, and FEMA compliance done right.",
    points: [
      "NRI income tax returns",
      "DTAA & exemption claims",
      "FEMA & remittance advisory",
      "Foreign company setup",
    ],
    href: "/services/nri-fema",
  },
];

export const servicesHero = {
  headline: "Chartered Accountancy, done properly.",
  subheadline:
    "Shreyas Raj & Co. is a Bangalore-based chartered accountancy practice. We help individuals, professionals, and businesses stay on top of their tax, GST, audit, and compliance — with clear advice and no missed deadlines.",
};