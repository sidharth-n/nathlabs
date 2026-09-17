import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const origin = process.env.PREVIEW_URL || "http://127.0.0.1:4173";
const routes = JSON.parse(await readFile("seo/routes.json", "utf8"));
const titles = new Set();
const htmlByRoute = new Map();
for (const route of routes) {
  const response = await fetch(origin + route);
  assert.equal(response.status, 200, `${route} HTTP status`);
  const html = await response.text();
  htmlByRoute.set(route, html);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert(title && !titles.has(title), `${route} unique title`);
  titles.add(title);
  assert.equal(
    (html.match(/<h1[ >]/g) || []).length,
    1,
    `${route} one H1 without JavaScript`,
  );
  assert(
    html.includes(`rel="canonical" href="https://nathalabs.com${route}"`),
    `${route} canonical`,
  );
  assert(
    html.includes(`property="og:url" content="https://nathalabs.com${route}"`),
    `${route} social URL`,
  );
  assert(!html.includes("noindex"), `${route} indexable`);
  const body = html
    .split("<body>")[1]
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<[^>]+>/g, " ");
  assert(
    !/DataForSEO|CPC|keyword difficulty|searches\/month|evidence records|research method|—|--/.test(
      body,
    ),
    `${route} no internal research or prohibited punctuation`,
  );
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">(.*?)<\/script>/gs,
  ))
    JSON.parse(match[1]);
}
for (const [route, html] of htmlByRoute) {
  for (const [, href] of html.matchAll(
    /href="([^"?#]*)(?:\?[^"#]*)?(?:#([^"]*))?"/g,
  )) {
    if (href.startsWith("/") && !href.includes(".") && href !== "/")
      assert(routes.includes(href), `${route} link target ${href} exists`);
  }
}
const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
assert.equal(
  (sitemap.match(/<loc>/g) || []).length,
  routes.length,
  "Complete sitemap",
);
for (const route of routes)
  assert(sitemap.includes(`<loc>https://nathalabs.com${route}</loc>`));
for (const [path, type] of [
  ["/favicon.ico", "image/"],
  ["/favicon-48.png", "image/png"],
  ["/favicon-192.png", "image/png"],
  ["/apple-touch-icon.png", "image/png"],
  ["/og-image.png", "image/png"],
  ["/fonts/manrope-latin.woff2", "font/woff2"],
]) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  assert(
    response.headers.get("content-type")?.includes(type),
    `${path} content type`,
  );
}
const missing = await fetch(origin + "/this-page-does-not-exist");
assert.equal(missing.status, 404, "Unknown routes return 404");
assert((await missing.text()).includes("noindex"), "404 not indexed");
console.log(
  `PASS: ${routes.length} routes serve unique complete HTML, correct metadata, valid JSON-LD and valid internal page links. Sitemap, icons, font and HTTP 404 verified.`,
);
