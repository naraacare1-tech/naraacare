"use client";

import { useState, useEffect, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [activeFeature, setActiveFeature] = useState(0);
  const avatarSrc = encodeURI(
    "/avatars.png/WhatsApp Image 2026-06-22 at 12.31.30 PM.jpeg"
  );

  const features = [
    {
      title: "Customizable Avatar",
      description:
        "Your body, your data. Build a personal health baseline and watch your avatar evolve as your nutrition, sleep, and activity improve.",
    },
    {
      title: "Hydration",
      description:
        "Track every sip. Get real-time alerts when you're falling behind and see how your hydration levels impact your energy and focus throughout the day.",
    },
    {
      title: "Nutrition",
      description:
        "Know what your body actually absorbs, not just what you eat. Optimize meals for your unique biology.",
    },
    {
      title: "Anatomy",
      description:
        "See the impact inside. A 3D view of your organs shows how your lifestyle choices affect your body in real time.",
    },
    {
      title: "Sleep & Activity",
      description:
        "Understand your recovery, not just your rest. See how your movements and sleep affect your body.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [features.length]);

  const disposableDomains = [
    "mailinator.com",
    "tempmail.com",
    "guerrillamail.com",
    "throwaway.email",
    "yopmail.com",
    "sharklasers.com",
    "spam4.me",
    "trashmail.com",
    "trashmail.me",
    "trashmail.net",
    "dispostable.com",
    "maildrop.cc",
    "temp-mail.org",
    "temp-mail.io",
    "fakeinbox.com",
    "mailnull.com",
    "mailnesia.com",
    "discardmail.com",
  ];

  const isValidEmail = (value: string) => {
    const formatValid = /^\S+@\S+\.\S+$/.test(value);
    if (!formatValid) {
      return { valid: false, message: "Please enter a valid email address." };
    }

    const domain = value.split("@")[1]?.toLowerCase();
    if (disposableDomains.includes(domain)) {
      return {
        valid: false,
        message: "Disposable emails are not allowed. Please use your real email.",
      };
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
      await fetch(
        "https://script.google.com/macros/s/AKfycbzmkVZZtd92PQOn4BQvJXHdne3oGOactsiLHfvUfbuu_EiCInbyw-OH0EzeGrzX1qMq/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
          mode: "no-cors",
        }
      );

      await emailjs.send(
        "service_4q5v0ik",
        "template_h7fe5cb",
        { to_email: email },
        "NydgOvpXfhbbA96pN"
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      setSubmitted(true);
    }
  };

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Hero */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 border border-amber-400 text-amber-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              NOW OPEN FOR EARLY ACCESS
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Meet Every
            </h1>

            <h1 className="text-5xl md:text-6xl font-bold text-[#35AFF4] leading-tight">
              Version of You
            </h1>

            <p className="mt-6 text-gray-500 text-lg max-w-md leading-relaxed">
              Food, sleep, hydration, stress, recovery connected in one place
              for you and the people who care about you.
            </p>

            {/* Mobile Avatar */}
            <div className="lg:hidden mt-8 flex justify-center">
              <Image
                src={avatarSrc}
                alt="Avatar"
                width={800}
                height={800}
                className="w-full max-w-md h-auto"
                priority
              />
            </div>

            {/* Rotating Feature Card */}
            <div className="mt-8 bg-white border border-blue-100 rounded-3xl p-6 shadow-lg max-w-lg min-h-[190px] transition-all duration-500">

              <div key={features[activeFeature].title}>
                <h3 className="text-[#35AFF4] font-semibold text-lg mb-3">
                  {features[activeFeature].title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {features[activeFeature].description}
                </p>
              </div>

            </div>

          </div>

          {/* Desktop Avatar */}
          <div className="hidden lg:flex justify-center">
            <Image
              src={avatarSrc}
              alt="Avatar"
              width={1000}
              height={1000}
              priority
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>

        </div>

        {/* Email Form */}
        <div
          id="waitlist"
          className="max-w-2xl mx-auto mt-16"
        >
          {submitted ? (
            <div className="bg-sky-50 border border-sky-200 text-[#35AFF4] rounded-2xl py-4 px-6 text-center">
              🎉 Thanks for joining the waitlist!
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full sm:w-[550px] px-6 py-4 rounded-full border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#35AFF4] focus:ring-2 focus:ring-sky-100 transition"
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#35AFF4] hover:bg-[#35AFF4]/90 text-white text-sm font-medium px-8 py-4 rounded-full whitespace-nowrap"
                >
                  Reserve my spot
                  <ArrowRight size={16} />
                </button>
              </form>

              {error ? <p className="text-sm text-red-600 mt-2">{error}</p> : null}
            </>
          )}
        </div>

      </div>
    </section>
  );
}