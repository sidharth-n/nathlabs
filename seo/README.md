# Natha Labs website rebuild

## Approved direction

Ten commercial pages: the homepage and nine existing service routes. Four policy pages remain separate. Customer evidence and keyword validation already live in research/raw/2026-09-17-uae-ai-demand. No new keyword spend is required.

The redesign uses clear service navigation, readable mobile layouts, original workflow illustrations, modest motion with reduced-motion support, and direct WhatsApp or email enquiries. Company copy explains customer problems, examples, deliverables, scope and buying questions. Internal SEO metrics and market evidence are never published in the sales copy. Examples are labelled as examples; they are not client results.

## Search foundations

Generate a complete HTML document for every route at build time, with unique title, description, canonical and social metadata. Include visible company identity, Service and BreadcrumbList structured data, crawlable links, all public routes in the sitemap, and a genuine not-found response. Preserve existing service slugs.

Google says its ordinary SEO requirements also apply to AI features. There is no special AI markup required: https://developers.google.com/search/docs/appearance/ai-features

Content must add value for readers: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content

Sitemap submission aids discovery but does not guarantee indexing: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## Release gate

Build and test locally first. Verify all pages at desktop and 390px, keyboard navigation, menus, FAQ controls, links, metadata, no-JavaScript content and static hosting routes. Open the finished preview in Safari automatically. Sid approved the release on 2026-09-17. Production is live at https://www.nathalabs.com, and HTTP checks across all 14 routes plus desktop/390px browser checks passed. Search Console access, sitemap submission, live rankings and indexing remain unverified. See state.md for release evidence and the Stripe handoff.
