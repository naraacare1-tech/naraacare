export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none">
                <path
                  d="M1 6L5 10L15 1"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-base font-semibold text-gray-900">NaraaCare</span>
          </div>

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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
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