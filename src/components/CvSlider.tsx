"use client";

import React, { useState } from "react";

const cvTabs = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience & Stack" },
  { id: "reviews", label: "Reviews & Shoutouts" },
  { id: "education", label: "Curriculum & Milestones" },
];

export default function CvSlider() {
  const [activeTab, setActiveTab] = useState<string>("summary");

  return (
    <section className="w-full py-6 relative z-20">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
        <span className="text-sky-400 font-mono text-xs tracking-widest uppercase font-bold">
          // INTERACTIVE PROFILE SLIDER
        </span>
      </div>

      {/* Slider Container with Looping Animated PFP Video Background */}
      <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 shadow-2xl bg-[#010a17]">
        
        {/* Background Looping Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25 filter blur-[2px] scale-105"
          >
            <source src="/videos/pfp-bg.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay Gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#010610]/95 via-[#010a17]/90 to-[#010610]/95" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 p-6 md:p-8 flex flex-col gap-6">
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-sky-500/20 pb-4">
            {cvTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs md:text-sm px-4 py-2.5 rounded-2xl font-mono font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-sky-400 to-blue-500 text-black shadow-lg shadow-sky-500/30 scale-105"
                      : "bg-[#031d33]/60 text-sky-200/70 hover:text-white hover:bg-[#062c4c] border border-sky-500/20"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <div className="min-h-[220px] flex flex-col justify-center text-sky-100">
            {activeTab === "summary" && (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span>🌊</span> Web3 Builder & Technical Creator
                </h3>
                <p className="text-sky-200/80 text-sm leading-relaxed">
                  Passionate builder specializing in Sui Move smart contracts, custom token mechanisms (TreasuryCap), Python AI utilities, and high-impact technical content breakdown threads that bridge complex crypto infrastructure to mainstream developers.
                </p>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span>⚡</span> Core Stack & Focus Areas
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-sky-200/80">
                  <li className="bg-[#031d33]/70 p-3 rounded-xl border border-sky-500/20">
                    <strong className="text-sky-300">Smart Contracts:</strong> Sui Move, token minting/burning, TreasuryCap protocols.
                  </li>
                  <li className="bg-[#031d33]/70 p-3 rounded-xl border border-sky-500/20">
                    <strong className="text-sky-300">AI & App Dev:</strong> Python, Google GenAI SDK (Gemini models), Streamlit interfaces.
                  </li>
                  <li className="bg-[#031d33]/70 p-3 rounded-xl border border-sky-500/20">
                    <strong className="text-sky-300">Decentralized Compute:</strong> Render Network GPU rendering, RWA & data integrity (KGeN).
                  </li>
                  <li className="bg-[#031d33]/70 p-3 rounded-xl border border-sky-300/20">
                    <strong className="text-sky-300">Content Creation:</strong> High-reach X technical threads and video breakdowns.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span>💬</span> Peer Reviews & Community Feedback
                </h3>
                <div className="bg-[#031d33]/70 p-4 rounded-2xl border border-sky-500/20 italic text-sky-200 text-sm">
                  &ldquo;Joezzy consistently ships top-tier technical breakdowns and verified ecosystem bounties. His ability to distill complex protocols like Model Collapse and Physical AI into engaging visual threads is exceptional.&rdquo;
                  <span className="block mt-2 font-mono text-xs text-sky-400 not-italic">— Ecosystem Review</span>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span>🏆</span> Curriculum & Milestones
                </h3>
                <div className="space-y-2 text-sm text-sky-200/80">
                  <div className="flex justify-between items-center bg-[#031d33]/70 p-3 rounded-xl border border-sky-500/20">
                    <span>Sui Move Developer Curriculum (Week 2 Completed)</span>
                    <span className="font-mono text-xs text-sky-400">Verified</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#031d33]/70 p-3 rounded-xl border border-sky-500/20">
                    <span>Python AI Projects Repository & Automation Pipelines</span>
                    <span className="font-mono text-xs text-sky-400">Active</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
