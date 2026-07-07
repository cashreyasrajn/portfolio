import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/app/components/sections/contact-form";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { firm } from "@/app/components/content/firm";
import { Phone, Mail, Linkedin, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation — Shreyas Raj & Co.",
  description:
    "Get in touch for tax, GST, audit, or compliance help. Free 15-minute consultation. Phone, email, or fill the form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
              <span className="material-symbols-outlined text-[14px] text-secondary-container">
                contact_support
              </span>
              Get in touch
            </p>
            <h1 className="mb-5 font-headline text-[38px] font-bold leading-[1.1] tracking-tight md:text-[52px]">
              Book a free consultation
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              Fifteen minutes, no commitment. Tell us what you need — we'll tell
              you how we can help and what it costs. Plain answers, on the
              first call.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-10 rounded-lg border border-primary/10 bg-white p-8 md:p-10">
              <h2 className="mb-2 font-headline text-[22px] font-semibold tracking-tight text-primary">
                Send us your details
              </h2>
              <p className="mb-8 font-body text-[14px] text-on-surface-variant/60">
                Fill this in and we'll get back within one business day.
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mb-6 rounded-lg border border-primary/10 bg-white p-8">
              <p className="mb-5 flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.125em] text-secondary/70">
                <span className="material-symbols-outlined text-[16px]">contact_support</span>
                Reach us directly
              </p>
              <div className="space-y-5">
                <a href={`tel:${firm.contact.phone.replace(/-/g, "")}`} className="flex items-center gap-4 transition-colors hover:text-primary">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/[0.05] text-primary">
                    <Phone className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant/50">
                      Phone
                    </p>
                    <p className="font-body text-[15px] font-medium text-primary">
                      {firm.contact.phone}
                    </p>
                  </div>
                </a>
                <a href={`mailto:${firm.contact.gmail}`} className="flex items-center gap-4 transition-colors hover:text-primary">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/[0.05] text-primary">
                    <Mail className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant/50">
                      Gmail
                    </p>
                    <p className="font-body text-[15px] font-medium text-primary">
                      {firm.contact.gmail}
                    </p>
                  </div>
                </a>
                <a href={firm.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors hover:text-primary">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/[0.05] text-primary">
                    <Linkedin className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant/50">
                      LinkedIn
                    </p>
                    <p className="font-body text-[15px] font-medium text-primary">
                      shreyasraj-ca
                    </p>
                  </div>
                </a>
              </div>
              <div className="mt-6 border-t border-primary/8 pt-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/[0.05] text-primary">
                    <MapPin className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant/50">
                      Office
                    </p>
                    <p className="font-body text-[14px] leading-relaxed text-on-surface-variant/70">
                      {firm.address.line1}
                      <br />
                      {firm.address.line2}
                      <br />
                      {firm.address.city}, {firm.address.state} —{" "}
                      {firm.address.pincode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/[0.05] text-primary">
                    <Clock className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant/50">
                      Hours
                    </p>
                    <div className="font-body text-[14px] leading-relaxed text-on-surface-variant/70">
                      {firm.hours.map((h) => (
                        <p key={h.day}>
                          <span className="font-medium text-primary">{h.day}:</span>{" "}
                          {h.time}
                        </p>
                      ))}
                    </div>
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