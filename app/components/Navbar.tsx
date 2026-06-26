"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoSrc = "/logo.png/Logo.jpg";
  const buttonClassName =
    "inline-flex items-center justify-center bg-[#35AFF4] hover:bg-[#35AFF4]/90 text-white text-sm font-medium px-5 py-2.5 rounded-full transition";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="NaraaCare"
            width={40}
            height={40}
            priority
            className="object-contain"
          />

          <span className="text-[#35AFF4] font-semibold text-xl">
            NaraaCare
          </span>
        </Link>

        {/* Desktop Button */}
        <Link
          href="/#waitlist"
          className={`${buttonClassName} hidden md:flex`}
        >
          Reserve my spot
        </Link>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <Link
            href="/#waitlist"
            onClick={() => setMenuOpen(false)}
            className={`${buttonClassName} block text-center w-full py-3`}
          >
            Reserve my spot
          </Link>
        </div>
      )}
    </nav>
  );
}