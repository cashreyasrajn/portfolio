import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/app/components/content/services";
import { ServiceCard } from "@/app/components/sections/service-card";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { CtaQuote } from "@/app/components/sections/cta-quote";

export const metadata: Metadata = {
  title: "Services, Income Tax, GST, Audit & Compliance",
  description:
    "Six practice areas: income tax, GST, statutory and tax audit, ROC corporate compliance, business setup, and NRI / FEMA advisory. Servicing individuals and businesses across Bengaluru.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <Image
          src="/images/work-desk.jpg"
          alt="Accountant's desk with laptop and calculator"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              Our services
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[56px]">
              Everything you need to stay compliant
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              Six focused practice areas, one point of contact. Whether you're
              an individual, a startup, or a growing company, I've got it
              covered.
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
