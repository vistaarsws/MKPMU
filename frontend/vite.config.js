import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: true,
    historyApiFallback: true,
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; img-src * data: blob:; script-src 'self' https://cdnjs.cloudflare.com https://res.cloudinary.com; ",
    },
  },
  plugins: [react()],
});
