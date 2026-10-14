export type ExperienceItem = {
  title: string;
  subtitle?: string;
  dateRange: string;
  points?: string[];
  projects?: { title: string; dateRange: string; points: string[] }[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Scientific Computing Graduate",
    subtitle: "Science and Technology Facilities Council (STFC UKRI)",
    dateRange: "May 2026 – Present",
    projects: [
      {
        title: "HASTA: Liquid Hydrogen Aircraft Tank Simulation",
        dateRange: "May 2026 – November 2026",
        points: [
          "Developed software for HASTA, an EU Horizon Europe project building simulation tools for cryogenic liquid hydrogen aircraft tanks, in a consortium including Airbus.",
          "Integrated and debugged coupled multiphysics components across Python, FEniCSx and OpenFOAM, tracing data flow, configuration and failures through the stack.",
          "Built reproducible Linux environments with Spack and Docker, and investigated parallel solver coupling with MUI and MPI.",
        ],
      },
      {
        title: "Sci-GCP: Google Cloud, PA Consulting and STFC Hackathon",
        dateRange: "September 2026",
        points: [
          "Built an agentic AI prototype in Google Cloud Agent Studio with the Central Laser Facility, routing queries to subagents for EPICS telemetry.",
          "Added BigQuery ML forecasting and an arXiv pipeline to ground Gemini responses in published research.",
        ],
      },
    ],
  },
  {
    title: "Junior Software Engineer",
    subtitle: "BTMG USA",
    dateRange: "September 2024 – April 2025",
    points: [
      "Built GitHub Actions CI/CD pipelines with automated testing and linting, reducing deployment time by 45%.",
      "Standardised development environments with Docker and worked with DevOps on AWS CloudWatch monitoring and logging for production services.",
    ],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "BTMG USA",
    dateRange: "June 2022 – September 2022",
    points: [
      "Built a REST API with Express and MySQL, improving platform integration and system throughput by 30%.",
      "Reduced page load time by 45% on a core internal tool through React state and render optimisations, fixing 6 edge cases along the way.",
    ],
  },
];
