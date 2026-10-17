"use client";

import React, { useState } from "react";
import { ChevronRight, Shield, Zap, Database } from "lucide-react";

interface SectorItem {
  id: string;
  name: string;
  focus: string;
  details: string;
  vectors: string[];
}

const sectors: SectorItem[] = [
  {
    id: "01",
    name: "SaaS & B2B SOFTWARE",
    focus: "Product-led SEO, comparison matrices, integration hubs.",
    details:
      "Deep semantic mapping of software features, buyer intent workflows, API documentation indexing, and entity clustering against competitor software alternatives.",
    vectors: ["Entity Clustering", "Comparison Matrix Schema", "Tenant Subdomain Isolation"],
  },
  {
    id: "02",
    name: "AI & MACHINE LEARNING",
    focus: "Entity positioning, technical content, answer-engine visibility.",
    details:
      "Positioning generative AI and enterprise ML products directly into Perplexity, Gemini, and ChatGPT citation graphs with vector embeddings and machine-readable schema.",
    vectors: ["AEO Citation Ingestion", "Topical Authority Node", "API Endpoint Hardening"],
  },
  {
    id: "03",
    name: "GAMING & ESPORTS",
    focus: "Community SEO, ultra-fast media-rich builds, DDoS and bot protection.",
    details:
      "Engineered for millions of concurrent users. Sub-second global CDN edge caching, tournament schema, aggressive bot filtering, and DDoS mitigation.",
    vectors: ["DDoS Edge Mitigation", "Dynamic Core Web Vitals", "Realtime WebSocket WAF"],
  },
  {
    id: "04",
    name: "FINTECH & DIGITAL BANKING",
    focus: "Trust-first content, secure builds, compliance-aware messaging.",
    details:
      "E-E-A-T entity reinforcement for YMYL financial topics combined with strict OWASP Top 10 compliance, CSP Level 3, and data residency audits.",
    vectors: ["YMYL Financial Authority", "Strict CSP L3", "Penetration Hardening"],
  },
  {
    id: "05",
    name: "CYBER & IT SERVICES",
    focus: "Thought-leadership architecture, lead-gen and authority systems.",
    details:
      "Building high-value B2B pipeline through technical whitepaper indexing, zero-trust infrastructure showcases, and attack-vector explainers.",
    vectors: ["Vulnerability Triage SEO", "B2B Trust Funnel", "Zero-Trust Architecture"],
  },
  {
    id: "06",
    name: "E-COMMERCE & DTC",
    focus: "Catalogue-scale technical SEO, rich-result schema, storefront security.",
    details:
      "Algorithmic category and product taxonomy optimization, Google Merchant Feed schema integration, card skimming defense, and checkout bot suppression.",
    vectors: ["Merchant Schema Graph", "Magecart / XSS Defense", "Sub-Second Checkout TTFB"],
  },
  {
    id: "07",
    name: "HEALTHTECH & MEDTECH",
    focus: "Credible, privacy-conscious platforms with clinical authority.",
    details:
      "HIPAA/POPIA compliance architecture, medical expert entity validation, and verified citation schemas that satisfy Google's medical quality raters.",
    vectors: ["Medical Schema Verification", "POPIA/GDPR Hardening", "Clinical Entity Signals"],
  },
  {
    id: "08",
    name: "WEB3 & DIGITAL ASSETS",
    focus: "Authority content, hardened front-ends, RPC spoofing defense.",
    details:
      "Hardened frontends resistant to DNS hijacking, malicious domain clones, and phishing vectors, with deep semantic coverage of cryptographic protocols.",
    vectors: ["DNSSEC & Subdomain Armor", "Protocol Schema", "Anti-Phishing Surveillance"],
  },
  {
    id: "09",
    name: "CLEANTECH & ENERGY",
    focus: "Visibility for the infrastructure powering the next decade.",
    details:
      "Technical positioning for solar, battery storage, and climate software. Capture institutional and municipal procurement search demand.",
    vectors: ["ESG Topic Mapping", "Procurement Intent SEO", "Infrastructure Security"],
  },
  {
    id: "10",
    name: "PROFESSIONAL SERVICES",
    focus: "High-value legal, finance, consulting, and advisory practices.",
    details:
      "Dominating high-ticket local and international advisory searches through practitioner schema, case-record entities, and reputation insulation.",
    vectors: ["Practitioner Entity Graph", "Local Knowledge Panel", "Confidential Lead Encrypt"],
  },
];

export function SectorsAccordion() {
  const [expandedId, setExpandedId] = useState<string>("01");

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="divide-y divide-[#00ff66]/20 border-y border-[#00ff66]/20 font-mono">
      {sectors.map((sector) => {
        const isOpen = expandedId === sector.id;
        return (
          <div
            key={sector.id}
            onClick={() => toggle(sector.id)}
            className={`cursor-pointer px-4 py-5 transition-all duration-200 ${
              isOpen
                ? "bg-[#061408] border-l-2 border-l-[#00ff66]"
                : "hover:bg-[#061006] hover:border-l-2 hover:border-l-[#00ff66]/50"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 sm:gap-8">
                <span className="text-xs font-bold text-[#00ff66]">{sector.id}</span>
                <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[#ecfdf5]">
                  {sector.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-[11px] text-[#52795d] uppercase tracking-wider">
                  {isOpen ? "COLLAPSE" : "EXPAND // SPECS"}
                </span>
                <ChevronRight
                  className={`h-4 w-4 text-[#00ff66] transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </div>
            </div>

            {/* Expandable details content */}
            {isOpen && (
              <div className="pt-4 pb-2 pl-8 sm:pl-12 space-y-3">
                <p className="text-xs sm:text-sm text-[#86efac] leading-relaxed">
                  {sector.focus}
                </p>
                <p className="text-xs text-[#9ecead]/80 font-sans leading-relaxed max-w-3xl">
                  {sector.details}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {sector.vectors.map((vec, i) => (
                    <span
                      key={i}
                      className="rounded border border-[#00ff66]/30 bg-[#020603] px-2.5 py-1 text-[10px] text-[#00ff66] uppercase tracking-wider"
                    >
                      {vec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
