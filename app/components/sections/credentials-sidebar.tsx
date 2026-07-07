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
      <div className="rounded-lg border border-primary/10 bg-white p-8">
        <h4 className="mb-5 pb-3 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant/40 border-b border-primary/8">
          Firm Credentials
        </h4>
        <ul className="space-y-5">
          {credentials.map((c) => (
            <li key={c.title} className="flex items-start gap-3">
              <span className="text-secondary/70">
                <PlusIcon />
              </span>
              <div>
                <p className="font-body text-[15px] font-semibold text-primary">
                  {c.title}
                </p>
                <p className="mt-0.5 font-body text-[13px] text-on-surface-variant/60">
                  {c.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg bg-primary p-8 text-white">
        <h4 className="mb-5 pb-3 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-secondary-container/80 border-b border-white/10">
          {whyChooseUs.headline}
        </h4>
        <p className="mb-6 font-body text-[15px] leading-relaxed text-white/80">
          {whyChooseUs.description}
        </p>
        <ul className="space-y-3.5">
          {whyChooseUs.pillars.map((p) => (
            <li key={p} className="flex items-center gap-3 font-body text-[14px] text-white/80">
              <span className="material-symbols-outlined text-[18px] text-secondary-container">
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
