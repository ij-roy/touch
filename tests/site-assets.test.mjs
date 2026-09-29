import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";

const root = process.cwd();
const baseUrl = `https://${readFileSync(join(root, "CNAME"), "utf8").trim()}`;

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const htmlFiles = walk(root)
  .filter((file) => extname(file) === ".html")
  .filter((file) => !file.split(sep).includes("tests"));

assert.ok(htmlFiles.length > 0, "expected static HTML pages to verify");

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const page = relative(root, file) || "index.html";

  assert.match(
    html,
    /<link rel="icon" type="image\/png" sizes="32x32" href="(?:\.\.\/)?public\/favicon-32x32\.png">/,
    `${page} should declare the 32x32 Touch favicon`,
  );
  assert.match(
    html,
    /<link rel="icon" href="(?:\.\.\/)?favicon\.ico" sizes="any">/,
    `${page} should declare favicon.ico for browser tabs`,
  );
  assert.match(
    html,
    /<link rel="apple-touch-icon" sizes="180x180" href="(?:\.\.\/)?public\/apple-touch-icon\.png">/,
    `${page} should declare an Apple touch icon`,
  );
}

for (const asset of [
  "favicon.ico",
  "public/favicon-16x16.png",
  "public/favicon-32x32.png",
  "public/apple-touch-icon.png",
]) {
  assert.ok(existsSync(join(root, asset)), `${asset} should exist`);
}

const sitemapPath = join(root, "sitemap.xml");
assert.ok(existsSync(sitemapPath), "sitemap.xml should exist");

const sitemap = readFileSync(sitemapPath, "utf8");
for (const file of htmlFiles) {
  const relativeFile = relative(root, file).replaceAll("\\", "/");
  const urlPath = relativeFile === "index.html" ? "/" : `/${relativeFile.replace(/index\.html$/, "")}`;
  assert.match(sitemap, new RegExp(`<loc>${baseUrl}${urlPath}</loc>`), `sitemap should include ${urlPath}`);
}

const robotsPath = join(root, "robots.txt");
assert.ok(existsSync(robotsPath), "robots.txt should exist");
assert.match(
  readFileSync(robotsPath, "utf8"),
  new RegExp(`Sitemap: ${baseUrl}/sitemap\\.xml`),
  "robots.txt should point crawlers to the sitemap",
);
