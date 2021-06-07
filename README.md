# Vue 3 Skeleton

This template should help get you started developing with Vue 3 and preinstall and config packages

## Preinstall packages

1. Vite
1. Typescript
1. Vue 3
1. Vuex
1. Vue router
1. Vue i18n 
1. Axios
1. Tailwind css
1. Eslint

## Setup

### 1. Clone repository
```shell
git clone git@github.com:quangphuchuynh95/vue-3-skeleton.git my-project
```
Hoặc
```shell
git archive --format=tar --remote=ssh://git@github.com:quangphuchuynh95/vue-3-skeleton.git master | tar -xf -
```

### 2. Install dependencies
```shell
yarn
```
Hoặc
```shell
npm i
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
