import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/my-test-project',
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInlineLimit: 4096,
    minify: 'terser',
  },
});