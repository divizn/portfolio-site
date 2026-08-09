import { splitProps, type ComponentProps, type JSX } from "solid-js";
import { cn } from "@/lib/utils";

export function BentoGrid(props: ComponentProps<"div">) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <div
      class={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", local.class)}
      {...rest}
    />
  );
}

type BentoGridItemProps = Omit<ComponentProps<"div">, "title"> & {
  title: string;
  subtitle?: string;
  span?: 1 | 2;
  children?: JSX.Element;
};

export function BentoGridItem(props: BentoGridItemProps) {
  const [local, rest] = splitProps(props, ["class", "title", "subtitle", "span", "children"]);
  return (
    <div
      class={cn(
        "group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700",
        local.span === 2 && "sm:col-span-2",
        local.class,
      )}
      {...rest}
    >
      <h3 class="font-display text-base font-semibold text-zinc-100">{local.title}</h3>
      {local.subtitle && <p class="mt-1 text-sm text-zinc-500">{local.subtitle}</p>}
      {local.children && <div class="mt-3 text-sm text-zinc-400">{local.children}</div>}
    </div>
  );
}
