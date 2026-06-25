"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoSrc = "/logo.png/Naraa%20Care%20Logo.png";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
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
        </div>

        {/* Desktop Button */}
        <a
          href="#waitlist"
          className="hidden md:flex items-center bg-[#35AFF4] hover:bg-[#2196F3] text-white text-sm font-medium px-5 py-2.5 rounded-full transition"
        >
          Reserve my spot
        </a>

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
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-[#35AFF4] text-white py-3 rounded-full"
          >
            Reserve my spot
          </a>
        </div>
      )}
    </nav>
  );
}