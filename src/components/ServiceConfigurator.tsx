"use client";

import React, { useState } from "react";
import { Check, Terminal, Shield, ArrowRight, Sparkles, Cpu, Layers } from "lucide-react";
import { TerminalAuditModal } from "./TerminalAuditModal";

interface ServiceOption {
  id: string;
  name: string;
  category: string;
  deliverables: string[];
}

const serviceOptions: ServiceOption[] = [
  {
    id: "semantic-seo",
    name: "Semantic SEO & Topical Graph",
    category: "SEARCH",
    deliverables: ["Entity reconciliation", "Topical cluster map", "JSON-LD schema network", "AEO/GEO citation tuning"],
  },
  {
    id: "pentest",
    name: "Perimeter Penetration Testing",
    category: "SECURITY",
    deliverables: ["CEH/CPENT blackbox probe", "CSP L3 policy", "WAF custom rules", "Vulnerability triage report"],
  },
  {
    id: "nextjs-build",
    name: "High-Performance Next.js Build",
    category: "ENGINEERING",
    deliverables: ["Server components architecture", "Sub-second TTFB", "100/100 Core Web Vitals", "Edge deployment"],
  },
  {
    id: "ai-pipeline",
    name: "Autonomous AI & RAG Workflows",
    category: "INTELLIGENCE",
    deliverables: ["Vector database setup", "Enterprise RAG ingestion", "Content validation engine", "Workflow automation"],
  },
];

export function ServiceConfigurator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "semantic-seo",
    "pentest",
    "nextjs-build",
  ]);
  const [scale, setScale] = useState<"startup" | "scaleup" | "enterprise">("scaleup");
  const [terminalOpen, setTerminalOpen] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const selectedCount = selectedServices.length;

  return (
    <>
      <div className="rounded-2xl border border-[#00ff66]/30 bg-[#061208] p-6 sm:p-8 cyber-grid font-mono shadow-[0_0_50px_rgba(0,255,102,0.15)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#00ff66]/20 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#00ff66]">
              <Cpu className="h-4 w-4" />
              <span>INTERACTIVE SCOPE CONFIGURATOR</span>
            </div>
            <p className="text-xs text-[#52795d] mt-1">
              Select desired engineering disciplines to preview deliverables and architecture footprint.
            </p>
          </div>

          {/* Scale selector */}
          <div className="flex items-center gap-1.5 bg-[#020502] p-1 rounded-lg border border-[#00ff66]/30 text-xs">
            {(["startup", "scaleup", "enterprise"] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setScale(tier)}
                className={`px-3 py-1.5 rounded uppercase font-bold transition-colors ${
                  scale === tier
                    ? "bg-[#00ff66] text-[#030603]"
                    : "text-[#9ecead] hover:text-[#00ff66]"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        {/* Services Selectors Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {serviceOptions.map((svc) => {
            const isSelected = selectedServices.includes(svc.id);
            return (
              <div
                key={svc.id}
                onClick={() => toggleService(svc.id)}
                className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                  isSelected
                    ? "border-[#00ff66] bg-[#081a0b] shadow-[0_0_20px_rgba(0,255,102,0.2)]"
                    : "border-[#00ff66]/20 bg-[#040a04] opacity-70 hover:opacity-100 hover:border-[#00ff66]/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#52795d] uppercase tracking-wider">
                    {svc.category}
                  </span>
                  <div
                    className={`h-5 w-5 rounded border flex items-center justify-center ${
                      isSelected
                        ? "border-[#00ff66] bg-[#00ff66] text-[#030603]"
                        : "border-[#00ff66]/40"
                    }`}
                  >
                    {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                  </div>
                </div>

                <div className="mt-2 font-sans text-base font-bold text-[#ecfdf5]">
                  {svc.name}
                </div>

                <ul className="mt-3 space-y-1.5 text-[11px] text-[#9ecead]">
                  {svc.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="text-[#00ff66]">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Dynamic Architectural Output Blueprint */}
        <div className="mt-8 rounded-xl border border-[#00ff66]/30 bg-[#020502] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase text-[#52795d]">
              ESTIMATED ARCHITECTURE SPECS [TIER: {scale.toUpperCase()}]
            </div>
            <div className="font-sans text-lg font-bold text-[#ecfdf5]">
              {selectedCount === 0
                ? "Select at least 1 discipline above"
                : `${selectedCount} Integrated Disciplines Selected`}
            </div>
            <div className="text-xs text-[#86efac]">
              SLA: Dedicated Cape Town Engineering Enclave · Async Sprint Workflow · High Availability
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setTerminalOpen(true)}
              className="inline-flex items-center gap-2 rounded bg-[#061408] border border-[#00ff66]/40 px-4 py-2.5 text-xs font-bold text-[#00ff66] hover:bg-[#00ff66]/20 transition-all uppercase tracking-wider"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>TEST MY DOMAIN</span>
            </button>

            <a
              href={`mailto:hello@imgdigital.io?subject=Engagement Proposal for ${scale.toUpperCase()} Tier (${selectedServices.join(
                ", "
              )})&body=Hello IMG Digital team, I configured our desired architecture stack (${selectedServices.join(
                ", "
              )}) at the ${scale} level. Please provide a formal sprint roadmap and timeline.`}
              className="inline-flex items-center gap-2 rounded bg-[#00ff66] px-5 py-2.5 text-xs font-bold text-[#030603] hover:bg-[#39ff14] transition-all shadow-[0_0_20px_rgba(0,255,102,0.35)] uppercase tracking-wider"
            >
              <span>TRANSMIT SCOPE</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <TerminalAuditModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </>
  );
}
