"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { TerminalAuditModal } from "./TerminalAuditModal";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const navLinks = [
    { label: "01 // HOME", href: "/" },
    { label: "02 // SERVICES", href: "/services" },
    { label: "03 // ABOUT US", href: "/about" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 h-20 border-b border-[#00ff66]/20 bg-[#030603]/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Node Indicator */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-3 transition-transform active:scale-95"
            >
              <div className="relative flex items-center">
                <Image
                  src="/images/logo-cropped.png"
                  alt="IMG DIGITAL Logo"
                  width={130}
                  height={70}
                  className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,255,102,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,102,0.8)] transition-all"
                  priority
                />
              </div>
            </Link>

            <span className="hidden xl:inline-block rounded border border-[#00ff66]/30 bg-[#061408] px-2 py-0.5 font-mono text-[10px] text-[#00ff66] uppercase tracking-wider">
              NODE / IMG-001 · 33.9249° S
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-1 transition-colors ${
                    isActive ? "text-[#00ff66] font-bold" : "text-[#9ecead] hover:text-[#00ff66]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setAuditModalOpen(true)}
              className="inline-flex items-center gap-2 rounded border border-[#00ff66]/40 bg-[#061408] px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#00ff66] hover:bg-[#00ff66] hover:text-[#030603] transition-all duration-200 shadow-[0_0_15px_rgba(0,255,102,0.15)] active:scale-95"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>TERMINAL AUDIT</span>
            </button>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 rounded bg-[#00ff66] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#030603] hover:bg-[#39ff14] transition-all duration-200 shadow-[0_0_20px_rgba(0,255,102,0.35)] active:scale-95"
            >
              <span>TRANSMISSION</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setAuditModalOpen(true)}
              className="p-2 text-[#00ff66] border border-[#00ff66]/30 rounded bg-[#061408]"
              aria-label="Open Audit Terminal"
            >
              <Terminal className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#00ff66] hover:text-[#39ff14] border border-[#00ff66]/30 rounded bg-[#061408]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden fixed inset-x-0 top-20 bottom-0 bg-[#040804] border-t border-[#00ff66]/30 p-6 flex flex-col justify-between cyber-grid overflow-y-auto">
            <div className="space-y-6 pt-4 font-mono">
              <div className="flex items-center justify-between text-xs text-[#52795d] uppercase border-b border-[#00ff66]/20 pb-3">
                <span>SYSTEM NAVIGATION</span>
                <span className="text-[#00ff66]">NODE / CAPE TOWN</span>
              </div>

              <div className="flex flex-col gap-4 font-sans text-2xl font-bold tracking-tight">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 border-b border-[#00ff66]/10 text-[#ecfdf5] hover:text-[#00ff66] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-5 w-5 text-[#00ff66]" />
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 border-b border-[#00ff66]/10 text-[#ecfdf5] hover:text-[#00ff66] transition-colors"
                >
                  <span>04 // TRANSMISSION</span>
                  <ArrowUpRight className="h-5 w-5 text-[#00ff66]" />
                </Link>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuditModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded bg-[#00ff66] py-3 font-mono text-xs font-bold text-[#030603] uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,102,0.35)]"
                >
                  <Terminal className="h-4 w-4" />
                  <span>RUN LIVE TERMINAL AUDIT</span>
                </button>
              </div>
            </div>

            <div className="border-t border-[#00ff66]/20 pt-4 font-mono text-[11px] text-[#52795d] flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#00ff66]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>CEH v10 · CPENT · SEMANTIC ENCLAVE</span>
              </div>
              <div className="flex justify-between">
                <span>33.9249° S, 18.4241° E</span>
                <span>SERVING GLOBALLY</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Terminal Modal */}
      <TerminalAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </>
  );
}
