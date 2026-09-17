import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname } from "node:path";
const root = resolve("dist");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};
createServer(async (request, response) => {
  try {
    const path = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    if (path.endsWith(".html") || (path !== "/" && path.endsWith("/"))) {
      const clean = path.replace(/\.html$/, "").replace(/\/+$/, "");
      response.writeHead(308, {
        Location: clean === "/index" ? "/" : clean || "/",
      });
      response.end();
      return;
    }
    const relative = path === "/" ? "index.html" : path.slice(1);
    let file = resolve(root, relative);
    if (!file.startsWith(root + "/")) {
      response.writeHead(403);
      response.end();
      return;
    }
    if (!extname(file)) file += ".html";
    let status = 200;
    try {
      if (!(await stat(file)).isFile()) throw new Error("not a file");
    } catch {
      file = resolve(root, "404.html");
      status = 404;
    }
    const body = await readFile(file);
    response.writeHead(status, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
    });
    response.end(body);
  } catch {
    response.writeHead(400);
    response.end("Bad request");
  }
}).listen(4173, "127.0.0.1", () =>
  console.log("Production preview: http://127.0.0.1:4173"),
);
