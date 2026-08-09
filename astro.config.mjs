import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://hassanj.dev",
  output: "static",
  integrations: [solidJs(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: { theme: "github-dark" },
    processor: unified({
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
  },
});
