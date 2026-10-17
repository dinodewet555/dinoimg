import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ArrowUpRight,
  ChevronRight,
  Terminal,
  AlertTriangle,
  CheckCircle2,
  Search,
  Cloud,
  Target,
  Bot,
  Globe,
  Lock,
  Cpu,
  Zap,
  Activity,
  FileCheck,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HeroScanner } from "@/components/HeroScanner";

export const metadata: Metadata = {
  title: {
    absolute:
      "IMG DIGITAL — Ethical Hackers & Penetration Testing, Cape Town",
  },
  description:
    "IMG DIGITAL is a Cape Town ethical hacking and penetration testing company. We attack your apps, cloud, people and networks with written permission, then give your team a ranked fix list.",
  alternates: { canonical: "https://imgdigital.io" },
  openGraph: {
    type: "website",
    url: "https://imgdigital.io",
    title:
      "IMG DIGITAL — Ethical Hackers & Penetration Testing, Cape Town",
    description:
      "Authorised cyber-attack simulations. Web, API, cloud, red team, AI/LLM security, ransomware & POPIA readiness. Cape Town, South Africa.",
    siteName: "IMG DIGITAL",
    images: [
      {
        url: "/images/cape-town-hacker-hq.jpg",
        width: 1200,
        height: 675,
        alt: "IMG DIGITAL Cape Town Ethical Hacking Command Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMG DIGITAL — Ethical Hackers, Cape Town",
    description:
      "We find the breach before criminals do. Penetration testing, red team, AI/LLM security — Cape Town.",
    images: ["/images/cape-town-hacker-hq.jpg"],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://imgdigital.io/#organization",
      name: "IMG DIGITAL",
      url: "https://imgdigital.io",
      logo: "https://imgdigital.io/images/logo-cropped.png",
      description:
        "Ethical hacking and penetration testing company based in Cape Town, South Africa.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-33.9249",
        longitude: "18.4241",
      },
      areaServed: "Global",
      knowsAbout: [
        "Ethical Hacking",
        "Penetration Testing",
        "Red Team Simulation",
        "Cloud Security",
        "AI LLM Security Testing",
        "POPIA Compliance",
        "Attack Surface Management",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://imgdigital.io/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ethical hacking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ethical hacking is the authorised, controlled simulation of a cyber attack. Security professionals use the same techniques as criminals to expose weaknesses, then report them so you can fix them first.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a penetration test cost in South Africa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on scope, test type and duration. Contact us for a tailored quote based on your environment and objectives.",
          },
        },
        {
          "@type": "Question",
          name: "Is ethical hacking legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — with a signed authorisation letter and agreed scope. IMG DIGITAL never touches anything outside the written scope.",
          },
        },
        {
          "@type": "Question",
          name: "Will testing disrupt my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We agree on timing and rules of engagement upfront. Most tests run without any business disruption. Destructive actions are never taken without explicit permission.",
          },
        },
        {
          "@type": "Question",
          name: "How often should we test?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At minimum annually and after any major change — new product launch, cloud migration, or significant code release. Continuous attack surface management fills the gaps between point-in-time tests.",
          },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: <Terminal className="h-6 w-6 text-[#00ff66]" />,
    id: "web-api",
    title: "Web, API and Mobile Penetration Testing",
    description: "Manual exploitation of your apps, single-page architectures, and APIs.",
    badge: "OWASP TOP 10",
  },
  {
    icon: <Cloud className="h-6 w-6 text-[#00ff66]" />,
    id: "cloud",
    title: "Cloud Security Assessment",
    description: "AWS, Azure and Google Cloud IAM misconfigurations found and fixed.",
    badge: "IAM & S3 AUDIT",
  },
  {
    icon: <Target className="h-6 w-6 text-[#00ff66]" />,
    id: "red-team",
    title: "Red Team Simulation",
    description: "A covert, goal-based attack that tests whether your human defenders notice.",
    badge: "FULL SPECTRUM",
  },
  {
    icon: <Bot className="h-6 w-6 text-[#00ff66]" />,
    id: "ai-llm",
    title: "AI and LLM Security Testing",
    description: "Prompt injection, training data extraction, and tool-use compromise in AI agents.",
    badge: "NEURAL DEFENCE",
  },
  {
    icon: <Globe className="h-6 w-6 text-[#00ff66]" />,
    id: "asm",
    title: "Attack Surface Management",
    description: "Continuous automated & manual reconnaissance of every exposed asset criminals see.",
    badge: "24/7 PERIMETER",
  },
  {
    icon: <Lock className="h-6 w-6 text-[#00ff66]" />,
    id: "ransomware",
    title: "Ransomware and POPIA Readiness",
    description: "Simulated lateral intrusion plus strict South African POPIA safeguards audit.",
    badge: "POPIA COMPLIANT",
  },
];

const steps = [
  {
    num: "01",
    title: "Scope and authorise",
    description:
      "We agree targets, rules of engagement and a signed authorisation letter. Nothing outside scope is touched.",
  },
  {
    num: "02",
    title: "Recon and attack",
    description:
      "Testers map your systems and manually exploit weaknesses. Scanners assist but never replace people.",
  },
  {
    num: "03",
    title: "Report and brief",
    description:
      "An executive summary for leadership and a technical report with reproduction steps for developers.",
  },
  {
    num: "04",
    title: "Fix and retest",
    description:
      "When you patch, we retest for free and issue a clean letter for clients, boards and auditors.",
  },
];

const comparisonRows = [
  {
    attr: "Goal",
    scan: "List known weaknesses",
    pentest: "Prove what can be exploited",
    redteam: "Reach a business goal undetected",
  },
  {
    attr: "Method",
    scan: "Automated scanner",
    pentest: "Manual offensive testing + tools",
    redteam: "Stealthy, multi-vector simulation",
  },
  {
    attr: "Tests your defenders",
    scan: "No",
    pentest: "Rarely",
    redteam: "Yes — full SOC evaluation",
  },
  {
    attr: "Typical length",
    scan: "Hours",
    pentest: "1 to 3 weeks",
    redteam: "4 to 8 weeks",
  },
  {
    attr: "Choose it when",
    scan: "Monthly hygiene",
    pentest: "Before launch or audit",
    redteam: "Your security team is mature",
  },
];

const faqs = [
  {
    question: "What is ethical hacking?",
    answer:
      "Ethical hacking is the authorised, controlled simulation of a cyber attack. Security professionals use the same techniques as criminals to expose weaknesses, then report them so you can fix them first. For a Cape Town business, that protects customer data, keeps you compliant with POPIA, and avoids the downtime and reputational damage that follow a breach.",
  },
  {
    question: "How much does a penetration test cost in South Africa?",
    answer:
      "Pricing depends on scope, test type and duration. A focused web app test is priced differently from a multi-week red team engagement. Contact us with your environment details and we'll return a transparent, itemised quote.",
  },
  {
    question: "Is ethical hacking legal?",
    answer:
      "Yes — provided there is a signed authorisation letter and agreed written scope before any testing begins. IMG DIGITAL never touches any system or data outside the agreed scope. We operate under formal rules of engagement on every engagement.",
  },
  {
    question: "Will testing disrupt my business?",
    answer:
      "We agree timing and rules of engagement upfront. Most tests run without any user-facing disruption. Destructive or denial-of-service style actions are never taken without explicit written permission from your technical lead.",
  },
  {
    question: "How often should we test?",
    answer:
      "At minimum annually and after every major change — a new product launch, cloud migration, or significant codebase release. Continuous attack surface management fills the gaps between point-in-time penetration tests.",
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      <JsonLd data={homeSchema} />

      {/* =====================================================
          HERO SECTION
          ===================================================== */}
      <section
        id="hero"
        aria-label="Hero"
        className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-[#030603] px-4 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 cyber-grid pt-12 pb-20"
      >
        {/* Background glow & radar sweep effect */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[#00ff66]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          {/* Top location & node indicator */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff66]/30 bg-[#061408] px-3.5 py-1.5 font-mono text-xs text-[#00ff66]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff66] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ff66] shadow-[0_0_10px_#00ff66]" />
              </span>
              <span className="uppercase tracking-wider">
                CAPE TOWN · SOUTH AFRICA · 33.9249° S, 18.4241° E
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#00ff66]/20 bg-[#030804] px-3 py-1 font-mono text-[11px] text-[#52795d]">
              <ShieldCheck className="h-3 w-3 text-[#00ff66]" />
              <span>CEH v10 · CPENT LICENSED</span>
            </div>
          </div>

          {/* Master 2-Column Hero Grid */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Copy, Telemetry & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#ecfdf5] leading-[0.93]">
                Ethical hackers in{" "}
                <span className="text-[#00ff66] glow-green-sm italic">
                  Cape Town
                </span>{" "}
                who find the breach before criminals do.
              </h1>

              <p className="max-w-2xl font-mono text-sm sm:text-base text-[#9ecead] leading-relaxed">
                IMG DIGITAL is a Cape Town ethical hacking and offensive cyber security
                studio. We attack your applications, cloud infrastructure, LLM agents
                and networks with your written permission, then provide your team with
                a ranked, reproducible remediation roadmap.
              </p>

              {/* Live interactive telemetry probe input */}
              <div className="pt-2">
                <HeroScanner />
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded bg-[#00ff66] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#030603] hover:bg-[#39ff14] transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)] active:scale-95"
                >
                  <span>Request a penetration test quote</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded border border-[#00ff66]/40 bg-[#061408] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-[#00ff66] hover:bg-[#00ff66]/15 transition-all active:scale-95"
                >
                  <span>See all 6 services</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Assurance trust chips */}
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-[#52795d]">
                <span className="flex items-center gap-1.5 text-[#86efac]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#00ff66]" />
                  Free Post-Patch Retest
                </span>
                <span className="flex items-center gap-1.5 text-[#86efac]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#00ff66]" />
                  POPIA Safeguards Audit
                </span>
                <span className="flex items-center gap-1.5 text-[#86efac]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#00ff66]" />
                  Zero False Positives Guarantee
                </span>
              </div>
            </div>

            {/* Right Column: Master Hero Terminal HUD featuring Flagship Penthouse HQ Image */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-2xl border border-[#00ff66]/40 bg-[#050f06] p-2 shadow-[0_0_50px_rgba(0,255,102,0.18)] transition-all duration-500 hover:border-[#00ff66] hover:shadow-[0_0_70px_rgba(0,255,102,0.3)]">
                {/* Terminal HUD top bar */}
                <div className="flex items-center justify-between bg-[#020703] px-4 py-2.5 rounded-t-xl border-b border-[#00ff66]/20 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#00ff66]" />
                    <span className="ml-2 font-bold text-[#00ff66] tracking-wider uppercase">
                      HQ_ENCLAVE // CAPE TOWN
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#52795d]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00ff66] animate-ping" />
                    <span className="text-[#00ff66]">LIVE SECURE SESSION</span>
                  </div>
                </div>

                {/* Flagship Hero Photo Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-b-xl bg-[#020502]">
                  <Image
                    src="/images/cape-town-hacker-hq.jpg"
                    alt="IMG DIGITAL Cape Town Ethical Hacking Command Center overlooking Table Mountain"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                  />

                  {/* High-tech HUD grid overlay lines */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020603] via-transparent to-transparent opacity-70" />

                  {/* Corner HUD crosshairs */}
                  <div className="pointer-events-none absolute top-3 left-3 font-mono text-[9px] text-[#00ff66]/70 uppercase tracking-widest bg-[#020603]/80 px-2 py-0.5 rounded border border-[#00ff66]/30 backdrop-blur-sm">
                    LAT -33.9249° · LON 18.4241°
                  </div>
                  <div className="pointer-events-none absolute top-3 right-3 font-mono text-[9px] text-[#00ff66] uppercase tracking-widest bg-[#020603]/80 px-2 py-0.5 rounded border border-[#00ff66]/30 backdrop-blur-sm flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00ff66] animate-pulse" />
                    NEURAL SCAN ACTIVE
                  </div>

                  {/* Floating bottom telemetry badge */}
                  <div className="pointer-events-none absolute bottom-3 inset-x-3 flex items-center justify-between rounded-lg border border-[#00ff66]/30 bg-[#020603]/85 px-3 py-2 backdrop-blur-md font-mono text-[11px]">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/logo-cropped.png"
                        alt="IMG DIGITAL Logo"
                        width={80}
                        height={40}
                        className="h-5 w-auto object-contain"
                      />
                      <span className="text-[#86efac] font-medium hidden sm:inline">
                        TABLE MOUNTAIN SECTOR HQ
                      </span>
                    </div>
                    <span className="text-[#00ff66] font-bold">
                      VERIFIED DEFENCE NODE
                    </span>
                  </div>
                </div>

                {/* Sub-frame telemetry footer */}
                <div className="mt-2 flex items-center justify-between px-3 py-1 font-mono text-[10px] text-[#52795d]">
                  <span>CIPHER: AES-256-GCM</span>
                  <span>ENCLAVE: 0x7F_CPT_ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom telemetry strip */}
        <div className="relative z-10 mx-auto max-w-7xl w-full border-t border-[#00ff66]/15 pt-6 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-[#52795d]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00ff66]" />
            <span className="text-[#86efac]">
              AUTHORISED ATTACK SIMULATIONS · FORMAL RULES OF ENGAGEMENT
            </span>
          </div>
          <span>CEH v10 · CPENT CERTIFIED ETHICAL HACKERS · CAPE TOWN, ZA</span>
        </div>
      </section>

      {/* =====================================================
          SAMPLE FINDING (LIVE PENTEST LAPTOP SHOWCASE)
          ===================================================== */}
      <section
        id="sample-finding"
        aria-label="Sample penetration test finding"
        className="relative bg-[#020502] px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-4 font-mono text-xs uppercase tracking-[0.2em] mb-12">
            <span className="text-[#00ff66] font-bold">
              // LIVE PENETRATION TEST & SAMPLE FINDING
            </span>
            <span className="text-[#52795d] hidden sm:inline">
              REDACTED EVIDENCE FROM AN ACTUAL CLIENT ASSESSMENT
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left: Tactical Laptop Pentest Photo */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative group rounded-xl border border-[#00ff66]/35 bg-[#050e06] p-2 shadow-[0_0_40px_rgba(0,255,102,0.12)]">
                {/* HUD Header */}
                <div className="flex items-center justify-between bg-[#030804] px-4 py-2 border-b border-[#00ff66]/20 font-mono text-[11px]">
                  <div className="flex items-center gap-2 text-[#00ff66]">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>TACTICAL FIELD RIG // TARGET: cape-town.api.domain.co.za</span>
                  </div>
                  <span className="text-red-400 font-bold">3 CRITICAL FOUND</span>
                </div>

                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#020502]">
                  <Image
                    src="/images/cyber-laptop-pentest.jpg"
                    alt="Rugged military laptop executing live vulnerability penetration test on Cape Town API target"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020603]/80 via-transparent to-transparent" />

                  {/* Corner indicator */}
                  <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] bg-[#020603]/90 px-3 py-1.5 rounded border border-[#00ff66]/25 backdrop-blur-sm">
                    <span className="text-[#86efac]">
                      [!] IDOR BROKEN ACCESS CONTROL CONFIRMED
                    </span>
                    <span className="text-[#00ff66] font-bold">200 OK EXPLOITED</span>
                  </div>
                </div>
              </div>

              <p className="font-mono text-xs text-[#52795d] leading-relaxed">
                We don&apos;t just run automated vulnerability scanners and dump a 400-page generic PDF. Our ethical hackers manually craft payloads to prove real-world business impact.
              </p>
            </div>

            {/* Right: Technical Finding Breakdown Card */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-[#00ff66]/35 bg-[#061208] overflow-hidden shadow-[0_0_40px_rgba(0,255,102,0.12)]">
                {/* Terminal header bar */}
                <div className="flex items-center justify-between bg-[#040d05] px-5 py-3.5 border-b border-[#00ff66]/20 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#00ff66]" />
                    <span className="ml-2 text-[#ecfdf5] font-bold uppercase tracking-wider">
                      FINDING_REPORT_CT_0382.pdf · REDACTED
                    </span>
                  </div>
                  <span className="text-[#00ff66] text-[10px] uppercase font-bold">
                    VERIFIED MANUAL EXPLOIT
                  </span>
                </div>

                <div className="divide-y divide-[#00ff66]/15 font-mono text-xs sm:text-sm">
                  {[
                    {
                      label: "Vulnerability",
                      value: "Broken access control in customer REST API (IDOR)",
                      highlight: false,
                    },
                    {
                      label: "Severity",
                      value: "Critical (CVSS 9.1) · Remote Code / Data Exfiltration",
                      highlight: true,
                      danger: true,
                    },
                    {
                      label: "Impact",
                      value: "Any authenticated user could iterate customer IDs and download sensitive POPIA-protected invoices & PII",
                      highlight: false,
                    },
                    {
                      label: "Reproduction",
                      value: "Working curl proof-of-concept and Python exploit script provided to development team",
                      highlight: false,
                    },
                    {
                      label: "Remediation",
                      value: "Implement server-side entity tenant verification & JWT claim authorization middleware",
                      highlight: false,
                    },
                    {
                      label: "Retest Outcome",
                      value: "Passed Clean · Retested within 14 days at zero additional charge",
                      highlight: true,
                      danger: false,
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[130px_1fr] sm:grid-cols-[150px_1fr] gap-4 px-5 py-3.5"
                    >
                      <span className="text-[#52795d] uppercase tracking-wider text-xs font-semibold self-start pt-0.5">
                        {row.label}
                      </span>
                      <span
                        className={
                          row.highlight
                            ? row.danger
                              ? "font-bold text-red-400"
                              : "font-bold text-[#00ff66]"
                            : "text-[#ecfdf5] text-xs sm:text-sm leading-relaxed"
                        }
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#030a04] px-5 py-3 border-t border-[#00ff66]/20 flex items-center justify-between font-mono text-[11px] text-[#86efac]">
                  <span>REMEDIATION WINDOW: 48 HOURS</span>
                  <span className="text-[#00ff66] font-bold">STATUS: RESOLVED & SEALED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT ETHICAL HACKING MEANS (WITH TERMINAL CONSOLE PHOTO)
          ===================================================== */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative bg-[#030603] px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 cyber-grid"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-4 font-mono text-xs uppercase tracking-[0.2em] mb-12">
            <span className="text-[#00ff66] font-bold">
              // OFFENSIVE OPERATIONS & BUSINESS IMPACT
            </span>
            <span className="text-[#52795d] hidden sm:inline">
              CAPE TOWN · SOUTH AFRICA
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left: Hooded Terminal Operations Console Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group rounded-xl border border-[#00ff66]/35 bg-[#050f06] p-2 shadow-[0_0_40px_rgba(0,255,102,0.12)]">
                <div className="flex items-center justify-between bg-[#030804] px-4 py-2 border-b border-[#00ff66]/20 font-mono text-[11px]">
                  <div className="flex items-center gap-2 text-[#00ff66]">
                    <span className="h-2 w-2 rounded-full bg-[#00ff66] animate-pulse" />
                    <span>OPERATIONS // STEALTH RECON CONSOLE</span>
                  </div>
                  <span className="text-[#52795d]">CEH v10 / CPENT</span>
                </div>

                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#020502]">
                  <Image
                    src="/images/ethical-hacker-terminal.jpg"
                    alt="Ethical hacker terminal in Cape Town headquarters analyzing exploit confirmations"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020603]/85 via-transparent to-transparent" />

                  <div className="pointer-events-none absolute bottom-3 left-3 right-3 font-mono text-[10px] text-[#86efac] bg-[#020603]/85 px-3 py-1.5 rounded border border-[#00ff66]/20 backdrop-blur-sm">
                    EXPLOIT CONFIRMED // SERVER-SIDE OWNERSHIP CHECK RECOMMENDED
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Business explanation & POPIA protection */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <h2
                id="about-heading"
                className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#ecfdf5] leading-[0.95]"
              >
                What ethical hacking means{" "}
                <span className="text-[#00ff66] glow-green-sm">
                  for your business.
                </span>
              </h2>

              <div className="font-mono text-xs sm:text-sm text-[#9ecead] leading-relaxed space-y-4">
                <p>
                  Ethical hacking is the authorised, controlled simulation of a
                  real-world cyber attack. Security professionals use the exact same
                  tactics, tools, and evasion techniques as criminal syndicates to expose
                  flaws before they can be weaponized against you.
                </p>
                <p>
                  For South African businesses, this protects customer trust, safeguards
                  proprietary intellectual property, and fulfills mandatory security
                  safeguard obligations under the{" "}
                  <strong className="text-[#00ff66]">
                    Protection of Personal Information Act (POPIA)
                  </strong>
                  . It avoids devastating downtime, multimillion-rand extortion demands,
                  and reputational catastrophe.
                </p>
              </div>

              {/* 3 Core Rules of Engagement */}
              <div className="grid gap-4 sm:grid-cols-3 pt-2 font-mono text-xs">
                <div className="rounded-lg border border-[#00ff66]/20 bg-[#061408] p-4">
                  <div className="text-[#00ff66] font-bold mb-1">01 // AUTHORISED</div>
                  <p className="text-[#9ecead] text-[11px] leading-relaxed">
                    Strict legal letter of authorization. We never touch out-of-scope systems.
                  </p>
                </div>
                <div className="rounded-lg border border-[#00ff66]/20 bg-[#061408] p-4">
                  <div className="text-[#00ff66] font-bold mb-1">02 // NO DISRUPTION</div>
                  <p className="text-[#9ecead] text-[11px] leading-relaxed">
                    Non-destructive testing methods ensure zero downtime for your customers.
                  </p>
                </div>
                <div className="rounded-lg border border-[#00ff66]/20 bg-[#061408] p-4">
                  <div className="text-[#00ff66] font-bold mb-1">03 // DIRECT DEBRIEF</div>
                  <p className="text-[#9ecead] text-[11px] leading-relaxed">
                    Live video briefing with the actual ethical hackers who tested your code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6 SERVICES & AI DEFENCE SPOTLIGHT
          ===================================================== */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="relative bg-[#020502] px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-4 font-mono text-xs uppercase tracking-[0.2em] mb-12">
            <span className="text-[#00ff66] font-bold">// 6 DEFENSIVE DISCIPLINES</span>
            <span className="text-[#52795d] hidden sm:inline">
              WEB · CLOUD · RED TEAM · AI/LLM · ASM · POPIA
            </span>
          </div>

          <h2
            id="services-heading"
            className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#ecfdf5] leading-[0.95] mb-12"
          >
            Every attack surface.{" "}
            <span className="text-[#00ff66] glow-green-sm">Hardened.</span>
          </h2>

          {/* AI Neural Defence Flagship Spotlight Banner */}
          <div className="mb-12 rounded-2xl border border-[#00ff66]/40 bg-[#050f06] p-6 sm:p-8 shadow-[0_0_50px_rgba(0,255,102,0.15)] cyber-grid">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#00ff66]/30 bg-[#020603]">
                <Image
                  src="/images/ai-neural-defence.jpg"
                  alt="AI and LLM Neural Security Testing in Cape Town"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020603]/80 via-transparent to-transparent" />
                <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-[#00ff66] bg-[#020603]/85 px-2.5 py-1 rounded border border-[#00ff66]/30">
                  DEFENDER-X // AI NEURAL SCAN ACTIVE
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 font-mono">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff66]/30 bg-[#020803] px-3 py-1 text-xs text-[#00ff66]">
                  <Bot className="h-3.5 w-3.5" />
                  <span>SPECIALIZED CAPABILITY // AI & LLM SECURITY TESTING</span>
                </div>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#ecfdf5]">
                  Securing AI Chatbots, LLMs & Autonomous Agents
                </h3>
                <p className="text-xs sm:text-sm text-[#9ecead] leading-relaxed">
                  As Cape Town companies integrate OpenAI, Claude, and open-source models into customer workflows, attackers exploit prompt injections, indirect jailbreaks, vector database leakage, and unauthorized tool invocation. We red-team your AI models before production deployment.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                  <span className="rounded bg-[#061408] border border-[#00ff66]/30 px-2.5 py-1 text-[#00ff66]">
                    Indirect Prompt Injection
                  </span>
                  <span className="rounded bg-[#061408] border border-[#00ff66]/30 px-2.5 py-1 text-[#00ff66]">
                    RAG Vector Exfiltration
                  </span>
                  <span className="rounded bg-[#061408] border border-[#00ff66]/30 px-2.5 py-1 text-[#00ff66]">
                    Agent Tool Authorization
                  </span>
                  <span className="rounded bg-[#061408] border border-[#00ff66]/30 px-2.5 py-1 text-[#00ff66]">
                    Training Data Poisoning
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Services Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <article
                key={svc.id}
                className="group relative rounded-xl border border-[#00ff66]/25 bg-[#061208] p-6 hover:border-[#00ff66] hover:shadow-[0_0_30px_rgba(0,255,102,0.18)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>{svc.icon}</div>
                    <span className="font-mono text-[10px] text-[#00ff66] bg-[#020803] border border-[#00ff66]/30 px-2 py-0.5 rounded uppercase">
                      {svc.badge}
                    </span>
                  </div>
                  <h3 className="font-sans text-base font-bold text-[#ecfdf5] group-hover:text-[#00ff66] transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="mt-3 font-mono text-xs text-[#9ecead] leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#00ff66]/15 flex items-center justify-between font-mono text-[11px] text-[#52795d] group-hover:text-[#00ff66] transition-colors">
                  <span>DETAILS & PRICING</span>
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#00ff66]/20">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#00ff66] hover:underline"
            >
              <span>Explore detailed service specifications and scope guidelines</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded bg-[#00ff66] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#030603] hover:bg-[#39ff14] transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]"
            >
              <span>Request scoping call</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW AN ENGAGEMENT WORKS
          ===================================================== */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="relative bg-[#030603] px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 cyber-grid"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-4 font-mono text-xs uppercase tracking-[0.2em] mb-12">
            <span className="text-[#00ff66] font-bold">// HOW AN ENGAGEMENT WORKS</span>
            <span className="text-[#52795d] hidden sm:inline">
              METHODOLOGY · REPORTING · FREE RETEST
            </span>
          </div>

          <h2
            id="process-heading"
            className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#ecfdf5] leading-[0.95] mb-12"
          >
            Four steps.{" "}
            <span className="text-[#00ff66] glow-green-sm">No surprises.</span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 font-mono">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-[#00ff66]/25 bg-[#061208] p-6 flex flex-col justify-between hover:border-[#00ff66]/60 transition-colors"
              >
                <div>
                  <span className="text-xs font-bold text-[#00ff66]">
                    {step.num} &rarr;
                  </span>
                  <h3 className="font-sans text-base font-bold text-[#ecfdf5] mt-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs text-[#9ecead] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-8 text-[10px] text-[#52795d] uppercase border-t border-[#00ff66]/15 pt-3">
                  STAGE // {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPARISON TABLE
          ===================================================== */}
      <section
        id="comparison"
        aria-labelledby="comparison-heading"
        className="relative bg-[#020502] px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-4 font-mono text-xs uppercase tracking-[0.2em] mb-12">
            <span className="text-[#00ff66] font-bold">// COMPARISON MATRIX</span>
            <span className="text-[#52795d] hidden sm:inline">
              SELECTING THE CORRECT ASSESSMENT TYPE
            </span>
          </div>

          <h2
            id="comparison-heading"
            className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#ecfdf5] leading-[0.95] mb-12"
          >
            Pen test vs red team{" "}
            <span className="text-[#00ff66] glow-green-sm">vs vuln scan.</span>
          </h2>

          <div className="overflow-x-auto rounded-xl border border-[#00ff66]/25 shadow-[0_0_40px_rgba(0,255,102,0.08)]">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-[#00ff66]/20 bg-[#040d05]">
                  <th className="px-5 py-4 text-[#52795d] uppercase tracking-wider font-bold">
                    Attribute
                  </th>
                  <th className="px-5 py-4 text-[#9ecead] uppercase tracking-wider font-bold">
                    Vulnerability Scan
                  </th>
                  <th className="px-5 py-4 text-[#00ff66] uppercase tracking-wider font-bold bg-[#00ff66]/10">
                    Penetration Test (Recommended)
                  </th>
                  <th className="px-5 py-4 text-[#9ecead] uppercase tracking-wider font-bold">
                    Red Team Simulation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#00ff66]/10 bg-[#061208]">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-[#00ff66]/5 transition-colors">
                    <td className="px-5 py-4 font-bold text-[#ecfdf5]">
                      {row.attr}
                    </td>
                    <td className="px-5 py-4 text-[#9ecead]">{row.scan}</td>
                    <td className="px-5 py-4 text-[#00ff66] font-semibold bg-[#00ff66]/5">
                      {row.pentest}
                    </td>
                    <td className="px-5 py-4 text-[#9ecead]">{row.redteam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
          ===================================================== */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="relative bg-[#030603] px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 cyber-grid"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-4 font-mono text-xs uppercase tracking-[0.2em] mb-12">
            <span className="text-[#00ff66] font-bold">
              // ETHICAL HACKING QUESTIONS ANSWERED
            </span>
            <span className="text-[#52795d] hidden sm:inline">
              LEGAL · COSTS · REPORTING
            </span>
          </div>

          <h2
            id="faq-heading"
            className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#ecfdf5] leading-[0.95] mb-12"
          >
            Common questions.{" "}
            <span className="text-[#00ff66] glow-green-sm">Straight answers.</span>
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA SECTION
          ===================================================== */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="relative bg-[#020502] px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl rounded-2xl border border-[#00ff66]/40 bg-[#061408] p-8 sm:p-14 text-center shadow-[0_0_60px_rgba(0,255,102,0.2)] cyber-grid">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff66]/30 bg-[#020603] px-3.5 py-1 font-mono text-xs text-[#00ff66] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#00ff66] animate-ping" />
            <span>OPEN CHANNEL · CAPE TOWN ENCLAVE</span>
          </div>

          <h2
            id="contact-heading"
            className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black text-[#ecfdf5] tracking-tight leading-[0.95]"
          >
            Ready to find{" "}
            <span className="text-[#00ff66] glow-green-sm">
              your vulnerabilities first?
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto font-mono text-xs sm:text-sm text-[#9ecead] leading-relaxed">
            Request a confidential penetration test quote. We scope the engagement, agree
            written authorization, execute offensive simulations, and report with step-by-step
            reproduction code — followed by a free retest once your engineers patch.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@imgdigital.io?subject=Penetration Test Quote Request - Cape Town"
              className="inline-flex items-center gap-2 rounded bg-[#00ff66] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-[#030603] hover:bg-[#39ff14] transition-all shadow-[0_0_30px_rgba(0,255,102,0.45)] active:scale-95"
            >
              <span>Request a quote</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded border border-[#00ff66]/40 bg-[#030804] px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-[#00ff66] hover:bg-[#00ff66]/15 transition-all"
            >
              <span>See all services</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
