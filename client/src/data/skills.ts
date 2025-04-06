export interface Skill {
  name: string;
  icon: string;
  level: string;
  experience: number; // percentage
  years: string;
}

export const skills: Skill[] = [
  {
    name: "React.js",
    icon: "ri-reactjs-line",
    level: "Expert Level",
    experience: 95,
    years: "8+ years"
  },
  {
    name: "Node.js",
    icon: "ri-nodejs-line",
    level: "Advanced",
    experience: 85,
    years: "6+ years"
  },
  {
    name: "TypeScript",
    icon: "ri-typescript-line",
    level: "Expert",
    experience: 90,
    years: "5+ years"
  },
  {
    name: "MongoDB",
    icon: "ri-database-2-line",
    level: "Advanced",
    experience: 80,
    years: "5+ years"
  },
  {
    name: "AWS",
    icon: "ri-cloud-line",
    level: "Advanced",
    experience: 85,
    years: "4+ years"
  },
  {
    name: "Docker",
    icon: "ri-docker-line",
    level: "Intermediate",
    experience: 75,
    years: "3+ years"
  },
  {
    name: "GraphQL",
    icon: "ri-graphql-line",
    level: "Advanced",
    experience: 80,
    years: "4+ years"
  },
  {
    name: "Flutter",
    icon: "ri-flutter-line",
    level: "Intermediate",
    experience: 70,
    years: "2+ years"
  },
  {
    name: "Python",
    icon: "ri-python-line",
    level: "Advanced",
    experience: 85,
    years: "6+ years"
  },
  {
    name: "Git/GitHub",
    icon: "ri-github-fill",
    level: "Expert",
    experience: 95,
    years: "8+ years"
  }
];
