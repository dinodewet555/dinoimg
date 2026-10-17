import type { Metadata } from "next";
import Link from "next/link";
import { Terminal, Shield, ArrowUpRight, Cpu, CheckCircle2, XCircle, Search, Sparkles, Layers, Zap, Lock, Code2, Globe } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { ServiceConfigurator } from "@/components/ServiceConfigurator";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Services & Capabilities Matrix",
  description:
    "Comprehensive breakdown of IMG Digital's unified engineering disciplines: Semantic SEO, Ethical Hacking & Penetration Testing, AI Systems & Next.js Web Engineering.",
  alternates: {
    canonical: "https://imgdigital.io/services",
  },
  openGraph: {
    title: "Services & Capabilities Matrix | IMG DIGITAL",
    description:
      "Semantic SEO, Cyber Security, AI Systems, and Next.js Web Engineering. Cape Town · Serving Globally.",
    url: "https://imgdigital.io/services",
  },
};

const servicesSchema = {
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
          name: "Services",
          item: "https://imgdigital.io/services",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "IMG Digital Services Matrix",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "Semantic SEO & AI Search Optimization (AEO/GEO)",
          description:
            "Entity-first architecture, topical mapping, Semantic Content Networks, and structured JSON-LD schema for search engines and AI overviews.",
          provider: {
            "@type": "Organization",
            name: "IMG DIGITAL",
          },
        },
        {
          "@type": "Service",
          position: 2,
          name: "Cyber Security & Defensive Penetration Testing",
          description:
            "Full-spectrum web application penetration testing, vulnerability triage, and hardening led by certified ethical hackers (CEH v10, CPENT).",
          provider: {
            "@type": "Organization",
            name: "IMG DIGITAL",
          },
        },
        {
          "@type": "Service",
          position: 3,
          name: "AI Systems & Autonomous Workflow Engineering",
          description:
            "Custom LLM integrations, enterprise RAG vector search pipelines, and automated content quality assurance engines.",
          provider: {
            "@type": "Organization",
            name: "IMG DIGITAL",
          },
        },
        {
          "@type": "Service",
          position: 4,
          name: "High-Performance Next.js Web Engineering",
          description:
            "Next.js App Router applications engineered for sub-second load times, 100/100 Core Web Vitals, and day-one semantic indexability.",
          provider: {
            "@type": "Organization",
            name: "IMG DIGITAL",
          },
        },
      ],
    },
  ],
};

const serviceFaqs = [
  {
    question: "How quickly do we see organic ranking improvements with Semantic SEO?",
    answer:
      "Unlike traditional backlink-spam methods, semantic entity clustering establishes topical authority within 6 to 12 weeks. AI search platforms (Perplexity, ChatGPT) often ingest and cite updated schema networks even faster once knowledge triples are validated.",
  },
  {
    question: "What makes your penetration testing different from automated scans?",
    answer:
      "Automated scanners only detect known signatures and produce false positives. Our penetration tests are led by Certified Ethical Hackers (CEH v10, CPENT) who chain complex multi-step exploits, test business logic vulnerabilities, and validate edge WAF protections.",
  },
  {
    question: "Do you re-platform existing websites into Next.js or build from scratch?",
    answer:
      "Both. We frequently execute seamless headless migrations from sluggish legacy systems (WordPress, Drupal, Webflow) into custom Next.js builds with zero loss in search equity, 301 redirect map verification, and massive speed increases.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-[#030603] text-[#ecfdf5]">
      <JsonLd data={servicesSchema} />

      {/* Header & Breadcrumbs */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 cyber-grid">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-[#52795d] flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-[#00ff66] transition-colors">
              ORIGIN // HOME
            </Link>
            <span>/</span>
            <span className="text-[#00ff66]">SERVICES</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff66]/30 bg-[#061408] px-3.5 py-1 font-mono text-xs text-[#00ff66] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#00ff66] animate-pulse" />
            <span>02 // ARCHITECTURAL SPECIFICATIONS</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#ecfdf5] leading-[0.95] max-w-4xl">
            Four disciplines.<br />
            <span className="text-[#00ff66] glow-green-sm">Zero compromises.</span>
          </h1>

          <p className="mt-6 max-w-2xl font-mono text-sm sm:text-base text-[#9ecead] leading-relaxed">
            Search engines are now neural knowledge graphs. Attackers are now autonomous scanners. We engineer your authority and defensive posture as one seamless, high-performance system.
          </p>
        </div>
      </section>

      {/* ========================================================
          DISCIPLINE 01: SEMANTIC SEO
          ======================================================== */}
      <section id="semantic-seo" className="relative px-4 py-20 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#020502]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-xs font-bold text-[#00ff66] uppercase tracking-[0.2em]">
                DISCIPLINE // 01
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#ecfdf5]">
                Semantic SEO &amp; AI Search (AEO/GEO)
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#9ecead] leading-relaxed">
                Keywords tell machines what words you used. Entities tell machines what you mean. We engineer your domain to become the canonical authority for your industry.
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {["Wikidata Triples", "Topical Clustering", "Schema JSON-LD", "Perplexity Indexing", "E-E-A-T Fortification"].map((tag, i) => (
                  <span key={i} className="rounded border border-[#00ff66]/30 bg-[#061408] px-2.5 py-1 font-mono text-[10px] text-[#00ff66]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Search className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Entity-First Architecture</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  We define your brand, executives, products, and core subjects into machine-readable knowledge graph entities connected with global Wikidata identifiers.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Sparkles className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">AEO &amp; GEO Optimization</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Structure your copy with semantic claim-and-evidence patterns that large language models (ChatGPT, Perplexity, Gemini) extract as citations.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Layers className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Topical Maps &amp; Semantic Networks</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Exhaustive content hierarchies designed so no informational query or intent goes unanswered, establishing complete domain authority.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Code2 className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Deep Schema Graph Injection</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Nested multi-entity JSON-LD graphs linking Organization, FAQPage, Service, Product, and Article nodes without broken references.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DISCIPLINE 02: CYBER SECURITY
          ======================================================== */}
      <section id="cyber-security" className="relative px-4 py-20 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#030603] cyber-grid">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-xs font-bold text-[#00ff66] uppercase tracking-[0.2em]">
                DISCIPLINE // 02
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#ecfdf5]">
                Cyber Security &amp; Defensive Hardening
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#9ecead] leading-relaxed">
                Led by certified ethical hackers holding CEH v10 and CPENT credentials. We audit and fortify your digital perimeter before malicious actors find the breach.
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {["CEH v10 Certified", "CPENT Penetration", "OWASP Top 10", "CSP Level 3", "DDoS Hardening"].map((tag, i) => (
                  <span key={i} className="rounded border border-[#00ff66]/30 bg-[#061408] px-2.5 py-1 font-mono text-[10px] text-[#00ff66]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Shield className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Web App Penetration Testing</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Rigorous blackbox and graybox assessments testing authentication flaws, SSRF, injection vectors, and unauthorized privilege escalation.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Lock className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">HTTP Security Header Armor</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Strict Content Security Policy (CSP), HSTS preload, Cross-Origin-Resource-Policy, and Subresource Integrity configuration.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Globe className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">WAF &amp; Bot Mitigation</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Precision Cloudflare and AWS WAF rulesets blocking scraper swarms, credential stuffers, and zero-day probe exploits.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Zap className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Continuous Threat Triage</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Ongoing vulnerability scanning, SSL/TLS certificate monitoring, and domain reputation protection against blacklisting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DISCIPLINE 03: AI SYSTEMS
          ======================================================== */}
      <section id="ai-systems" className="relative px-4 py-20 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#020502]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-xs font-bold text-[#00ff66] uppercase tracking-[0.2em]">
                DISCIPLINE // 03
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#ecfdf5]">
                AI Systems &amp; Workflow Automation
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#9ecead] leading-relaxed">
                Transform repetitive operational bottlenecks into autonomous software pipelines. We engineer custom enterprise RAG pipelines, fine-tuned models, and agentic workflows.
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {["Vector RAG", "Pinecone / Qdrant", "Hallucination Guards", "Agentic Pipelines", "API Workflows"].map((tag, i) => (
                  <span key={i} className="rounded border border-[#00ff66]/30 bg-[#061408] px-2.5 py-1 font-mono text-[10px] text-[#00ff66]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Cpu className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Enterprise RAG Architectures</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Ground internal AI assistants on your proprietary documentation and data schemas with sub-50ms hybrid vector search.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Sparkles className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Content Validation Engines</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Automated semantic verification filters that check topical relevance, factual accuracy, and schema syntax before publication.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Terminal className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Autonomous Operations Bots</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Bespoke integrations connecting Slack, Discord, Linear, and CRMs to automate client triage and telemetry reporting.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Layers className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">LLM Fine-Tuning</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Domain-adapted open weights (Llama 3, Mistral) fine-tuned for high precision terminology, reducing inference cost by 80%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DISCIPLINE 04: WEB ENGINEERING
          ======================================================== */}
      <section id="web-engineering" className="relative px-4 py-20 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#030603] cyber-grid">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-xs font-bold text-[#00ff66] uppercase tracking-[0.2em]">
                DISCIPLINE // 04
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#ecfdf5]">
                Next.js Web Design &amp; High-Performance Eng.
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#9ecead] leading-relaxed">
                Your frontend is your primary brand artifact and search surface. We build uncompromising Next.js applications featuring React Server Components, zero bloat, and sub-second load times.
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {["Next.js 15", "App Router", "100/100 Core Web Vitals", "Edge Streaming", "Accessible UI"].map((tag, i) => (
                  <span key={i} className="rounded border border-[#00ff66]/30 bg-[#061408] px-2.5 py-1 font-mono text-[10px] text-[#00ff66]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Zap className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Sub-Second Time to First Byte</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Global edge CDN distribution and Incremental Static Regeneration ensuring content is ready in milliseconds worldwide.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Code2 className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Server Component Architecture</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Minimal client-side JavaScript payloads. Search engine bots receive pristine, pre-rendered semantic HTML with zero hydration lag.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Shield className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Hardened Next.js Security</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Sanitized Server Actions, CSRF mitigation, strictly isolated API boundaries, and hardened environment variable enclaves.
                </p>
              </div>

              <div className="rounded-xl border border-[#00ff66]/30 bg-[#061208] p-5">
                <Sparkles className="h-6 w-6 text-[#00ff66] mb-3" />
                <h3 className="font-sans text-base font-bold text-[#ecfdf5]">Bespoke Cyber Aesthetics</h3>
                <p className="mt-2 font-mono text-xs text-[#9ecead] leading-relaxed">
                  Curated typography, micro-interactions, responsive telemetry graphics, and dark mode designed to command immediate client respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          INTERACTIVE SCOPE CONFIGURATOR
          ======================================================== */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#020502]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="font-mono text-xs font-bold text-[#00ff66] uppercase tracking-[0.2em] mb-3">
              [ ARCHITECTURAL ESTIMATOR ]
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#ecfdf5]">
              Configure Your Stack
            </h2>
            <p className="mt-3 font-mono text-xs sm:text-sm text-[#9ecead]">
              Select disciplines and organization tier to preview SLA specifications and deliverables.
            </p>
          </div>

          <ServiceConfigurator />
        </div>
      </section>

      {/* ========================================================
          DELIVERABLES COMPARISON MATRIX
          ======================================================== */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#030603] cyber-grid">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-4 font-mono text-xs uppercase tracking-[0.2em] mb-12">
            <span className="text-[#00ff66] font-bold">BENCHMARK // ARCHITECTURAL COMPARISON</span>
            <span className="text-[#52795d]">LEGACY AGENCY VS. IMG DIGITAL</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border border-[#00ff66]/20 rounded-xl overflow-hidden bg-[#061208]">
              <thead>
                <tr className="border-b border-[#00ff66]/20 bg-[#040d05] text-[#00ff66]">
                  <th className="p-4 uppercase tracking-wider font-bold">Vector / Discipline</th>
                  <th className="p-4 uppercase tracking-wider text-[#52795d]">Traditional Digital Agency</th>
                  <th className="p-4 uppercase tracking-wider text-[#00ff66] font-bold bg-[#00ff66]/10">
                    IMG Digital Studio
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#00ff66]/15 text-[#9ecead]">
                <tr>
                  <td className="p-4 font-bold text-[#ecfdf5]">SEO Methodology</td>
                  <td className="p-4 text-[#52795d]">Keyword density, ad-hoc blogging, backlink farms</td>
                  <td className="p-4 text-[#00ff66] bg-[#00ff66]/5 font-semibold">
                    Entity knowledge graphs, topical clustering, Wikidata triples
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#ecfdf5]">AI Search Indexing</td>
                  <td className="p-4 text-[#52795d]">Unprepared; reliant on traditional Google SERPs</td>
                  <td className="p-4 text-[#00ff66] bg-[#00ff66]/5 font-semibold">
                    AEO / GEO optimized for citation in ChatGPT, Perplexity, Gemini
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#ecfdf5]">Cyber Security</td>
                  <td className="p-4 text-[#52795d]">Generic WordPress plugins or completely ignored</td>
                  <td className="p-4 text-[#00ff66] bg-[#00ff66]/5 font-semibold">
                    CEH v10 &amp; CPENT certified ethical hackers, CSP L3, custom WAF
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#ecfdf5]">Frontend Stack</td>
                  <td className="p-4 text-[#52795d]">Bloated templates, heavy builders, slow TTFB (&gt;2.5s)</td>
                  <td className="p-4 text-[#00ff66] bg-[#00ff66]/5 font-semibold">
                    Bespoke Next.js 15 App Router, React Server Components (&lt;400ms TTFB)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#ecfdf5]">Team Structure</td>
                  <td className="p-4 text-[#52795d]">Siloed junior contractors, disconnected account managers</td>
                  <td className="p-4 text-[#00ff66] bg-[#00ff66]/5 font-semibold">
                    Unified senior engineering enclave based in Cape Town
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES FAQ
          ======================================================== */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 border-b border-[#00ff66]/20 bg-[#020502]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="font-mono text-xs font-bold text-[#00ff66] uppercase tracking-[0.2em] mb-3">
              [ FREQUENTLY ANSWERED ]
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-[#ecfdf5]">
              Engagement Queries
            </h2>
          </div>

          <FaqAccordion items={serviceFaqs} />
        </div>
      </section>
    </main>
  );
}
