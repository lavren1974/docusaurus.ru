---
description: Docusaurus предоставляет набор скриптов, которые помогут вам создавать, обслуживать и развертывать ваш сайт.
---

# Интерфейс командной строки (CLI)

Docusaurus предоставляет набор скриптов, которые помогут вам создавать, обслуживать и развертывать ваш сайт.

Как только ваш сайт будет преднастроен, исходный код веб-сайта будет содержать скрипты Docusaurus, которые вы можете вызвать с помощью менеджера пакетов:

```json title="package.json"
{
  // ...
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids"
  }
}
```

## CLI команды Docusaurus {#docusaurus-cli-commands}

Ниже приведен список команд CLI Docusaurus и их использования:

### `docusaurus start [siteDir]` {#docusaurus-start-sitedir}

Строит и предоставляет сервер для предварительного просмотра вашего сайта локально с помощью [Webpack Dev Server](https://webpack.js.org/configuration/dev-server).

#### Параметры {#options}

| Название                      | По-умолчанию | Описание                                                                                                                                                                                                                                               |
| ----------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--port`                      | `3000`       | Задает порт dev-сервера.                                                                                                                                                                                                                               |
| `--host`                      | `localhost`  | Задает используемый хост. Например, если ваш сервер должен быть доступен не только с локальной машины, используйте --host 0.0.0.0.                                                                                                                     |
| `--hot-only`                  | `false`      | Включает обновление «на горячую» без обновления страницы в качестве запасного варианта в случае сбоя сборки. Дополнительная информация [здесь](https://webpack.js.org/configuration/dev-server/#devserverhotonly).                                     |
| `--no-open`                   | `false`      | Не открывать страницу в браузере автоматически.                                                                                                                                                                                                        |
| `--config`                    | `undefined`  | Path to Docusaurus config file, default to `[siteDir]/docusaurus.config.js`                                                                                                                                                                            |
| `--poll [optionalIntervalMs]` | `false`      | Использовать поллинг файлов, а не следить за ними для перезагрузки в режиме реального времени. Запасной вариант, когда следить за файлами невозможно. Дополнительная информация [здесь](https://webpack.js.org/configuration/watch/#watchoptionspoll). |
| `--no-minify`                 | `false`      | Собрать сайт без минификации JS/CSS бандлов.                                                                                                                                                                                                           |

:::important

Пожалуйста, обратите внимание, что некоторая функциональнсть (например, якорные ссылки) не будет работать в режиме разработки. Эта функциональность будет работать как ожидается в боевом окружении.

:::

:::info информация Development over network

When forwarding port 3000 from a remote server or VM (e.g. GitHub Codespaces), you can run the dev server on `0.0.0.0` to make it listen on the local IP.

```bash npm2yarn
npm run start -- --host 0.0.0.0
```

:::

#### Включение HTTPS {#enabling-https}

Есть несколько способов получить сертификат. В качестве примера мы будем использовать [mkcert](https://github.com/FiloSottile/mkcert).

1. Запустите `mkcert localhost` для генерации `localhost.pem` + `localhost-key.pem`

2. Запустите `mkcert -install` для установки сертификата в хранилище сертификатов и перезапустите ваш браузер

3. Запустите приложение Docusaurus, указав следующие HTTPS пременные окружения:

```bash
HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem yarn start
```

4. Откройте `https://localhost:3000/`

### `docusaurus build [siteDir]` {#docusaurus-build-sitedir}

Компилирует ваш сайт для продуктивного окружения.

#### Параметры {#options-1}

| Название            | По-умолчанию | Описание                                                                                                                        |
| ------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `--bundle-analyzer` | `false`      | Анализирует сборку с помощью анализатора [webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer). |
| `--out-dir`         | `build`      | Полный относительный путь к каталогу для результатов сборки.                                                                    |
| `--config`          | `undefined`  | Path to Docusaurus config file, default to `[siteDir]/docusaurus.config.js`                                                     |
| `--no-minify`       | `false`      | Собрать сайт без минификации JS/CSS бандлов.                                                                                    |

:::info информация

Для расширенной минификации CSS-набора, мы используем расширенный шаблон [cssnano](https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-advanced) (вместе с дополнительными плагинами PostCSS) и [уровень 2 оптимизации clean-css](https://github.com/jakubpawlowicz/clean-css#level-2-optimizations). Если дополнительная минификация CSS приводит к поломкам CSS, постройте сайт с помощью переменной окружения `USE_SIMPLE_CSS_MINIFIER=true`, чтобы минифицировать CSS с помощью шаблона [по умолчанию cssnano](https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-default). **Пожалуйста, [создайте тикет с описанием проблемы](https://github.com/facebook/docusaurus/issues/new?labels=bug%2C+needs+triage&template=bug.md) если вы столкнулись с ошибками минификации CSS.**

You can skip the HTML minification with the environment variable `SKIP_HTML_MINIFICATION=true`.

:::

### `docusaurus swizzle [themeName] [componentName] [siteDir]` {#docusaurus-swizzle}

[Swizzle](./swizzling.md) a theme component to customize it.

```bash npm2yarn
npm run swizzle [themeName] [componentName] [siteDir]

# Example (leaving out the siteDir to indicate this directory)
npm run swizzle @docusaurus/theme-classic Footer -- --eject
```

The swizzle CLI is interactive and will guide you through the whole [swizzle process](./swizzling.md).

#### Параметры {#options-swizzle}

| Название        | Описание                                             |
| --------------- | ---------------------------------------------------- |
| `themeName`     | The name of the theme to swizzle from.               |
| `componentName` | The name of the theme component to swizzle.          |
| `--list`        | Display components available for swizzling           |
| `--eject`       | [Eject](./swizzling.md#ejecting) the theme component |
| `--wrap`        | [Wrap](./swizzling.md#wrapping) the theme component  |
| `--danger`      | Allow immediate swizzling of unsafe components       |
| `--typescript`  | Swizzle the TypeScript variant component             |

:::caution осторожно

Unsafe components have a higher risk of breaking changes due to internal refactorings.

:::

### `docusaurus deploy [siteDir]` {#docusaurus-deploy-sitedir}

Deploys your site with [GitHub Pages](https://pages.github.com/). Check out the docs on [deployment](deployment.mdx#deploying-to-github-pages) for more details.

#### Параметры {#options-3}

| Название       | По-умолчанию | Описание                                                                                                     |
| -------------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| `--out-dir`    | `build`      | Полный относительный путь к каталогу для результатов сборки.                                                 |
| `--skip-build` | `false`      | Разверните сайт без построения. Это может быть полезно при использовании собственного скрипта развертывания. |
| `--config`     | `undefined`  | Path to Docusaurus config file, default to `[siteDir]/docusaurus.config.js`                                  |

### `docusaurus serve [siteDir]` {#docusaurus-serve-sitedir}

Serve your built website locally.

| Название    | По-умолчанию                  | Описание                                                                                                                           |
| ----------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `--port`    | `3000`                        | Использовать указанный порт                                                                                                        |
| `--dir`     | `build`                       | Полный путь для выходной директории относительно текущего проекта                                                                  |
| `--build`   | `false`                       | Постройте сайт перед раздачей сервером                                                                                             |
| `--config`  | `undefined`                   | Path to Docusaurus config file, default to `[siteDir]/docusaurus.config.js`                                                        |
| `--host`    | `localhost`                   | Задает используемый хост. Например, если ваш сервер должен быть доступен не только с локальной машины, используйте --host 0.0.0.0. |
| `--no-open` | `false` locally, `true` in CI | Do not open a browser window to the server location.                                                                               |

### `docusaurus clear [siteDir]` {#docusaurus-clear-sitedir}

Clear a Docusaurus site's generated assets, caches, build artifacts.

We recommend running this command before reporting bugs, after upgrading versions, or anytime you have issues with your Docusaurus site.

### `docusaurus write-translations [siteDir]` {#docusaurus-write-translations-sitedir}

Write the JSON translation files that you will have to translate.

By default, the files are written in `website/i18n/<defaultLocale>/...`.

| Название          | По-умолчанию            | Описание                                                                                         |
| ----------------- | ----------------------- | ------------------------------------------------------------------------------------------------ |
| `--locale`        | `<defaultLocale>` | Определите папку, в которую вы хотите записывать переводы JSON-файлов                            |
| `--override`      | `false`                 | Переопределяет существующие сообщения перевода                                                   |
| `--config`        | `undefined`             | Path to Docusaurus config file, default to `[siteDir]/docusaurus.config.js`                      |
| `--messagePrefix` | `''`                    | Позволяет добавлять префикс к каждому сообщению перевода, чтобы подсветить непереведенные строки |

### `docusaurus write-heading-ids [siteDir] [files]` {#docusaurus-write-heading-ids-sitedir}

Add [explicit heading IDs](./guides/markdown-features/markdown-features-toc.mdx#explicit-ids) to the Markdown documents of your site.

| Название          | По-умолчанию                         | Описание                                                      |
| ----------------- | ------------------------------------ | ------------------------------------------------------------- |
| `files`           | Все файлы MD, используемые плагинами | Файлы, в которые вы хотите записать идентификаторы заголовка. |
| `--maintain-case` | `false`                              | Сохранить регистр заголовоков, иначе сделать буквы строчными. |
| `--overwrite`     | `false`                              | Перезаписать существующие идентификаторы заголовка.           |
