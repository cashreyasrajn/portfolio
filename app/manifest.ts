import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/components/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Shreyas Raj & Co.",
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#f8f9fa",
    theme_color: "#012d1d",
    icons: [
      {
        src: "/icon.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  };
}
