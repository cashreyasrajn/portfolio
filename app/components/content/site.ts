import { firm } from "@/app/components/content/firm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shreyasraj.vercel.app";

export const siteConfig = {
  name: "Shreyas Raj & Co.",
  description:
    "Shreyas Raj & Co. is a Bengaluru-based Chartered Accountancy firm specialising in Direct Tax, GST, Audit, Corporate Compliance, and Business Advisory for businesses and individuals.",
  url: siteUrl,
  ogImage: "/opengraph-image",
  links: {
    email: `mailto:${firm.contact.gmail}`,
    phone: `tel:${firm.contact.phone.replace(/-/g, "").replace(/\s/g, "")}`,
    linkedin: "https://www.linkedin.com/in/shreyas-raj-n-8345a8214/",
  },
  locale: "en_IN",
  schema: {
    type: "ProfessionalService",
    name: "Shreyas Raj & Co.",
    alternateName: "CA Shreyas Raj",
    description:
      "Chartered Accountants providing direct taxation, international tax, FEMA advisory, US tax compliance, and corporate compliance services in Bengaluru, India.",
    address: {
      streetAddress: `${firm.address.line1}, ${firm.address.line2}`,
      addressLocality: firm.address.city,
      addressRegion: firm.address.state,
      postalCode: firm.address.pincode,
      addressCountry: firm.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    telephone: firm.contact.phone,
    email: firm.contact.gmail,
    foundingDate: firm.founded.toString(),
    memberOf: "Institute of Chartered Accountants of India (ICAI)",
    logo: `${siteUrl}/icon.png`,
    image: `${siteUrl}/opengraph-image`,
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "State", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chartered Accountancy Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Income Tax & Direct Tax Advisory" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Compliance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit & Assurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Compliance (ROC & MCA)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Setup & Registration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI & FEMA Advisory" } },
      ],
    },
    sameAs: ["https://www.linkedin.com/in/shreyas-raj-n-8345a8214/"],
  },
};
