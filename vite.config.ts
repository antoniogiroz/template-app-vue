import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    autoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      eslintrc: {
        enabled: true,
        filepath: '.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: true,
      vueTemplate: true,
    }),

    unocss(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./tests', import.meta.url)),
    },
  },
});
