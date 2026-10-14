import type { IconTypes } from "solid-icons";
import { FaBrandsAws, FaBrandsJava } from "solid-icons/fa";
import { FiDatabase, FiShare2 } from "solid-icons/fi";
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiLinux,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiRust,
  SiTerraform,
  SiTypescript,
} from "solid-icons/si";

export type Skill = {
  name: string;
  icon: IconTypes;
};

export const languages: Skill[] = [
  { name: "Go", icon: SiGo },
  { name: "Python", icon: SiPython },
  { name: "Rust", icon: SiRust },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "SQL", icon: FiDatabase },
  { name: "Java", icon: FaBrandsJava },
];

export const tools: Skill[] = [
  { name: "AWS", icon: FaBrandsAws },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Docker", icon: SiDocker },
  { name: "Terraform", icon: SiTerraform },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "MPI", icon: FiShare2 },
  { name: "Linux", icon: SiLinux },
  { name: "Git", icon: SiGit },
];
