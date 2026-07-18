import Link from "next/link";
import type { Service } from "@/app/components/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col border border-navy/8 bg-white p-8 transition-all duration-300 hover:border-navy hover:bg-navy">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="material-symbols-outlined text-[30px] text-navy transition-colors duration-300 group-hover:text-white">
          {service.icon}
        </span>
        <span className="border border-navy/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-navy/60 transition-colors duration-300 group-hover:border-white/25 group-hover:text-white/60">
          {service.tagline}
        </span>
      </div>
      <h3 className="mb-2 font-headline text-[24px] font-medium tracking-[-0.01em] text-navy transition-colors duration-300 group-hover:text-white">
        {service.title}
      </h3>
      <p className="mb-5 font-body text-[14px] leading-relaxed text-navy/65 transition-colors duration-300 group-hover:text-white/65">
        {service.description}
      </p>
      <ul className="mb-6 mt-auto space-y-2 border-t border-navy/8 pt-5 transition-colors duration-300 group-hover:border-white/15">
        {service.points.slice(0, 4).map((p) => (
          <li
            key={p}
            className="flex items-center gap-2 font-body text-[13px] text-navy/70 transition-colors duration-300 group-hover:text-white/70"
          >
            <span className="material-symbols-outlined text-[15px] text-navy/50 transition-colors duration-300 group-hover:text-white/70">
              check
            </span>
            {p}
          </li>
        ))}
      </ul>
      <Link
        href={service.href}
        className="inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-navy transition-all duration-300 group-hover:gap-2.5 group-hover:text-white"
      >
        Learn more
        <span className="material-symbols-outlined text-[16px]">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}
