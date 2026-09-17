# Natha Labs: current state

Updated: 2026-09-17

## Current work

The complete website redesign is implemented on `stripe-ready-rebuild`. It is ready for Sid's visual review at http://127.0.0.1:4173/ and has been opened in Safari. Production has not been deployed from this redesign, and Search Console submission is pending deployment and access verification.

## Delivered

- Ten commercial pages: homepage plus nine researched service pages. Four existing policy pages remain separate.
- Nine substantive service rewrites explaining problems, deliverables, example workflows, scope and FAQs. Internal demand evidence is retained in research/ and seo/content-evidence.json, not displayed on public pages.
- New responsive design, mobile menu, service dropdown, working FAQs, interactive workflow illustration, custom CSS/SVG visuals and reduced-motion support.
- Build-time HTML rendering for every route, unique metadata and canonical URLs, Service/Breadcrumb/Organization/WebSite schema, complete sitemap, 404 handling, local fonts, updated social image and Vercel analytics on hosted domains.
- Sid's shared rules now require automatic Safari opening, no double hyphens or em dashes in prose, and a short progress update after each major step.

## Verified

Production build, TypeScript, ESLint and whitespace checks pass. `npm run verify` checks raw HTTP and HTML for all 14 public routes, titles, canonical and social URLs, one H1, valid JSON-LD, internal links, sitemap, icons, font and real 404 response. All pages were browser-tested at 1440px and 390px with no horizontal overflow, broken images or console errors. Document-service checks also passed at 320px and 768px. Menus, Escape/focus restoration, workflow buttons, FAQ disclosure, service links and cross-page section links passed interaction checks. Independent code review found no production blocker.

## Logo exploration

Four original image-generated logo directions are saved in `design/logo-options/`, with exact prompts in `prompts.json`. The local comparison board is `design/logo-options/index.html` and was opened in Safari. It includes light/dark/monochrome previews, website-header mockups, 16/24/40px checks, enlargement and a local shortlist control. No direction has been selected by Sid, and the website logo is unchanged. The selected concept should be refined into a vector before production use.

## Next

1. Sid reviews the local redesign. Apply any requested content or visual changes.
2. After approval, deploy the reviewed commit to Vercel and verify all routes, metadata, icons and mobile layouts on the live domain.
3. Confirm Search Console/Bing property access, submit the live sitemap and inspect indexing. Do not claim indexing or rankings until observed.
4. Resume the original Stripe application work using verified company records. The website is one part of that application; no approval is guaranteed.

## Local commands

`npm run dev` runs the development site. `npm run build` emits static pages. `npm run preview` serves the production output at http://127.0.0.1:4173/. With that server running, `npm run verify` checks the HTTP output.
