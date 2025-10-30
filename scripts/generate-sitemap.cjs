const fs = require('fs');
const path = require('path');

// Configure your production URL here or via SITE_URL env var
const SITE_URL = process.env.SITE_URL || 'https://example.com';

// Try to read routes from a central routes.json file. Fallback to the hardcoded list.
let routes = ['/', '/comprar'];
try {
  const routesPath = path.join(process.cwd(), 'routes.json');
  if (fs.existsSync(routesPath)) {
    const raw = fs.readFileSync(routesPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      routes = parsed;
      console.log('Using routes from routes.json');
    }
  }
} catch (err) {
  console.warn('Could not read routes.json, using default routes');
}

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
