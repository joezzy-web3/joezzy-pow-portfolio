export interface Bounty {
  id: string;
  title: string;
  category: "3D / Render" | "Smart Contracts" | "AI x Web3" | "Content & Media" | "Full Stack";
  sponsor: string;
  platform: string;
  prize: string;
  date: string;
  description: string;
  hookQuote: string;
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
    id: "model-collapse-kgen-verifi",
    title: "Model Collapse, Synthetic Data, & KGeN VeriFi",
    category: "Content & Media",
    sponsor: "KGeN",
    platform: "X / Twitter Article",
    prize: "Featured Article",
    date: "May 2026",
    description: "Deep dive into how training AI on synthetic data and bot-poisoned gaming pools creates model collapse, and how KGeN's VeriFi uses on-chain identity and behavioral proofs to secure authentic human anchor data.",
    hookQuote: "By 2030, the most dangerous thing on the internet won't be a hacker. It'll be a robot training the next AI on the output of the last AI.",
    tags: ["AIxWeb3", "ModelCollapse", "KGeN", "VeriFi", "DataIntegrity"],
    links: {
      tweet: "https://x.com/joezzyweb3/status/2059542040950530241?s=20",
    },
    media: {
      imageUrl: "/images/onelastchance.jpg",
    },
  },
  {
    id: "physical-ai-sensory-data",
    title: "Physical AI & Multi-Sensory Data Breakdowns",
    category: "Content & Media",
    sponsor: "Humyn Labs & KGeN",
    platform: "X / Twitter Thread",
    prize: "Featured Content",
    date: "Jul 2026",
    description: "Deep dive thread & video breakdown exploring why Physical AI requires multi-sensory data (sight, sound, motion, touch) and how verified human data networks solve robotics bottlenecks.",
    hookQuote: "We've been teaching machines with only one sense when the real world has always required four.",
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
    hookQuote: "Decentralized compute is unlocking the next generation of GPU-driven 3D rendering and immersive virtual worlds.",
    tags: ["RenderNetwork", "GPU", "3D", "DecentralizedCompute"],
    links: {
      tweet: "https://x.com/joezzyweb3/status/2046194374246060085?s=20",
    },
    media: {
      videoUrl: "/videos/render-network.mp4",
    },
  },
];
