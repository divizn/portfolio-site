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
        dateRange: "May 2026 – October 2026",
        points: [
          "Added linear and radial basis function interpolation to both sides of an MPI-coupled OpenFOAM (C++) and FEniCSx (Python) simulation, cutting transfer error 6x, and fixed a parallel ghost-point crash.",
          "Built the coupled toolchain with Spack and Docker on Linux, fixing an OpenMPI 5 build break, and batched boundary-condition evaluation for a 43x speedup with bit-identical output.",
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
