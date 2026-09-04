"x client";

import React, { useState } from "react";

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const menuItems = [
    { id: "cv", title: "Professional CV", icon: "📄", description: "View full background, technical skills, and core stack." },
    { id: "experience", title: "Experience & Stack", icon: "⚡", description: "Sui Move, Python AI tooling, and decentralized compute." },
    { id: "reviews", title: "Peer Reviews", icon: "💬", description: "Shoutouts and feedback on technical threads and bounties." },
    { id: "education", title: "Curriculum Milestones", icon: "🏆", description: "Sui Move developer track and repository updates." },
  ];

  return (
    <>
      {/* Pinned Top-Right Stacked Dash Button */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="glass-panel w-12 h-12 rounded-2xl flex flex-col justify-center items-center gap-1.5 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] border border-sky-400/40 bg-[#010a17]/90 group"
          aria-label="Open Menu"
        >
          <span className="w-6 h-0.5 bg-sky-400 rounded-full group-hover:w-7 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          <span className="w-4 h-0.5 bg-sky-400 rounded-full group-hover:w-7 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          <span className="w-5 h-0.5 bg-sky-400 rounded-full group-hover:w-7 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        </button>
      </div>

      {/* Slide-out Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-md transition-opacity duration-300">
          
          {/* Drawer Content Panel with Looping PFP Video Background */}
          <div className="relative w-full max-w-md h-full bg-[#010610] border-l border-sky-500/30 shadow-2xl flex flex-col overflow-hidden animate-slideLeft">
            
            {/* Background Looping Animated PFP Video */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-20 filter blur-[3px] scale-110"
              >
                <source src="/videos/pfp-bg.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-[#010610]/90 via-[#010a17]/85 to-[#010610]/95" />
            </div>

            {/* Drawer Header */}
            <div className="relative z-10 p-6 flex justify-between items-center border-b border-sky-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span className="text-sky-400 font-mono text-xs tracking-widest uppercase font-bold">
                  // NAVIGATION VAULT
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:text-white hover:bg-sky-500/20 flex items-center justify-center transition-all font-mono font-bold"
              >
                ✕
              </button>
            </div>

            {/* Drawer Menu Links */}
            <div className="relative z-10 p-6 space-y-4 overflow-y-auto flex-1">
              <p className="text-xs font-mono text-sky-300/60 mb-2">SELECT A SECTION TO LAUNCH MODAL:</p>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveModal(item.id)}
                  className="w-full text-left p-4 rounded-2xl bg-[#031d33]/80 hover:bg-[#062c4c] border border-sky-500/30 transition-all duration-300 group shadow-lg flex items-center gap-4"
                >
                  <span className="text-2xl p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-base group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sky-200/60 text-xs mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="relative z-10 p-6 border-t border-sky-500/20 text-center font-mono text-xs text-sky-400/60">
              joezzy-web3 • 2026 Portfolio
            </div>
          </div>
        </div>
      )}

      {/* Interactive Modal Popup for Selected Section */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#010a17] border border-sky-500/40 rounded-3xl p-6 md:p-8 shadow-[0_0_40px_rgba(56,189,248,0.2)] overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6 border-b border-sky-500/20 pb-4">
              <h3 className="text-2xl font-black text-white capitalize flex items-center gap-2">
                <span>🌊</span> {activeModal.replace("-", " ")} Overview
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:text-white flex items-center justify-center font-mono font-bold transition-all"
              >
                ✕
              </button>
            </div>

            {/* Modal Dynamic Content */}
            <div className="text-sky-100 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {activeModal === "cv" && (
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-sky-300">Professional Summary</h4>
                  <p className="text-sm text-sky-200/80 leading-relaxed">
                    Dedicated Web3 builder and technical creator proficient in Sui Move smart contracts, custom token minting/burning mechanisms via TreasuryCap, Python automation, and AI tooling. Experienced in translating complex RWA and decentralized infrastructure into high-engagement content.
                  </p>
                </div>
              )}

              {activeModal === "experience" && (
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-sky-300">Technical Stack</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-sky-200/80">
                    <li className="bg-[#031d33] p-3 rounded-xl border border-sky-500/20">
                      <strong className="text-sky-300">Smart Contracts:</strong> Sui Move, TreasuryCap
                    </li>
                    <li className="bg-[#031d33] p-3 rounded-xl border border-sky-500/20">
                      <strong className="text-sky-300">AI / Python:</strong> Google GenAI SDK, Streamlit, API price tracking
                    </li>
                    <li className="bg-[#031d33] p-3 rounded-xl border border-sky-500/20">
                      <strong className="text-sky-300">Infrastructure:</strong> Render Network GPU rendering, KGeN VeriFi
                    </li>
                    <li className="bg-[#031d33] p-3 rounded-xl border border-sky-500/20">
                      <strong className="text-sky-300">Version Control:</strong> Git & GitHub management
                    </li>
                  </ul>
                </div>
              )}

              {activeModal === "reviews" && (
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-sky-300">Peer Reviews & Community Shoutouts</h4>
                  <div className="bg-[#031d33]/80 p-4 rounded-2xl border border-sky-500/20 italic text-sm text-sky-200">
                    &ldquo;Joezzy consistently delivers elite technical breakdowns and verified ecosystem bounties. His breakdown of Model Collapse and Physical AI sets the gold standard for developer content.&rdquo;
                    <span className="block mt-2 font-mono text-xs text-sky-400 not-italic">— Ecosystem Reviewer</span>
                  </div>
                </div>
              )}

              {activeModal === "education" && (
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-sky-300">Curriculum & Progress Milestones</h4>
                  <div className="space-y-2 text-sm text-sky-200/80">
                    <div className="flex justify-between items-center bg-[#031d33] p-3 rounded-xl border border-sky-500/20">
                      <span>Sui Move Developer Curriculum (Week 2 Complete)</span>
                      <span className="font-mono text-xs text-sky-400">Verified</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#031d33] p-3 rounded-xl border border-sky-500/20">
                      <span>Python AI Projects Repository Integration</span>
                      <span className="font-mono text-xs text-sky-400">Active</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-sky-500/20 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-gradient-to-r from-sky-400 to-blue-500 text-black font-black px-6 py-2.5 rounded-xl text-xs shadow-lg shadow-sky-500/20 hover:scale-105 transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
