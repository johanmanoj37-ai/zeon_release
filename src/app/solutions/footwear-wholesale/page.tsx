import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Layers, PackageCheck, Shield } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildBreadcrumbSchema } from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Footwear Wholesale & Inventory Software India",
  description:
    "ZEON by XEOPS is built specifically for Indian footwear wholesalers and distributors: manage size-set variants, field sales orders on Android, and dispatch on Windows.",
  alternates: {
    canonical: "/solutions/footwear-wholesale",
  },
  openGraph: {
    title: "Footwear Wholesale & B2B Inventory Software India | ZEON by XEOPS",
    description:
      "Manage footwear brand lines, size/color matrices, field rep order booking, and 1-click PDF wholesale summaries.",
    url: "/solutions/footwear-wholesale",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZEON Footwear Wholesale Inventory Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Footwear Wholesale & B2B Inventory Software India | ZEON by XEOPS",
    description:
      "Manage footwear brand lines, size/color matrices, field rep order booking, and 1-click PDF wholesale summaries.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Footwear Wholesale Solution", path: "/solutions/footwear-wholesale" },
]);

const cardStyle: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
  backdropFilter: "blur(14px) saturate(118%)",
  WebkitBackdropFilter: "blur(14px) saturate(118%)",
  boxShadow:
    "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
};

export default function FootwearWholesalePage() {
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

          <main className="mx-auto max-w-5xl px-4 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5A5A5A] mb-3">
                Industry Solution • Footwear Distribution India
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-[1.04]">
                Wholesale software built <br />
                <span className="italic font-normal text-[#5A5A5A]">for footwear warehouses.</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-[#4A4A4A] text-balance">
                Generic accounting tools struggle with multi-size, multi-color footwear catalogs.
                ZEON by XEOPS gives wholesalers real-time visibility from showroom order booking to
                warehouse dispatch.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-3xl border border-white/60 p-6" style={cardStyle}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#141414] text-white">
                  <Layers className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-[#141414]">Size &amp; Color Variants</h2>
                <p className="mt-2 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                  Create complete footwear brand lines and size runs in batches instead of adding
                  hundreds of individual SKUs one by one.
                </p>
              </div>

              <div className="rounded-3xl border border-white/60 p-6" style={cardStyle}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#141414] text-white">
                  <PackageCheck className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-[#141414]">Field-to-Dispatch Sync</h2>
                <p className="mt-2 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                  Sales reps book wholesale orders on Android at retail shops with digital
                  signatures while dispatch teams pack on Windows.
                </p>
              </div>

              <div className="rounded-3xl border border-white/60 p-6" style={cardStyle}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#141414] text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-[#141414]">Audit &amp; Ownership</h2>
                <p className="mt-2 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                  Prevent stock discrepancies with append-only audit trails, role permissions, and
                  100% customer ownership of all business records.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/60 p-6 sm:p-10 space-y-5" style={cardStyle}>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#141414]">
                How footwear distributors run daily operations with ZEON
              </h2>
              <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Footwear wholesaling requires rapid lookups across dozens of brands, article numbers,
                colorways, and carton/size breakdowns. With ZEON, warehouse owners import and
                organize catalogs on Windows, authorize sales representatives via Google OAuth 2.0,
                and let field teams capture signed orders directly on Android smartphones or tablets.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A4A4A]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Instant stock deduction prevents overselling popular sizes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Automated subtotal and tax calculation on every order</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>1-click PDF wholesale order summaries for retail buyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Complimentary evaluation trial with 7-day data export window</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-6 py-3 text-xs sm:text-sm font-medium text-white hover:bg-[#262626] transition-colors"
                >
                  <span>Get ZEON for Windows &amp; Android</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/help"
                  className="inline-flex items-center gap-2 rounded-full border border-[#141414]/25 bg-white/50 px-5 py-3 text-xs sm:text-sm font-medium text-[#141414] hover:bg-white/80 transition-colors"
                >
                  <span>Read Trial &amp; Security FAQ</span>
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
