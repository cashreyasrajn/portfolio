import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICAI Disclaimer",
  description:
    "As per the provisions of The Chartered Accountants Act, 1949, we are not permitted to solicit work and advertise.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-navy py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              ICAI Compliance
            </p>
            <h1 className="mb-5 font-headline text-[40px] font-medium leading-[1.08] tracking-[-0.02em] md:text-[52px]">
              ICAI Disclaimer
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl space-y-8 font-body text-[15px] leading-relaxed text-navy/70">
          <div className="border-l-2 border-navy/20 pl-6">
            <p className="font-headline text-[20px] font-medium italic leading-relaxed text-navy/80">
              As per the provisions of The Chartered Accountants Act, 1949 and the Code of Ethics issued by the Institute of Chartered Accountants of India (ICAI), we are not permitted to solicit work and advertise.
            </p>
          </div>

          <p>
            By accessing this website, the user acknowledges that:
          </p>

          <ul className="list-decimal space-y-3 pl-6">
            <li>
              There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from us to solicit any work through this website.
            </li>
            <li>
              The user wishes to gain more information about us for their own information and use.
            </li>
            <li>
              The information about us is provided to the user only on their specific request.
            </li>
            <li>
              Any information obtained or materials downloaded from this website are entirely at the user&rsquo;s volition, and any transmission, receipt, or use of this site does not create a chartered accountant&ndash;client relationship.
            </li>
          </ul>

          <p>
            The content on this website is for informational purposes only and should not be construed as professional advice under any statute. Users are advised to seek independent professional counsel before acting on any information contained herein.
          </p>

          <p>
            Shreyas Raj & Co. is a proprietary concern registered with the Institute of Chartered Accountants of India. The proprietor, CA Shreyas Raj N. (Membership No. to be updated), bears full professional responsibility for the practice.
          </p>
        </div>
      </section>
    </>
  );
}
