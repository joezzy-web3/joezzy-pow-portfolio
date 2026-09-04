export interface Bounty {
  id: string;
  title: string;
  category: "3D / Render" | "Smart Contracts" | "AI x Web3" | "Content & Media" | "Full Stack";
  sponsor: string;
  platform: string;
  prize: string;
  date: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    tweet?: string;
    demo?: string;
  };
  media?: {
    videoUrl?: string;
    imageUrl?: string;
  };
}

export const bountiesData: Bounty[] = [
  {
    id: "physical-ai-sensory-data",
    title: "Physical AI & Multi-Sensory Data Breakdowns",
    category: "Content & Media",
    sponsor: "Humyn Labs & KGeN",
    platform: "X / Twitter Thread",
    prize: "Featured Content",
    date: "Sep 2026",
    description: "Deep dive thread & video breakdown exploring why Physical AI requires multi-sensory data (sight, sound, motion, touch) and how verified human data networks solve robotics bottlenecks.",
    tags: ["PhysicalAI", "AIxWeb3", "Robotics", "KGeN", "HumynLabs"],
    links: {
      tweet: "https://x.com/joezzyweb3/status/2081897500206649464?s=20",
    },
    media: {
      videoUrl: "/videos/physical-ai.mp4",
    },
  },
  {
    id: "render-network-3d",
    title: "Decentralized GPU Rendering on Render Network",
    category: "3D / Render",
    sponsor: "Render Network",
    platform: "Ecosystem Bounty",
    prize: "Verified Submission",
    date: "Aug 2026",
    description: "GPU-driven 3D scene rendering and decentralized compute pipeline optimization leveraging the Render Network infrastructure.",
    tags: ["RenderNetwork", "GPU", "3D", "DecentralizedCompute"],
    links: {
      github: "https://github.com/joezzy-web3",
    },
  },
];
