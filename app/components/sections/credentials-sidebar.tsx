import Image from "next/image";
import { credentials, whyChooseUs } from "@/app/components/content/credentials";

function PlusIcon() {
  return (
    <svg
      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function CredentialsSidebar() {
  return (
    <aside className="flex flex-col gap-8">
      <div className="rounded-sm border border-navy/8 bg-white p-8">
        <h4 className="mb-5 border-b border-navy/8 pb-3 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-navy/55">
          Credentials
        </h4>
        <div className="mb-5 flex justify-start">
          <Image
            src="/ca-logo.png"
            alt="Institute of Chartered Accountants of India"
            width={80}
            height={80}
            className="h-16 w-auto object-contain"
          />
        </div>
        <ul className="space-y-5">
          {credentials.map((c) => (
            <li key={c.title} className="flex items-start gap-3">
              <span className="text-gold">
                <PlusIcon />
              </span>
              <div>
                <p className="font-body text-[15px] font-semibold text-navy">
                  {c.title}
                </p>
                <p className="mt-0.5 font-body text-[13px] text-navy/70">
                  {c.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-sm bg-navy p-8 text-white">
        <h4 className="mb-5 border-b border-white/10 pb-3 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold/80">
          {whyChooseUs.headline}
        </h4>
        <p className="mb-6 font-body text-[15px] leading-relaxed text-white/70">
          {whyChooseUs.description}
        </p>
        <ul className="space-y-3.5">
          {whyChooseUs.pillars.map((p) => (
            <li key={p} className="flex items-center gap-3 font-body text-[14px] text-white/80">
              <span className="material-symbols-outlined text-[18px] text-gold">
                verified
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
