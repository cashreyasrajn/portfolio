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
  }
> = {
  "corporate-compliance": {
    intro:
      "Comprehensive corporate compliance services to ensure adherence to regulatory requirements and maintain proper governance practices for a company. This includes routine filings with the Registrar of Companies (ROC), timely submission of compliance reports and fulfilling mandatory legal obligations. Regular reviews and updates and end-to-end maintenance of your company's legal standing.",
    whatWeDo: [
      "Routine filings with the Registrar of Companies (ROC)",
      "Timely submission of compliance reports and returns",
      "Fulfilling mandatory legal obligations",
      "Regular reviews and updates of compliance records",
      "End-to-end maintenance of the company's legal standing",
    ],
    whoFor: [
      "Companies required to maintain ROC and MCA compliance",
      "Boards and management overseeing governance",
      "Organizations managing statutory registers and records",
      "Growing companies scaling compliance responsibilities",
    ],
  },
  "audit-assurance": {
    intro:
      "Our assurance services offer an independent evaluation of financial statements, internal controls, and business operations. This includes statutory audits, internal audits, and tax audits to ensure accuracy and reliability in financial reporting. These services along with our independent and unbiased opinions enhance investor confidence, safeguard assets, and help organizations identify operational inefficiencies.",
    whatWeDo: [
      "Statutory audits of financial statements",
      "Internal audits of controls and business operations",
      "Tax audits for applicable assessments",
      "Independent and unbiased opinion on financial reporting",
      "Identification of operational inefficiencies",
    ],
    whoFor: [
      "Companies required to obtain statutory audits",
      "Organizations seeking an independent financial review",
      "Businesses needing internal control evaluation",
      "Entities requiring tax audits",
    ],
  },
  "business-setup": {
    intro:
      "Complete solutions for setting up businesses, including selecting the right legal structure, registering with the relevant authorities, and obtaining necessary licenses. Our services cover everything from documentation preparation to compliance with local, state, and central regulations. Our expertise is being a one stop solution enabling businesses to start on the right foot.",
    whatWeDo: [
      "Selection of the right legal structure",
      "Registration with relevant authorities",
      "Obtaining necessary licenses",
      "Documentation preparation and review",
      "Compliance with local, state, and central regulations",
    ],
    whoFor: [
      "New business founders and entrepreneurs",
      "Professionals and partnerships seeking incorporation",
      "Businesses needing registrations and licenses",
    ],
  },
  "management-consultancy": {
    intro:
      "Strategic advice aimed at improving business performance, driving growth, and enhancing operational efficiency. Services include business diagnostics, change management, and process optimization tailored to meet specific organizational goals. This consultancy service helps streamline operations, improve profitability, and navigate business challenges at both levels of transactional & structural.",
    whatWeDo: [
      "Business diagnostics",
      "Change management",
      "Process optimization",
      "Operational and profitability improvement",
      "Guidance on transactional and structural challenges",
    ],
    whoFor: [
      "Business owners seeking performance improvement",
      "Organizations undergoing growth or restructuring",
      "Management teams navigating operational challenges",
    ],
  },
  "virtual-cfo": {
    intro:
      "A star service offering of Shreyas Raj & Co for your businesses, which includes but not limited to book-keeping, compliance management, MIS reporting, financial analysis, and strategic decision-making, without the need for a full-time CFO. These services offer high-level financial expertise for small to mid-sized businesses, enabling better cash flow management and financial strategy.",
    whatWeDo: [
      "Book-keeping",
      "Compliance management",
      "MIS reporting",
      "Financial analysis",
      "Strategic decision-making and cash flow management",
    ],
    whoFor: [
      "Small to mid-sized businesses without a full-time CFO",
      "Startups and growing companies needing financial leadership",
      "Businesses seeking structured financial reporting",
    ],
  },
  "business-process-reengineering": {
    intro:
      "Revamping/Restructuring business processes to increase efficiency or reduce redundancies. Developing SOPs for your processes. This involves analyzing existing workflows, identifying bottlenecks, and re-engineering processes for optimal performance. By leveraging modern tools and methodologies, we ensure your business processes are agile, cost-effective, and aligned with business goals.",
    whatWeDo: [
      "Analysis of existing workflows",
      "Identification of bottlenecks",
      "Re-engineering processes for optimal efficiency",
      "Development of standard operating procedures (SOPs)",
      "Reduction of redundancies",
    ],
    whoFor: [
      "Organizations seeking to reduce redundancies",
      "Businesses standardizing processes with SOPs",
      "Companies modernizing workflows with new tools",
    ],
  },
  "taxation-consultancy": {
    intro:
      "Expert guidance on tax planning, compliance, and strategic tax solutions to ensure regulatory adherence. Services include assistance with direct and indirect tax filings, tax audits, and representation before tax authorities. We also help clients make use of available incentives to optimize their tax position.",
    whatWeDo: [
      "Tax planning and strategic tax solutions",
      "Direct and indirect tax filings",
      "Tax audits",
      "Representation before tax authorities",
      "Assistance with available incentives",
    ],
    whoFor: [
      "Individuals and businesses requiring tax compliance",
      "Taxpayers seeking representation before authorities",
      "Entities looking to make use of tax incentives",
    ],
  },
  "payroll-processing": {
    intro:
      "End-to-end payroll services, ensuring accurate and timely payment of salaries, deductions, and compliance with statutory requirements. Our services also include preparing and filing payroll-related tax returns, managing employee benefits, and handling any regulatory updates. This helps businesses stay compliant while reducing administrative burdens and improving employee satisfaction.",
    whatWeDo: [
      "Accurate and timely salary payment processing",
      "Deduction management",
      "Payroll-related tax return preparation and filing",
      "Employee benefits management",
      "Handling regulatory updates",
    ],
    whoFor: [
      "Businesses managing in-house payroll",
      "Companies seeking statutory payroll compliance",
      "Organizations aiming to reduce administrative burden",
    ],
  },
  "aif-compliance-structuring": {
    intro:
      "We provide end-to-end Alternative Investment Fund (AIF) compliance and structuring services, supporting fund managers and investors through fund setup, regulatory structuring, documentation, and ongoing compliance requirements. Our services encompass fund structure evaluation, SEBI regulatory compliance, contribution and investment documentation, investor reporting, tax and accounting considerations, and coordination with legal and regulatory stakeholders. By combining regulatory expertise with commercial and operational insights, we help fund managers establish robust governance frameworks, maintain compliance, and efficiently manage the evolving requirements of their investment vehicles.",
    whatWeDo: [
      "Fund structure evaluation",
      "SEBI regulatory compliance",
      "Contribution and investment documentation",
      "Investor reporting and governance",
      "Tax and accounting considerations",
      "Coordination with legal and regulatory stakeholders",
    ],
    whoFor: [
      "Fund managers and alternative investment funds",
      "Investors and intermediaries in AIF structures",
      "Organizations establishing or maintaining compliant investment vehicles",
    ],
  },
  "technology-innovation": {
    intro:
      "We provide end-to-end ERP selection and implementation services, guiding organizations through platform evaluation, system configuration, and seamless deployment across Finance, HRMS, CRM, Supply Chain, and Workforce Management. Our services encompass process mapping, custom system integration, statutory compliance alignment, and ongoing change management to accelerate user adoption. By bridging technical deployment with operational workflows, we help businesses eliminate data silos, reduce administrative overhead, and drive scalable efficiency across every department.",
    whatWeDo: [
      "ERP platform selection and evaluation",
      "System configuration and deployment across Finance, HRMS, CRM, Supply Chain, and Workforce Management",
      "Process mapping and custom system integration",
      "Statutory compliance alignment",
      "Change management to accelerate user adoption",
    ],
    whoFor: [
      "Organizations selecting and implementing ERP systems",
      "Businesses eliminating data silos",
      "Companies standardizing operations across departments",
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteConfig.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="grain relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-hero-navy" />
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
