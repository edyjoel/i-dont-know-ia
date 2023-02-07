import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // https://github.com/edyjoel/i-dont-know-ia
  site: "https://i-dont-know-ia.github.io",
  base: "/i-dont-know-ia",
});
