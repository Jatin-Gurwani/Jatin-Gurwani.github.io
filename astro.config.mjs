// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages user-level site — no base path needed
  site: 'https://jatin-gurwani.github.io',

  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    sitemap(),
  ],
});
