import { splitProps, type ComponentProps } from "solid-js";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
        outline: "border border-zinc-700 text-zinc-100 hover:bg-zinc-800",
        ghost: "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, ["class", "variant", "size"]);
  return (
    <button
      class={cn(buttonVariants({ variant: local.variant, size: local.size }), local.class)}
      {...rest}
    />
  );
}
