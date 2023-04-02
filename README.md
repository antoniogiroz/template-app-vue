# template-vite-vue-ts

[![CI](https://github.com/antoniogiroz/template-app-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/antoniogiroz/template-app-vue/actions/workflows/ci.yml)

[![Tests](https://github.com/antoniogiroz/template-app-vue/actions/workflows/tests.yml/badge.svg)](https://github.com/antoniogiroz/template-app-vue/actions/workflows/tests.yml)

This template should help get you started developing apps with Vue 3 in Vite with a simple architecture.

## Project Setup

To use the required version of NodeJS, run the following command if you're using nvm to manage your NodeJS versions:

```sh
nvm use
```

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run E2E Tests with [Playwright](https://playwright.dev/)

#### Using the UI

```sh
pnpm test:e2e
```
#### Headless 

```sh
pnpm test:e2e:ci
```
