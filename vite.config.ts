import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // split big vendor bundles into logical chunks to reduce the main chunk size
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            // keep react/react-dom in a separate chunk, everything else in vendor.
            // This simpler mapping avoids circular chunk warnings while still reducing the
            // size of the app's main chunk.
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
    // you can tweak this if you still want a different warning threshold
    chunkSizeWarningLimit: 600,
  },
});
