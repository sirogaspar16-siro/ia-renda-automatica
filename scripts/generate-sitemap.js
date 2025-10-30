const fs = require('fs');
const path = require('path');

// Configure your production URL here or via SITE_URL env var
const SITE_URL = process.env.SITE_URL || 'https://example.com';

// List the routes you want in the sitemap (do NOT include hash fragments)
const routes = ['/', '/comprar'];

const distPath = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distPath)) {
  console.warn('dist folder not found — please run `npm run build` first.');
}

const today = new Date().toISOString();

const urls = routes.map((route) => {
  return `  <url>\n    <loc>${SITE_URL.replace(/\/$/, '')}${route}\n    </loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

const outPath = path.join(distPath, 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log('Sitemap generated at', outPath);
