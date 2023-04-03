import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiC,
  SiJava,
  SiSpring,
  SiCsharp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiLua,
} from "react-icons/si";

export const currentLanguages = [
  {
    icon: <SiJavascript />,
    name: "javascript",
    color: "text-yellow-400",
    progress: 90,
  },
  {
    icon: <SiReact />,
    name: "reactjs",
    color: "text-cyan-500",
    progress: 85,
  },
  {
    icon: <SiTailwindcss />,
    name: "tailwindcss",
    color: "text-cyan-600",
    progress: 79,
  },
  {
    icon: <SiNextdotjs />,
    name: "nextjs",
    color: "text-neutral-300",
    progress: 55,
  },
  {
    icon: <SiC />,
    name: "clang",
    color: "text-blue-600",
    progress: 10,
  },
];

export const otherLanguages = [
  {
    icon: <SiJava />,
    name: "java",
    color: "text-blue-900",
    progress: 90,
  },
  {
    icon: <SiSpring />,
    name: "spring",
    color: "text-lime-500",
    progress: 50,
  },
  {
    icon: <SiCsharp />,
    name: "csharp",
    color: "text-cyan-600",
    progress: 80,
  },
  {
    icon: <SiPython />,
    name: "python",
    color: "text-yellow-300",
    progress: 90,
  },
  {
    icon: <SiHtml5 />,
    name: "html",
    color: "text-red-600",
    progress: 100,
  },
  {
    icon: <SiCss3 />,
    name: "css",
    color: "text-blue-600",
    progress: 100,
  },
  {
    icon: <SiLua />,
    name: "lua",
    color: "text-blue-600",
    progress: 65,
  },
];
