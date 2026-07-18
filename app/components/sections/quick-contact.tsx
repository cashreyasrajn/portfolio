"use client";

import { useEffect, useState } from "react";
import { firm } from "@/app/components/content/firm";
import { Phone, MessageCircle } from "lucide-react";

/**
 * Sticky reach-out bar, mobile only. Appears after a short scroll so the
 * fastest ways to reach the practice are always one tap away.
 */
export function QuickContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2">
        <a
          href={firm.contact.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 font-body text-[13px] font-semibold text-navy active:bg-navy/[0.04]"
        >
          <Phone className="h-4 w-4" />
          Call now
        </a>
        <a
          href={firm.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-l border-navy/10 bg-navy py-3.5 font-body text-[13px] font-semibold text-white active:bg-navy-light"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp us
        </a>
      </div>
    </div>
  );
}
