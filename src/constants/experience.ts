export type ExperienceItem = {
  title: string;
  subtitle?: string;
  dateRange: string;
  points?: string[];
  projects?: { title: string; dateRange: string; points: string[] }[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Scientific Computing Graduate (Software Engineering)",
    subtitle: "Science and Technology Facilities Council (STFC UKRI)",
    dateRange: "May 2026 – Present",
    projects: [
      {
        title: "HASTA: Liquid Hydrogen Aircraft Tank Simulation",
        dateRange: "May 2026 – November 2026",
        points: [
          "Integrated and debugged components built independently by partner teams across an EU Horizon Europe consortium including Airbus, tracing data flow, configuration and failures across a coupled stack of Python, FEniCSx and OpenFOAM simulation codes.",
          "Built reproducible Linux development environments with Spack and Docker, and investigated interprocess data exchange between parallel processes using MUI and MPI.",
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
];
