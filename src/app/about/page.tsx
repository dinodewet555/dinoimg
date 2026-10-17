import type { Metadata } from "next";
import Link from "next/link";
import { Terminal, Shield, ArrowUpRight, MapPin, Globe, Cpu, Award, Lock, Sparkles, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us & Studio Manifesto",
  description:
    "Founded in Cape Town in 2019 on one conviction: search, security, AI, and Next.js web engineering belong together. Learn about our team, certifications, and philosophy.",
  alternates: {
    canonical: "https://imgdigital.io/about",
  },
  openGraph: {
    title: "About Us & Studio Manifesto | IMG DIGITAL",
    description:
      "Search intelligence. Security discipline. Founded in Cape Town, serving globally.",
    url: "https://imgdigital.io/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://imgdigital.io",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://imgdigital.io/about",
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://imgdigital.io/about/#webpage",
      url: "https://imgdigital.io/about",
      name: "About IMG DIGITAL",
      description:
        "IMG Digital is an independent studio in Cape Town combining semantic SEO, cyber security, AI, and web engineering.",
      mainEntity: {
        "@type": "Organization",
        name: "IMG DIGITAL",
        foundingDate: "2019",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cape Town",
          addressCountry: "ZA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -33.9249,
          longitude: 18.4241,
        },
      },
    },
  ],
};

const timelineEvents = [
  {
    year: "2019",
    title: "Studio Genesis · Cape Town",
    desc: "Founded on the conviction that organic search and cyber security cannot remain siloed disciplines.",
  },
  {
    year: "2021",
    title: "Scale to 2M+ Monthly Visits",
    desc: "Engineered multi-brand US consumer portfolio architecture scaling past 2,000,000 monthly organic visits.",
  },
  {
    year: "2023",
    title: "AEO / GEO Engine Pioneer",
    desc: "Developed proprietary semantic entity networks preparing enterprise clients for ChatGPT, Perplexity, and Gemini search overviews.",
  },
  {
    year: "2024",
    title: "Defensive Enclave & Next.js 15",
    desc: "Standardized all client builds on Next.js 15 Server Components with CEH v10 and CPENT offensive penetration testing validation.",
  },
  {
    year: "PRESENT",
    title: "Global Enterprise Operations",
    desc: "Serving high-growth SaaS, AI, gaming, and fintech clients across Africa, the USA, the UK, and Europe.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-[#030603] text-[#ecfdf5]">
      <JsonLd data={aboutSchema} />

      {/* Header & Breadcrumb */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 cyber-grid">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-[#52795d] flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-[#00ff66] transition-colors">
              ORIGIN // HOME
            </Link>
            <span>/</span>
            <span className="text-[#00ff66]">ABOUT US</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff66]/30 bg-[#061408] px-3.5 py-1 font-mono text-xs text-[#00ff66] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#00ff66] animate-pulse" />
            <span>03 // STUDIO MANIFESTO &amp; ENCLAVE</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#ecfdf5] leading-[0.95] max-w-4xl">
            An independent<br />
            <span className="text-[#00ff66] glow-green-sm">digital studio.</span>
          </h1>

          <p className="mt-6 max-w-2xl font-mono text-sm sm:text-base text-[#9ecead] leading-relaxed">
            Search intelligence. Security discipline. Human instinct, machine precision. Founded in Cape Town in 2019, serving high-consequence brands globally.
          </p>
        </div>
      </section>

      {/* ========================================================
          THE MANIFESTO: WHY SEARCH & SECURITY UNIFY
          ======================================================== */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#020502]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4 font-mono text-xs text-[#52795d] uppercase space-y-6">
              <div className="border-l-2 border-[#00ff66] pl-4">
                <span className="text-[#00ff66] font-bold block mb-1">FOUNDATION</span>
                <span>EST. 2019 · CAPE TOWN, ZA</span>
              </div>
              <div className="border-l-2 border-[#00ff66]/30 pl-4">
                <span className="text-[#ecfdf5] font-bold block mb-1">GLOBAL REACH</span>
                <span>AFRICA · USA · UK · EUROPE</span>
              </div>
              <div className="border-l-2 border-[#00ff66]/30 pl-4">
                <span className="text-[#ecfdf5] font-bold block mb-1">COORDINATES</span>
                <span>33.9249° S, 18.4241° E</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#ecfdf5] leading-tight">
                Why search authority and cybersecurity belong under one roof.
              </h2>

              <div className="space-y-4 font-mono text-xs sm:text-sm text-[#9ecead] leading-relaxed">
                <p>
                  Most companies treat SEO and security as completely isolated concerns. Marketing hires an agency to push content and acquire backlinks. Engineering hires an auditor once a year to run a compliance checklist.
                </p>
                <p>
                  In the modern AI-indexed web, this division is disastrous. If your site is unranked, your product has zero commercial surface area. But if your site is compromised, your rankings, customer trust, and domain reputation evaporate overnight.
                </p>
                <p className="border-l-2 border-[#00ff66] pl-4 text-[#00ff66] font-semibold py-1">
                  &ldquo;A compromised website gets blacklisted by Chrome, spammed with malicious redirects, and de-indexed by Google. Security protects your rankings as much as it protects your data.&rdquo;
                </p>
                <p>
                  At IMG Digital, our ethical hackers and semantic architects collaborate on the same commits. We ensure every topical entity is structured for AI overviews, while every endpoint, CSP header, and server component is fortified against exploitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CREDENTIALS & ENCLAVE ARCHITECTURE
          ======================================================== */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#030603] cyber-grid">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-4 font-mono text-xs uppercase tracking-[0.2em] mb-12">
            <span className="text-[#00ff66] font-bold">CERTIFICATIONS // DEFENSIVE ENCLAVE</span>
            <span className="text-[#52795d]">VERIFIED OPERATIONAL RIGOR</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 font-mono">
            {/* 01 CEH v10 */}
            <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-6 hover:border-[#00ff66] transition-all">
              <Award className="h-8 w-8 text-[#00ff66] mb-4" />
              <div className="text-xs text-[#52795d] uppercase">DEFENSIVE CERTIFICATION</div>
              <h3 className="font-sans text-xl font-bold text-[#ecfdf5] mt-1">CEH v10 Certified</h3>
              <p className="mt-3 text-xs text-[#9ecead] leading-relaxed">
                Certified Ethical Hacker validation ensuring penetration testing adheres to professional defensive tradecraft.
              </p>
            </div>

            {/* 02 CPENT */}
            <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-6 hover:border-[#00ff66] transition-all">
              <Shield className="h-8 w-8 text-[#00ff66] mb-4" />
              <div className="text-xs text-[#52795d] uppercase">PENETRATION TESTING</div>
              <h3 className="font-sans text-xl font-bold text-[#ecfdf5] mt-1">CPENT Credentialed</h3>
              <p className="mt-3 text-xs text-[#9ecead] leading-relaxed">
                Advanced penetration testing and exploit chaining across hardened corporate perimeter enclaves.
              </p>
            </div>

            {/* 03 NEXT.JS */}
            <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-6 hover:border-[#00ff66] transition-all">
              <Cpu className="h-8 w-8 text-[#00ff66] mb-4" />
              <div className="text-xs text-[#52795d] uppercase">FULL-STACK CORE</div>
              <h3 className="font-sans text-xl font-bold text-[#ecfdf5] mt-1">Next.js Specialists</h3>
              <p className="mt-3 text-xs text-[#9ecead] leading-relaxed">
                Architects specialized in React Server Components, Edge Middleware, and sub-second Core Web Vitals optimization.
              </p>
            </div>

            {/* 04 KNOWLEDGE GRAPH */}
            <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-6 hover:border-[#00ff66] transition-all">
              <Sparkles className="h-8 w-8 text-[#00ff66] mb-4" />
              <div className="text-xs text-[#52795d] uppercase">ONTOLOGY &amp; AEO</div>
              <h3 className="font-sans text-xl font-bold text-[#ecfdf5] mt-1">Ontology Engineers</h3>
              <p className="mt-3 text-xs text-[#9ecead] leading-relaxed">
                Knowledge graph modeling, Wikidata alignment, and vector space calibration for LLM citation ingestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          STUDIO TIMELINE & MILESTONES
          ======================================================== */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#020502]">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-4 font-mono text-xs uppercase tracking-[0.2em] mb-12">
            <span className="text-[#00ff66] font-bold">TIMELINE // EVOLUTION</span>
            <span className="text-[#52795d]">2019 — PRESENT</span>
          </div>

          <div className="relative border-l-2 border-[#00ff66]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 font-mono">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                {/* Node pin */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-[#00ff66] bg-[#030603] group-hover:bg-[#00ff66] transition-colors" />

                <div className="text-xs font-bold text-[#00ff66] uppercase tracking-wider">
                  {evt.year}
                </div>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#ecfdf5] mt-1">
                  {evt.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#9ecead] max-w-2xl font-mono leading-relaxed">
                  {evt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          DIRECT TRANSMISSION CTA
          ======================================================== */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-[#030603] cyber-grid">
        <div className="mx-auto max-w-7xl rounded-2xl border border-[#00ff66]/40 bg-[#061408] p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(0,255,102,0.15)] font-mono">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff66]/30 bg-[#020603] px-3.5 py-1 text-xs text-[#00ff66] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#00ff66] animate-ping" />
            <span>CONNECT WITH THE FOUNDERS</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black text-[#ecfdf5] tracking-tight">
            Ready to build authority<br />
            <span className="text-[#00ff66] glow-green-sm">and harden your perimeter?</span>
          </h2>

          <p className="mt-6 max-w-xl mx-auto text-xs sm:text-sm text-[#9ecead] leading-relaxed">
            Reach out directly to review your website architecture, topical graph, and security posture. We operate in Cape Town, serving clients worldwide.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@imgdigital.io?subject=Inquiry for IMG Digital Founders"
              className="inline-flex items-center gap-2 rounded bg-[#00ff66] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#030603] hover:bg-[#39ff14] transition-all shadow-[0_0_20px_rgba(0,255,102,0.35)]"
            >
              <span>TRANSMIT MESSAGE</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded border border-[#00ff66]/40 bg-[#030804] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#00ff66] hover:bg-[#00ff66]/15 transition-all"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
