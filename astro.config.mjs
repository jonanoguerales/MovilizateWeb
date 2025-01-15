import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react(), tailwind()],
  NotFound: "/404",
  compilerOptions: {
    allowJs: true,
  },
});
