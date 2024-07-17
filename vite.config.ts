import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/store': path.resolve(__dirname, './src/store'),
      '@/layouts': path.resolve(__dirname, './src/layouts'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/stepper': path.resolve(__dirname, './src/modules/Stepper'),
    },
  },
});
