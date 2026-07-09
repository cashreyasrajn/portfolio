import type { Metadata } from "next";
import Image from "next/image";
import { firm } from "@/app/components/content/firm";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { CtaQuote } from "@/app/components/sections/cta-quote";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Shreyas Raj & Co., Chartered Accountants",
  description:
    "Shreyas Raj & Co. — Chartered Accountants based in Bengaluru. Over five years of experience in direct taxation, international tax, FEMA, US tax advisory, and corporate compliance.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
             <p className="mb-4 inline-flex items-center gap-2 border-l-2 border-gold pl-3 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold/90">
              <span className="material-symbols-outlined text-[14px] text-gold">person</span>
              About Us
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-semibold leading-[1.1] tracking-tight md:text-[56px]">
              A Bengaluru-based chartered accountancy practice
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
                { icon: "badge", label: "Qualification", value: firm.founder.qualifications[0].split(" — ")[0] },
                { icon: "location_on", label: "Based in", value: firm.address.city },
                { icon: "language", label: "Focus", value: "Tax & Compliance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-navy/[0.08] bg-white p-6"
                >
                  <span className="material-symbols-outlined mb-3 block text-[24px] text-gold">
                    {item.icon}
                  </span>
                  <p className="font-headline text-[24px] font-semibold text-navy">
                    {item.value}
                  </p>
                  <p className="mt-1 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-navy/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">
              The Principal
            </p>

                        <div className="mb-14 flex flex-col items-center gap-10 md:flex-row md:items-start">
              <div className="relative flex-shrink-0">
                <div className="relative h-[280px] w-[220px] overflow-hidden shadow-lg">



      <Image
        src={firm.founder.portrait}
        alt={firm.founder.name}
        fill
        sizes="220px"
        className="object-cover"
      />
    </div>
  </div>

  <div className="text-center md:text-left">
    <p className="font-headline text-[28px] font-semibold tracking-tight text-navy">
      {firm.founder.name}
    </p>
    <p className="mt-1 font-body text-[14px] font-semibold text-gold-dark">
      {firm.founder.title} · {firm.founder.designation}
    </p>
    <p className="mt-5 max-w-lg font-body text-[15px] leading-relaxed text-navy/60">
      {firm.founder.bio}
    </p>
  </div>
</div>

            <div className="space-y-5 border-l-2 border-gold/30 pl-6 font-body text-[15px] leading-relaxed text-navy/60">
              {firm.founder.bioExtended.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-navy/8 bg-white p-7">
                <p className="mb-5 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-gold-dark">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  Qualifications
                </p>
                <ul className="space-y-2.5">
                  {firm.founder.qualifications.map((q) => (
                    <li
                      key={q}
                      className="flex items-start gap-2.5 font-body text-[14px] text-navy/60"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-[15px] text-gold">check</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-sm border border-navy/8 bg-white p-7">
                <p className="mb-5 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-gold-dark">
                  <span className="material-symbols-outlined text-[16px]">tactic</span>
                  Specialisations
                </p>
                <ul className="space-y-2.5">
                  {firm.founder.specializations.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 font-body text-[14px] text-navy/60"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-[15px] text-gold">check</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-sm border border-navy/8 bg-white p-7">
                <p className="mb-5 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-gold-dark">
                  <span className="material-symbols-outlined text-[16px]">contact_support</span>
                  Get in touch
                </p>
                <ul className="space-y-3 font-body text-[13px] text-navy/60">
                  <li>
                    <a href={`mailto:${firm.contact.gmail}`} className="flex items-start gap-2.5 transition-colors hover:text-navy">
                      <Mail className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-gold" />
                      {firm.contact.gmail}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${firm.contact.phone.replace(/-/g, "").replace(/\s/g, "")}`} className="flex items-start gap-2.5 transition-colors hover:text-navy">
                      <Phone className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-gold" />
                      {firm.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-gold" />
                    <span>{firm.address.city}</span>
                  </li>
                </ul>
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
