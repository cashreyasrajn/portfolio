import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/app/components/content/nav";
import { firm } from "@/app/components/content/firm";
import { Phone, Mail, Linkedin, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/8 bg-navy text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/ca-logo.png"
                alt="CA Institute Logo"
                width={38}
                height={38}
                className="h-9 w-auto object-contain"
              />
              <div className="leading-tight">
                <span className="block font-headline text-lg font-semibold tracking-tight text-white">
                  Shreyas Raj
                </span>
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-gold">
                  &amp; Co.
                </span>
              </div>
            </div>
            <p className="mb-6 max-w-xs font-body text-[15px] leading-relaxed text-white/60">
              I'm Shreyas Raj, a Bengaluru-based Chartered Accountant. I help
              individuals and small businesses with tax, GST, audit and
              compliance — explained in plain language.
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
              <a
                href={firm.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-[14px] text-white/60 transition-colors hover:text-gold"
              >
                <Linkedin className="h-[14px] w-[14px] text-gold" />
                LinkedIn
              </a>
              <div className="flex items-start gap-3 font-body text-[14px] text-white/60">
                <MapPin className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-gold" />
                <span>
                  {firm.address.line1}
                  <br />
                  {firm.address.line2}
                  <br />
                  {firm.address.city}, {firm.address.state} — {firm.address.pincode}
                </span>
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
            &copy; {new Date().getFullYear()} Shreyas Raj &amp; Co. All Rights
            Reserved. Member of the Institute of Chartered Accountants of India
            (ICAI).
          </p>
        </div>
      </div>
    </footer>
  );
}
