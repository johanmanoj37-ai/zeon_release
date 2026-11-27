export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zeon.xeops.in";
export const PARENT_ORG_URL = "https://xeops.in";
export const PARENT_ORG_ID = `${PARENT_ORG_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": PARENT_ORG_ID,
  name: "XEOPS",
  alternateName: ["XEOPS India", "ZEON by XEOPS"],
  url: PARENT_ORG_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    "https://www.linkedin.com/company/xeops",
    "https://github.com/XEOPS-in",
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Kerala, India",
  },
  founder: {
    "@type": "Person",
    name: "Johan P Manoj",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "support.zeon@xeops.in",
    telephone: "+91-9447141984",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "ZEON by XEOPS",
  alternateName: ["ZEON", "ZEON WMS"],
  description:
    "B2B Warehouse Inventory & Wholesale Order Management System for footwear and wholesale distributors.",
  publisher: {
    "@id": PARENT_ORG_ID,
  },
  inLanguage: "en-US",
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "ZEON",
  alternateName: ["ZEON WMS", "ZEON by XEOPS"],
  url: SITE_URL,
  operatingSystem: "Windows 10, Windows 11, Android 8.0+, Modern Web Browsers",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Warehouse Management Software",
  softwareVersion: "1.3.0",
  description:
    "B2B warehouse inventory and wholesale order management system built for footwear catalog management, multi-variant stock tracking, wholesale order booking, and automated PDF invoicing.",
  image: `${SITE_URL}/og-image.jpg`,
  screenshot: [
    `${SITE_URL}/pic_2.png`,
    `${SITE_URL}/mobile_preview.png`,
  ],
  downloadUrl: `${SITE_URL}/product`,
  featureList: [
    "Real-time multi-variant footwear size and color stock grid",
    "Android mobile wholesale order booking with digital customer signatures",
    "Windows desktop dispatch and inventory control center",
    "1-click automated PDF wholesale order summary and invoice export",
    "Google OAuth 2.0 authentication with role-based staff permissions",
    "Immutable append-only operational audit trails",
  ],
  brand: {
    "@type": "Brand",
    name: "ZEON",
  },
  author: {
    "@id": PARENT_ORG_ID,
  },
  publisher: {
    "@id": PARENT_ORG_ID,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    description:
      "Complimentary evaluation trial with full Windows and Android access; custom commercial pricing after trial.",
  },
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Build a BreadcrumbList schema for subpages. */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
