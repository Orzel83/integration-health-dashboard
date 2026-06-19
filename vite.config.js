import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/integration-health-dashboard/",
  plugins: [react()],
});
