import { For, Show, createMemo, createSignal } from "solid-js";
import { FiChevronDown, FiChevronUp } from "solid-icons/fi";
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
  /** How many entries to show before collapsing the rest behind the expand control. Defaults to 2. */
  initialCount?: number;
};

export function Timeline(props: TimelineProps) {
  const initialCount = () => props.initialCount ?? 2;
  const hasMore = createMemo(() => props.items.length > initialCount());
  const [expanded, setExpanded] = createSignal(false);
  const visibleItems = createMemo(() =>
    expanded() || !hasMore() ? props.items : props.items.slice(0, initialCount()),
  );

  return (
    <div class={props.class}>
      <ol class="relative border-l border-border pl-6">
        <For each={visibleItems()}>
          {(item, index) => (
            <li
              class={cn(
                "relative pb-8 last:pb-0",
                index() >= initialCount() && "animate-fade-in",
              )}
            >
              <span
                aria-hidden="true"
                class="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-background bg-muted-foreground"
              />
              <span class="font-mono text-xs text-muted-foreground">{item.dateRange}</span>
              <h3 class="font-display mt-1 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              {item.subtitle && <p class="text-sm text-muted-foreground">{item.subtitle}</p>}
              <p class="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </li>
          )}
        </For>
      </ol>
      <Show when={hasMore()}>
        <button
          type="button"
          aria-expanded={expanded()}
          onClick={() => setExpanded((value) => !value)}
          class="mt-6 flex items-center gap-1.5 rounded-full border border-border-strong bg-card px-3 py-1.5 text-sm text-muted-foreground duration-200 hover:border-accent hover:bg-muted hover:text-accent"
        >
          {expanded() ? <FiChevronUp class="h-4 w-4" /> : <FiChevronDown class="h-4 w-4" />}
          <span>
            {expanded() ? "Show less" : `+${props.items.length - initialCount()} entries`}
          </span>
        </button>
      </Show>
    </div>
  );
}
