---
description: Docusaurus написан на TypeScript и обеспечивает первоклассную его поддержку.
---

# Поддержка TypeScript

Docusaurus написан на TypeScript и обеспечивает первоклассную его поддержку.

## Инициализация {#initialization}

Docusaurus поддерживает написание и использование компонентов темы на TypeScript. Если выбранный вами шаблон при установке позволяет выбрать вариант с TypeScript, вы можете напрямую инициализировать сайт с полной поддержкой TypeScript, используя флаг `--typescript`.

```bash
npx create-docusaurus@latest my-website classic --typescript
```

Ниже приведены несколько руководств по переводу существующего проекта на TypeScript.

## Настройка {#setup}

Чтобы начать использовать TypeScript, добавьте в проект `@docusaurus/module-type-aliases` и базовую конфигурацию TS:

```bash npm2yarn
npm install --save-dev typescript @docusaurus/module-type-aliases @tsconfig/docusaurus
```

Затем добавьте `tsconfig.json` в корень проекта со следующим содержимым:

```json title="tsconfig.json"
{
  "extends": "@tsconfig/docusaurus/tsconfig.json"
}
```

Docusaurus не использует `tsconfig.json` для компиляции вашего проекта. Он добавлен только для проверки типов вашим редактором кода, хотя вы можете запустить `tsc`, чтобы проверить свой код самостоятельно или в CI.

Теперь вы можете приступить к написанию компонентов темы на TypeScript.

## Типизация файла конфигурации {#typing-config}

Docusaurus **не сможет** использовать файл конфигурации, написанный на TypeScript, пока вы самостоятельно не скомпилируете его в JavaScript.

Мы рекомендуем использовать [аннотации типов JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html):

```js title="docusaurus.config.js"
// @ts-check

/** @type {import('@docusaurus/types').Plugin} */
function MyPlugin(context, options) {
  return {
    name: 'my-plugin',
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus',
  tagline: 'Build optimized websites quickly, focus on your content',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  plugins: [MyPlugin],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: {
          path: 'blog',
          postsPerPage: 5,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        hideOnScroll: true,
        title: 'Docusaurus',
        logo: {
          alt: 'Docusaurus Logo',
          src: 'img/docusaurus.svg',
          srcDark: 'img/docusaurus_keytar.svg',
        },
      },
    }),
};

module.exports = config;
```

:::tip совет

Аннотации типов очень полезны и помогают вашей IDE определить типы каждого параметра в конфигурации!

Лучшие IDE (VS Code, WebStorm, IntelliJ...) будут предлагать вам удобное автозаполнение.

:::

:::info информация

Базовая конфигурация TypeScript в Docusaurus не проверяет JavaScript-файлы.

Добавив в начало файла комментарий `// @ts-check` вы включите проверку типов в этом файле при каждом запуске `npx tsc`.

:::

## Типизированные компоненты темы прямо из коробки {#swizzling-typescript-theme-components}

Для тем, у которых есть типизированные компоненты темы, вы можете добавить флаг `--typescript` в конец команды `swizzle`, чтобы получить эти компоненты написанные сразу на TypeScript. Например, следующая команда сгенерирует `index.tsx` и `styles.module.css` в `src/theme/Footer`.

```bash npm2yarn
npm run swizzle @docusaurus/theme-classic Footer -- --typescript
```

Все официальные темы Docusaurus поддерживают компоненты темы TypeScript, включая[`theme-classic`](./api/themes/theme-classic.md), [`theme-live-codeblock`](./api/themes/theme-live-codeblock.md) и [`theme-search-algolia`](./api/themes/theme-search-algolia.md). Если вы являетесь автором пакета темы Docusaurus и хотите добавить поддержку TypeScript, смотрите [документацию Lifecycle APIs](./api/plugin-methods/extend-infrastructure.md#getTypeScriptThemePath).

**Последнее обновление страницы : 5 августа 2022 г.**