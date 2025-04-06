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
    level: "Intermediate",
    experience: 80,
    years: "2.5 years"
  },
  {
    name: "Node.js",
    icon: "ri-nodejs-line",
    level: "Intermediate",
    experience: 75,
    years: "2 years"
  },
  {
    name: "TypeScript",
    icon: "ri-typescript-line",
    level: "Beginner",
    experience: 60,
    years: "1 year"
  },
  {
    name: "MongoDB",
    icon: "ri-database-2-line",
    level: "Intermediate",
    experience: 70,
    years: "1.5 years"
  },
  {
    name: "AWS",
    icon: "ri-cloud-line",
    level: "Beginner",
    experience: 50,
    years: "1 year"
  },
  {
    name: "Docker",
    icon: "ri-docker-line",
    level: "Beginner",
    experience: 40,
    years: "6 months"
  },
  {
    name: "GraphQL",
    icon: "ri-graphql-line",
    level: "Beginner",
    experience: 45,
    years: "8 months"
  },
  {
    name: "CSS/SASS",
    icon: "ri-css3-line",
    level: "Intermediate",
    experience: 85,
    years: "3 years"
  },
  {
    name: "JavaScript",
    icon: "ri-javascript-line",
    level: "Intermediate",
    experience: 80,
    years: "3 years"
  },
  {
    name: "Git/GitHub",
    icon: "ri-github-fill",
    level: "Intermediate",
    experience: 75,
    years: "2.5 years"
  }
];
