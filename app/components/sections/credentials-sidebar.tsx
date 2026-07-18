import Image from "next/image";
import { credentials } from "@/app/components/content/credentials";

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
      <div className="border border-navy/8 bg-white p-8">
        <h4 className="mb-5 border-b border-navy/8 pb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-navy/55">
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
              <span className="text-navy">
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
    </aside>
  );
}
