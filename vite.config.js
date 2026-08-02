import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'app',
  base: '/VRK-Clinic-Website/',
  plugins: [react()],
  build: {
    outDir: '../dist',
    assetsDir: 'vite-assets'
  }
});
