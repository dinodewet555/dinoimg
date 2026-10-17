"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Shield, CheckCircle2, AlertTriangle, X, Play, Loader2, ArrowRight } from "lucide-react";

interface TerminalAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDomain?: string;
}

interface AuditLog {
  text: string;
  type: "info" | "success" | "warning" | "error" | "highlight";
  timestamp: string;
}

export function TerminalAuditModal({ isOpen, onClose, initialDomain = "" }: TerminalAuditModalProps) {
  const [domain, setDomain] = useState(initialDomain || "mysite.com");
  const [scanType, setScanType] = useState<"full" | "seo" | "security">("full");
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialDomain) setDomain(initialDomain);
  }, [initialDomain]);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const runAudit = () => {
    if (isRunning) return;
    setIsRunning(true);
    setIsCompleted(false);
    setLogs([]);
    setScore(null);

    const now = () => new Date().toISOString().substring(11, 19);

    const sequence: { text: string; type: AuditLog["type"]; delay: number }[] = [
      { text: `[IMG_SYS] INITIATING DEEP SCAN SEQUENCE ON: ${domain.toUpperCase()}`, type: "highlight", delay: 200 },
      { text: `Establishing encrypted socket connection via Node IMG-001 (Cape Town)...`, type: "info", delay: 500 },
      { text: `DNS & SSL Handshake: TLS 1.3 confirmed [ECDHE-RSA-AES256-GCM-SHA384]`, type: "success", delay: 900 },
      { text: `Parsing DOM topology & semantic schema architecture...`, type: "info", delay: 1400 },
      { text: `Entity Extraction: Identified 3 core entities. Missing Wikidata sameAs & schema hierarchy.`, type: "warning", delay: 2000 },
      { text: `AEO/GEO Indexability: LLM crawler visibility (ChatGPT, Perplexity, Gemini) rated at 54%`, type: "warning", delay: 2600 },
      { text: `Executing perimeter vulnerability check & HTTP security header analysis...`, type: "info", delay: 3200 },
      { text: `Content-Security-Policy (CSP) header is MISSING or misconfigured.`, type: "error", delay: 3800 },
      { text: `Strict-Transport-Security (HSTS): Enabled with 31536000 preload flag.`, type: "success", delay: 4200 },
      { text: `Core Web Vitals Telemetry: LCP = 1.1s (GOOD), CLS = 0.01 (OPTIMAL), INP = 42ms`, type: "success", delay: 4800 },
      { text: `Topical Map Completeness: 14 orphan nodes detected in informational cluster.`, type: "warning", delay: 5400 },
      { text: `[IMG_SYS] SCAN CYCLE COMPLETE. COMPOSITE AUTHORITY & SECURITY INDEX: 74/100`, type: "highlight", delay: 6000 },
    ];

    sequence.forEach((item, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, { text: item.text, type: item.type, timestamp: now() }]);
        if (index === sequence.length - 1) {
          setIsRunning(false);
          setIsCompleted(true);
          setScore(74);
        }
      }, item.delay);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl rounded-xl border border-[#00ff66]/40 bg-[#040804] text-[#ecfdf5] shadow-[0_0_50px_rgba(0,255,102,0.2)] overflow-hidden font-mono text-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#00ff66]/20 bg-[#061006] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose}></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-[#00ff66]"></div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00ff66]">
              <Terminal className="h-3.5 w-3.5" />
              <span>IMG_AUDIT_CLI // v2.6.4</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#9ecead] hover:text-[#00ff66] transition-colors p-1"
            aria-label="Close terminal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Input Bar */}
        <div className="border-b border-[#00ff66]/20 bg-[#020502] p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="flex-1 flex items-center gap-2 bg-[#081509] border border-[#00ff66]/30 px-3 py-2 rounded focus-within:border-[#00ff66]">
            <span className="text-[#00ff66] select-none font-bold">&gt;</span>
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="e.g. acme-saas.com"
              disabled={isRunning}
              className="w-full bg-transparent text-[#00ff66] outline-none placeholder-[#00ff66]/40 text-xs sm:text-sm font-mono"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={scanType}
              onChange={(e) => setScanType(e.target.value as any)}
              disabled={isRunning}
              aria-label="Audit Mode"
              className="bg-[#081509] border border-[#00ff66]/30 text-[#86efac] text-xs px-3 py-2.5 rounded outline-none cursor-pointer"
            >
              <option value="full">MODE: FULL SPECTRUM</option>
              <option value="seo">MODE: SEMANTIC SEO & AEO</option>
              <option value="security">MODE: PERIMETER SECURITY</option>
            </select>

            <button
              onClick={runAudit}
              disabled={isRunning || !domain.trim()}
              className="inline-flex items-center justify-center gap-2 bg-[#00ff66] text-[#030603] font-bold px-4 py-2 rounded hover:bg-[#39ff14] disabled:opacity-40 transition-colors shadow-[0_0_15px_rgba(0,255,102,0.4)] text-xs uppercase tracking-wider"
            >
              {isRunning ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>PROBING...</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>EXECUTE</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Terminal Screen Logs */}
        <div className="p-4 sm:p-6 h-72 sm:h-80 overflow-y-auto space-y-2 bg-[#030603]/95 text-xs cyber-scanline">
          {logs.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-[#52795d] space-y-3">
              <Shield className="h-10 w-10 text-[#00ff66]/30 animate-pulse" />
              <div>
                <p className="text-[#86efac]">READY FOR LIVE TELEMETRY AUDIT</p>
                <p className="text-[11px] text-[#52795d] mt-1">
                  Enter target URL above and click [EXECUTE] to test Semantic SEO, AI Search visibility, and Perimeter Security.
                </p>
              </div>
            </div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="flex items-start gap-2.5 leading-relaxed font-mono">
                <span className="text-[#52795d] text-[10px] select-none pt-0.5">{log.timestamp}</span>
                <span className="select-none font-bold text-[#00ff66]">&gt;</span>
                <span
                  className={
                    log.type === "highlight"
                      ? "text-[#00ff66] font-bold glow-green-sm"
                      : log.type === "success"
                      ? "text-[#86efac]"
                      : log.type === "warning"
                      ? "text-yellow-400"
                      : log.type === "error"
                      ? "text-red-400 font-semibold"
                      : "text-[#9ecead]"
                  }
                >
                  {log.text}
                </span>
              </div>
            ))
          )}
          {isRunning && (
            <div className="flex items-center gap-2 text-[#00ff66]">
              <span className="h-2 w-2 rounded-full bg-[#00ff66] animate-ping" />
              <span className="animate-cursor-blink text-sm">█</span>
            </div>
          )}
          <div ref={logsEndRef} />
        </div>

        {/* Result summary banner */}
        {isCompleted && score !== null && (
          <div className="border-t border-[#00ff66]/30 bg-[#061508] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg border border-[#00ff66] bg-[#00ff66]/10 flex flex-col items-center justify-center font-bold">
                <span className="text-xs text-[#86efac]">SCORE</span>
                <span className="text-lg text-[#00ff66] leading-none">{score}%</span>
              </div>
              <div>
                <div className="text-xs font-bold text-[#00ff66] uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#00ff66]" />
                  <span>AUDIT SUMMARY READY</span>
                </div>
                <p className="text-[11px] text-[#9ecead]">
                  Identified 2 critical security gaps & 4 topical entity optimization vectors.
                </p>
              </div>
            </div>

            <a
              href={`mailto:hello@imgdigital.io?subject=In-Depth Audit Request for ${domain}&body=Hello IMG Digital team, I ran a preliminary scan on ${domain} (Score: ${score}/100) and would like to review the complete semantic SEO and cybersecurity roadmap.`}
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00ff66] text-[#030603] px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-[#39ff14] transition-colors"
            >
              <span>REQUEST COMPLETE AUDIT</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        )}

        {/* Footer info bar */}
        <div className="border-t border-[#00ff66]/15 bg-[#020402] px-4 py-2 flex items-center justify-between text-[10px] text-[#52795d]">
          <span>NODE: CAPE TOWN · 33.9249° S</span>
          <span>CEH v10 · CPENT · SEMANTIC GRAPH ENCLAVE</span>
        </div>
      </div>
    </div>
  );
}
