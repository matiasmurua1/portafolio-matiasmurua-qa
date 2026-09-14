import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { portfolio } from './src/data/portfolio.js';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.VITE_BASE_PATH
  || (process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}/` : '/');
const githubPagesUrl = process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY
  ? `https://${process.env.GITHUB_REPOSITORY.split('/')[0]}.github.io/${repositoryName}`
  : '';
const siteUrl = process.env.VITE_SITE_URL || portfolio.settings.siteUrl || githubPagesUrl;

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: 'portfolio-seo',
      transformIndexHtml(html) {
        if (!siteUrl) return html;
        return html.replace('</head>', `    <link rel="canonical" href="${siteUrl}/" />\n    <meta property="og:url" content="${siteUrl}/" />\n  </head>`);
      },
    },
  ],
  build: { sourcemap: true },
});
