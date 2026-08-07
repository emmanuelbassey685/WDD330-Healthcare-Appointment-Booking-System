import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        doctors: resolve(__dirname, "pages/doctors.html"),
        hospitals: resolve(__dirname, "pages/hospitals.html"),
        appointments: resolve(__dirname, "pages/appointments.html"),
        dashboard: resolve(__dirname, "pages/dashboard.html")
      }
    }
  }
});