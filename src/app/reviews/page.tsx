"use client";

import React from "react";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen text-gray-100 p-4 md:p-10 flex flex-col items-center relative overflow-hidden bg-[#010610]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 filter blur-[3px] scale-110">
          <source src="/videos/pfp-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#010610]/85" />
      </div>

      <div className="w-full max-w-3xl relative z-10 space-y-6">
        <div className="flex justify-between items-center glass-panel p-5 rounded-2xl">
          <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
            <span>💬</span> Peer Reviews
          </h1>
          <Link href="/" className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:text-white font-mono text-xs font-bold transition-all">
            ← Back to Vault
          </Link>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-3xl space-y-4">
          <div className="bg-[#031d33]/80 p-5 rounded-2xl border border-sky-500/20 italic text-sm text-sky-200">
            &ldquo;Joezzy consistently delivers elite technical breakdowns and verified ecosystem bounties. His breakdown of Model Collapse and Physical AI sets the gold standard for developer content.&rdquo;
            <span className="block mt-3 font-mono text-xs text-sky-400 not-italic">— Ecosystem Reviewer</span>
          </div>
        </div>
      </div>
    </main>
  );
}
