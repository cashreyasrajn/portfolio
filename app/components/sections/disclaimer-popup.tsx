"use client";

import { useEffect, useState } from "react";

export function DisclaimerPopup() {
  const [mounted, setMounted] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || accepted) {
    return null;
  }

  function handleAccept() {
    setAccepted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-navy/10 bg-white p-8 text-navy shadow-2xl md:p-12">
        <h2 className="mb-6 font-headline text-[28px] font-semibold tracking-tight md:text-[36px]">
          Disclaimer
        </h2>

        <div className="space-y-4 font-body text-[15px] leading-relaxed text-navy/70">
          <p>
            As per the provisions of The Chartered Accountants Act, 1949, we are
            not permitted to solicit work and advertise. By clicking on the
            &quot;I agree&quot; below, the user acknowledges the following:
          </p>

          <ul className="list-disc space-y-3 pl-5">
            <li>
              there has been no advertisement, personal communication,
              solicitation, invitation or inducement of any sort whatsoever from
              us to solicit any work through this website;
            </li>
            <li>
              the user wishes to gain more information about us for his/her own
              information and use;
            </li>
            <li>
              the information about us is provided to the user only on his/her
              specific request.
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            onClick={handleAccept}
            className="inline-flex items-center gap-2 bg-navy px-8 py-3.5 font-body text-[14px] font-semibold text-white transition-all hover:bg-navy-light active:scale-[0.97]"
          >
            I agree
          </button>
          <p className="font-body text-[12px] text-navy/40">
            Please click &quot;I agree&quot; to continue.
          </p>
        </div>
      </div>
    </div>
  );
}
