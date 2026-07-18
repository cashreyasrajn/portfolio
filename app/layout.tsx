import type { Metadata } from "next";
import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { DisclaimerPopup } from "@/app/components/sections/disclaimer-popup";
import { QuickContact } from "@/app/components/sections/quick-contact";
import { siteConfig } from "@/app/components/content/site";
import "./globals.css";

const headlineFont = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-headline",
  display: "swap",
});

const bodyFont = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Chartered Accountants, Bengaluru`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Chartered Accountant",
    "CA Firm Bengaluru",
    "Tax Advisory India",
    "International Taxation",
    "FEMA Advisory",
    "US Tax Compliance",
    "Cross-Border Tax",
    "NRI Taxation",
    "GST Compliance",
    "ICAI Member",
    "Income Tax Filing",
    "Corporate Compliance",
    "Shreyas Raj",
  ],
  authors: [{ name: "Shreyas Raj & Co." }],
  creator: "Shreyas Raj & Co.",
  publisher: "Shreyas Raj & Co.",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Chartered Accountants, Bengaluru, India`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Chartered Accountants`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.schema.name,
  description: siteConfig.schema.description,
  url: siteConfig.url,
  telephone: siteConfig.schema.telephone,
  email: siteConfig.schema.email,
  foundingDate: siteConfig.schema.foundingDate,
  memberOf: { "@type": "Organization", name: siteConfig.schema.memberOf },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.schema.address.streetAddress,
    addressLocality: siteConfig.schema.address.addressLocality,
    addressRegion: siteConfig.schema.address.addressRegion,
    postalCode: siteConfig.schema.address.postalCode,
    addressCountry: siteConfig.schema.address.addressCountry,
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${headlineFont.variable} ${bodyFont.variable} ${monoFont.variable} flex min-h-screen flex-col bg-cream pt-[72px] text-navy antialiased`}
      >
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
        <DisclaimerPopup />
        <QuickContact />
      </body>
    </html>
  );
}
