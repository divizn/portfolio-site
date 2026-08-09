import { splitProps, type ComponentProps } from "solid-js";
import { cn } from "@/lib/utils";

export function Card(props: ComponentProps<"div">) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <div
      class={cn("rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-sm", local.class)}
      {...rest}
    />
  );
}

export function CardHeader(props: ComponentProps<"div">) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div class={cn("flex flex-col gap-1.5 p-6", local.class)} {...rest} />;
}

export function CardTitle(props: ComponentProps<"h3">) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <h3 class={cn("font-display text-lg font-semibold text-zinc-100", local.class)} {...rest} />
  );
}

export function CardDescription(props: ComponentProps<"p">) {
  const [local, rest] = splitProps(props, ["class"]);
  return <p class={cn("text-sm text-zinc-400", local.class)} {...rest} />;
}

export function CardContent(props: ComponentProps<"div">) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div class={cn("p-6 pt-0", local.class)} {...rest} />;
}
