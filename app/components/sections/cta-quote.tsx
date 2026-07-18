import Link from "next/link";
import { firm } from "@/app/components/content/firm";
import { Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Phone,
    label: "Call",
    value: firm.contact.phone,
    note: "Mon–Sat, 10am–7pm IST",
    href: firm.contact.phoneHref,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: firm.contact.phone,
    note: "Fastest response",
    href: firm.contact.whatsapp,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: firm.contact.gmail,
    note: "Replies within one business day",
    href: `mailto:${firm.contact.gmail}`,
    external: false,
  },
];

export function CtaQuote() {
  return (
    <section className="grain relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
            Get in touch
          </p>
          <h2 className="mb-4 font-headline text-[34px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[46px]">
            Let's get your <em className="font-light italic">filings in order</em>
          </h2>
          <p className="max-w-lg font-body text-[15px] leading-relaxed text-white/65">
            Call, WhatsApp, or email. You speak directly to the CA handling
            your work, and get a clear answer on the first response.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-white/15 bg-white/15 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group relative flex flex-col bg-navy p-8 transition-colors duration-300 hover:bg-white"
            >
              <div className="mb-8 flex items-center justify-between">
                <c.icon className="h-5 w-5 text-white/80 transition-colors group-hover:text-navy" />
                <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-navy/60" />
              </div>
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 transition-colors group-hover:text-navy/55">
                {c.label}
              </p>
              <p className="break-all font-headline text-[21px] font-medium tracking-tight text-white transition-colors group-hover:text-navy md:text-[22px]">
                {c.value}
              </p>
              <p className="mt-3 font-body text-[13px] text-white/55 transition-colors group-hover:text-navy/60">
                {c.note}
              </p>
            </a>
          ))}
        </div>

        <p className="mt-8 font-body text-[13px] text-white/45">
          Prefer a form?{" "}
          <Link
            href="/contact"
            className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
          >
            Send us your details
          </Link>{" "}
          and we respond within one business day.
        </p>
      </div>
    </section>
  );
}
