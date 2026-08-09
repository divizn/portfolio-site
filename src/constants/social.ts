import type { IconTypes } from "solid-icons";
import { FiGithub, FiLinkedin } from "solid-icons/fi";

export type Social = {
  label: string;
  href: string;
  handle: string;
  icon: IconTypes;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/divizn", handle: "@divizn", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hassanjaved186",
    handle: "hassanjaved186",
    icon: FiLinkedin,
  },
];
