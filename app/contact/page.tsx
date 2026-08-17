import type { Metadata } from "next";
import { ContactForm } from "@/app/components/sections/contact-form";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { firm } from "@/app/components/content/firm";
import { siteConfig } from "@/app/components/content/site";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact details and correspondence form for Shreyas Raj & Co. regarding tax, GST, audit, international tax, and compliance matters.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: firm.contact.phone,
    href: firm.contact.phoneHref,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: firm.contact.phone,
    href: firm.contact.whatsapp,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: firm.contact.gmail,
    href: `mailto:${firm.contact.gmail}`,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(184,146,75,0.16),transparent_32%),linear-gradient(115deg,#0b1e3d_0%,#132f59_55%,#0b1e3d_100%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              Contact information
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[56px]">
              The fastest way to reach us
              is <em className="font-light italic">the way you prefer</em>
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              Phone, WhatsApp, email, and a contact form are available below.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-10 border border-navy/8 bg-white p-8 md:p-10">
              <h2 className="mb-2 font-headline text-[26px] font-medium tracking-[-0.01em] text-navy">
                Contact form
              </h2>
              <p className="mb-8 font-body text-[14px] text-navy/70">
                Submit correspondence through the form below.
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mb-6 border border-navy/8 bg-white p-8">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-dark">
                Reach us directly
              </p>
              <div className="space-y-2">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 border border-transparent p-3 transition-all hover:border-navy/10 hover:bg-cream"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-navy/[0.05] text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                      <c.icon className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy/55">
                        {c.label}
                      </p>
                      <p className="truncate font-body text-[15px] font-semibold text-navy">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 border-t border-navy/8 pt-6">
                <div className="flex items-start gap-4 p-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-navy/[0.05] text-navy">
                    <MapPin className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy/55">
                      Office
                    </p>
                    <p className="font-body text-[14px] leading-relaxed text-navy/70">
                      {firm.address.city}, {firm.address.state}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-navy/[0.05] text-navy">
                    <Clock className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy/55">
                      Response time
                    </p>
                    <p className="font-body text-[14px] leading-relaxed text-navy/70">
                       During published office hours
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
