import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
    minify: 'esbuild', // or 'terser'
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) {
              return 'vendor_icons';
            }
            if (id.includes('@react-three/drei')) {
              return 'vendor_three_drei';
            }
            return 'vendor';
          }
        }
      }
    }
  }
});
