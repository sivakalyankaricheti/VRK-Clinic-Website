import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/VRK-Clinic-Website/',
  plugins: [react()],
  build: {
    outDir: '.',
    emptyOutDir: false,
    assetsDir: 'vite-assets'
  }
});
