import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  NotFound: '/404',
  compilerOptions: {
    allowJs: true
  }
});