export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  cover: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "new-tax-regime-vs-old",
    title: "New Tax Regime vs Old: Which One Saves You More in 2026?",
    cover: "/blog/cover-tax-regime.jpg",
    excerpt:
      "A side-by-side comparison for salaried professionals and business owners — with real numbers, not opinion.",
    content: [
      "The new tax regime has lower slab rates but removes most deductions. The old regime keeps the higher rates but allows you to claim 80C, 80D, HRA, LTA, and home loan interest.",
      "For a salaried person claiming full 80C (Rs 1.5 lakh), standard deduction (Rs 50,000), and home loan interest or HRA, the old regime is usually better up to an income of around Rs 15-18 lakh.",
      "For freelancers, consultants, and those with no major deductions, the new regime often wins because of simplicity and lower headline rates.",
      "The default regime is now the new one. If you want the old regime, you must opt in while filing. We review every client's deductions first and then recommend the regime that actually leaves more money in their pocket.",
      "Need help choosing? Send us your Form 16 and investment proofs and we'll run both calculations for you.",
    ],
    category: "Income Tax",
    date: "2026-07-02",
    readTime: "5 min",
    author: "CA Shreyas Raj",
  },
  {
    slug: "gst-annual-return-deadline",
    title: "GSTR-9 & 9C Due Date: What Happens If You File Late",
    cover: "/blog/cover-gst-deadline.jpg",
    excerpt:
      "The annual GST return and reconciliation statement are due soon. Here's what to check before you submit.",
    content: [
      "GSTR-9 is the annual return. GSTR-9C is the reconciliation statement and audit (only if turnover exceeds Rs 5 crore).",
      "Common mistakes we see: mismatch between GSTR-1 and GSTR-3B, missing HSN summary, unclaimed input credit that got time-barred, and incorrect tax liability on advances.",
      "If you file late, you pay late fees (Rs 100 per day under each Act, capped), plus interest on any tax short-paid. More importantly, a delayed or mismatched annual return increases your chances of a department notice.",
      "We reconcile GSTR-2B/2A with the purchase register, validate HSN codes, and file only after the client approves a preview. That preview step alone catches 90% of errors.",
      "If your books are not yet finalised for FY 2026-26, start now. The reconciliation begins with clean books — not at the GST portal.",
    ],
    category: "GST",
    date: "2026-06-20",
    readTime: "6 min",
    author: "CA Shreyas Raj",
  },
  {
    slug: "section-44ad-presumptive",
    title: "Section 44AD: Presumptive Taxation for Small Businesses",
    cover: "/blog/cover-44ad.jpg",
    excerpt:
      "If your turnover is under Rs 3 crore and most receipts are digital, 44AD might be the simplest way to file.",
    content: [
      "Section 44AD lets eligible resident individuals, HUFs, and partnerships pay tax on a presumptive income of 8% (6% for digital receipts) instead of maintaining full books of account.",
      "Eligibility: turnover up to Rs 3 crore in a financial year (increased from Rs 2 crore if 95% receipts are through banking channels).",
      "The biggest advantage is no mandatory tax audit and no need for extensive bookkeeping. The trade-off is you cannot claim deductions against the presumptive income.",
      "Many small traders and consultants over-complicate their returns when 44AD would have worked. We review each case in the first meeting and choose the path that saves both tax and compliance effort.",
      "Important: once you opt out of 44AD, you cannot come back for five years. So the decision matters.",
    ],
    category: "Income Tax",
    date: "2026-06-10",
    readTime: "7 min",
    author: "CA Shreyas Raj",
  },
  {
    slug: "private-limited-vs-llp",
    title: "Pvt Ltd vs LLP: Which Structure Should You Pick in 2026?",
    cover: "/blog/cover-pvtltd-llp.jpg",
    excerpt:
      "A practical comparison for founders: tax, compliance cost, fundraising, and liability.",
    content: [
      "Private Limited Companies are better if you plan to raise venture capital, issue ESOPs, or eventually list. Investors prefer shares over LLP partnership units.",
      "LLPs are cheaper to run. There is no mandatory audit below Rs 40 lakh turnover, and compliance is lighter. They are ideal for bootstrapped service businesses and professional partnerships.",
      "Tax rates differ too. A domestic company can opt for a 22% flat rate (25.17% with cess) under Section 115BAA, but must forgo exemptions. LLPs are taxed at normal slab rates — 30% above Rs 1 crore profit.",
      "For a solo founder with no immediate fundraising plans, an OPC (One Person Company) is also worth considering, though it converts to a Pvt Ltd once paid-up capital crosses Rs 50 lakh.",
      "We help founders model the first three years under each structure before they incorporate. The right choice at the start saves lakhs later.",
    ],
    category: "Business Setup",
    date: "2026-05-28",
    readTime: "8 min",
    author: "CA Shreyas Raj",
  },
  {
    slug: "nri-sell-property-india",
    title: "NRI Guide: Selling Property in India and Repatriating Funds",
    cover: "/blog/cover-nri-property.jpg",
    excerpt:
      "The exact steps, forms, and tax implications when an NRI sells house property in India.",
    content: [
      "If you are an NRI selling property in India, the buyer must deduct TDS at 20% (plus cess) on the sale consideration if it is a long-term capital asset. This applies even if your actual gain is lower.",
      "You can apply for a lower TDS certificate (Section 197) from the Assessing Officer if the actual capital gains tax is less. This avoids locking up cash with the department.",
      "Capital gains are computed after indexation for long-term assets held over 24 months. NRIs cannot claim Section 54F, but Section 54 (reinvestment in one residential property) is available subject to conditions.",
      "After paying the tax, repatriation of sale proceeds is permitted up to USD 1 million per financial year. You need Form 15CA (self-declaration) and Form 15CB (CA certificate) before the bank releases the funds.",
      "We handle the capital gains computation, lower TDS certificate, return filing, and 15CA/15CB end-to-end for NRIs selling inherited or self-acquired property.",
    ],
    category: "NRI & FEMA",
    date: "2026-05-15",
    readTime: "9 min",
    author: "CA Shreyas Raj",
  },
  {
    slug: "roc-compliance-checklist",
    title: "Annual ROC Compliance Checklist for Private Limited Companies",
    cover: "/blog/cover-roc-checklist.jpg",
    excerpt:
      "The six filings and board processes every Pvt Ltd must complete each year.",
    content: [
      "Annual General Meeting: hold within six months of the financial year end, not more than 15 months apart.",
      "AOC-4: file financial statements within 30 days of the AGM. Late fees escalate daily.",
      "MGT-7: file the annual return within 60 days of the AGM. This captures shareholding, directors, and registered office details.",
      "DIR-3 KYC: every director with a DIN must complete KYC by 30th September each year.",
      "ADT-1: appoint or reappoint the statutory auditor within 15 days of the first AGM, then file ADT-1.",
      "Board meetings: at least four each year, not more than 120 days apart. Minutes must be signed and maintained.",
      "We maintain a compliance calendar for each company and send reminders before every deadline. Missed ROC deadlines cost more than the professional fee.",
    ],
    category: "Corporate Compliance",
    date: "2026-05-02",
    readTime: "6 min",
    author: "CA Shreyas Raj",
  },
];

export const blogCategories = [
  "All",
  "Income Tax",
  "GST",
  "Audit",
  "Corporate Compliance",
  "Business Setup",
  "NRI & FEMA",
];