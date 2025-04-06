export interface Achievement {
  icon: string;
  value: string;
  label: string;
}

export const achievements: Achievement[] = [
  {
    icon: "ri-award-line",
    value: "3",
    label: "Years of Experience"
  },
  {
    icon: "ri-code-box-line",
    value: "15",
    label: "Completed Projects"
  },
  {
    icon: "ri-user-star-line",
    value: "10",
    label: "Happy Clients"
  },
  {
    icon: "ri-graduation-cap-line",
    value: "5",
    label: "Certifications"
  }
];

export interface Certification {
  icon: string;
  title: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    icon: "ri-award-fill",
    title: "React Developer Certification",
    issuer: "Meta (formerly Facebook)",
    year: "2023"
  },
  {
    icon: "ri-award-fill",
    title: "Frontend Web Developer",
    issuer: "Udacity",
    year: "2022"
  },
  {
    icon: "ri-award-fill",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2021"
  },
  {
    icon: "ri-award-fill",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2021"
  }
];

export interface NotableAchievement {
  icon: string;
  title: string;
  description: string;
}

export const notableAchievements: NotableAchievement[] = [
  {
    icon: "ri-trophy-fill",
    title: "Best Portfolio Award",
    description: "Won first place in a local web design competition for creating an interactive portfolio"
  },
  {
    icon: "ri-team-fill",
    title: "Team Lead",
    description: "Led a team of 3 developers to build a successful e-commerce platform for a local business"
  },
  {
    icon: "ri-presentation-fill",
    title: "Hackathon Finalist",
    description: "Reached the finals in a regional hackathon with an innovative web application for sustainable living"
  },
  {
    icon: "ri-open-source-fill",
    title: "Open Source Contributor",
    description: "Active contributor to several open-source React projects with over 50 accepted pull requests"
  }
];
