import Link from "next/link";
import type { Service } from "@/app/components/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-sm border border-navy/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/[0.05]">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy/[0.04] text-gold transition-all duration-300 group-hover:bg-navy group-hover:text-white">
          <span className="material-symbols-outlined text-[28px]">
            {service.icon}
          </span>
        </div>
        <span className=" border border-gold/40 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.1em] text-gold-dark">
          {service.tagline}
        </span>
      </div>
      <h3 className="mb-2 font-headline text-[24px] font-semibold tracking-tight text-navy">
        {service.title}
      </h3>
      <p className="mb-5 font-body text-[14px] leading-relaxed text-navy/70">
        {service.description}
      </p>
      <ul className="mb-6 mt-auto space-y-2 border-t border-navy/8 pt-5">
        {service.points.slice(0, 4).map((p) => (
          <li
            key={p}
            className="flex items-center gap-2 font-body text-[13px] text-navy/70"
          >
            <span className="material-symbols-outlined text-[15px] text-gold">
              check
            </span>
            {p}
          </li>
        ))}
      </ul>
      <Link
        href={service.href}
        className="inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-navy transition-all group-hover:gap-2.5 group-hover:text-gold-dark"
      >
        Learn More
        <span className="material-symbols-outlined text-[16px]">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}
