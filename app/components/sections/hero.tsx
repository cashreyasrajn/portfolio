import Link from "next/link";
import Image from "next/image";
import { servicesHero } from "@/app/components/content/services";
import { firm } from "@/app/components/content/firm";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-primary/8 bg-gradient-to-b from-primary/[0.03] to-transparent">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-primary/70">
            <span className="material-symbols-outlined text-[14px] text-secondary">
              workspace_premium
            </span>
            Chartered Accountants · Bengaluru
          </p>
          <h1 className="mb-5 font-headline text-[38px] font-bold leading-[1.1] tracking-tight text-primary md:text-[56px]">
            {servicesHero.headline}
          </h1>
          <p className="mb-9 max-w-md font-body text-[17px] leading-relaxed text-on-surface-variant/70 md:text-[18px]">
            {servicesHero.subheadline}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-body text-[15px] font-semibold text-white transition-all hover:bg-primary/85 active:scale-[0.97]"
            >
              <span className="material-symbols-outlined text-[18px]">
                forum
              </span>
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-md border border-primary/20 bg-white px-7 py-3.5 font-body text-[15px] font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/[0.03] active:scale-[0.97]"
            >
              View Services
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              {["#012d1d", "#1b4332", "#00452e", "#3f6653"].map((bg, i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white"
                  style={{ backgroundColor: bg }}
                >
                  {["M", "A", "V", "T"][i]}
                </div>
              ))}
            </div>
            <p className="font-body text-[13px] text-on-surface-variant/60">
              <strong className="text-primary">300+ clients</strong> across India
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <div className="absolute -right-3 -top-3 h-16 w-16 rounded-lg border-2 border-secondary/40" />
          <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-lg border-2 border-secondary/40" />
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <Image
              src={firm.founder.portrait}
              alt={firm.founder.name}
              width={400}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-2 shadow-lg">
            <span className="material-symbols-outlined text-[18px] text-secondary">
              verified
            </span>
            <span className="font-body text-[12px] font-semibold text-primary">
              Member, ICAI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}