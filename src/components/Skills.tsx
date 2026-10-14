import { For } from "solid-js";
import { Marquee, cn } from "@ph0n/theme-kit/ui";
import { languages, tools, type Skill } from "@/constants/skills";

function Row(props: { skills: Skill[]; reverse?: boolean; duration: number }) {
  return (
    <Marquee reverse={props.reverse} duration={props.duration}>
      <For each={props.skills}>
        {(skill) => (
          <span class="flex items-center gap-2.5 rounded-full border border-border-strong bg-card px-4 py-2 text-sm whitespace-nowrap text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent">
            <skill.icon class="size-[18px]" aria-hidden="true" />
            {skill.name}
          </span>
        )}
      </For>
    </Marquee>
  );
}

export function Skills(props: { class?: string }) {
  return (
    <div class={cn("flex flex-col gap-3", props.class)}>
      <Row skills={languages} duration={45} />
      <Row skills={tools} reverse duration={55} />
    </div>
  );
}
