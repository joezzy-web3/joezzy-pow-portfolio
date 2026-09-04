"use client";

export default function CvPage() {
  return (
    <main className="relative min-h-screen bg-[#010a17] text-white p-6 md:p-12 overflow-hidden flex flex-col justify-between">
      
      {/* Background Animated Video Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/animated-pfp.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#010a17]/80 pointer-events-none" />
      </div>

      {/* Content Layer */}
      <div className="relative z-50 max-w-4xl mx-auto w-full space-y-8">
        <div className="flex justify-between items-center border-b border-sky-500/20 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📄</span>
            <h1 className="text-3xl font-black tracking-tight text-white">Professional CV</h1>
          </div>
          
          {/* Native HTML button with direct window assignment to guarantee click navigation */}
          <button
            onClick={() => { window.location.href = "/"; }}
            className="px-4 py-2 rounded-xl bg-sky-500/30 border border-sky-400 text-white font-mono text-xs hover:bg-sky-500/50 transition-all shadow-2xl cursor-pointer"
          >
            ← Back to Vault
          </button>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-3xl border border-sky-500/20 bg-[#031d33]/50 backdrop-blur-md shadow-xl space-y-3">
            <h2 className="text-xl font-bold text-white font-mono">Summary</h2>
            <p className="text-sky-200/90 text-base leading-relaxed">
              Dedicated Web3 builder and technical creator proficient in Sui Move smart contracts, custom token minting/burning mechanisms via TreasuryCap, Python automation, and AI tooling. Experienced in translating complex RWA and decentralized infrastructure into high-engagement content.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-sky-500/20 bg-[#031d33]/50 backdrop-blur-md shadow-xl space-y-3">
            <h2 className="text-xl font-bold text-white font-mono">Core Expertise</h2>
            <p className="text-sky-200/90 text-base leading-relaxed">
              Specialized in decentralized finance logic, data integrity protocols (KGeN VeriFi), and high-reach X technical threads and video breakdowns.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="relative z-50 max-w-4xl mx-auto w-full pt-8 border-t border-sky-500/20 mt-12 flex justify-end">
        <a
          href="/videos/animated-pfp.mp4"
          download
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-black font-black font-mono text-xs uppercase tracking-wider shadow-lg shadow-sky-500/20 hover:scale-105 transition-all cursor-pointer"
        >
          Download CV Asset / Resume ↗
        </a>
      </div>

    </main>
  );
}
