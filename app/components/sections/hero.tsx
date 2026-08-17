import { firm } from "@/app/components/content/firm";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(184,146,75,0.18),transparent_35%),linear-gradient(115deg,#0b1e3d_0%,#132f59_55%,#0b1e3d_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-36">
        <div className="max-w-3xl">
          <h1 className="mb-6 font-headline text-[44px] font-medium leading-[1.04] tracking-[-0.02em] text-white md:text-[68px]">
            Advisory, Business Consultancy and Tax
          </h1>

          <p className="mb-10 max-w-xl font-body text-[16px] leading-relaxed text-white/70 md:text-[17px]">
            {firm.firmProfile}
          </p>

          {/* Published contact channels */}
          <div className="mb-10 flex flex-wrap items-stretch gap-3">
            <a
              href={firm.contact.phoneHref}
              className="inline-flex items-center gap-2.5 bg-white px-7 py-4 font-body text-[14px] font-semibold text-navy transition-all hover:bg-white/85 active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              Phone {firm.contact.phone}
            </a>
            <a
              href={firm.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/35 bg-white/[0.04] px-7 py-4 font-body text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`mailto:${firm.contact.gmail}`}
              className="inline-flex items-center gap-2.5 border border-white/35 bg-white/[0.04] px-7 py-4 font-body text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-white/15 pt-6">
            {firm.founder.specializations.map((s) => (
              <span
                key={s}
                className="inline-flex items-center border border-white/15 bg-white/5 px-3.5 py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.06em] text-white/70 backdrop-blur-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
