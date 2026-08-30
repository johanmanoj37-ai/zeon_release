"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone, Wifi, CheckCircle2 } from "lucide-react";
import desktopImg from "../../public/pic_2.png";
import mobileImg from "../../public/mobile_preview.png";

export function AppPreview() {
  const [deviceView, setDeviceView] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
      {/* Container Frame with entrance motion */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-[#E8E6DF] bg-white p-2 sm:p-3 shadow-hero-mockup backdrop-blur-md"
      >
        <div className="relative overflow-hidden rounded-2xl border border-[#EFECE6] bg-[#FAFAF8]">
          {/* Top Window Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#EAE7E0] bg-white px-4 py-3 sm:px-6 gap-3">
            {/* Window Controls & Title */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D5D5D5]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D5D5D5]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D5D5D5]" />
              </div>
              <div className="h-4 w-px bg-[#EAE7E0] hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#141414]">
                  ZEON
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700 border border-emerald-200/60 shadow-xs">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Live Sync Active
                </span>
              </div>
            </div>

            {/* Sliding Animated Tab Switcher */}
            <div className="relative flex items-center rounded-xl bg-[#F5F4F0] p-1 text-xs">
              <button
                type="button"
                onClick={() => setDeviceView("desktop")}
                className={`relative z-10 flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-medium transition-colors duration-200 ${
                  deviceView === "desktop"
                    ? "text-[#141414] font-semibold"
                    : "text-[#6E6E6E] hover:text-[#141414]"
                }`}
              >
                {deviceView === "desktop" && (
                  <motion.div
                    layoutId="activeDevicePill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                  />
                )}
                <Monitor className="h-3.5 w-3.5" />
                <span>Windows Desktop</span>
              </button>

              <button
                type="button"
                onClick={() => setDeviceView("mobile")}
                className={`relative z-10 flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-medium transition-colors duration-200 ${
                  deviceView === "mobile"
                    ? "text-[#141414] font-semibold"
                    : "text-[#6E6E6E] hover:text-[#141414]"
                }`}
              >
                {deviceView === "mobile" && (
                  <motion.div
                    layoutId="activeDevicePill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                  />
                )}
                <Smartphone className="h-3.5 w-3.5" />
                <span>Mobile App</span>
              </button>
            </div>
          </div>

          {/* Device View Content with Smooth Fade Transitions */}
          <div className="relative min-h-[380px] sm:min-h-[500px] flex items-center justify-center bg-[#FDFDFB]">
            <AnimatePresence mode="wait">
              {deviceView === "desktop" ? (
                <motion.div
                  key="desktop-view"
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full"
                >
                  <Image
                    src={desktopImg}
                    alt="ZEON Desktop Workspace Preview"
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="mobile-view"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full py-10 sm:py-14 px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14"
                >
                  {/* Centered Sleek Phone Container */}
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="relative w-[240px] sm:w-[280px] rounded-[38px] border-[8px] border-[#141414] bg-[#141414] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]"
                  >
                    {/* Top Notch Pill */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-4 w-24 rounded-full bg-[#141414] flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[#2E2E2E] mr-2" />
                      <div className="h-1.5 w-8 rounded-full bg-[#2A2A2A]" />
                    </div>

                    {/* Phone Screen */}
                    <div className="relative overflow-hidden rounded-[30px] bg-white">
                      <Image
                        src={mobileImg}
                        alt="ZEON Mobile App Preview"
                        className="w-full h-auto object-cover object-top"
                        priority
                      />
                    </div>
                  </motion.div>

                  {/* Highlights alongside Mobile Phone */}
                  <div className="max-w-sm text-center md:text-left space-y-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Android Client
                      </span>
                      <h3 className="mt-3 text-xl sm:text-2xl font-bold text-[#141414]">
                        Wholesale Orders on the Go
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
                        Access real-time catalogs, manage footwear inventory quantities, and log customer orders with digital signatures wherever you are.
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#4A4A4A] pt-2">
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>Instant SKU &amp; model search</span>
                      </li>
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>Live synchronization with desktop</span>
                      </li>
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>Customer digital signature capture</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
