import { defineConfig, splitVendorChunkPlugin } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
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
