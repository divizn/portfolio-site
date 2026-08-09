import { For, Show } from "solid-js";
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
};

export function ProjectsGrid(props: ProjectsGridProps) {
  return (
    <div class={props.class}>
      <BentoGrid>
        <For each={props.items}>
          {(project) => (
            <a href={`/projects/${project.id}`} class="block">
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
    </div>
  );
}
