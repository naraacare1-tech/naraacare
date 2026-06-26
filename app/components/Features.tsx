"use client";

import { Users, TrendingUp, MessageCircle } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            What NaraaCare Does
          </h2>
          <div className="w-16 h-1 bg-[#35AFF4] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── LEFT: 3 Feature Cards ── */}
          <div className="flex flex-col gap-6">

            {/* Care Circle */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-[#35AFF4]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Care Circle</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Connect with a parent or loved one. See their avatar alongside yours.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Send a care ping{" "}
                <span className="font-semibold text-gray-700">
                  &lsquo;Drink some water 💧&rsquo;
                </span>{" "}
                with one tap.
              </p>
              <p className="text-gray-400 italic text-sm">
                Glow when you are well, know when they are not.
              </p>
            </div>

            {/* Micro Tracking */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <TrendingUp size={20} className="text-[#35AFF4]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Micro Tracking</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Most apps track what you tell them. NaraaCare tracks what you
                forget to mention like sleep consistency, hydration rhythm,
                energy patterns and builds a picture over time.
              </p>
            </div>

            {/* Rin AI */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <MessageCircle size={20} className="text-[#35AFF4]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Rin AI</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Talk to Rin like you&apos;d text a friend.{" "}
                <span className="text-gray-700 font-medium">
                  &ldquo;I had 2 rotis, dal, and a lassi.&rdquo;
                </span>
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Rin instantly breaks down your nutrients, syncing everything
                to your avatar.
              </p>
            </div>

          </div>

          {/* ── RIGHT: Chat + Stats ── */}
          <div className="flex flex-col gap-6">

            {/* Live Conversations Card */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">

              {/* Chat messages */}
              <div className="flex flex-col gap-3">

                {/* Received */}
                <div className="flex justify-start">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-xs text-gray-400 mb-1">Mum • Care Circle</p>
                    <p className="text-sm text-gray-700">
                      Haven&apos;t seen your avatar light up today, everything okay? 💙
                    </p>
                    <p className="text-xs text-gray-400 mt-1">2:14 PM</p>
                  </div>
                </div>

                {/* Sent */}
                <div className="flex justify-end">
                  <div className="bg-[#35AFF4] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-white">
                      Just got busy! Had a late lunch, logging it now 😊
                    </p>
                    <p className="text-xs text-sky-100 mt-1">2:31 PM</p>
                  </div>
                </div>

                {/* Rin AI */}
                <div className="flex justify-start">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-xs text-gray-400 mb-1">Rin AI</p>
                    <p className="text-sm text-gray-700">
                      Logged: dal rice + curd. 480 kcal, 18g protein.
                      Your avatar&apos;s back to full glow ✨
                    </p>
                    <p className="text-xs text-gray-400 mt-1">2:32 PM</p>
                  </div>
                </div>
              </div>

              {/* Label */}
              <p className="text-center text-gray-400 text-sm mt-2">
                Live conversations
              </p>
            </div>

            {/* Today at a Glance Card */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">

                <div className="bg-[#35AFF4] rounded-2xl p-5">
                  <p className="text-3xl font-bold text-white">7.4</p>
                  <p className="text-sky-100 text-sm mt-1">hrs sleep</p>
                  <p className="text-sky-100 text-xs mt-2">↑ 12% this week</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                  <p className="text-3xl font-bold text-gray-900">2.1</p>
                  <p className="text-gray-400 text-sm mt-1">L water</p>
                  <p className="text-gray-400 text-xs mt-2">On track today</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                  <p className="text-3xl font-bold text-gray-900">1,840</p>
                  <p className="text-gray-400 text-sm mt-1">kcal</p>
                  <p className="text-gray-400 text-xs mt-2">Logged via Rin</p>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <p className="text-3xl font-bold text-gray-900">72</p>
                  <p className="text-gray-400 text-sm mt-1">bpm resting</p>
                  <p className="text-amber-500 text-xs mt-2 font-medium">
                    Slightly elevated
                  </p>
                </div>

              </div>

              {/* Label */}
              <p className="text-center text-gray-400 text-sm mt-2">
                Today at a Glance
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}