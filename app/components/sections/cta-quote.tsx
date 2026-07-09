import Link from "next/link";

export function CtaQuote() {
  return (
    <section className="bg-navy py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 text-center md:px-12">
        <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center  bg-gold/10 ring-1 ring-gold/30">
          <span className="material-symbols-outlined text-[32px] text-gold">
            mark_email_read
          </span>
        </span>
        <h2 className="mx-auto mb-4 max-w-2xl font-headline text-[32px] font-semibold tracking-tight md:text-[42px]">
          Let's get your filings in order
        </h2>
        <p className="mx-auto mb-10 max-w-lg font-body text-[16px] leading-relaxed text-white/65">
          Tell us what you need. We'll discuss how we can help and outline the
          next steps. No obligation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2  bg-gold px-8 py-3.5 font-body text-[15px] font-semibold leading-none text-navy transition-all hover:bg-gold-light active:scale-[0.97]"
        >
          <span className="material-symbols-outlined text-[18px]">call_made</span>
          Contact us
        </Link>
      </div>
    </section>
  );
}
