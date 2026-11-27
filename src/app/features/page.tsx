import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Boxes,
  FileText,
  Smartphone,
  RefreshCw,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildBreadcrumbSchema } from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Features — Inventory Grid, Order App & PDF Sync",
  description:
    "Explore ZEON by XEOPS features: multi-variant footwear stock tracking, Android field order taking, Windows dispatch control, 1-click PDF export, and role-based security.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "ZEON Features — B2B Warehouse Inventory & Wholesale Order Tools",
    description:
      "Multi-variant catalog grids, Android mobile order booking, real-time cloud sync, and automated wholesale PDF exports.",
    url: "/features",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZEON Warehouse Software Features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZEON Features — B2B Warehouse Inventory & Wholesale Order Tools",
    description:
      "Multi-variant catalog grids, Android mobile order booking, real-time cloud sync, and automated wholesale PDF exports.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
]);

const featurePillars = [
  {
    icon: Boxes,
    title: "Multi-Variant Footwear & Catalog Grid",
    summary:
      "Organize brand lines, article codes, colors, and size-set quantities in a high-speed inventory matrix.",
    points: [
      "Batch variant creation for rapid SKU onboarding",
      "Instant category, brand, and size filtering",
      "Live available-stock indicators before order confirmation",
    ],
  },
  {
    icon: Smartphone,
    title: "Android Mobile Order Taking for Sales Reps",
    summary:
      "Built with Flutter for fast wholesale order booking on phones, tablets, and warehouse terminals.",
    points: [
      "Browse high-res footwear catalogs at customer shops",
      "Capture digital customer signatures directly on orders",
      "Automatic subtotal, discount, and tax calculations",
    ],
  },
  {
    icon: FileText,
    title: "1-Click PDF Wholesale Order Summaries",
    summary:
      "Generate clean, shareable wholesale order sheets and dispatch summaries without manual spreadsheet formatting.",
    points: [
      "Consistent itemized breakdowns by brand and size set",
      "Instant PDF export ready for WhatsApp or print",
      "Eliminates manual re-typing between sales and billing",
    ],
  },
  {
    icon: RefreshCw,
    title: "Real-Time Multi-Device Cloud Sync",
    summary:
      "Keep warehouse dispatchers on Windows and field reps on Android operating from the same live stock count.",
    points: [
      "Immediate stock deductions when orders are placed",
      "Cloud Firestore synchronization with push notifications",
      "Zero end-of-day spreadsheet merging across staff",
    ],
  },
  {
    icon: Users,
    title: "Centralized B2B Customer Directory",
    summary:
      "Maintain structured retail shop profiles, delivery addresses, phone contacts, and full order histories.",
    points: [
      "Quick customer lookup during field visits or phone orders",
      "Full historical order tracking per retail account",
      "Clean 7-day data export guarantee if you discontinue",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Google OAuth 2.0 & Immutable Audit Trails",
    summary:
      "Enterprise-grade access control designed for Indian B2B warehouses and DPDPA 2023 compliance.",
    points: [
      "Passwordless Google OAuth 2.0 staff sign-in",
      "Granular role permissions for inventory vs. billing",
      "Append-only audit logs for every stock and order change",
    ],
  },
];

const cardStyle: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
  backdropFilter: "blur(14px) saturate(118%)",
  WebkitBackdropFilter: "blur(14px) saturate(118%)",
  boxShadow:
    "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
};

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div
        className="relative min-h-screen text-[#141414] flex flex-col justify-between overflow-x-clip"
        style={{
          background: `
            radial-gradient(ellipse 70% 65% at 68% 42%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 38%, transparent 68%),
            radial-gradient(ellipse 50% 40% at 30% 18%, rgba(255,255,255,0.22) 0%, transparent 65%),
            linear-gradient(160deg, #C6CAD0 0%, #BCC1C7 28%, #B4B9C0 60%, #ABB0B7 100%)
          `,
        }}
      >
        <div>
          <Navbar />

          <main className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5A5A5A] mb-3">
                ZEON WMS Features • Windows &amp; Android
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-[1.04]">
                Everything your wholesale <br />
                <span className="italic font-normal text-[#5A5A5A]">warehouse needs to move fast.</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-[#4A4A4A] text-balance">
                Developed by{" "}
                <a
                  href="https://xeops.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#141414] underline underline-offset-4"
                >
                  XEOPS
                </a>
                , ZEON connects warehouse inventory management, mobile order booking, customer
                directories, and PDF order summaries in one unified workspace.
              </p>
            </div>

            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {featurePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="rounded-3xl border border-white/60 p-6 sm:p-8 transition-all duration-300 hover:border-white/85"
                    style={cardStyle}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#141414] text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-[#141414]">{pillar.title}</h2>
                    <p className="mt-2 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                      {pillar.summary}
                    </p>
                    <ul className="mt-5 space-y-2 text-xs text-[#4A4A4A]">
                      {pillar.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div
              className="mt-12 rounded-3xl border border-white/60 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={cardStyle}
            >
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#141414]">
                  Ready to evaluate ZEON in your warehouse?
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-[#5A5A5A]">
                  Start with a complimentary trial across Windows desktop and Android mobile—zero
                  upfront cost.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-6 py-3 text-xs sm:text-sm font-medium text-white hover:bg-[#262626] transition-colors"
                >
                  <span>Download ZEON</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/solutions/footwear-wholesale"
                  className="inline-flex items-center gap-2 rounded-full border border-[#141414]/25 bg-white/50 px-5 py-3 text-xs sm:text-sm font-medium text-[#141414] hover:bg-white/80 transition-colors"
                >
                  <span>Footwear Solution</span>
                </Link>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
