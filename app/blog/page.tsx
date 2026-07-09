import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, blogCategories } from "@/app/components/content/blog";
import { CtaQuote } from "@/app/components/sections/cta-quote";

export const metadata: Metadata = {
  title: "Blog — Practical Tax & Compliance Insights",
  description:
    "Plain-English articles on income tax, GST, audit, corporate compliance, business setup, and NRI taxation from CA Shreyas Raj.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: "url('/blog-bg.svg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2  border border-gold/30 bg-white/5 px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold/90">
              <span className="material-symbols-outlined text-[14px] text-gold">article</span>
              Knowledge Base
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-semibold leading-[1.1] tracking-tight text-white md:text-[56px]">
              Notes on tax & compliance
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              A growing collection of plain-English articles on the things I get
              asked about most. Think of it as a public notebook.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-sm border border-navy/8 bg-white p-6 shadow-sm">
                <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-navy/55">
                  Filter by topic
                </p>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                  {blogCategories.map((cat) => (
                    <button
                      key={cat}
                      className="flex items-center gap-2 rounded-sm px-3 py-2 text-left font-body text-[13px] font-medium text-navy/70 transition-colors hover:bg-cream hover:text-navy lg:w-full"
                    >
                      <span className="material-symbols-outlined text-[16px] text-gold">
                        {cat === "All" ? "folder_open" : "description"}
                      </span>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-sm border border-navy/8 bg-navy p-6 text-white">
                <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-gold/80">
                  Can't find what you need?
                </p>
                <p className="mb-5 font-body text-[13px] leading-relaxed text-white/60">
                  Ask me directly. I usually respond within one business day.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2  bg-gold px-5 py-2.5 font-body text-[13px] font-semibold text-navy transition-all hover:bg-gold-light"
                >
                  Ask a question
                </Link>
              </div>
            </aside>

            <div className="grid grid-cols-1 gap-5">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-sm border border-navy/8 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md md:flex-row"
                >
                  <div className="relative w-full flex-shrink-0 overflow-hidden bg-navy md:w-[240px]">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      width={320}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5  border border-gold/40 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.1em] text-gold-dark">
                        <span className="material-symbols-outlined text-[12px]">
                          label
                        </span>
                        {post.category}
                      </span>
                      <span className="font-body text-[12px] text-navy/55">
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="font-body text-[12px] text-navy/55">
                        · {post.readTime}
                      </span>
                    </div>
                    <h2 className="mb-3 font-headline text-[22px] font-semibold tracking-tight text-navy transition-colors group-hover:text-gold-dark">
                      {post.title}
                    </h2>
                    <p className="mb-5 font-body text-[14px] leading-relaxed text-navy/70">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 font-body text-[13px] font-semibold text-navy/70 transition-all group-hover:gap-3 group-hover:text-gold-dark">
                      Read note
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaQuote />
    </>
  );
}
