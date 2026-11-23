import type { Metadata } from "next";
import { Playfair_Display, Fraunces, Plus_Jakarta_Sans, Inter } from "next/font/google";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zeon.xeops.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZEON | B2B Warehouse Inventory & Wholesale Order Management",
    template: "%s | ZEON",
  },
  description:
    "ZEON brings your orders, customers, inventory, and team into one calm, unified workspace. Designed for footwear and wholesale businesses across Windows desktop and Android mobile.",
  applicationName: "ZEON",
  authors: [
    { name: "XEOPS", url: "https://xeops.in" },
    { name: "Johan P Manoj" },
  ],
  generator: "Next.js",
  keywords: [
    "ZEON",
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
    url: siteUrl,
    siteName: "ZEON",
    title: "ZEON | B2B Warehouse Inventory & Wholesale Order Management",
    description:
      "Bring your orders, customers, inventory, and team into one calm workspace. Fast catalog browsing, offline-ready order booking, and real-time sync for Windows and Android.",
    images: [
      {
        url: "/hero_final.png",
        width: 1200,
        height: 630,
        alt: "ZEON B2B Warehouse & Order Management Workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZEON | B2B Warehouse Inventory & Wholesale Order Management",
    description:
      "Bring your orders, customers, inventory, and team into one calm workspace. Built for Windows desktop and Android mobile by XEOPS.",
    images: ["/hero_final.png"],
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "XEOPS",
  url: "https://xeops.in",
  logo: `${siteUrl}/logo.png`,
  founder: {
    "@type": "Person",
    name: "Johan P Manoj",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "support.zeon@xeops.in",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English"],
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}/#software`,
  name: "ZEON",
  operatingSystem: "Windows 10, Windows 11, Android 8.0+, Modern Web Browsers",
  applicationCategory: "BusinessApplication",
  description:
    "B2B warehouse inventory and wholesale order management system specifically designed for footwear catalog management, stock tracking, wholesale order booking, and automated PDF invoicing.",
  image: `${siteUrl}/hero_final.png`,
  author: {
    "@type": "Organization",
    name: "XEOPS",
    url: "https://xeops.in",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Complimentary evaluation trial with full platform access.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "ZEON",
  description: "B2B Warehouse Inventory & Wholesale Order Management System",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${fraunces.variable} ${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
