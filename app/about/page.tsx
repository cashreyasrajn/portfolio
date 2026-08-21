import type { Metadata } from "next";
import Image from "next/image";
import { firm } from "@/app/components/content/firm";
import { siteConfig } from "@/app/components/content/site";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { CtaQuote } from "@/app/components/sections/cta-quote";
import { Reveal } from "@/app/components/ui/reveal";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Shreyas Raj & Co., Chartered Accountants",
  description:
    "Shreyas Raj & Co., Chartered Accountants based in Bengaluru. Over five years of experience in direct taxation, international tax, FEMA, US tax advisory, and corporate compliance.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-hero-navy" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              About us
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[56px]">
              About the practice
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
            <Reveal className="mb-14 grid grid-cols-2 gap-px border border-navy/8 bg-navy/8 md:grid-cols-4">
              {[
                { icon: "calendar_month", label: "In practice since", value: firm.founded.toString() },
                { icon: "tactic", label: "Practice areas", value: "10" },
                { icon: "location_on", label: "Based in", value: firm.address.city },
                { icon: "language", label: "Focus", value: "Tax & Compliance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white p-6"
                >
                  <span className="material-symbols-outlined mb-3 block text-[22px] text-navy/60">
                    {item.icon}
                  </span>
                  <p className="font-headline text-[24px] font-medium tracking-[-0.01em] text-navy">
                    {item.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-navy/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </Reveal>

            <div className="mb-14 flex flex-col items-center gap-10 md:flex-row md:items-start">
              <div className="relative flex-shrink-0">
                <div className="relative h-[300px] w-[232px] overflow-hidden border border-navy/10">
                  <Image
                    src={firm.founder.portrait}
                    alt={firm.founder.name}
                    fill
                    sizes="232px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 border-t border-navy/10 pt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-navy/45 md:text-left">
                  Bengaluru, Karnataka
                </p>
              </div>

              <div className="text-center md:text-left">
                <p className="font-headline text-[30px] font-medium tracking-[-0.01em] text-navy">
                  {firm.founder.name}
                </p>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.14em] text-gold-dark">
                  {firm.founder.title} · {firm.founder.designation}
                </p>
                <p className="mt-5 max-w-lg font-body text-[15px] leading-relaxed text-navy/60">
                  {firm.founder.bio}
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="border border-navy/8 bg-white p-7">
                <p className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold-dark">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  Qualifications
                </p>
                <ul className="space-y-2.5">
                  {firm.founder.qualifications.map((q) => (
                    <li
                      key={q}
                      className="flex items-start gap-2.5 font-body text-[14px] text-navy/60"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-[15px] text-navy/50">check</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-navy/8 bg-white p-7">
                <p className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold-dark">
                  <span className="material-symbols-outlined text-[16px]">tactic</span>
                  Specialisations
                </p>
                <ul className="space-y-2.5">
                  {firm.founder.specializations.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 font-body text-[14px] text-navy/60"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-[15px] text-navy/50">check</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-navy/8 bg-white p-7">
                <p className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold-dark">
                  <span className="material-symbols-outlined text-[16px]">contact_support</span>
                      Contact details
                </p>
                <ul className="space-y-3 font-body text-[13px] text-navy/60">
                  <li>
                    <a href={firm.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 transition-colors hover:text-navy">
                      <MessageCircle className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-navy/50" />
                      WhatsApp {firm.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${firm.contact.gmail}`} className="flex items-start gap-2.5 transition-colors hover:text-navy">
                      <Mail className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-navy/50" />
                      {firm.contact.gmail}
                    </a>
                  </li>
                  <li>
                    <a href={firm.contact.phoneHref} className="flex items-start gap-2.5 transition-colors hover:text-navy">
                      <Phone className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-navy/50" />
                      {firm.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-[14px] w-[14px] flex-shrink-0 text-navy/50" />
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
