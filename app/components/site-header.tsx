"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/components/content/nav";
import { firm } from "@/app/components/content/firm";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import { Menu, Phone, Mail, Linkedin } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-primary/10 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/ca-logo.png"
              alt="CA Institute Logo"
              width={44}
              height={44}
              className="h-[42px] w-[42px] object-contain"
              priority
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-primary/10" />
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <span className="font-headline text-xl font-bold tracking-tight text-primary md:text-2xl">
              Shreyas Raj
            </span>
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.125em] text-secondary/80 md:text-[11px]">
              &amp; Co. &bull; Chartered Accountants
            </span>
          </div>
        </Link>

        <div className="mx-auto hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-5 py-2 font-body text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant/70 hover:text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-secondary" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${firm.contact.phone.replace(/-/g, "")}`}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary/10 text-primary/50 transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
            title="Call"
          >
            <Phone className="h-[15px] w-[15px]" />
          </a>
          <a
            href={`mailto:${firm.contact.gmail}`}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary/10 text-primary/50 transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
            title="Gmail"
          >
            <Mail className="h-[15px] w-[15px]" />
          </a>
          <a
            href={firm.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-primary/10 text-primary/50 transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="h-[15px] w-[15px]" />
          </a>
          <div className="ml-1 h-6 w-px bg-primary/10" />
          <Link
            href="/contact"
            className="rounded-md bg-primary px-5 py-2.5 font-body text-[14px] font-semibold leading-none text-white transition-all hover:bg-primary/85 active:scale-[0.97]"
          >
            Book Consultation
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button className="flex h-10 w-10 items-center justify-center rounded-md text-primary/60 hover:bg-primary/[0.04] hover:text-primary">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-[280px] flex-col bg-white">
            <nav className="mt-14 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`rounded-md px-4 py-3 font-body text-[16px] font-medium transition-colors ${
                      isActive
                        ? "bg-primary/[0.06] text-primary"
                        : "text-on-surface-variant/80 hover:bg-surface-container-low hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto border-t border-primary/8 pt-6">
              <div className="mb-5 flex items-center justify-center gap-4">
                <a href={`tel:${firm.contact.phone.replace(/-/g, "")}`} className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-primary/10 text-primary/50 transition-all hover:border-primary/30 hover:text-primary">
                  <Phone className="h-[17px] w-[17px]" />
                </a>
                <a href={`mailto:${firm.contact.gmail}`} className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-primary/10 text-primary/50 transition-all hover:border-primary/30 hover:text-primary">
                  <Mail className="h-[17px] w-[17px]" />
                </a>
                <a href={firm.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-primary/10 text-primary/50 transition-all hover:border-primary/30 hover:text-primary">
                  <Linkedin className="h-[17px] w-[17px]" />
                </a>
              </div>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 font-body text-[14px] font-semibold text-white transition-all hover:bg-primary/85 active:scale-[0.97]"
              >
                Book Consultation
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
