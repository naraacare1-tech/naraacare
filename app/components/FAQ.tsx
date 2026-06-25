"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is NaraaCare?",
    answer:
      "NaraaCare is an upcoming platform designed to help people stay connected with their loved ones and manage care within trusted circles.",
  },
  {
    question: "Is NaraaCare available right now?",
    answer:
      "Not yet, we're in early access. People on the wait-list get first access to the beta, plus the ability to shape what gets built. You're not signing up for a finished product, you're helping define one.",
  },
  {
    question: "Is there any cost to join the wait-list?",
    answer:
      "Nothing. The waitlist is free. Simply submit your name and email address through the form on this page. It only takes a few seconds.",
  },
  {
    question: "Why should I join the wait-list?",
    answer:
      "By joining early, you'll stay informed about NaraaCare's progress and be among the first people to get benefits when we begin inviting users.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <p className="text-center text-blue-500 font-semibold text-sm mb-10 tracking-wide">
          Frequently Asked Questions
        </p>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                >
                  <span className="text-gray-900 font-semibold text-base">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-blue-500 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}