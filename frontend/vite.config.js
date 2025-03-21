import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: true,
    headers: {
      "X-Frame-Options": "DENY",
      "Content-Security-Policy":
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://res.cloudinary.com https://www.google.com https://www.gstatic.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: blob: https://*; " +
        "media-src 'self' https://www.youtube.com https://res.cloudinary.com;" +
        "frame-src 'self' https://www.google.com https://www.gstatic.com https://www.youtube.com https://www.youtube-nocookie.com;" +
        "connect-src 'self' https://api.emailjs.com https://www.google.com https://www.gstatic.com; " +
        "frame-ancestors 'none';",
    },
  },
  plugins: [react()],
});
