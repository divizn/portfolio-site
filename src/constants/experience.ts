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
          "Added config-selectable linear and radial basis function interpolation to both sides of the MUI coupling between an OpenFOAM (C++) fluid solver and a FEniCSx (Python) solid solver, cutting interface transfer error 6x (1.3 to 0.2 mK) in a known-profile test while leaving existing cases unchanged.",
          "Diagnosed and fixed a parallel crash where ghost points shared between MPI ranks were sent twice, producing NaN, and worked around broken samplers in MUI's Python bindings.",
          "Replaced a per-point boundary-condition loop with one batched KD-tree query, a 43-58x speedup per call with bit-identical output.",
          "Validated every change with field-by-field regression runs of all example cases, and added a non-matching-mesh example case with ParaView visualisation.",
          "Built the coupled toolchain with Spack and Docker on Linux and the SCARF HPC cluster, fixing an OpenMPI 5 build break.",
          "Reported progress at weekly meetings with Airbus across the 9 work packages of an EU Horizon Europe consortium.",
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
