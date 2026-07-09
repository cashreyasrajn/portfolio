import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/app/components/content/services";
import { ServiceCard } from "@/app/components/sections/service-card";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { CtaQuote } from "@/app/components/sections/cta-quote";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { serviceDetails } from "@/app/components/content/articles";

export const metadata: Metadata = {
  title: "Services — Income Tax, GST, Audit & Compliance",
  description:
    "Six practice areas: income tax, GST, statutory and tax audit, ROC corporate compliance, business setup, and NRI / FEMA advisory. Servicing individuals and businesses across Bangalore.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2  border border-white/15 bg-white/5 px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold/90">
              <span className="material-symbols-outlined text-[14px] text-gold">
                design_services
              </span>
              Our Services
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-semibold leading-[1.1] tracking-tight md:text-[56px]">
              Everything you need to stay compliant
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              Six focused practice areas, one point of contact. Whether you're
              an individual, a startup, or a growing company — I've got it
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
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>

            <div className="mt-20">
              <h3 className="mb-3 font-headline text-[24px] font-semibold tracking-tight text-navy">
                Service details
              </h3>
              <p className="mb-8 max-w-lg font-body text-[14px] leading-relaxed text-navy/70">
                Open any service to see everything that's included when you work
                with me.
              </p>
              <Accordion
                type="single"
                collapsible
                className="w-full overflow-hidden rounded-sm border border-navy/8 bg-white"
              >
                {serviceDetails.map((sd) => (
                  <AccordionItem key={sd.slug} value={sd.slug}>
                    <AccordionTrigger className="px-6 text-[15px]">
                      {sd.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <p className="mb-5 text-[14px] leading-relaxed text-navy/60">
                        {sd.description}
                      </p>
                      <ul className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                        {sd.bulletPoints.map((bp) => (
                          <li
                            key={bp}
                            className="flex items-start gap-2.5 text-[14px] text-navy/60"
                          >
                            <span className="material-symbols-outlined mt-0.5 text-[16px] text-gold">
                              check
                            </span>
                            {bp}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2  bg-navy px-6 py-3 font-body text-[14px] font-semibold text-white transition-all hover:bg-navy-light active:scale-[0.97]"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    forum
                  </span>
                  Get a quote
                </Link>
              </div>
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
