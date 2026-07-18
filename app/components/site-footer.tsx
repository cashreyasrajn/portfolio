import Link from "next/link";
import { Logo } from "@/app/components/ui/logo";
import { footerLinks } from "@/app/components/content/nav";
import { firm } from "@/app/components/content/firm";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/8 bg-navy text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="mb-6 max-w-xs font-body text-[15px] leading-relaxed text-white/60">
              Shreyas Raj {'\u0026'} Co. is a Bengaluru-based chartered accountancy
              practice specialising in direct taxation, international tax, FEMA,
              and corporate compliance. Established in 2021.
            </p>
            <a
              href={firm.contact.phoneHref}
              className="inline-flex items-center gap-3 font-body text-[15px] font-semibold text-white transition-colors hover:text-white/70"
            >
              <Phone className="h-[15px] w-[15px] text-white/60" />
              {firm.contact.phone}
            </a>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
              Reach us
            </p>
            <div className="space-y-3">
              <a
                href={firm.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-[14px] text-white/60 transition-colors hover:text-white"
              >
                <MessageCircle className="h-[14px] w-[14px] text-white/50" />
                WhatsApp
              </a>
              <a
                href={`mailto:${firm.contact.gmail}`}
                className="flex items-center gap-3 break-all font-body text-[14px] text-white/60 transition-colors hover:text-white"
              >
                <Mail className="h-[14px] w-[14px] flex-shrink-0 text-white/50" />
                {firm.contact.gmail}
              </a>
              <div className="flex items-start gap-3 font-body text-[14px] text-white/60">
                <MapPin className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-white/50" />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
              Services
            </p>
            <div className="space-y-2.5">
              {[
                "Income Tax",
                "GST",
                "Audit & Assurance",
                "Corporate Compliance",
                "Business Setup",
                "NRI & FEMA",
              ].map((s) => (
                <Link
                  key={s}
                  href="/services"
                  className="block font-body text-[14px] text-white/60 transition-colors hover:text-white"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
              Links
            </p>
            <div className="space-y-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-body text-[14px] text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <p className="font-body text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Shreyas Raj {'\u0026'} Co. All Rights
            Reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
            Bengaluru ,  12.9716° N, 77.5946° E
          </p>
        </div>
      </div>
    </footer>
  );
}
