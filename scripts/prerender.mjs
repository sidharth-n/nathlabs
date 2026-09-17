import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
try {
  const { render, routes } = await server.ssrLoadModule(
    "/src/entry-server.tsx",
  );
  const template = await readFile("dist/index.html", "utf8");
  for (const route of [...routes, "/404"]) {
    const { html, metadata } = render(route);
    let document = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`,
    );
    document = document.replace(
      /<title>.*?<\/title>/s,
      `<title>${escape(metadata.title)}</title>`,
    );
    for (const [attr, name, value] of [
      ["name", "description", metadata.description],
      ["name", "robots", metadata.robots],
      ["property", "og:title", metadata.title],
      ["property", "og:description", metadata.description],
      ["property", "og:url", metadata.canonical],
      ["name", "twitter:title", metadata.title],
      ["name", "twitter:description", metadata.description],
    ])
      document = document.replace(
        new RegExp(`<meta ${attr}="${name}" content="[^"]*"\\s*/?>`),
        `<meta ${attr}="${name}" content="${escape(value)}" />`,
      );
    document = document.replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escape(metadata.canonical)}" />`,
    );
    const file = resolve(
      "dist",
      route === "/" ? "index.html" : `${route.slice(1)}.html`,
    );
    await writeFile(file, document);
  }
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>https://nathalabs.com${route}</loc></url>`).join("\n")}\n</urlset>\n`;
  await writeFile("dist/sitemap.xml", sitemap);
  await mkdir("seo", { recursive: true });
  await writeFile("seo/routes.json", JSON.stringify(routes, null, 2) + "\n");
  console.log(
    `Prerendered ${routes.length} public pages and a 404 page. Sitemap includes all public routes.`,
  );
} finally {
  await server.close();
}
