export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "Go",
      "Python",
      "Rust",
      "TypeScript/JavaScript",
      "C/C++",
      "SQL",
      "Java",
    ],
  },
  {
    label: "Tools / Platforms",
    items: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "PostgreSQL",
      "Redis",
      "MPI",
      "Linux",
      "Git",
    ],
  },
];
