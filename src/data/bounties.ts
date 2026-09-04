export interface Bounty {
  id: string;
  title: string;
  platform: string;
  sponsor: string;
  prize: string;
  category: "Smart Contracts" | "Frontend" | "Full Stack" | "AI x Web3" | "3D / Render";
  date: string;
  description: string;
  tags: string[];
  media?: {
    videoUrl?: string;
  };
  links: {
    demo?: string;
    github?: string;
    tweet?: string;
  };
}

export const bountiesData: Bounty[] = [
  {
    id: "render-network-bounty",
    title: "Render Network Video Showcase",
    platform: "Render Network",
    sponsor: "Render Foundation",
    prize: "Bounty Winner 🏆",
    category: "3D / Render",
    date: "Aug 2026",
    description: "High-impact 3D video submission highlighting decentralized GPU rendering, spatial computing, and Web3 media production workflows.",
    tags: ["Render Network", "GPU", "3D Motion", "Web3 Content"],
    media: {
      videoUrl: "/videos/render-network.mp4",
    },
    links: {
      tweet: "https://x.com/joezzyweb3/status/2046194374246060085",
    },
  },
  {
    id: "sui-move-bounty",
    title: "Sui Move Dynamic Token Module",
    platform: "Sui Developer Ecosystem",
    sponsor: "Sui Foundation",
    prize: "1st Place — $3,000",
    category: "Smart Contracts",
    date: "Aug 2026",
    description: "Built custom Move modules implementing TreasuryCap token creation and burning mechanisms for decentralized asset management.",
    tags: ["Sui Move", "Smart Contracts", "DeFi", "CLI"],
    links: {
      github: "https://github.com/joezzy-web3",
    },
  },
];
