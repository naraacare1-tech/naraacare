"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const disposableDomains = [
    "mailinator.com", "tempmail.com", "guerrillamail.com",
    "throwaway.email", "yopmail.com", "sharklasers.com",
    "spam4.me", "trashmail.com", "trashmail.me", "trashmail.net",
    "dispostable.com", "maildrop.cc", "temp-mail.org", "temp-mail.io",
    "fakeinbox.com", "mailnull.com", "mailnesia.com", "discardmail.com",
  ];

  const isValidEmail = (email: string) => {
    const formatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!formatValid) return { valid: false, message: "Please enter a valid email address." };

    const domain = email.split("@")[1]?.toLowerCase();
    if (disposableDomains.includes(domain)) {
      return { valid: false, message: "Disposable emails are not allowed. Please use your real email." };
    }

    const similarDomains: Record<string, string> = {
      "gmai.com": "gmail.com",
      "gmial.com": "gmail.com",
      "gmail.co": "gmail.com",
      "yahooo.com": "yahoo.com",
      "yaho.com": "yahoo.com",
      "hotmai.com": "hotmail.com",
      "outlok.com": "outlook.com",
    };

    if (similarDomains[domain]) {
      return { valid: false, message: `Did you mean @${similarDomains[domain]}?` };
    }

    return { valid: true, message: "" };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const validation = isValidEmail(email);
    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.duplicate) {
          setError("This email is already on the waitlist! 🎉");
          return;
        }

        setError(data.message || "Something went wrong. Please try again.");
        return;
      }

      await emailjs.send(
        "service_4q5v0ik",
        "template_h7fe5cb",
        { to_email: email },
        "NydgOvpXfhbbA96pN"
      );

      setSubmitted(true);
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto bg-sky-50 rounded-3xl px-8 py-14 text-center flex flex-col items-center gap-6">

        {/* Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Be part of the
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#35AFF4] leading-tight">
            first version of you.
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          Early access is limited. Join the list and help shape what NaraaCare
          becomes starting with your own health story.
        </p>

        {/* Form */}
        {submitted ? (
          <div className="bg-white border border-sky-200 text-[#35AFF4] px-6 py-4 rounded-2xl text-sm font-medium w-full">
            🎉 You are on the list! We will be in touch soon.
          </div>
        ) : (
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#35AFF4] focus:ring-2 focus:ring-sky-100 transition"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#35AFF4] hover:bg-[#35AFF4]/90 text-white text-sm font-medium px-4 py-3.5 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                Reserve my spot
                <ArrowRight size={16} />
              </button>
            </form>

            {error && (
              <p className="text-red-500 text-xs mt-2 px-2">{error}</p>
            )}
          </div>
        )}

        {/* Share */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="text-gray-400 text-sm">Share it with others:</span>
          <div className="flex items-center gap-3">

            {/* Copy link */}
            <button
              onClick={() => navigator.clipboard.writeText("https://naraacare.com")}
              className="text-gray-400 hover:text-gray-600 transition"
              title="Copy link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </button>

            {/* X */}
            <a
              href="https://x.com/NaraaCare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/naraa.care/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/naraacare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}