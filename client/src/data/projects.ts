export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

export const projects: Project[] = [
  {
    title: "SaaS Analytics Platform",
    description: "A comprehensive analytics dashboard for SaaS businesses to track key metrics, user engagement, and revenue streams in real-time.",
    detailedDescription: "Built a scalable analytics platform that processes over 1M events daily. Implemented real-time data visualization and custom reporting tools.",
    techStack: ["React", "Node.js", "D3.js", "AWS"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management system that uses AI to prioritize tasks, suggest optimal work times, and provide productivity insights.",
    detailedDescription: "Designed and implemented an AI algorithm that learns from user behavior to optimize task scheduling. Increased user productivity by 27% in tests.",
    techStack: ["React", "Python", "TensorFlow", "MongoDB"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "E-Commerce Microservices",
    description: "A scalable e-commerce platform built with microservices architecture, featuring real-time inventory, payment processing, and order management.",
    detailedDescription: "Developed a highly available e-commerce system capable of handling 10K+ concurrent users. Implemented CI/CD pipelines and automated scaling.",
    techStack: ["Node.js", "Docker", "Kubernetes", "AWS"],
    githubLink: "#",
    liveLink: "#"
  }
];
