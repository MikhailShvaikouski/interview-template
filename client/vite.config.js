import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: process.env.CODESANDBOX_SSE
          ? "https://3001-${location.host.split("-")[0]}.${location.host.split(".").slice(1).join(".")}"
          : "http://localhost:3001",
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
