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
    dateRange: "May 2026 – Present",
    description:
      "STFC Scientific Computing Graduate Programme at Daresbury Laboratory. Developing software for HASTA, an EU Horizon Europe project building simulation tools for cryogenic liquid hydrogen aircraft tanks in a consortium including Airbus: integrating and debugging coupled multiphysics components across Python, FEniCSx, and OpenFOAM, building reproducible Linux environments with Spack and Docker, and investigating parallel solver coupling with MUI and MPI. Also built Sci-GCP at a Google Cloud, PA Consulting and STFC hackathon: an agentic AI prototype in Google Cloud Agent Studio with the Central Laser Facility, routing queries to subagents for EPICS telemetry, with BigQuery ML forecasting and an arXiv pipeline grounding Gemini responses.",
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
      "Built a REST API with Express and MySQL, improving platform integration and system throughput by 30%. Cut page load time by 45% on a core internal tool through React state and render optimisations, fixing 6 edge cases along the way.",
  },
  {
    title: "Freelance Software Engineer",
    subtitle: "Self-employed",
    dateRange: "June 2022 – December 2025",
    description:
      "Backend Go projects for clients: REST APIs and integrations, AWS deployment (EC2, Lambda, RDS, CloudWatch), CI/CD with GitHub Actions and Docker, and integrating AI/ML models into backend systems.",
  },
];
