import { services } from "@/app/components/content/services";
import { Hero } from "@/app/components/sections/hero";
import { ServiceCard } from "@/app/components/sections/service-card";
import { StatsBar } from "@/app/components/sections/stats-bar";
import { ProcessSection } from "@/app/components/sections/process";
import { ValuesSection } from "@/app/components/sections/values";
import { TestimonialsSection } from "@/app/components/sections/testimonials";
import { CtaQuote } from "@/app/components/sections/cta-quote";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-t border-primary/8 bg-surface-container-low py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/80">
              What We Offer
            </p>
            <h2 className="mb-3 font-headline text-[30px] font-semibold tracking-tight text-primary md:text-[38px]">
              Six services, one trusted practice
            </h2>
            <p className="font-body text-[15px] leading-relaxed text-on-surface-variant/60">
              From your first return to your tenth audit — cover everything
              under one roof, with one point of contact.
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
      <TestimonialsSection />
      <CtaQuote />
    </>
  );
}