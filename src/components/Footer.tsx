import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E8E6DF] bg-white py-8 sm:py-10 text-[#5A5A5A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/brand.png"
              alt="ZEON by XEOPS - Warehouse & Order Management Logo"
              width={100}
              height={30}
              className="h-6 w-auto object-contain transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Crawl-Friendly Internal Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#5A5A5A]"
          >
            <Link href="/product" className="transition-colors hover:text-[#141414] hover:underline">
              Product &amp; Downloads
            </Link>
            <Link href="/features" className="transition-colors hover:text-[#141414] hover:underline">
              Features
            </Link>
            <Link
              href="/solutions/footwear-wholesale"
              className="transition-colors hover:text-[#141414] hover:underline"
            >
              Footwear Wholesale
            </Link>
            <Link href="/help" className="transition-colors hover:text-[#141414] hover:underline">
              Help &amp; FAQ
            </Link>
            <Link href="/about" className="transition-colors hover:text-[#141414] hover:underline">
              About
            </Link>
          </nav>
        </div>

        {/* Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#EFECE6] pt-5 text-xs text-[#737373] text-center sm:text-left">
          <p suppressHydrationWarning>
            © {currentYear}{" "}
            <a
              href="https://xeops.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#5A5A5A] transition-colors hover:text-[#141414] hover:underline"
            >
              XEOPS
            </a>
            . All rights reserved. ZEON™ is a B2B software product by{" "}
            <a
              href="https://xeops.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#5A5A5A] transition-colors hover:text-[#141414] hover:underline"
            >
              XEOPS
            </a>
            .
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/terms"
              className="py-1 font-medium text-[#5A5A5A] transition-colors hover:text-[#141414] hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="py-1 font-medium text-[#5A5A5A] transition-colors hover:text-[#141414] hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
