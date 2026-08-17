import type { Metadata } from "next";
import { siteConfig } from "@/app/components/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the Shreyas Raj & Co. website. By accessing this site you agree to these terms.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              Legal
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[52px]">
              Terms of Service
            </h1>
            <p className="font-body text-[17px] leading-relaxed text-white/70">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl space-y-8 font-body text-[15px] leading-relaxed text-navy/70">
          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the website of Shreyas Raj & Co. (&ldquo;the Firm,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, you should not use this website.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              2. No Client Relationship
            </h2>
            <p>
              Use of this website or submission of a contact form does not create a professional-client relationship. A formal engagement letter, signed by both parties, is required to establish a client relationship with the Firm.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              3. Information on This Website
            </h2>
            <p>
              Content on this site is for general informational purposes only and does not constitute professional advice. You should consult a qualified professional before acting on any information provided here. We make no warranties as to accuracy or completeness.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              4. Third-Party Links
            </h2>
            <p>
              This website may contain links to external sites. We are not responsible for the content or practices of any third-party website.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              5. Limitation of Liability
            </h2>
            <p>
              Shreyas Raj & Co. shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              6. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              7. Changes to Terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
