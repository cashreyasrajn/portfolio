import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/app/components/content/services";
import { siteConfig } from "@/app/components/content/site";
import { CtaQuote } from "@/app/components/sections/cta-quote";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Not Found" };
  const url = `${siteConfig.url}/services/${service.slug}`;
  return {
    title: `${service.title} | ${service.tagline}`,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      images: [siteConfig.ogImage],
    },
  };
}

const extendedContent: Record<
  string,
  {
    intro: string;
    whatWeDo: string[];
    whoFor: string[];
    faqs: { q: string; a: string }[];
  }
> = {
  "income-tax": {
    intro:
      "Income tax is complicated, but missing a deadline or a deduction is expensive. We handle returns, planning, TDS, assessment notices and appeals for individuals, firms and companies. No jargon, no last-minute scrambling.",
    whatWeDo: [
      "ITR filing, all forms (ITR-1 through ITR-7) for salaried, business, capital gains, foreign assets",
      "Tax planning, legitimate deductions, exemptions, and structuring to minimise liability",
      "TDS, deduction calculation, quarterly returns (24Q, 26Q, 27Q), Form 16/16A issuance",
      "Assessment & scrutiny, responding to notices u/s 143(2), 148, 156; representation before AO, CIT(A), ITAT",
      "Rectification & refunds, 154 applications, refund tracking, interest calculation",
    ],
    whoFor: [
      "Salaried professionals with multiple income sources",
      "Small business owners & proprietorships",
      "Partnership firms & LLPs",
      "Private limited companies",
      "NRIs with Indian income",
    ],
    faqs: [
      {
        q: "What documents do I need for ITR filing?",
        a: "Form 16 (salaried), bank statements, investment proofs (ELSS, PPF, insurance, etc.), home loan certificate, rent receipts, AIS/TIS from the Income Tax portal, and last year's acknowledgement.",
      },
      {
        q: "Can you handle old pending returns?",
        a: "Yes. We can file belated returns for up to 3 previous assessment years (subject to late fees) and update returns under Section 139(8A). We also handle re-assessment cases.",
      },
      {
        q: "What if I received a notice from the IT department?",
        a: "The notice, grounds, supporting documents, and any response are reviewed as part of the applicable assessment or appeal process.",
      },
    ],
  },
  gst: {
    intro:
      "GST filing is monthly, it's detail-heavy, and the department sends notices fast. We take over the entire compliance cycle, registration, monthly returns, annual returns, reconciliation, audit and refunds, so you can focus on your business.",
    whatWeDo: [
      "GST registration, new registration, amendment, cancellation, and migration from old regimes",
      "Monthly/quarterly returns, GSTR-1 (sales), GSTR-3B (summary) filed on time every cycle",
      "Input tax credit reconciliation, matching GSTR-2A/2B with purchase register, following up with vendors",
      "Annual return, GSTR-9 and GSTR-9C (reconciliation statement and audit, where applicable)",
      "E-way bills, setup, generation, and compliance support for goods transport",
      "Refund claims, export refunds, inverted duty structure refunds, excess payment claims",
    ],
    whoFor: [
      "Manufacturers and traders registered under GST",
      "Service providers with inter-state operations",
      "E-commerce sellers (Amazon, Flipkart, own website)",
      "Exporters claiming refunds and LUT",
      "Composition scheme dealers",
    ],
    faqs: [
      {
        q: "What happens if I miss a GST return?",
        a: "Late fees apply (Rs 20/day for GSTR-3B, Rs 10 CGST + Rs 10 SGST), plus 18% interest on net liability. More importantly, your GSTR-1 being blocked means your buyers lose input credit, they won't be happy. We help bring you back on track.",
      },
      {
        q: "Do I need GST registration if my turnover is below Rs 40 lakh?",
        a: "Not as a general rule, but there are exceptions: inter-state supply, e-commerce selling, agent of a supplier, and certain notified categories. We can confirm based on your specific case.",
      },
      {
        q: "How do you reconcile input tax credit?",
        a: "We pull your GSTR-2A/2B from the portal every month, match line-by-line with your purchase register, flag discrepancies, and follow up with vendors for corrections. Reconciliation is the most important step to avoid demand notices.",
      },
    ],
  },
  "audit-assurance": {
    intro:
      "Audits aren't just a statutory checkbox, they're your stakeholders' assurance that the numbers are right. We conduct audits as per ICAI Standards on Auditing for companies, firms and trusts across sectors.",
    whatWeDo: [
      "Statutory audit, under Section 139 of Companies Act, 2013 for private limited companies, including CARO reporting where applicable",
      "Tax audit, under Section 44AB of the Income Tax Act for businesses and professionals exceeding the prescribed turnover/gross receipts limits",
      "Internal audit, periodic reviews of your internal processes, accounting systems, inventory, and controls",
      "Stock & branch audit, for bank-financed working capital limits and multi-location businesses",
      "Due diligence, pre-investment financial review, M&A support, and net worth certifications",
      "Trust & society audit, for charitable trusts, NGOs, and housing societies under applicable laws",
    ],
    whoFor: [
      "Private limited companies (statutory audit mandatory)",
      "Businesses with turnover above Rs 1 crore (tax audit threshold)",
      "Professionals with gross receipts above Rs 50 lakh",
      "Startups during funding rounds (investor due diligence)",
      "Societies and charitable trusts",
    ],
    faqs: [
      {
        q: "How long does a statutory audit take?",
        a: "For a small private limited company, the timeline depends on the completeness of records and documents submitted for review.",
      },
      {
        q: "Do you audit the previous year's books?",
        a: "Yes, most audit engagements are for the financial year just ended (e.g., audit of FY 2025-26 books in mid-2026). We can also handle pending audits for previous years.",
      },
      {
        q: "What's the difference between statutory audit and tax audit?",
        a: "Statutory audit is under the Companies Act, every company must get it done regardless of turnover. Tax audit is under the Income Tax Act, triggered when business turnover exceeds Rs 1 crore (or professional receipts > Rs 50 lakh). Many companies need both.",
      },
    ],
  },
  "corporate-compliance": {
    intro:
      "ROC filings, MCA deadlines, board resolutions, the compliance list for a private company is long and penalties for missing deadlines add up fast. We manage the entire cycle: annual filings, event-based filings, and ongoing corporate governance.",
    whatWeDo: [
      "Annual ROC filings, AOC-4 (financials), MGT-7 (annual return), DIR-3 KYC for directors",
      "Director-related filings, DIN application, appointment (DIR-12), resignation, disqualification resolution",
      "Share-related filings, share transfer, allotment (PAS-3), increase in authorised capital (SH-7)",
      "Board resolutions & minutes, drafting, maintaining statutory registers, ensuring compliance with SS-1 and SS-2",
      "Company strike-off & revival, voluntary closure (STK-2) and revival of struck-off companies",
      "LLP compliance, Form 11 (annual return), Form 8 (statement of accounts & solvency)",
    ],
    whoFor: [
      "Private limited companies of all sizes",
      "Limited Liability Partnerships (LLPs)",
      "Section 8 companies (non-profit)",
      "Companies requiring director/KMP changes",
      "Dormant and inactive companies needing strike-off",
    ],
    faqs: [
      {
        q: "What are the ROC filing deadlines?",
        a: "AOC-4 is due within 30 days of the AGM. MGT-7 is due within 60 days of the AGM. DIR-3 KYC is due by 30th September each year for all directors holding DIN. Late filing attracts additional fees that escalate every day.",
      },
      {
        q: "Can you handle ROC compliance for a company incorporated in another city?",
        a: "Yes. The ROC jurisdiction is based on the company's registered office address, but we handle MCA filings for companies across India. Everything is online through the MCA portal.",
      },
    ],
  },
  "business-setup": {
    intro:
      "The legal structure you choose, Pvt Ltd, LLP, OPC, or proprietorship, affects your tax, compliance burden, fundraising ability, and personal liability for years. We help you pick the right one and handle end-to-end registration.",
    whatWeDo: [
      "Private Limited Company, incorporation with MoA/AoA, PAN/TAN, GST registration, bank account opening, and initial ROC filings",
      "LLP registration, LLP agreement, DPIN for designated partners, incorporation, and initial Form 3 filing",
      "One Person Company (OPC), ideal for solo founders who want limited liability with simpler compliance",
      "Udyam / MSME registration, eligibility assessment and online filing with the Udyam portal",
      "Startup India recognition, DPIIT registration, eligibility for tax holiday, and angel tax exemption",
      "Post-incorporation compliance, first board meeting, auditor appointment (ADT-1), share certificates, and registered office compliance",
    ],
    whoFor: [
      "First-time founders unsure about Pvt Ltd vs LLP vs OPC",
      "Existing proprietorships wanting to incorporate",
      "Startups seeking DPIIT recognition and tax benefits",
      "Foreign nationals / NRIs setting up in India",
      "MSMEs needing Udyam registration for scheme benefits",
    ],
    faqs: [
      {
        q: "Pvt Ltd, LLP, or OPC, which should I choose?",
        a: "The choice depends on the proposed activities, ownership, funding plans, liability, and applicable compliance requirements. Pvt Ltd, LLP, and OPC structures have different legal and regulatory implications.",
      },
      {
        q: "How long does company incorporation take?",
        a: "With all documents ready, SPICe+ incorporation (Pvt Ltd) commonly takes 5-10 working days. Name approval and document verification affect the timeline. RUN refers to the Reserve Unique Name process.",
      },
      {
        q: "Can NRIs be directors or shareholders?",
        a: "Yes. At least one director must be an Indian resident. NRIs/foreign nationals can be directors and shareholders. Additional requirements (DSC, notarised documents, FEMA reporting) apply, we handle those too.",
      },
    ],
  },
  "nri-fema": {
    intro:
      "Cross-border tax involves DTAA provisions, NRI status determination, and FEMA rules on property and bank accounts. This practice area covers matters relating to NRIs and foreign entities in India.",
    whatWeDo: [
      "NRI income tax returns, ITR-2 filing for NRIs with Indian income (rent, capital gains, interest, dividends)",
      "DTAA relief, claiming treaty benefits to avoid double taxation on the same income in India and your country of residence",
      "FEMA compliance, reporting for NRI bank accounts (NRE/NRO/FCNR), property transactions, repatriation rules",
      "Sale of Indian property, capital gains computation, TDS u/s 195, lower deduction certificate, repatriation of sale proceeds",
      "Inheritance & succession, tax implications of inherited Indian assets and succession planning advisory for NRIs",
      "Foreign company setup in India, subsidiary incorporation, FDI compliance, RBI reporting (FC-GPR, FLA returns)",
    ],
    whoFor: [
      "NRIs with rental property or capital gains in India",
      "NRIs selling inherited property in India",
      "NRIs repatriating funds from NRO to NRE accounts",
      "Foreign companies setting up a subsidiary in India",
      "Returning NRIs (RNOR status planning)",
    ],
    faqs: [
      {
        q: "Do I need to file an ITR in India if I'm an NRI?",
        a: "Only if your Indian income (rent, capital gains, interest, etc.) exceeds the basic exemption limit (currently Rs 3 lakh under the new regime). But even below that, filing is recommended if TDS has been deducted, to claim a refund.",
      },
      {
        q: "What's the difference between NRE and NRO accounts for tax?",
        a: "NRE account, fully and freely repatriable, interest is tax-free in India. NRO account, for depositing Indian earnings (rent, dividends), interest is taxable, repatriation is capped at USD 1 million per year with CA certificate. We handle the repatriation paperwork.",
      },
      {
        q: "Can I sell my Indian property and take the money abroad?",
        a: "Yes, subject to limits including USD 1 million per financial year per NRI. Applicable capital gains tax, filing requirements, Form 15CA/15CB, and bank procedures apply before remittance.",
      },
    ],
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const detail = extendedContent[params.slug];
  if (!detail) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.tagline,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.schema.name,
      url: siteConfig.url,
      telephone: siteConfig.schema.telephone,
      areaServed: siteConfig.schema.areaServed,
    },
    areaServed: siteConfig.schema.areaServed,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="grain relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(184,146,75,0.16),transparent_32%),linear-gradient(115deg,#0b1e3d_0%,#132f59_55%,#0b1e3d_100%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 font-body text-[13px] font-medium text-white/60 transition-colors hover:text-white"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            All Services
          </Link>
          <div className="max-w-3xl">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              {service.tagline}
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] text-white md:text-[56px]">
              {service.title}
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              {detail.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-8 font-headline text-[28px] font-semibold tracking-tight text-navy">
              What we do
            </h2>
            <ul className="space-y-6">
              {detail.whatWeDo.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-navy/[0.06]">
                    <span className="material-symbols-outlined text-[16px] text-gold">
                      check
                    </span>
                  </div>
                  <p className="font-body text-[15px] leading-relaxed text-navy/60">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <h2 className="mb-8 mt-20 font-headline text-[28px] font-semibold tracking-tight text-navy">
              Who this is for
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {detail.whoFor.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-sm border border-navy/8 bg-white px-5 py-4"
                >
                  <span className="material-symbols-outlined text-[18px] text-gold">
                    group
                  </span>
                  <p className="font-body text-[14px] font-medium text-navy/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-sm border border-navy/8 bg-white p-7">
                <h3 className="mb-5 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold-dark">
                  Quick facts
                </h3>
                <ul className="space-y-4">
                  {service.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-body text-[14px] text-navy/60"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-[16px] text-gold">
                        check
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-sm bg-navy p-7 text-white">
                <h3 className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold/90">
                  Engagement information
                </h3>
                <p className="mb-6 font-body text-[14px] leading-relaxed text-white/70">
                  Scope, documentation, and engagement terms are discussed before
                  any professional work begins.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3 font-body text-[14px] font-semibold text-navy transition-all hover:bg-white/85 active:scale-[0.97]"
                >
                  <span className="material-symbols-outlined text-[18px]">call_made</span>
                  Contact details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaQuote />
    </>
  );
}
