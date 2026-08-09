import { For } from "solid-js";
import { cn } from "@/lib/utils";

export type TimelineEntry = {
  title: string;
  subtitle?: string;
  dateRange: string;
  description: string;
};

type TimelineProps = {
  items: TimelineEntry[];
  class?: string;
};

export function Timeline(props: TimelineProps) {
  return (
    <ol class={cn("relative border-l border-zinc-800 pl-6", props.class)}>
      <For each={props.items}>
        {(item) => (
          <li class="relative pb-8 last:pb-0">
            <span
              aria-hidden="true"
              class="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-black bg-zinc-500"
            />
            <span class="font-mono text-xs text-zinc-400">{item.dateRange}</span>
            <h3 class="font-display mt-1 text-base font-semibold text-zinc-100">{item.title}</h3>
            {item.subtitle && <p class="text-sm text-zinc-400">{item.subtitle}</p>}
            <p class="mt-2 text-sm text-zinc-400">{item.description}</p>
          </li>
        )}
      </For>
    </ol>
  );
}
