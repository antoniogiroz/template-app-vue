import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: 'tests/unit/vitest.setup.ts',
      environment: 'jsdom',
      mockReset: true,
      exclude: [...configDefaults.exclude, 'tests/e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  })
);
