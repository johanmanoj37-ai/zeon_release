"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-32">
      {/* Soft Ambient Radial Lights with subtle continuous breathe */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        {/* Top subtle warm glow */}
        <motion.div
          animate={{
            opacity: [0.6, 0.75, 0.6],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-[450px] w-[800px] rounded-full bg-gradient-to-b from-amber-100/40 via-orange-50/20 to-transparent blur-3xl"
        />

        {/* Bottom glowing aura */}
        <motion.div
          animate={{
            opacity: [0.7, 0.85, 0.7],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-20 h-[350px] w-[90vw] max-w-[1100px] rounded-full bg-gradient-to-t from-amber-200/35 via-amber-100/20 to-transparent blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center sm:px-10 lg:px-8">
        {/* Main Serif Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 sm:mt-4"
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-normal tracking-[-0.02em] text-[#141414] leading-[0.98]">
            Zeon.
          </h1>
          <span className="block font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-normal italic tracking-[-0.02em] text-[#737373] leading-[1.05] mt-1 sm:mt-2">
            One point for everything.
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-[19px] leading-relaxed text-[#4A4A4A] font-normal text-balance"
        >
          ZEON brings your customers, orders, and team into one calm
          workspace so your business can move forward without the clutter.
        </motion.p>

        {/* CTA Group with subtle spring physics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 flex items-center justify-center"
        >
          <Link
            href="/product"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#141414] px-8 text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#262626] hover:shadow-md active:scale-[0.98]"
          >
            <span>Get started</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
