import Link from "next/link";
import Image from "next/image";
import { firm } from "@/app/components/content/firm";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/hero-bg.svg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold/90">
            <span className="material-symbols-outlined text-[14px] text-gold">
              workspace_premium
            </span>
            Chartered Accountant · Bengaluru
          </p>
          <h1 className="mb-5 font-headline text-[42px] font-semibold leading-[1.08] tracking-tight text-white md:text-[60px]">
            Hi, I'm {firm.founder.name}
          </h1>
          <p className="mb-4 max-w-lg font-body text-[17px] leading-relaxed text-white/75 md:text-[18px]">
            {firm.founder.bio}
          </p>
          <p className="mb-8 max-w-lg font-body text-[15px] leading-relaxed text-white/60">
            I run a solo chartered accountancy practice in Bengaluru. No
            associates hidden behind a desk, no junior staff rotating every
            quarter — just me, handling your work from start to finish.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {firm.founder.specializations.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.05em] text-gold/90"
              >
                <span className="material-symbols-outlined text-[13px]">
                  check_circle
                </span>
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-[14px] font-semibold text-navy transition-all hover:bg-gold-light active:scale-[0.97]"
            >
              <span className="material-symbols-outlined text-[18px]">forum</span>
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-body text-[14px] font-semibold text-white transition-all hover:border-gold hover:text-gold active:scale-[0.97]"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div className="absolute -right-4 -top-4 h-20 w-20 rounded-sm border-2 border-gold/50" />
          <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-sm border-2 border-gold/50" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
            <Image
              src={firm.founder.portrait}
              alt={firm.founder.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-2.5 shadow-xl">
            <span className="material-symbols-outlined text-[20px] text-gold">verified</span>
            <span className="font-body text-[13px] font-semibold text-navy">Member, ICAI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
