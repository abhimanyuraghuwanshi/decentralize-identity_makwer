import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : '/decentralize-identity_makwer',
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
