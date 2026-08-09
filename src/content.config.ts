import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    url: z.string().url().optional(),
    repository: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
