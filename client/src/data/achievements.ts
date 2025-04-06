export interface Achievement {
  icon: string;
  value: string;
  label: string;
}

export const achievements: Achievement[] = [
  {
    icon: "ri-award-line",
    value: "8",
    label: "Years of Experience"
  },
  {
    icon: "ri-code-box-line",
    value: "50",
    label: "Completed Projects"
  },
  {
    icon: "ri-user-star-line",
    value: "30",
    label: "Happy Clients"
  },
  {
    icon: "ri-graduation-cap-line",
    value: "12",
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
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2022"
  },
  {
    icon: "ri-award-fill",
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2021"
  },
  {
    icon: "ri-award-fill",
    title: "Google Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2020"
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
    title: "Tech Innovation Award",
    description: "Developed a patented algorithm for real-time data processing that improved performance by 200%"
  },
  {
    icon: "ri-team-fill",
    title: "Tech Lead",
    description: "Led a team of 15 developers to successfully deliver an enterprise platform used by Fortune 500 companies"
  },
  {
    icon: "ri-presentation-fill",
    title: "Conference Speaker",
    description: "Delivered keynote presentations at major tech conferences including React Summit and AWS re:Invent"
  }
];
