import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/app/components/content/nav";
import { firm } from "@/app/components/content/firm";
import { Phone, Mail, Linkedin, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/8 bg-surface-container-highest">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/ca-logo.png"
                alt="CA Institute Logo"
                width={38}
                height={38}
                className="h-[38px] w-[38px] object-contain"
              />
              <div className="leading-tight">
                <span className="block font-headline text-lg font-bold tracking-tight text-primary">
                  Shreyas Raj
                </span>
                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.125em] text-secondary/70">
                  &amp; Co.
                </span>
              </div>
            </div>
            <p className="mb-6 max-w-xs font-body text-[15px] leading-relaxed text-on-surface-variant/70">
              Chartered Accountants delivering institutional-grade precision and
              strategic foresight since 2002.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${firm.contact.phone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-3 font-body text-[14px] text-on-surface-variant/70 transition-colors hover:text-primary"
              >
                <Phone className="h-[15px] w-[15px] text-secondary/70" />
                {firm.contact.phone}
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.125em] text-on-surface-variant/40">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${firm.contact.gmail}`}
                className="flex items-center gap-3 font-body text-[14px] text-on-surface-variant/70 transition-colors hover:text-primary"
              >
                <Mail className="h-[15px] w-[15px] text-secondary/70" />
                Gmail
              </a>
              <a
                href={firm.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-[14px] text-on-surface-variant/70 transition-colors hover:text-primary"
              >
                <Linkedin className="h-[15px] w-[15px] text-secondary/70" />
                LinkedIn
              </a>
              <div className="flex items-start gap-3 font-body text-[14px] text-on-surface-variant/70">
                <MapPin className="mt-0.5 h-[15px] w-[15px] flex-shrink-0 text-secondary/70" />
                <span>
                  {firm.address.line1}
                  <br />
                  {firm.address.line2}
                  <br />
                  {firm.address.city}, {firm.address.state} &mdash;{" "}
                  {firm.address.pincode}
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.125em] text-on-surface-variant/40">
              Services
            </p>
            <div className="space-y-2.5">
              {[
                "Tax Advisory",
                "Audit & Assurance",
                "GST Compliance",
                "MSME Consulting",
                "NRI Taxation",
              ].map((s) => (
                <Link
                  key={s}
                  href="/services"
                  className="block font-body text-[14px] text-on-surface-variant/70 transition-colors hover:text-primary"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.125em] text-on-surface-variant/40">
              Links
            </p>
            <div className="space-y-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-body text-[14px] text-on-surface-variant/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-primary/6 pt-8 text-center">
          <p className="font-body text-[13px] text-on-surface-variant/40">
            &copy; {new Date().getFullYear()} Shreyas Raj &amp; Co. All Rights
            Reserved. Member of the Institute of Chartered Accountants of India
            (ICAI).
          </p>
        </div>
      </div>
    </footer>
  );
}
