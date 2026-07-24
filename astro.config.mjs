// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// build.format 'file' + trailingSlash 'never' pair with Firebase Hosting's
// cleanUrls/trailingSlash settings so /work/chamber never redirect-hops.
export default defineConfig({
  site: 'https://edsonayllon.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
