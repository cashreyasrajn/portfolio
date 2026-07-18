import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/app/components/sections/contact-form";
import { CredentialsSidebar } from "@/app/components/sections/credentials-sidebar";
import { firm } from "@/app/components/content/firm";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us ,  Shreyas Raj & Co.",
  description:
    "Get in touch for tax, GST, audit, international tax, or compliance advisory. Call, WhatsApp, email, or fill the form ,  replies within one business day.",
};

const channels = [
  {
    icon: Phone,
    label: "Call",
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
        <Image
          src="/images/bengaluru-ub-city.jpg"
          alt="The UB City towers, central Bengaluru"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              Get in touch
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[56px]">
              The fastest way to reach us
              is <em className="font-light italic">the way you prefer</em>
            </h1>
            <p className="max-w-xl font-body text-[17px] leading-relaxed text-white/70">
              Call, WhatsApp, email, or the form below ,  whichever is easiest
              for you. Plain answers on the first response.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-10 border border-navy/8 bg-white p-8 md:p-10">
              <h2 className="mb-2 font-headline text-[26px] font-medium tracking-[-0.01em] text-navy">
                Send us your details
              </h2>
              <p className="mb-8 font-body text-[14px] text-navy/70">
                Fill this in and we'll get back within one business day.
              </p>
              <ContactForm />
            </div>

            <figure>
              <div className="relative aspect-[16/7] overflow-hidden border border-navy/10">
                <Image
                  src="/images/work-signing.jpg"
                  alt="Signing an engagement document"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between border-t border-navy/10 pt-3">
                <span className="font-body text-[13px] font-semibold text-navy">
                  Every engagement, confirmed in writing
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-navy/45">
                  Scope before start
                </span>
              </figcaption>
            </figure>
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
                      Within one business day ,  usually sooner on WhatsApp
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
