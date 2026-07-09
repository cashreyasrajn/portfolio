import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/app/components/sections/contact-form";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { firm } from "@/app/components/content/firm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Shreyas Raj & Co.",
  description:
    "Get in touch for tax, GST, audit, international tax, or compliance advisory. Phone, email, or fill the form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2  border border-white/15 bg-white/5 px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-gold/90">
              <span className="material-symbols-outlined text-[14px] text-gold">contact_support</span>
              Get in touch
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-semibold leading-[1.1] tracking-tight md:text-[56px]">
              Contact us
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              Tell us what you need — we'll outline how we can help and the
              next steps. Plain answers on the first response.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-10 rounded-sm border border-navy/8 bg-white p-8 md:p-10">
              <h2 className="mb-2 font-headline text-[24px] font-semibold tracking-tight text-navy">
                Send us your details
              </h2>
              <p className="mb-8 font-body text-[14px] text-navy/70">
                Fill this in and we'll get back within one business day.
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mb-6 rounded-sm border border-navy/8 bg-white p-8">
              <p className="mb-5 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-gold-dark">
                <span className="material-symbols-outlined text-[16px]">contact_support</span>
                Reach us directly
              </p>
              <div className="space-y-5">
                <a href={`tel:${firm.contact.phone.replace(/-/g, "").replace(/\s/g, "")}`} className="flex items-center gap-4 transition-colors hover:text-gold-dark">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-navy/[0.05] text-navy">
                    <Phone className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-navy/55">
                      Phone
                    </p>
                    <p className="font-body text-[15px] font-semibold text-navy">
                      {firm.contact.phone}
                    </p>
                  </div>
                </a>
                <a href={`mailto:${firm.contact.gmail}`} className="flex items-center gap-4 transition-colors hover:text-gold-dark">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-navy/[0.05] text-navy">
                    <Mail className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-navy/55">
                      Gmail
                    </p>
                    <p className="font-body text-[15px] font-semibold text-navy">
                      {firm.contact.gmail}
                    </p>
                  </div>
                </a>
              </div>
              <div className="mt-6 border-t border-navy/8 pt-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-navy/[0.05] text-navy">
                    <MapPin className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-navy/55">
                      Office
                    </p>
                    <p className="font-body text-[14px] leading-relaxed text-navy/60">
                      {firm.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <CredentialsSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
