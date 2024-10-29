import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { scope } from "vite-plugin-tailwind-scope";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), scope({ dest: "styles" })],
});
