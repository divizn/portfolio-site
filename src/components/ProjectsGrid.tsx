import { For, Show } from "solid-js";
import { Badge, BentoGrid, BentoGridItem } from "@ph0n/theme-kit/ui";

export type ProjectCard = {
  id: string;
  title: string;
  description: string;
  tags?: string[] | undefined;
};

type ProjectsGridProps = {
  items: ProjectCard[];
  class?: string;
};

export function ProjectsGrid(props: ProjectsGridProps) {
  return (
    <div class={props.class}>
      <BentoGrid>
        <For each={props.items}>
          {(project) => (
            <BentoGridItem
              href={`/projects/${project.id}`}
              title={project.title}
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
          )}
        </For>
      </BentoGrid>
    </div>
  );
}
