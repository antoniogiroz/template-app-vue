import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';

import autoImport from 'unplugin-auto-import/vite';

import components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: ['**./.eslintrc-auto-import.json'],
    },
  },

  plugins: [
    vue(),

    autoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      eslintrc: {
        enabled: true,
        filepath: '.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),

    components({
      dts: 'src/components.d.ts',
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
