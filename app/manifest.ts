import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/components/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "CA Shreyas Raj",
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#f7f5f0",
    theme_color: "#0b1e3d",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
