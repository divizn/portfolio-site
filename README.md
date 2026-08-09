<h1 align=center>My portfolio site</h1>

Here is my new [portfolio site](https://hassanj.dev), a from-scratch rewrite of the [old Next.js one.](https://github.com/divizn/legacy-portfolio-site)

## Stack

- Astro 7 (static output), with SolidJS islands for anything interactive
- TailwindCSS v4 (CSS-first config)
- MDX + Zod-validated content collections for project write-ups
- Deployed to Cloudflare Workers Static Assets

## Commands

Package manager is `pnpm`.

```sh
pnpm install     # install deps
pnpm dev         # start dev server
pnpm build       # production build -> dist/
pnpm preview     # preview the built output
pnpm check       # type-check .astro files and content schemas
pnpm lint        # eslint .
pnpm fmt         # prettier --write .
pnpm cf:preview  # astro build && wrangler dev, for Cloudflare-accurate local preview
pnpm cf:deploy   # astro build && wrangler deploy
```

## License

MIT, see [LICENSE](./LICENSE).
