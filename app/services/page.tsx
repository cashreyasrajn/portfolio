import type { Metadata } from "next";
import { services } from "@/app/components/content/services";
import { siteConfig } from "@/app/components/content/site";
import { ServiceCard } from "@/app/components/sections/service-card";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { CtaQuote } from "@/app/components/sections/cta-quote";

export const metadata: Metadata = {
  title: "Services, Assurance, Tax, Compliance & Advisory",
  description:
    "Ten practice areas: corporate compliance, assurance, business setup, management consultancy, virtual CFO, process reengineering, taxation, payroll, AIF compliance, and technology services in Bengaluru.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(184,146,75,0.16),transparent_32%),linear-gradient(115deg,#0b1e3d_0%,#132f59_55%,#0b1e3d_100%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              Our services
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[56px]">
              Everything you need to stay compliant
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              Ten practice areas for individuals, professionals, and businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="mb-10 font-headline text-[28px] font-semibold tracking-tight text-navy">
              All Services
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>


          </div>

          <div className="lg:col-span-4">
            <CredentialsSidebar />
          </div>
        </div>
      </section>

      <CtaQuote />
    </>
  );
}
