import Link from "next/link";
import type { Service } from "@/app/components/content/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col border-t-2 border-navy/10 bg-white px-7 pb-7 pt-6 transition-all duration-300 hover:border-navy hover:shadow-[0_12px_32px_-16px_rgba(19,19,19,0.25)]">
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <span className="font-headline text-[26px] font-semibold leading-none tracking-[-0.02em] text-navy/15 transition-colors duration-300 group-hover:text-navy">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy/45">
          {service.tagline}
        </span>
      </div>

      <h3 className="mb-2 font-headline text-[24px] font-medium tracking-[-0.01em] text-navy">
        {service.title}
      </h3>
      <p className="mb-5 font-body text-[14px] leading-relaxed text-navy/65">
        {service.description}
      </p>

      <ul className="mb-6 mt-auto space-y-1.5 border-t border-navy/8 pt-4">
        {service.points.slice(0, 4).map((p) => (
          <li
            key={p}
            className="flex items-center gap-2.5 font-body text-[13px] text-navy/65"
          >
            <span className="h-1 w-1 flex-shrink-0 rounded-full bg-navy/35" />
            {p}
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className="inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-navy underline decoration-navy/25 underline-offset-4 transition-all group-hover:gap-2.5 group-hover:decoration-navy"
      >
        Learn more
        <span className="material-symbols-outlined text-[16px]">
          arrow_forward
        </span>
      </Link>
    </div>
  );
}
