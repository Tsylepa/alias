import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/alias/",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
