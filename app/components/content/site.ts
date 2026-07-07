import { firm } from "@/app/components/content/firm";

export const siteConfig = {
  name: "CA Shreyas Raj",
  description:
    "CA Shreyas Raj — Chartered Accountant based in Bengaluru, India. Practical tax advisory, audit & assurance, GST compliance, MSME consulting, and NRI taxation services for individuals and small businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shreyasraj.vercel.app",
  ogImage: "/og-image.png",
  links: {
    email: `mailto:${firm.contact.gmail}`,
    linkedin: firm.contact.linkedin,
    phone: `tel:${firm.contact.phone.replace(/-/g, "").replace(/\s/g, "")}`,
  },
  locale: "en_IN",
  schema: {
    type: "ProfessionalService",
    name: "CA Shreyas Raj",
    description:
      "Chartered Accountant providing tax advisory, audit, GST compliance, and MSME consulting services in Bengaluru, India.",
    address: {
      streetAddress: `${firm.address.line1}, ${firm.address.line2}`,
      addressLocality: firm.address.city,
      addressRegion: firm.address.state,
      postalCode: firm.address.pincode,
      addressCountry: firm.address.country,
    },
    telephone: firm.contact.phone,
    email: firm.contact.gmail,
    foundingDate: firm.founded.toString(),
    memberOf: "Institute of Chartered Accountants of India (ICAI)",
  },
};
