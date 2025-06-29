# template-app-vue

[![CI](https://github.com/antoniogiroz/template-app-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/antoniogiroz/template-app-vue/actions/workflows/ci.yml)

[![Tests](https://github.com/antoniogiroz/template-app-vue/actions/workflows/tests.yml/badge.svg)](https://github.com/antoniogiroz/template-app-vue/actions/workflows/tests.yml)

This template should help get you started developing apps with Vue 3 in Vite with a simple architecture.

## Getting Started

### Option 1: Use as GitHub Template (Recommended)

1. Click the "Use this template" button on the GitHub repository page
2. Create a new repository from this template
3. Clone your new repository:
   ```sh
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

### Option 2: Clone Without Git History

Using `degit` to clone without the `.git` folder:

```sh
# Install degit globally if you haven't already
npm install -g degit

# Clone the template
degit antoniogiroz/template-app-vue my-vue-app
cd my-vue-app

# Initialize your own git repository
git init
git add .
git commit -m "Initial commit"
```

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
