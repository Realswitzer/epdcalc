import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  server: {
    allowedHosts: [
      "vite-internal-9478cbb7-b2b0-42ac-8498-3484b1b5d7b5.sylvyon.dev",
    ],
  },
});
