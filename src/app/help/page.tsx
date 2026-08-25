import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Play,
  BookOpen,
  FileQuestion,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeon",
  description: "Get help, watch video tutorials, and learn how to use ZEON efficiently.",
};

export default function HelpPage() {
  return (
    <div className="relative min-h-screen bg-[#FCFCF9] text-[#141414] flex flex-col justify-between overflow-hidden">
      {/* Ambient Lighting Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 ambient-glow" />

      <div>
        <Navbar />

        <main className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-8 lg:py-14">
          {/* Description */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-base sm:text-lg leading-relaxed text-[#4A4A4A] text-balance">
              Watch our complete walkthrough video below to learn how to set up, sync, and manage your orders and stock with ease.
            </p>
          </div>

          {/* Video Placeholder Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-[#E8E6DF] bg-white p-3 sm:p-4 shadow-hero-mockup">
              {/* 
                ==========================================================
                VIDEO PLACEHOLDER:
                Replace this placeholder block with your iframe (e.g. YouTube/Loom) 
                or HTML5 <video controls src="/your-video.mp4" />
                ==========================================================
              */}
              <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-[#141414] flex flex-col items-center justify-center text-center p-6 cursor-pointer select-none">
                {/* Subtle ambient glow inside video frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                {/* Center Play Button Action */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-[#141414] shadow-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                    <Play className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">
                      Complete Setup &amp; Overview Guide
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                      Click to play walkthrough video
                    </p>
                  </div>
                </div>

                {/* Video Duration Badge */}
                <div className="absolute bottom-4 right-4 z-10 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                  Video Placeholder
                </div>
              </div>
            </div>
          </div>

          {/* Quick Help Topics Grid */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-subtle">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5F4F0] text-[#141414]">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-[#141414] text-sm">
                    How do I install the apps?
                  </h3>
                </div>
                <p className="text-xs text-[#5A5A5A] leading-relaxed">
                  Visit the <Link href="/product" className="underline font-medium text-[#141414]">Product page</Link> to download either the Windows desktop setup or the Android APK package for mobile devices.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E8E6DF] bg-white p-6 shadow-subtle">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5F4F0] text-[#141414]">
                    <FileQuestion className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-[#141414] text-sm">
                    How does real-time sync work?
                  </h3>
                </div>
                <p className="text-xs text-[#5A5A5A] leading-relaxed">
                  Sign in with your Google OAuth credentials on both desktop and mobile. All stock entries and wholesale orders synchronize automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Need Direct Assistance Banner */}
          <div className="mt-14 max-w-4xl mx-auto rounded-3xl border border-[#E8E6DF] bg-white p-8 text-center shadow-subtle">
            <h3 className="font-serif text-2xl font-normal text-[#141414]">
              Still need assistance?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#5A5A5A]">
              Get in touch with our team directly for one-on-one help and questions.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#141414] px-6 py-3 text-xs sm:text-sm font-medium text-white shadow-sm transition-all hover:bg-[#262626]"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
