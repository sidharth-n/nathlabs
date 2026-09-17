# Natha Labs website

Company website for a Dubai AI consultancy and software development studio. Ten commercial pages cover the homepage and nine services; four separate policy pages carry business and payment information.

## Development

```sh
npm install
npm run dev
```

## Build and checks

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

The production preview runs at http://127.0.0.1:4173/. In another terminal, run `npm run verify` to check all routes, static HTML, metadata, sitemap, asset types and HTTP 404 behavior. Use `open -a Safari http://127.0.0.1:4173/` to show the preview.

Vite builds the assets, then `scripts/prerender.mjs` renders each route into complete HTML. Vercel `cleanUrls` serves the generated files without extensions. The local preview mirrors those routes and returns a real 404 for unknown paths. React hydrates the static page for menus and the workflow illustration. Vercel Analytics runs on the production and Vercel preview domains.

## Content

`src/data/servicePages.ts` contains the nine services. Their source evidence stays in `research/raw/2026-09-17-uae-ai-demand/`; `seo/content-evidence.json` maps the content to it. Customer-facing copy must not expose keyword metrics or internal research. Illustrations are examples, not customer results. Avoid double hyphens and em dashes in prose.

## Release

Review the local preview before deployment. After publishing, verify the live routes and submit the sitemap through verified Search Console and Bing properties. `seo/README.md` records the search foundations and release gate. Search indexing, rankings and Stripe approval remain unverified until confirmed through the relevant services.
