export type ExperienceItem = {
  title: string;
  subtitle?: string;
  dateRange: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Scientific Computing Graduate",
    subtitle: "Science and Technology Facilities Council (STFC UKRI)",
    dateRange: "May 2026 – Current",
    description:
      "STFC Scientific Computing Graduate Programme at Daresbury Laboratory. Building and maintaining components for liquid hydrogen heat transfer simulation workflows using Python, FEniCSx, OpenFOAM, and MUI, supporting coupled multiphysics experiments across CFD and finite element tooling.",
  },
  {
    title: "Junior Software Engineer",
    subtitle: "BTMG USA",
    dateRange: "September 2024 – April 2025",
    description:
      "Built a reusable React component library (20+ elements) for an attendance and project management system. Set up CI/CD with GitHub Actions (45% faster deployments) and Docker-based dev environments, and worked with DevOps on AWS CloudWatch monitoring.",
  },
  {
    title: "Software Engineer Intern",
    subtitle: "BTMG USA",
    dateRange: "June 2022 – September 2022",
    description:
      "Developed a RESTful API with Express and MySQL, improving platform efficiency by 30%. Cut page load time by 45% via React state optimizations and reduced bug reports by 25% resolving edge-case issues.",
  },
  {
    title: "Freelance Software Engineer",
    subtitle: "Self-employed",
    dateRange: "June 2022 – December 2025",
    description:
      "Backend Go projects for clients: REST APIs and integrations, AWS deployment (EC2, Lambda, RDS, CloudWatch), CI/CD with GitHub Actions and Docker, and integrating AI/ML models into backend systems.",
  },
];
