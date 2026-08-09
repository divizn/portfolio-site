import { createSignal, onMount } from "solid-js";
import { FiMoon, FiSun } from "solid-icons/fi";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = createSignal<Theme>("dark");

  onMount(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  });

  const toggle = () => {
    const next: Theme = theme() === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.dataset.theme = "light";
    } else {
      delete document.documentElement.dataset.theme;
    }
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme() === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      class="flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-foreground duration-200 hover:border-foreground/40"
    >
      {theme() === "dark" ? <FiSun class="h-4 w-4" /> : <FiMoon class="h-4 w-4" />}
    </button>
  );
}
