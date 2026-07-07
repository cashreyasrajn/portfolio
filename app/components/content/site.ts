export const siteConfig = {
  name: "Shreyas Raj & Co.",
  description:
    "Shreyas Raj & Co. — Chartered Accountants based in Bengaluru, India. Specialized tax advisory, audit & assurance, GST compliance, MSME consulting, and NRI taxation services with 20+ years of institutional trust.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shreyasraj.vercel.app",
  ogImage: "/og-image.png",
  links: {
    email: "mailto:shreyasraj.ca@gmail.com",
    linkedin: "https://linkedin.com/in/shreyasraj-ca",
    phone: "tel:+919876543210",
  },
  locale: "en_IN",
  schema: {
    type: "ProfessionalService",
    name: "Shreyas Raj & Co.",
    description:
      "Chartered Accountancy firm providing tax advisory, audit, GST compliance, and MSME consulting services in Bengaluru, India.",
    address: {
      streetAddress: "No. 42, 3rd Floor, Prestige Chambers, MG Road, Ashok Nagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    telephone: "+91-80-4123-5678",
    email: "contact@shreyasraj.co.in",
    foundingDate: "2002",
    memberOf: "Institute of Chartered Accountants of India (ICAI)",
  },
};
