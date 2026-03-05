import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://portfolio-abdelaziz-khoungui.vercel.app',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
