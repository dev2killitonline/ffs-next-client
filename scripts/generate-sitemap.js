const fs = require("fs");
const globby = require("globby");

/**
 * This code dynamically creates our sitemap based on pages in the pages directory
 *
 * @todo we may need to do something different to add the pages from the content management system
 */

function addPage(page) {
  const path = page.replace("pages", "").replace(".js", "").replace(".mdx", "");
  if (
    path === "/job" ||
    path === "/drylog" ||
    path == "/drylogs" ||
    path == "/animal" ||
    path == "/bed-bugs"
  )
    return "";
  const route = path === "/index" ? "" : path;

  return `    <url>
        <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
        <changefreq>hourly</changefreq>
    </url>`;
}

async function generateSitemap() {
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api",
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset smlns="http://www.sitempas.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
