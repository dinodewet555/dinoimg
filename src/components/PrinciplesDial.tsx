"use client";

import React, { useState } from "react";
import { ShieldCheck, Compass, Sparkles, Target, Layers } from "lucide-react";

interface Principle {
  id: string;
  tag: string;
  title: string;
  description: string;
  angle: number;
  icon: React.ReactNode;
}

const principles: Principle[] = [
  {
    id: "01",
    tag: "01 / AUTHORITY",
    title: "Authority over traffic.",
    description: "Rankings that survive algorithmic updates, volatility, and AI platform shifts.",
    angle: 0,
    icon: <Target className="h-5 w-5 text-[#00ff66]" />,
  },
  {
    id: "02",
    tag: "02 / DEFENSE",
    title: "Security by default.",
    description: "Never an afterthought or third-party patch. Built into the codebase from day zero.",
    angle: 72,
    icon: <ShieldCheck className="h-5 w-5 text-[#00ff66]" />,
  },
  {
    id: "03",
    tag: "03 / SYNTHETIC",
    title: "Built for AI search.",
    description: "Engineered with knowledge graph entities to be ingested, cited, and recommended by LLMs.",
    angle: 144,
    icon: <Sparkles className="h-5 w-5 text-[#00ff66]" />,
  },
  {
    id: "04",
    tag: "04 / UNIFIED",
    title: "One unified team.",
    description: "Cybersecurity operators and semantic SEO architects collaborating under one roof. Zero handoffs.",
    angle: 216,
    icon: <Layers className="h-5 w-5 text-[#00ff66]" />,
  },
  {
    id: "05",
    tag: "05 / EMPIRICAL",
    title: "Empirically measured.",
    description: "Pipeline revenue, qualified inbound volume, and attack surface mitigation—not vanity impressions.",
    angle: 288,
    icon: <Compass className="h-5 w-5 text-[#00ff66]" />,
  },
];

export function PrinciplesDial() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentPrinciple = principles[activeStep];

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
      {/* Dial Visual Enclave (Left) */}
      <div className="lg:col-span-5 flex justify-center">
        <div className="relative w-full max-w-sm rounded-2xl border border-[#00ff66]/30 bg-[#061208] p-8 text-center shadow-[0_0_50px_rgba(0,255,102,0.15)] cyber-grid">
          {/* Top metadata */}
          <div className="flex items-center justify-between font-mono text-[11px] text-[#52795d] uppercase border-b border-[#00ff66]/20 pb-3">
            <span>SYS_DIAL // RADAR</span>
            <span className="text-[#00ff66]">ACTIVE [ROT_{currentPrinciple.angle}°]</span>
          </div>

          {/* Interactive Dial Graphic */}
          <div className="my-10 flex justify-center items-center">
            <div
              className="relative flex h-56 w-56 items-center justify-center rounded-full border border-[#00ff66]/50 bg-[#030804] text-center font-mono text-xs uppercase transition-transform duration-700 ease-out shadow-[0_0_30px_rgba(0,255,102,0.2)]"
              style={{ transform: `rotate(${currentPrinciple.angle}deg)` }}
            >
              {/* Outer dashed ring */}
              <div className="absolute inset-3 rounded-full border border-[#00ff66]/30 border-dashed animate-spin [animation-duration:45s]" />

              {/* Needle indicator dot */}
              <span className="absolute -top-1.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#00ff66] shadow-[0_0_15px_#00ff66]" />

              {/* Inner dial center text counter-rotated so it stays upright */}
              <div
                className="relative z-10 px-4 leading-tight font-bold transition-transform duration-700 ease-out"
                style={{ transform: `rotate(-${currentPrinciple.angle}deg)` }}
              >
                <div className="text-[10px] text-[#52795d]">DISCIPLINE</div>
                <div className="text-sm text-[#00ff66] mt-0.5">HUMAN INSTINCT</div>
                <div className="text-xs text-[#ecfdf5]">MACHINE PRECISION</div>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry metadata */}
          <div className="border-t border-[#00ff66]/20 pt-3 flex justify-between font-mono text-[10px] text-[#52795d] uppercase">
            <span>COORDS: 33.9249° S</span>
            <span className="text-[#00ff66] font-bold">NODE / IMG-001</span>
          </div>
        </div>
      </div>

      {/* Principles List (Right) */}
      <div className="lg:col-span-7 space-y-4">
        <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff66] mb-4">
          // DISCIPLINE IN PRACTICE
        </div>

        <div className="divide-y divide-[#00ff66]/20 border-y border-[#00ff66]/20">
          {principles.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={item.id}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer py-6 px-4 -mx-4 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#061408] border-l-4 border-l-[#00ff66]"
                    : "hover:bg-[#061006] hover:border-l-4 hover:border-l-[#00ff66]/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#00ff66] font-bold">
                    <span>{item.tag}</span>
                  </div>
                  <div className="font-mono text-xs text-[#52795d]">
                    {isActive ? "[ ACTIVE FOCUS ]" : `[ ROT: ${item.angle}° ]`}
                  </div>
                </div>

                <h3 className="mt-2 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#ecfdf5]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#9ecead] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
