import Link from "next/link";
import { firm } from "@/app/components/content/firm";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function CtaQuote() {
  return (
    <section className="grain relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="relative mx-auto max-w-[1280px] px-6 text-center md:px-12">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
          Get in touch
        </p>
        <h2 className="mx-auto mb-6 max-w-2xl font-headline text-[34px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[46px]">
          Let's get your <em className="font-light italic">filings in order</em>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={firm.contact.phoneHref}
            className="inline-flex items-center gap-2.5 bg-white px-7 py-3.5 font-body text-[14px] font-semibold text-navy transition-all hover:bg-white/85 active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href={firm.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/35 bg-transparent px-7 py-3.5 font-body text-[14px] font-semibold text-white transition-all hover:border-white hover:bg-white/10 active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={`mailto:${firm.contact.gmail}`}
            className="inline-flex items-center gap-2.5 border border-white/35 bg-transparent px-7 py-3.5 font-body text-[14px] font-semibold text-white transition-all hover:border-white hover:bg-white/10 active:scale-[0.98]"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
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
