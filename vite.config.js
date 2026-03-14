import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

function resolveBase() {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH;
  }

  if (!process.env.GITHUB_ACTIONS || !process.env.GITHUB_REPOSITORY) {
    return "/";
  }

  const [, repo] = process.env.GITHUB_REPOSITORY.split("/");

  if (!repo || repo.endsWith(".github.io")) {
    return "/";
  }

  return `/${repo}/`;
}

export default defineConfig({
  plugins: [vue()],
  base: resolveBase(),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@src": fileURLToPath(new URL("./src", import.meta.url)),
      "@content": fileURLToPath(new URL("./src/content", import.meta.url)),
    },
  },
});
