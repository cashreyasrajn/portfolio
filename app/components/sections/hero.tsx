import Link from "next/link";
import { firm } from "@/app/components/content/firm";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/hero-bg.svg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 border-l-2 border-gold pl-3 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold/90">
            <span className="material-symbols-outlined text-[14px] text-gold">
              workspace_premium
            </span>
            Chartered Accountants · Bangalore
          </p>
          <h1 className="mb-5 font-headline text-[42px] font-semibold leading-[1.08] tracking-tight text-white md:text-[60px]">
            Tax, audit {'\u0026'} compliance<br />done properly.
          </h1>
          <p className="mb-4 max-w-lg font-body text-[16px] leading-relaxed text-white/70 md:text-[17px]">
            {firm.firmProfile}
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {firm.founder.specializations.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 bg-white/[0.07] px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.05em] text-gold"
              >
                <span className="material-symbols-outlined text-[12px]">
                  check_circle
                </span>
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 font-body text-[14px] font-semibold text-navy transition-all hover:bg-gold-light"
            >
              <span className="material-symbols-outlined text-[18px]">forum</span>
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center border border-white/25 bg-transparent px-7 py-3.5 font-body text-[14px] font-semibold text-white transition-all hover:border-gold hover:text-gold"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
