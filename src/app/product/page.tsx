import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Monitor,
  Download,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

// Define your direct download links here
const WINDOWS_DOWNLOAD_URL = "#"; // e.g. "https://your-domain.com/downloads/zeon-windows-setup.exe"
const ANDROID_APK_DOWNLOAD_URL = "#"; // e.g. "https://your-domain.com/downloads/zeon-mobile.apk"

export const metadata: Metadata = {
  title: "Zeon",
  description: "Download ZEON Warehouse Management and Online Order Taking software for Windows desktop and Android mobile APK devices.",
};

export default function ProductPage() {
  return (
    <div className="relative min-h-screen bg-[#FCFCF9] text-[#141414] flex flex-col justify-between overflow-hidden">
      {/* Ambient Lighting Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 ambient-glow" />

      <div>
        <Navbar />

        <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:px-8 lg:py-16">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#141414] leading-[1.02]">
              One platform. <br />
              <span className="italic text-[#737373]">Built for every device.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#4A4A4A] text-balance">
              Deploy <strong>ZEON for Windows</strong> for full dispatch and inventory management, or equip sales reps and warehouse staff with the <strong>ZEON Mobile APK</strong> for fast catalog browsing and real-time online order taking.
            </p>
          </div>

          {/* Dual Download Cards Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 1. Windows Desktop App Card */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#E8E6DF] bg-white p-8 sm:p-10 shadow-hero-mockup transition-all hover:border-[#D5D0C5] hover:shadow-xl">
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#141414] text-white shadow-md">
                    <Monitor className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-2xl font-bold text-[#141414]">
                    ZEON for Windows
                  </h2>
                  <p className="mt-1 text-xs text-[#737373]">
                    Windows 10 / 11 (64-bit) • Desktop Management App
                  </p>
                </div>

                <p className="mt-4 text-sm text-[#4A4A4A] leading-relaxed">
                  Full-featured control center for warehouse managers, dispatch controllers, and inventory supervisors.
                </p>

                {/* Key Features List */}
                <ul className="mt-6 space-y-2.5 text-xs text-[#4A4A4A]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Real-time multi-warehouse inventory grid</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Batch wholesale order summary &amp; PDF export</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Role-based staff permissions &amp; audit logging</span>
                  </li>
                </ul>
              </div>

              {/* Download Action Area */}
              <div className="mt-8 pt-6 border-t border-[#EFECE6]">
                <a
                  href={WINDOWS_DOWNLOAD_URL}
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#141414] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#262626] active:scale-[0.98]"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download for Windows (.exe)</span>
                </a>
              </div>
            </div>

            {/* 2. Android Mobile APK Card */}
            <div className="relative flex flex-col justify-between rounded-3xl border border-[#E8E6DF] bg-white p-8 sm:p-10 shadow-hero-mockup transition-all hover:border-[#D5D0C5] hover:shadow-xl">
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl overflow-hidden border border-[#E8E6DF] bg-[#FAFAF8] shadow-md">
                    <Image
                      src="/logo.png"
                      alt="ZEON Android App Icon"
                      width={56}
                      height={56}
                      className="h-full w-full object-contain p-1.5"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-2xl font-bold text-[#141414]">
                    ZEON Mobile APK
                  </h2>
                  <p className="mt-1 text-xs text-[#737373]">
                    Android 8.0+ • Mobile Devices, Tablets &amp; Terminals
                  </p>
                </div>

                <p className="mt-4 text-sm text-[#4A4A4A] leading-relaxed">
                  High-speed order taking and stock management client built with Flutter. Optimized for wholesale catalogs, field sales, and dispatch tracking.
                </p>

                {/* Key Features List */}
                <ul className="mt-6 space-y-2.5 text-xs text-[#4A4A4A]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Instant SKU search &amp; catalog lookups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Real-time cloud database synchronization &amp; instant dispatch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>B2B online order taking with customer digital signatures</span>
                  </li>
                </ul>
              </div>

              {/* Download Action Area */}
              <div className="mt-8 pt-6 border-t border-[#EFECE6]">
                <a
                  href={ANDROID_APK_DOWNLOAD_URL}
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#141414] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#262626] active:scale-[0.98]"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Android APK (.apk)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Installation Steps */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-[#141414] text-center mb-8">
              Get Started in 3 Simple Steps
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-subtle">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141414] text-white text-xs font-bold mb-4">
                  1
                </div>
                <h4 className="font-semibold text-[#141414]">Download Your Variant</h4>
                <p className="mt-1.5 text-xs text-[#5A5A5A] leading-relaxed">
                  Choose the Windows desktop installer for central dispatch or download the Android APK for mobile order taking.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-subtle">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141414] text-white text-xs font-bold mb-4">
                  2
                </div>
                <h4 className="font-semibold text-[#141414]">Sign In via Google OAuth</h4>
                <p className="mt-1.5 text-xs text-[#5A5A5A] leading-relaxed">
                  Log in securely using your organization credentials with automatic role authorization.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-subtle">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141414] text-white text-xs font-bold mb-4">
                  3
                </div>
                <h4 className="font-semibold text-[#141414]">Instant Real-Time Sync</h4>
                <p className="mt-1.5 text-xs text-[#5A5A5A] leading-relaxed">
                  All inventory records, catalog items, and wholesale orders automatically synchronize across all connected devices in real time.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
