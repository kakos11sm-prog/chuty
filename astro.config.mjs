import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kakos11sm-prog.github.io",
  base: "/chuty",
  vite: {
    plugins: [tailwindcss()],
  },
});
