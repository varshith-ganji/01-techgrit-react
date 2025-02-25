import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/01-techgrit-react/", // Ensure relative paths for assets
  build: {
    outDir: "docs", // Change the build output directory to 'docs'
  },
});
