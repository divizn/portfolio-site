import { For, Show, createMemo, createSignal } from "solid-js";
import { FiChevronDown, FiChevronUp } from "solid-icons/fi";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { Badge } from "@/components/ui/badge";

export type ProjectCard = {
  id: string;
  title: string;
  description: string;
  featured: boolean;
  tags?: string[] | undefined;
};

type ProjectsGridProps = {
  items: ProjectCard[];
  class?: string;
  /** How many entries to show before collapsing the rest behind the expand control. Defaults to 3. */
  initialCount?: number;
};

export function ProjectsGrid(props: ProjectsGridProps) {
  const initialCount = () => props.initialCount ?? 3;
  const hasMore = createMemo(() => props.items.length > initialCount());
  const [expanded, setExpanded] = createSignal(false);
  const visibleItems = createMemo(() =>
    expanded() || !hasMore()
      ? props.items
      : props.items.slice(0, initialCount()),
  );

  return (
    <div class={props.class}>
      <BentoGrid>
        <For each={visibleItems()}>
          {(project, index) => (
            <a
              href={`/projects/${project.id}`}
              class={
                index() >= initialCount() ? "block animate-fade-in" : "block"
              }
            >
              <BentoGridItem
                title={project.title}
                span={project.featured ? 2 : 1}
                headingLevel="h2"
              >
                <p>{project.description}</p>
                <Show when={project.tags && project.tags.length > 0}>
                  <div class="mt-3 flex flex-wrap gap-1.5">
                    <For each={project.tags}>
                      {(tag) => <Badge variant="outline">{tag}</Badge>}
                    </For>
                  </div>
                </Show>
              </BentoGridItem>
            </a>
          )}
        </For>
      </BentoGrid>
      <Show when={hasMore()}>
        <button
          type="button"
          aria-expanded={expanded()}
          onClick={() => setExpanded((value) => !value)}
          class="mt-6 flex items-center gap-1.5 rounded-full border border-border-strong bg-card px-3 py-1.5 text-sm text-muted-foreground duration-200 hover:border-foreground/30 hover:bg-muted hover:text-foreground"
        >
          {expanded() ? (
            <FiChevronUp class="h-4 w-4" />
          ) : (
            <FiChevronDown class="h-4 w-4" />
          )}
          <span>
            {expanded()
              ? "Show less"
              : `+${props.items.length - initialCount()} more`}
          </span>
        </button>
      </Show>
    </div>
  );
}
