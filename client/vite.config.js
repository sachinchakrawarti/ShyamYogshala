// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/', // Change this if deploying to a subfolder (e.g., '/myapp/')
  plugins: [
    react(),
    tailwindcss(),
  ],
  
});
