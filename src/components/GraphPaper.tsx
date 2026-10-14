import { createSignal, onCleanup, onMount } from "solid-js";
import { cn } from "@ph0n/theme-kit/ui";

const MAJOR = 120;
const PARALLAX = 0.4;

export function GraphPaper(props: { class?: string }) {
  let paper: HTMLDivElement | undefined;
  let sheet: HTMLDivElement | undefined;
  let torch: HTMLDivElement | undefined;
  const [lit, setLit] = createSignal(false);

  onMount(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let pointer: { x: number; y: number } | undefined;

    const update = () => {
      frame = 0;
      if (!paper || !sheet || !torch) return;
      const shift = still.matches ? 0 : (window.scrollY * PARALLAX) % MAJOR;
      sheet.style.transform = `translate3d(0, ${shift}px, 0)`;
      if (!pointer) return;
      const area = paper.getBoundingClientRect();
      const inside =
        pointer.y >= area.top &&
        pointer.y <= area.bottom &&
        pointer.x >= area.left &&
        pointer.x <= area.right;
      setLit(inside);
      if (!inside) return;
      const box = sheet.getBoundingClientRect();
      torch.style.setProperty("--mx", `${pointer.x - box.left}px`);
      torch.style.setProperty("--my", `${pointer.y - box.top}px`);
    };
    const schedule = () => {
      frame ||= requestAnimationFrame(update);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };
    const leave = () => setLit(false);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    update();

    onCleanup(() => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    });
  });

  return (
    <div
      ref={paper}
      aria-hidden="true"
      class={cn("graph-paper pointer-events-none overflow-hidden", props.class)}
    >
      <div
        ref={sheet}
        class="absolute inset-x-0 -top-[120px] bottom-0 will-change-transform"
      >
        <div class="graph-rows absolute inset-0 animate-draw-rows" />
        <div class="graph-cols absolute inset-0 animate-draw-cols" />
        <div
          ref={torch}
          class={cn(
            "graph-torch absolute inset-0",
            lit() ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
    </div>
  );
}
