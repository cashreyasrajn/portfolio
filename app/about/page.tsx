import type { Metadata } from "next";
import Image from "next/image";
import { firm } from "@/app/components/content/firm";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { CtaQuote } from "@/app/components/sections/cta-quote";
import { Phone, Mail, Linkedin, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About — CA Shreyas Raj, FCA, DISA (ICAI)",
  description:
    "Meet CA Shreyas Raj, a Fellow Chartered Accountant based in Bengaluru. 20+ years in practice helping individuals and small businesses with tax, GST, audit, and corporate compliance.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
              <span className="material-symbols-outlined text-[14px] text-secondary-container">
                person
              </span>
              About the Firm
            </p>
            <h1 className="mb-5 font-headline text-[38px] font-bold leading-[1.1] tracking-tight md:text-[52px]">
              A Bengaluru practice built on plain advice & quiet competence
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              {firm.firmProfile}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { icon: "calendar_month", label: "In practice since", value: firm.founded.toString() },
                { icon: "badge", label: "ICAI Membership", value: firm.founder.membershipNo },
                { icon: "location_on", label: "Based in", value: firm.address.city },
                { icon: "language", label: "Reach", value: "PAN India" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-primary/10 bg-white p-6"
                >
                  <span className="material-symbols-outlined mb-3 block text-[24px] text-secondary/80">
                    {item.icon}
                  </span>
                  <p className="font-headline text-[24px] font-bold text-primary">
                    {item.value}
                  </p>
                  <p className="mt-1 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/80">
              The Principal
            </p>
            <h2 className="mb-10 font-headline text-[30px] font-semibold tracking-tight text-primary">
              Meet {firm.founder.name}
            </h2>

            <div className="mb-12 flex flex-col gap-8 md:flex-row">
              <div className="relative flex-shrink-0">
                <div className="absolute -right-3 -top-3 h-14 w-14 rounded-lg border-2 border-secondary/40" />
                <div className="absolute -bottom-3 -left-3 h-14 w-14 rounded-lg border-2 border-secondary/40" />
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={firm.founder.portrait}
                    alt={firm.founder.name}
                    width={180}
                    height={225}
                    className="block h-[225px] w-[180px] object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-headline text-[26px] font-semibold tracking-tight text-primary">
                  {firm.founder.name}
                </p>
                <p className="mt-1 font-body text-[14px] font-semibold text-secondary/80">
                  {firm.founder.title} · {firm.founder.designation}
                </p>
                <p className="mt-5 font-body text-[15px] leading-relaxed text-on-surface-variant/70">
                  {firm.founder.bio}
                </p>
              </div>
            </div>

            <div className="space-y-5 border-l-2 border-secondary/30 pl-6 font-body text-[15px] leading-relaxed text-on-surface-variant/70">
              {firm.founder.bioExtended.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-primary/10 bg-white p-7">
                <p className="mb-5 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.125em] text-secondary/70">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  Qualifications
                </p>
                <ul className="space-y-2.5">
                  {firm.founder.qualifications.map((q) => (
                    <li
                      key={q}
                      className="flex items-start gap-2.5 font-body text-[14px] text-on-surface-variant/70"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-[15px] text-secondary/70">
                        check
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-primary/10 bg-white p-7">
                <p className="mb-5 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.125em] text-secondary/70">
                  <span className="material-symbols-outlined text-[16px]">tactic</span>
                  Specialisations
                </p>
                <ul className="space-y-2.5">
                  {firm.founder.specializations.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 font-body text-[14px] text-on-surface-variant/70"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-[15px] text-secondary/70">
                        check
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-primary/10 bg-white p-7">
                <p className="mb-5 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.125em] text-secondary/70">
                  <span className="material-symbols-outlined text-[16px]">contact_support</span>
                  Get in touch
                </p>
                <ul className="space-y-3 font-body text-[13px] text-on-surface-variant/70">
                  <li>
                    <a href={`mailto:${firm.contact.gmail}`} className="flex items-start gap-2.5 transition-colors hover:text-primary">
                      <Mail className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-secondary/70" />
                      {firm.contact.gmail}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${firm.contact.phone.replace(/-/g, "")}`} className="flex items-start gap-2.5 transition-colors hover:text-primary">
                      <Phone className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-secondary/70" />
                      {firm.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={firm.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 transition-colors hover:text-primary">
                      <Linkedin className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-secondary/70" />
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-secondary/70" />
                    <span>
                      {firm.address.line1}
                      <br />
                      {firm.address.city} — {firm.address.pincode}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-primary/10 bg-white p-7">
              <p className="mb-5 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.125em] text-secondary/70">
                <Clock className="h-[14px] w-[14px]" />
                Office Hours
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {firm.hours.map((h) => (
                  <div key={h.day} className="rounded-md bg-surface-container-low p-4">
                    <p className="font-body text-[13px] font-semibold text-primary">
                      {h.day}
                    </p>
                    <p className="mt-0.5 font-body text-[12px] text-on-surface-variant/60">
                      {h.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <CredentialsSidebar />
          </div>
        </div>
      </section>

      <CtaQuote />
    </>
  );
}