import type { Metadata } from "next";
import { siteConfig } from "@/app/components/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Shreyas Raj & Co. collects, uses, and protects your personal information through this website.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              Legal
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[52px]">
              Privacy Policy
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
              1. Information We Collect
            </h2>
            <p>
              When you use our contact form, we collect your name, email address, phone number (optional), company name (optional), and the details you include in your message. We also receive a copy of your enquiry via email to our practice inbox.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information you provide solely to respond to your enquiry and, where relevant, to prepare an engagement proposal. We do not use your contact details for marketing purposes and we never share your data with third parties for commercial gain.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              3. Data Retention
            </h2>
            <p>
              Enquiry emails are retained in our practice inbox for the duration necessary to address your matter and maintain a record of correspondence. If an engagement is not established, enquiry data may be deleted after a reasonable period.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              4. Cookies and Analytics
            </h2>
            <p>
              This website does not use tracking cookies, analytics scripts, or third-party advertising pixels. We do not track your browsing behaviour across sessions or sites.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              5. Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of any personal data we hold about you by contacting us at the email address or phone number listed on our contact page. We will respond within a reasonable timeframe.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-headline text-[22px] font-medium tracking-[-0.01em] text-navy">
              6. Contact
            </h2>
            <p>
              If you have questions about this policy, please write to cashreyasraj@outlook.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
