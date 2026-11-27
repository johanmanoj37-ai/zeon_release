import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Minus } from "lucide-react";

const comparisonRows = [
  {
    capability: "Footwear size & color variant grid",
    zeon: "Multi-variant SKU matrix synced live",
    manual: "Separate rows or manual paper logs",
  },
  {
    capability: "Field sales order booking",
    zeon: "Android mobile client with digital signatures",
    manual: "WhatsApp messages, calls, or paper slips",
  },
  {
    capability: "Warehouse & dispatch sync",
    zeon: "Real-time cloud sync between Android & Windows",
    manual: "End-of-day spreadsheet reconciliation",
  },
  {
    capability: "Wholesale order summaries & PDFs",
    zeon: "1-click automated PDF export & tax math",
    manual: "Manual invoice re-entry and calc errors",
  },
  {
    capability: "Staff accountability & security",
    zeon: "Google OAuth 2.0, role permissions & audit logs",
    manual: "Shared passwords, no change history",
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

export function SeoOverviewSection() {
  return (
    <section
      aria-labelledby="zeon-overview-heading"
      className="relative py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-10 lg:px-8"
    >
      <div className="space-y-10">
        {/* Definition & Industry Context */}
        <div
          className="rounded-3xl border border-white/60 p-6 sm:p-12 transition-all duration-300 hover:border-white/85"
          style={cardStyle}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5A5A5A]">
                ZEON WMS by XEOPS • Built in India
              </p>
              <h2
                id="zeon-overview-heading"
                className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-[#141414]"
              >
                Purpose-built wholesale &amp; footwear warehouse software.
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-[#4A4A4A]">
                <strong>ZEON</strong> is a B2B warehouse inventory and wholesale order management
                platform developed by{" "}
                <a
                  href="https://xeops.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#141414] underline decoration-[#141414]/30 underline-offset-4 hover:decoration-[#141414]"
                >
                  XEOPS
                </a>{" "}
                for Indian footwear manufacturers, distributors, and wholesale hubs. Instead of
                juggling paper order books, spreadsheets, and disconnected billing tools, ZEON
                unifies your product catalog, customer directory, field sales team, and dispatch desk
                across <strong>Windows desktop</strong>, <strong>Android mobile</strong>, and the
                web.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-[#4A4A4A]">
                Every SKU update, variant price tier, stock deduction, and signed wholesale order
                syncs automatically across devices—protected by Google OAuth 2.0, role-based access
                controls, and immutable append-only audit trails.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              <Link
                href="/features"
                className="group flex items-center justify-between rounded-2xl border border-white/65 bg-white/45 p-4 transition-all hover:bg-white/75"
              >
                <div>
                  <p className="text-sm font-bold text-[#141414]">Platform Features</p>
                  <p className="text-xs text-[#5A5A5A]">
                    Multi-variant grids, PDF exports, OAuth &amp; audit trails
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#141414] shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/solutions/footwear-wholesale"
                className="group flex items-center justify-between rounded-2xl border border-white/65 bg-white/45 p-4 transition-all hover:bg-white/75"
              >
                <div>
                  <p className="text-sm font-bold text-[#141414]">Footwear Wholesale Solution</p>
                  <p className="text-xs text-[#5A5A5A]">
                    Manage size sets, brand lines, and distributor orders
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#141414] shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/help"
                className="group flex items-center justify-between rounded-2xl border border-white/65 bg-white/45 p-4 transition-all hover:bg-white/75"
              >
                <div>
                  <p className="text-sm font-bold text-[#141414]">Help Center &amp; Onboarding FAQ</p>
                  <p className="text-xs text-[#5A5A5A]">
                    Free evaluation trial, 7-day export window &amp; DPDPA privacy
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#141414] shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div
          className="rounded-3xl border border-white/60 p-6 sm:p-10 transition-all duration-300 hover:border-white/85"
          style={cardStyle}
        >
          <div className="mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414]">
              Why wholesale warehouses switch to ZEON
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#5A5A5A]">
              How a unified B2B workspace compares against manual spreadsheets and paper order books.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-black/10 text-[#141414]">
                  <th className="py-3 pr-4 font-semibold">Operational Area</th>
                  <th className="py-3 px-4 font-semibold">ZEON by XEOPS</th>
                  <th className="py-3 pl-4 font-semibold text-[#6B7280]">Spreadsheets &amp; Manual Logs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {comparisonRows.map((row) => (
                  <tr key={row.capability}>
                    <td className="py-3.5 pr-4 font-medium text-[#141414]">{row.capability}</td>
                    <td className="py-3.5 px-4 text-[#141414]">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{row.zeon}</span>
                      </span>
                    </td>
                    <td className="py-3.5 pl-4 text-[#5A5A5A]">
                      <span className="inline-flex items-center gap-2">
                        <Minus className="h-3.5 w-3.5 text-[#8A8A8A] shrink-0" />
                        <span>{row.manual}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
