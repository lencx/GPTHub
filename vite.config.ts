import { defineConfig, splitVendorChunkPlugin } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    splitVendorChunkPlugin(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   // devOptions: {
    //   //   enabled: true,
    //   // },
    // }),
  ],
})
