import { firm } from "@/app/components/content/firm";

export const siteConfig = {
  name: "Shreyas Raj & Co.",
  description:
    "Shreyas Raj & Co. ,  Chartered Accountants based in Bengaluru, India. Specialising in direct taxation, international tax, FEMA, US tax advisory, cross-border transactions, and corporate compliance for businesses and individuals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shreyasraj.vercel.app",
  ogImage: "/og-image.png",
  links: {
    email: `mailto:${firm.contact.gmail}`,
    phone: `tel:${firm.contact.phone.replace(/-/g, "").replace(/\s/g, "")}`,
  },
  locale: "en_IN",
  schema: {
    type: "ProfessionalService",
    name: "Shreyas Raj & Co.",
    description:
      "Chartered Accountants providing direct taxation, international tax, FEMA advisory, US tax compliance, and corporate compliance services in Bengaluru, India.",
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
