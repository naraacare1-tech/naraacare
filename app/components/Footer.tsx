import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Go to home page">
            <Image
              src="/logo.png/Logo.jpeg"
              alt="NaraaCare"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-base font-semibold text-[#35AFF4] leading-none">NaraaCare</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-gray-600 text-sm transition">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-gray-600 text-sm transition">
              Terms of Service
            </a>
            <a href="mailto:info@naraacare.com" className="text-gray-400 hover:text-gray-600 text-sm transition">
              Contact Us
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://x.com/NaraaCare" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/naraa.care/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/naraacare/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-6">
          © 2026 NaraaCare. All rights reserved.
        </p>

      </div>
    </footer>
  );
}