import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: true,
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://res.cloudinary.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: blob: https://*; " +
        "media-src 'self' https://*; " +
        "connect-src 'self' https://api.emailjs.com; " +
        "frame-ancestors 'none';",
    },
  },
  plugins: [react()],
});
