"use client";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

interface LogoProps {
  variant?: "dark" | "light";
  subtitle?: string;
}

export function Logo({ variant = "dark", subtitle = "Chartered Accountants" }: LogoProps) {
  const colorClass = variant === "dark" ? "text-[#0B4F84]" : "text-white";

  return (
    <div
      className={`flex flex-col leading-none ${inter.variable}`}
      style={{ fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif" }}
    >
      <span
        className={`font-bold ${colorClass}`}
        style={{ fontSize: "clamp(24px, 3.8vw, 36px)" }}
      >
        Shreyas Raj {'\u0026'} Co
      </span>
      <span
        className={`font-medium ${colorClass}`}
        style={{ fontSize: "clamp(12px, 1.6vw, 15px)", marginTop: "4px" }}
      >
        {subtitle}
      </span>
    </div>
  );
}
