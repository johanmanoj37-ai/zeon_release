import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZEON - Warehouse & Wholesale Order Management",
    short_name: "ZEON",
    description:
      "Unified B2B workspace for wholesale orders, footwear inventory, customer directories, and team management.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#141414",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
