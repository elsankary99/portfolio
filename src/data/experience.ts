import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "senk-soft",
    company: "Senk Soft",
    role: "Senior Flutter Developer",
    period: "Oct 2024 – Present",
    location: "Dubai, UAE (Remote)",
    achievements: [
      "Architected and maintained multiple high-performance Flutter applications serving thousands of daily active users across FinTech, Healthcare, and Ride-Hailing industries",
      "Led the migration of legacy codebases to Clean Architecture with Riverpod, resulting in 40% reduction in bug reports and significantly improved maintainability across projects",
      "Mentored junior developers through structured code reviews, pair programming sessions, and established coding standards that elevated team-wide code quality",
      "Implemented robust error handling and monitoring systems that reduced crash rates by 60% across production applications",
    ],
  },
  {
    id: "ixir-software",
    company: "Ixir Software",
    role: "Senior Flutter Developer",
    period: "Jun 2023 – Oct 2024",
    location: "Cairo, Egypt",
    achievements: [
      "Designed and delivered end-to-end mobile solutions for clients in Beauty, Sports, and Marine Services, maintaining 100% on-time delivery rate across all projects",
      "Built reusable component libraries and internal packages that accelerated new project setup time by 50% and ensured consistent UI/UX across applications",
      "Integrated complex WebSocket-based real-time features including live chat, notifications, and data synchronization for marine tracking and service platforms",
      "Collaborated directly with clients to translate business requirements into technical specifications, delivering solutions that exceeded expectations",
    ],
  },
  {
    id: "digital-angles",
    company: "Digital Angles",
    role: "Flutter Developer",
    period: "Sep 2022 – May 2023",
    location: "Cairo, Egypt",
    achievements: [
      "Developed production FinTech applications handling sensitive financial data with PCI-compliant security practices and robust encryption standards",
      "Engineered real-time transaction processing systems with WebSocket integration, achieving sub-second latency for critical financial operations",
      "Built comprehensive analytics dashboards and reporting tools that enabled data-driven decision making for stakeholders",
      "Optimized API integration patterns reducing network calls by 35% through intelligent caching and request batching strategies",
    ],
  },
  {
    id: "techno-vein",
    company: "Techno Vein",
    role: "Flutter Developer",
    period: "Jun 2021 – Aug 2022",
    location: "Cairo, Egypt",
    achievements: [
      "Built and shipped a cross-platform social application from the ground up, handling complex state management with Bloc pattern and real-time features",
      "Implemented sophisticated media handling including image/video upload, compression, and streaming optimized for mobile networks",
      "Integrated multiple third-party services including maps, payment gateways, and social login providers into a cohesive user experience",
      "Achieved 4.5+ star ratings on both App Store and Google Play through attention to performance optimization and UX polish",
    ],
  },
];
