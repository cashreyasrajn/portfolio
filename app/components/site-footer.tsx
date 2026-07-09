import Link from "next/link";
import { Logo } from "@/app/components/ui/logo";
import { footerLinks } from "@/app/components/content/nav";
import { firm } from "@/app/components/content/firm";
import { Phone, Mail, MapPin } from "lucide-react";

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
              href={`tel:${firm.contact.phone.replace(/-/g, "").replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 font-body text-[14px] text-white/70 transition-colors hover:text-gold"
            >
              <Phone className="h-[14px] w-[14px] text-gold" />
              {firm.contact.phone}
            </a>
          </div>

          <div>
            <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-gold/80">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${firm.contact.gmail}`}
                className="flex items-center gap-3 font-body text-[14px] text-white/60 transition-colors hover:text-gold"
              >
                <Mail className="h-[14px] w-[14px] text-gold" />
                Gmail
              </a>
              <div className="flex items-start gap-3 font-body text-[14px] text-white/60">
                <MapPin className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-gold" />
                <span>Bengaluru</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-gold/80">
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
                  className="block font-body text-[14px] text-white/60 transition-colors hover:text-gold"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-gold/80">
              Links
            </p>
            <div className="space-y-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-body text-[14px] text-white/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="font-body text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} Shreyas Raj {'\u0026'} Co. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
