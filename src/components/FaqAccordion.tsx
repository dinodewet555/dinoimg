"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { JsonLd } from "./JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is semantic SEO and why is it superior to keyword-only SEO?",
    answer:
      "Semantic SEO builds content architectures around defined entities, attributes, and relationships rather than isolated keywords. Search engines like Google and neural answer engines (ChatGPT, Perplexity, Gemini) read the web as an interconnected knowledge graph. By establishing topical authority and clear entity maps, your rankings survive algorithmic changes and get recommended in AI overviews.",
  },
  {
    question: "Can you get our brand cited in ChatGPT, Perplexity, and Google AI Overviews?",
    answer:
      "Yes. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are foundational to our methodology. We craft structured JSON-LD schema networks, entity triples, and citation-ready vector content that LLM crawlers ingest, parse, and cite with high factual confidence.",
  },
  {
    question: "Why does an SEO studio have certified ethical hackers on the team?",
    answer:
      "Because rankings and technical integrity are inseparable. A compromised website gets blacklisted, hijacked for spam networks, de-indexed by Google, or penalized for security vulnerabilities. Security protects your rankings, customer trust, and enterprise data before threats materialize.",
  },
  {
    question: "Do you work with early-stage SaaS, AI, and fintech companies?",
    answer:
      "Yes, high-growth technology startups and established enterprise brands are our core focus. We help tech companies build organic pipeline before spending heavily on PPC, while securing their web applications against breach vectors.",
  },
  {
    question: "Where are you based and how do engagements operate?",
    answer:
      "Our physical studio is situated in Cape Town, South Africa (33.9249° S, 18.4241° E). We operate globally across the Americas, Europe, Africa, and Australasia with high-availability asynchronous sprints and direct Slack/Discord channels.",
  },
];

export function FaqAccordion({ items = defaultFaqs }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="divide-y divide-[#00ff66]/20 border-y border-[#00ff66]/20 max-w-4xl mx-auto font-mono">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-6 transition-colors">
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left flex items-start justify-between gap-4 group focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#ecfdf5] group-hover:text-[#00ff66] transition-colors">
                  {item.question}
                </span>
                <span className="p-1 rounded bg-[#061408] border border-[#00ff66]/30 text-[#00ff66] shrink-0 mt-1">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="mt-4 pt-2 text-xs sm:text-sm text-[#9ecead] leading-relaxed font-sans max-w-3xl">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
