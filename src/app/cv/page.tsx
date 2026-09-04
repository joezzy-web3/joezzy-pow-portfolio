import Link from "next/link";

export default function CvPage() {
  return (
    <main className="relative min-h-screen text-white p-6 md:p-12 overflow-hidden flex flex-col justify-between">
      
      {/* Background Animated Video Layer - Boosted Brightness */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-150 contrast-125 opacity-90"
        >
          <source src="/videos/animated-pfp.mp4" type="video/mp4" />
        </video>
        {/* Very light overlay to keep text readable without hiding the video */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto w-full space-y-8">
        <div className="flex justify-between items-center border-b border-white/20 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📄</span>
            <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-md">Professional CV</h1>
          </div>
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-black/60 border border-white/30 text-white font-mono text-xs hover:bg-black/80 transition-all shadow-lg backdrop-blur-md"
          >
            ← Back to Vault
          </Link>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl space-y-3">
            <h2 className="text-xl font-bold text-sky-300 font-mono drop-shadow">Summary</h2>
            <p className="text-white/90 text-base leading-relaxed font-medium drop-shadow">
              Dedicated Web3 builder and technical creator proficient in Sui Move smart contracts, custom token minting/burning mechanisms via TreasuryCap, Python automation, and AI tooling. Experienced in translating complex RWA and decentralized infrastructure into high-engagement content.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl space-y-3">
            <h2 className="text-xl font-bold text-sky-300 font-mono drop-shadow">Core Expertise</h2>
            <p className="text-white/90 text-base leading-relaxed font-medium drop-shadow">
              Specialized in decentralized finance logic, data integrity protocols (KGeN VeriFi), and high-reach X technical threads and video breakdowns.
            </p>
          </div>
        </div>
      </div>

      {/* Footer / Download Action */}
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-8 border-t border-white/20 mt-12 flex justify-end">
        <a
          href="/videos/animated-pfp.mp4"
          download
          className="px-6 py-3 rounded-xl bg-sky-400 text-black font-black font-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:bg-sky-300 hover:scale-105 transition-all"
        >
          Download CV Asset / Resume ↗
        </a>
      </div>

    </main>
  );
}
