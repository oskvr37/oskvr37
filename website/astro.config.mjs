// @ts-check

import { defineConfig } from "astro/config";

// integrations
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// plugins
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://oskvr37.github.io",
  base: "/oskvr37",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
