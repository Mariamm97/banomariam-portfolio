import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  nitro: {
    preset: "vercel",
  },
  vite: {
    base: "/",
    css: {
      transformer: "postcss",
    },
    build: {
      cssMinify: "esbuild",
    },
  },
});