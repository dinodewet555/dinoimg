"use client";

import React, { useState } from "react";
import { Terminal, Shield, ArrowRight, Activity, Zap } from "lucide-react";
import { TerminalAuditModal } from "./TerminalAuditModal";

export function HeroScanner() {
  const [inputUrl, setInputUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      <div className="w-full max-w-2xl rounded-xl border border-[#00ff66]/30 bg-[#061208]/90 p-3 sm:p-4 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,102,0.15)] font-mono">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#00ff66]/20 text-[11px] text-[#86efac]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00ff66] animate-ping" />
            <span className="text-[#00ff66] font-bold">LIVE TELEMETRY PROBE</span>
          </div>
          <span className="text-[#52795d]">PROTOCOL // TLS_1.3</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
          <div className="flex-1 flex items-center gap-2 bg-[#020603] border border-[#00ff66]/40 px-3.5 py-3 rounded-lg focus-within:border-[#00ff66] focus-within:shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all">
            <span className="text-[#00ff66] font-bold select-none">&gt;</span>
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Enter domain (e.g. acme-saas.com)..."
              className="w-full bg-transparent text-sm text-[#00ff66] placeholder-[#52795d] outline-none font-mono"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00ff66] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#030603] hover:bg-[#39ff14] transition-all shadow-[0_0_20px_rgba(0,255,102,0.35)] active:scale-95 whitespace-nowrap"
          >
            <Terminal className="h-4 w-4" />
            <span>RUN AUDIT</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#52795d] pt-1">
          <span className="flex items-center gap-1.5">
            <Zap className="h-3 w-3 text-[#00ff66]" />
            Entity Graph Analysis
          </span>
          <span className="flex items-center gap-1.5">
            <Activity className="h-3 w-3 text-[#00ff66]" />
            AEO / GEO Indexing Check
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-3 w-3 text-[#00ff66]" />
            Perimeter Security Audit
          </span>
        </div>
      </div>

      <TerminalAuditModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialDomain={inputUrl || "mysite.com"}
      />
    </>
  );
}
