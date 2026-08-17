import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/app/components/content/blog";
import { siteConfig } from "@/app/components/content/site";
import { CtaQuote } from "@/app/components/sections/cta-quote";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };
  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: [{ url: post.cover, width: 800, height: 400, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.schema.name,
      logo: { "@type": "ImageObject", url: siteConfig.schema.logo },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <section className="grain relative overflow-hidden bg-navy py-20 md:py-28">
        <Image
          src="/images/work-contract.jpg"
          alt="Legal contract and pen on a desk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/90 to-navy" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-body text-[13px] font-medium text-white/60 transition-colors hover:text-gold"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            All Notes
          </Link>
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 border border-gold/40 px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.1em] text-gold/90">
                <span className="material-symbols-outlined text-[13px]">label</span>
                {post.category}
              </span>
              <span className="font-body text-[13px] text-white/55">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="font-body text-[13px] text-white/55">
                · {post.readTime}
              </span>
            </div>
            <h1 className="mb-6 font-headline text-[34px] font-semibold leading-[1.1] tracking-tight text-white md:text-[48px]">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 font-body text-[13px] text-white/60">
              <span className="flex h-8 w-8 items-center justify-center bg-gold/20 text-gold">
                <span className="material-symbols-outlined text-[16px]">person</span>
              </span>
              {post.author}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">
            <article className="rounded-sm border border-navy/8 bg-white p-8 shadow-sm md:p-12">
              <p className="mb-10 border-l-2 border-gold pl-5 font-headline text-[20px] font-medium italic leading-relaxed text-navy/75">
                {post.excerpt}
              </p>
              <div className="space-y-6">
                {post.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-body text-[16px] leading-[1.85] text-navy/65"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 border-t border-navy/8 pt-8">
                <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-navy/55">
                  Tagged under
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 border border-navy/10 bg-cream px-3 py-1 font-body text-[12px] font-medium text-navy/70">
                    <span className="material-symbols-outlined text-[13px] text-gold">
                      label
                    </span>
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 border border-navy/10 bg-cream px-3 py-1 font-body text-[12px] font-medium text-navy/70">
                    <span className="material-symbols-outlined text-[13px] text-gold">
                      label
                    </span>
                    India Tax
                  </span>
                  <span className="inline-flex items-center gap-1 border border-navy/10 bg-cream px-3 py-1 font-body text-[12px] font-medium text-navy/70">
                    <span className="material-symbols-outlined text-[13px] text-gold">
                      label
                    </span>
                    Compliance
                  </span>
                </div>
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-sm border border-navy/8 bg-white p-6 shadow-sm">
                <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-navy/55">
                  In this note
                </p>
                <ul className="space-y-2">
                  {post.content.map((_, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 font-body text-[13px] text-navy/60"
                    >
                      <span className="material-symbols-outlined text-[14px] text-gold">
                        text_snippet
                      </span>
                      Section {i + 1}
                    </li>
                  ))}
                </ul>
              </div>

              {relatedPosts.length > 0 && (
                <div className="rounded-sm border border-navy/8 bg-white p-6 shadow-sm">
                  <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-navy/55">
                    Related notes
                  </p>
                  <div className="space-y-3">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group block rounded-sm border border-navy/8 p-4 transition-all hover:border-gold/50 hover:bg-cream"
                      >
                        <p className="mb-1 font-body text-[10px] font-bold uppercase tracking-[0.1em] text-gold-dark">
                          {related.category}
                        </p>
                        <p className="font-headline text-[15px] font-semibold leading-snug text-navy transition-colors group-hover:text-gold-dark">
                          {related.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-sm border border-navy/8 bg-navy p-6 text-white">
                <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-gold/80">
                  Have a follow-up question?
                </p>
                <p className="mb-5 font-body text-[13px] leading-relaxed text-white/60">
                  I read every message. If something wasn't clear, just ask.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-white px-5 py-2.5 font-body text-[13px] font-semibold text-navy transition-all hover:bg-white/85"
                >
                  Get in touch
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CtaQuote />
    </>
  );
}
