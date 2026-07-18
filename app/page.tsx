import { services } from "@/app/components/content/services";
import { Hero } from "@/app/components/sections/hero";
import { ServiceCard } from "@/app/components/sections/service-card";
import { ProcessSection } from "@/app/components/sections/process";
import { CtaQuote } from "@/app/components/sections/cta-quote";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-navy/8 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-dark">
                How we can help
              </p>
              <h2 className="mb-3 font-headline text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-navy md:text-[40px]">
                Services we offer
              </h2>
              <p className="font-body text-[15px] leading-relaxed text-navy/70">
                Whether you need a one-time return filed or a long-term
                compliance partner, we handle the full range of tax, audit, and
                corporate advisory work for individuals and businesses.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/40">
              06 practice areas
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaQuote />
    </>
  );
}
