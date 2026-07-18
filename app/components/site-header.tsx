"use client";

import Link from "next/link";
import { Logo } from "@/app/components/ui/logo";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/components/content/nav";
import { firm } from "@/app/components/content/firm";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Menu, Phone, Mail, MessageCircle } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-navy/8 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center">
          <Logo variant="dark" />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-5 py-2 font-body text-[14px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-navy"
                    : "text-navy/55 hover:text-navy"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-px w-5 -translate-x-1/2 bg-navy" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={firm.contact.phoneHref}
            className="flex items-center gap-2 font-mono text-[12.5px] tracking-[0.04em] text-navy/70 transition-colors hover:text-navy"
            title="Call us directly"
          >
            <Phone className="h-3.5 w-3.5" />
            {firm.contact.phone}
          </a>
          <div className="h-6 w-px bg-navy/10" />
          <a
            href={firm.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center border border-navy/10 text-navy/55 transition-all hover:border-navy hover:text-navy"
            title="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${firm.contact.gmail}`}
            className="flex h-9 w-9 items-center justify-center border border-navy/10 text-navy/55 transition-all hover:border-navy hover:text-navy"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <Link
            href="/contact"
            className="bg-navy px-6 py-2.5 font-body text-[13px] font-semibold text-white transition-all hover:bg-navy-light active:scale-[0.97]"
          >
            Talk to us
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button className="flex h-10 w-10 items-center justify-center rounded-md text-navy/60 hover:bg-navy/[0.04] hover:text-navy">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-[280px] flex-col border-navy/8 bg-white">
            <nav className="mt-14 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`rounded-md px-4 py-3 font-body text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-navy/[0.06] text-navy"
                        : "text-navy/70 hover:bg-cream hover:text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto border-t border-navy/8 pt-6">
              <div className="mb-5 flex items-center justify-center gap-4">
                <a href={firm.contact.phoneHref} className="flex h-[42px] w-[42px] items-center justify-center border border-navy/10 text-navy/55 transition-all hover:border-navy hover:text-navy" title="Call">
                  <Phone className="h-[17px] w-[17px]" />
                </a>
                <a href={firm.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex h-[42px] w-[42px] items-center justify-center border border-navy/10 text-navy/55 transition-all hover:border-navy hover:text-navy" title="WhatsApp">
                  <MessageCircle className="h-[17px] w-[17px]" />
                </a>
                <a href={`mailto:${firm.contact.gmail}`} className="flex h-[42px] w-[42px] items-center justify-center border border-navy/10 text-navy/55 transition-all hover:border-navy hover:text-navy" title="Email">
                  <Mail className="h-[17px] w-[17px]" />
                </a>
              </div>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center bg-navy px-6 py-3 font-body text-[14px] font-semibold text-white transition-all hover:bg-navy-light active:scale-[0.97]"
              >
                Talk to us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
