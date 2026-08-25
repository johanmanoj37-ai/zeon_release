"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/brand.png"
            alt="ZEON"
            width={140}
            height={40}
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#4A4A4A]">
          <Link
            href="/product"
            className="transition-colors hover:text-[#141414]"
          >
            Product
          </Link>
          <Link
            href="/help"
            className="transition-colors hover:text-[#141414]"
          >
            Help
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-[#141414]"
          >
            About
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/product"
            className="group flex items-center gap-1.5 text-[15px] font-semibold text-[#141414] transition-all duration-200 hover:opacity-80"
          >
            <span>Get started</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#141414] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E6DF] bg-[#FCFCF9]/95 px-6 py-5 backdrop-blur-md">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#4A4A4A]">
            <Link
              href="/product"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#141414]"
            >
              Product
            </Link>
            <Link
              href="/help"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#141414]"
            >
              Help
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#141414]"
            >
              About
            </Link>
            <div className="pt-2 border-t border-[#E8E6DF]">
              <Link
                href="/product"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between font-semibold text-[#141414] py-1"
              >
                <span>Get started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
