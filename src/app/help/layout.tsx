import type { Metadata } from "next";
import { buildBreadcrumbSchema } from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Help Center & FAQ — Setup & Sync Guide",
  description:
    "Find answers to common questions about ZEON warehouse management, evaluation trials, offline order booking, cloud sync, security safeguards, and support.",
  alternates: {
    canonical: "/help",
  },
  openGraph: {
    title: "ZEON Help Center & FAQ — Setup, Sync & Operations Guide",
    description:
      "Find answers to common questions about ZEON warehouse management, evaluation trials, offline order booking, cloud sync, and support.",
    url: "/help",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZEON Help Center and FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZEON Help Center & FAQ — Setup, Sync & Operations Guide",
    description:
      "Find answers to common questions about ZEON warehouse management, evaluation trials, and support.",
    images: ["/og-image.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Zeon, who operates it, and who is it designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zeon is a B2B warehouse inventory and wholesale order management system specifically designed for footwear catalog management, multi-variant stock tracking, wholesale order booking, customer directories, and automated PDF invoicing across Windows desktop and Android mobile. It is developed, owned, and operated by XEOPS, a registered Micro Enterprise under the Ministry of MSME, Government of India (UDYAM Registration No: UDYAM-KL-03-0044323), founded by Johan P Manoj in Kerala, India.",
      },
    },
    {
      "@type": "Question",
      name: "How does the complimentary evaluation trial work, and are there upfront costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New warehouse clients receive a tailored complimentary evaluation trial period agreed upon during onboarding with full platform access across both Windows desktop and Android mobile, zero upfront charges, zero setup fees, and no payment card commitments.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when the trial period ends? Can I walk away without penalties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. At the conclusion of your trial, our team discusses a customized commercial pricing model with the warehouse owner. You have complete freedom to proceed or discontinue with zero cancellation fees and zero penalties.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export our warehouse data if we choose not to continue after the trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you decide not to proceed following your evaluation trial, Zeon provides a 7-day grace window allowing you to export or receive your complete business records—including customer shop directories, brand catalogs, inventory listings, and order histories.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the business data entered into Zeon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Customer (Warehouse Owner) retains 100% full and exclusive ownership of all proprietary business data, catalogs, pricing tiers, customer contacts, and transaction histories.",
      },
    },
    {
      "@type": "Question",
      name: "How do staff and administrators sign in, and who controls access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Authentication is handled strictly via Google OAuth 2.0—Zeon does not store passwords. Warehouse Administrators serve as the primary Data Fiduciaries/Controllers and maintain complete authority over their workspace.",
      },
    },
    {
      "@type": "Question",
      name: "Is staff Aadhaar information required, and how is sensitive personal data protected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Providing an Aadhaar number is 100% voluntary and is never mandated by Zeon. When entered, Aadhaar numbers undergo client-side AES-256-CBC encryption on the device before cloud transmission and are never stored or logged in plain text.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zeon sell or monetize our business or customer data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Zeon does not sell, rent, broker, or monetize your personal or business data under any circumstances. Data is processed exclusively to deliver platform services via vetted cloud infrastructure providers like Google Cloud, Firebase, and Cloudflare.",
      },
    },
    {
      "@type": "Question",
      name: "How does Zeon prevent internal disputes and unauthorized inventory changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zeon maintains immutable, append-only security audit trails for critical operational actions, including stock adjustments, order status transitions, and staff updates.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request account/data deletion, and who handles privacy grievances?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verified warehouse owners can request data deletion or workspace purging by emailing support directly at support.zeon@xeops.in. All inquiries and privacy requests are addressed within 15 days by our Grievance Officer.",
      },
    },
  ],
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Help Center", path: "/help" },
]);

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
