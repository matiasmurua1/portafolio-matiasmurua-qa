import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { portfolio } from '../src/data/portfolio.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const githubPagesUrl = process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY
  ? `https://${process.env.GITHUB_REPOSITORY.split('/')[0]}.github.io/${repositoryName}`
  : '';
const siteUrl = (process.env.VITE_SITE_URL || portfolio.settings.siteUrl || githubPagesUrl || 'https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME').replace(/\/$/, '');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
console.log(`Generated SEO files for ${siteUrl}`);
