import type { Metadata } from "next";
import { Playfair_Display, Fraunces, Plus_Jakarta_Sans, Inter } from "next/font/google";
import { SITE_URL, organizationSchema, websiteSchema } from "@/lib/seo-schema";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZEON by XEOPS | B2B Warehouse & Wholesale Order Software",
    template: "%s | ZEON by XEOPS",
  },
  description:
    "ZEON by XEOPS brings your orders, customers, inventory, and team into one calm B2B workspace. Built for footwear and wholesale businesses on Windows and Android.",
  applicationName: "ZEON",
  authors: [
    { name: "XEOPS", url: "https://xeops.in" },
    { name: "Johan P Manoj" },
  ],
  generator: "Next.js",
  keywords: [
    "ZEON",
    "ZEON by XEOPS",
    "ZEON WMS",
    "warehouse management system",
    "wholesale order management",
    "footwear inventory software",
    "B2B order booking app",
    "inventory tracking Windows Android",
    "wholesale invoice generator",
    "multi-device warehouse software",
    "XEOPS",
    "stock management India",
  ],
  creator: "XEOPS",
  publisher: "XEOPS",
  category: "Business Software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "ZEON by XEOPS",
    title: "ZEON by XEOPS | B2B Warehouse & Wholesale Order Software",
    description:
      "Bring your orders, customers, inventory, and team into one calm workspace. Fast catalog browsing, real-time stock sync, and PDF order summaries for Windows and Android.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZEON by XEOPS — B2B Warehouse & Wholesale Order Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZEON by XEOPS | B2B Warehouse & Wholesale Order Software",
    description:
      "Bring your orders, customers, inventory, and team into one calm workspace. Built for Windows desktop and Android mobile by XEOPS.",
    images: ["/og-image.jpg"],
    creator: "@xeops",
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${fraunces.variable} ${plusJakarta.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#141414] antialiased selection:bg-amber-200 selection:text-black">
        {children}
      </body>
    </html>
  );
}
