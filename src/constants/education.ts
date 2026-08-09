export type EducationItem = {
  title: string;
  subtitle?: string;
  dateRange: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    title: "BSc Computer Science — First Class Honours",
    subtitle: "Brunel University London",
    dateRange: "September 2021 – July 2024",
    description: "First Class Honours (1st) in Computer Science.",
  },
  {
    title: "48th CERN School of Computing",
    subtitle: "University of Liverpool, UK",
    dateRange: "August 2026 – September 2026",
    description:
      "Two-week scientific computing programme covering physics computing, software engineering, and data technologies through lectures and hands-on exercises.",
  },
];
