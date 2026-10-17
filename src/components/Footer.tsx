import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Terminal, Shield, ArrowUpRight, Cpu, Lock, Globe, MapPin, Mail, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-[#00ff66]/20 bg-[#020502] text-[#ecfdf5] cyber-grid overflow-hidden">
      {/* Glow highlight bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00ff66] to-transparent opacity-80" />

      {/* Main transmission section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Transmission headline & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Image
                src="/images/logo-cropped.png"
                alt="IMG DIGITAL Logo"
                width={160}
                height={86}
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,255,102,0.4)]"
              />
              <div className="hidden sm:block h-5 w-px bg-[#00ff66]/20" />
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#00ff66]">
                <span className="h-2 w-2 rounded-full bg-[#00ff66] animate-pulse" />
                <span>OPEN ENCLAVE CHANNEL</span>
              </div>
            </div>

            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#ecfdf5] leading-[0.95]">
              Engineered to rank.<br />
              <span className="text-[#00ff66] glow-green-sm">Hardened against threats.</span>
            </h2>

            <p className="max-w-xl font-mono text-sm leading-relaxed text-[#9ecead]">
              Request a confidential audit. We benchmark your topical graph depth, answer-engine indexing, and attack surface. Zero fluff, strict engineering.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:hello@imgdigital.io?subject=Inquiry: Semantic SEO & Security Engagement"
                className="inline-flex items-center gap-2 rounded bg-[#00ff66] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#030603] hover:bg-[#39ff14] transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)]"
              >
                <Mail className="h-4 w-4" />
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-[#00ff66]/40 bg-[#061408] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#00ff66] hover:bg-[#00ff66]/15 transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WHATSAPP DISPATCH</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Directory & Quick Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 border-t border-[#00ff66]/20 pt-8 lg:border-t-0 lg:border-l lg:border-[#00ff66]/20 lg:pl-10 lg:pt-0">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#00ff66] mb-4">
                [ ARCHITECTURE ]
              </h3>
              <ul className="space-y-3 font-mono text-xs text-[#9ecead]">
                <li>
                  <Link href="/" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> Services Matrix
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> Studio & Manifesto
                  </Link>
                </li>
                <li>
                  <Link href="/#results" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> Proven Metrics
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> Technical FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#00ff66] mb-4">
                [ CAPABILITIES ]
              </h3>
              <ul className="space-y-3 font-mono text-xs text-[#9ecead]">
                <li>
                  <Link href="/services#semantic-seo" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> Semantic SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services#ai-search" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> AEO & GEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services#cyber-security" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> Penetration Testing
                  </Link>
                </li>
                <li>
                  <Link href="/services#ai-systems" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> AI Workflows & RAG
                  </Link>
                </li>
                <li>
                  <Link href="/services#web-engineering" className="hover:text-[#00ff66] transition-colors flex items-center gap-1.5">
                    <span className="text-[#00ff66]/50">&gt;</span> Next.js Engineering
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Telemetry info row */}
        <div className="mt-16 border-t border-[#00ff66]/20 pt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#061408] border border-[#00ff66]/30 text-[#00ff66]">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#52795d] uppercase">BASE LOCATION</div>
              <div className="text-[#ecfdf5] font-semibold">Cape Town · 33.9249° S, 18.4241° E</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#061408] border border-[#00ff66]/30 text-[#00ff66]">
              <Globe className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#52795d] uppercase">GLOBAL FOOTPRINT</div>
              <div className="text-[#ecfdf5] font-semibold">Africa, USA, UK, Global</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#061408] border border-[#00ff66]/30 text-[#00ff66]">
              <Shield className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#52795d] uppercase">DEFENSIVE STANDARDS</div>
              <div className="text-[#00ff66] font-semibold">CEH v10 · CPENT Hardened</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#061408] border border-[#00ff66]/30 text-[#00ff66]">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] text-[#52795d] uppercase">ENGINEERING STACK</div>
              <div className="text-[#ecfdf5] font-semibold">Next.js App Router · Edge SEO</div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 border-t border-[#00ff66]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#52795d]">
          <div className="flex items-center gap-2">
            <span className="text-[#00ff66] font-bold">IMG DIGITAL</span>
            <span>·</span>
            <span>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4 text-[#9ecead]">
            <span>CIPHER: TLS 1.3 / AES-256</span>
            <span>·</span>
            <Link href="/sitemap.xml" className="hover:text-[#00ff66] transition-colors">
              SITEMAP.XML
            </Link>
            <span>·</span>
            <Link href="/robots.txt" className="hover:text-[#00ff66] transition-colors">
              ROBOTS.TXT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
