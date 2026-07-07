import { services } from "@/app/components/content/services";
import { Hero } from "@/app/components/sections/hero";
import { ServiceCard } from "@/app/components/sections/service-card";
import { StatsBar } from "@/app/components/sections/stats-bar";
import { ProcessSection } from "@/app/components/sections/process";
import { ValuesSection } from "@/app/components/sections/values";
import { CtaQuote } from "@/app/components/sections/cta-quote";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-navy/8 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">
              How I Can Help
            </p>
            <h2 className="mb-3 font-headline text-[32px] font-semibold tracking-tight text-navy md:text-[40px]">
              Services I offer
            </h2>
            <p className="font-body text-[15px] leading-relaxed text-navy/70">
              Whether you need a one-time return filed or a long-term compliance
              partner, I handle the full range of tax, audit, and corporate
              advisory work for individuals and small businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
      <ProcessSection />
      <ValuesSection />
      <CtaQuote />
    </>
  );
}
