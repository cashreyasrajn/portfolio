import Link from "next/link";
import Image from "next/image";
import { firm } from "@/app/components/content/firm";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/hero-bg.svg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 border-l-2 border-gold pl-3 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold/90">
            <span className="material-symbols-outlined text-[14px] text-gold">
              workspace_premium
            </span>
            Chartered Accountants · Bangalore
          </p>
          <h1 className="mb-5 font-headline text-[42px] font-semibold leading-[1.08] tracking-tight text-white md:text-[60px]">
            Hi, I&apos;m {firm.founder.name}
          </h1>
          <p className="mb-4 max-w-lg font-body text-[16px] leading-relaxed text-white/70 md:text-[17px]">
            {firm.founder.bio}
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

        <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
            <Image
              src={firm.founder.portrait}
              alt={firm.founder.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap bg-white px-6 py-2.5 shadow-lg">
            <span className="material-symbols-outlined text-[20px] text-gold">verified</span>
            <span className="font-body text-[13px] font-semibold text-navy">Member, ICAI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
