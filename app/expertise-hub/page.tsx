import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { articles } from "@/app/components/content/articles";
import { siteConfig } from "@/app/components/content/site";
import { CtaQuote } from "@/app/components/sections/cta-quote";

export const metadata: Metadata = {
  title: "Expertise Hub, Insights & Updates",
  description:
    "Plain-English briefings on income tax, GST, audit, MSME registration and more, written for clients, not accountants.",
  alternates: { canonical: `${siteConfig.url}/expertise-hub` },
};

export default function ExpertiseHubPage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <Image
          src="/images/work-contract.jpg"
          alt="Legal contract under a spotlight on a desk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-22"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/50" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              Knowledge centre
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[52px]">
              Expertise Hub, written for you, not for accountants
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              Plain briefings on the things we get asked about most, deadlines,
              form changes, common mistakes. Updated through the year.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col rounded-sm border border-navy/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/[0.04]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5  border border-gold/40 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.1em] text-gold-dark">
                  <span className="material-symbols-outlined text-[13px]">label</span>
                  {article.category}
                </span>
                <span className="flex items-center gap-1 font-body text-[11px] font-semibold uppercase tracking-[0.05em] text-navy/55">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {article.readTime}
                </span>
              </div>
              <h2 className="mb-3 font-headline text-[20px] font-semibold leading-snug tracking-tight text-navy">
                {article.title}
              </h2>
              <p className="mb-8 flex-grow font-body text-[14px] leading-relaxed text-navy/70">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-navy/8 pt-4">
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.05em] text-navy/55">
                  {new Date(article.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1 font-body text-[13px] font-semibold text-navy transition-all group-hover:gap-2 group-hover:text-gold-dark">
                  Read
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaQuote />
    </>
  );
}
