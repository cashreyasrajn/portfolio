import Link from "next/link";

export function CtaQuote() {
  return (
    <section className="bg-primary py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12">
        <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container/15 ring-1 ring-secondary-container/30">
          <span className="material-symbols-outlined text-[32px] text-secondary-container">
            mark_email_read
          </span>
        </span>
        <h2 className="mb-4 font-headline text-[28px] font-semibold tracking-tight md:text-[38px]">
          Let's get your filings in order
        </h2>
        <p className="mx-auto mb-10 max-w-lg font-body text-[16px] leading-relaxed text-white/70">
          Free fifteen-minute consultation. We'll talk through what you need,
          what it costs, and how soon it can be done. No strings.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-secondary-container px-8 py-3.5 font-body text-[15px] font-semibold leading-none text-on-secondary-container transition-all hover:brightness-110 active:scale-[0.97]"
        >
          <span className="material-symbols-outlined text-[18px]">call_made</span>
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}