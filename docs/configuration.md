---
description: Настройка поведения вашего сайта и много другого с помощью docusaurus.config.js.
---

# Файл конфигурации

import TOCInline from '@theme/TOCInline';

У Docusaurus уникальный подход к конфигурации сайта. Мы предлагаем держать всю информацию о вашем сайте в одном месте. Мы бережно относимся к данным в этом файле и предоставляем доступ на чтение объекта с этими данными в любом месте сайта.

Поддержание в хорошем состоянии `docusaurus.config.js` поможет вам, вашим соавторам и контрибьюторам в ваш проект сосредоточиться на документации, сохраняя при этом возможность гибкой настройки сайта.

## Что входит в `docusaurus.config.js`? {#what-goes-into-a-docusaurusconfigjs}

Вам не придется писать с нуля `docusaurus.config.js`, даже в начале разработки собственного сайта. Все шаблоны содержат файл `docusaurus.config.js`, где указаны значения по умолчанию для общих параметров.

Тем не менее мы хотели бы, чтобы у вас было общее представление о том, как устроена конфигурация сайта.

Ниже мы подготовили общий обзор всех параметров Docusaurus разделив их на несколько категорий.

<TOCInline toc={toc} minHeadingLevel={3} maxHeadingLevel={3} />

Для получения подробной информации по каждому полю перейдите по ссылке [**`docusaurus.config.js` API reference**](api/docusaurus.config.js.md).

### Метаданные сайта {#site-metadata}

Здесь содержатся важные глобальные настройки метаданных сайта, такие как `title`, `url`, `baseUrl` и `favicon`.

Эти параметры используются в нескольких местах по всему сайту, таких как title и заголовки вашего сайта, значок вкладки браузера, информация о социальных сетях (Facebook, Twitter), а также для генерации правильного пути, по которому будут находиться ваши статические файлы.

### Настройки деплоя приложения {#deployment-configurations}

Параметры деплоя, такие как `projectName`, `organizationName` и, при необходимости, `deploymentBranch`, используются при деплое сайта с помощью команды `deploy`.

Для получения дополнительной информации рекомендуем почитать [документацию по деплою](deployment.mdx).

### Тема, плагины и пресеты {#theme-plugin-and-preset-configurations}

Параметры [темы](./using-plugins.md#using-themes), [плагинов](./using-plugins.md), and [пресетов](./using-plugins.md#using-presets) вашего сайта указываются в полях `themes`, `plugins`, и `presets`, соответственно. Обычно это npm-пакеты:

```js title="docusaurus.config.js"
module.exports = {
  // ...
  plugins: [
    '@docusaurus/plugin-content-blog',
    '@docusaurus/plugin-content-pages',
  ],
  themes: ['@docusaurus/theme-classic'],
};
```

:::tip

Docusaurus поддерживает [**сокращенное именование модулей**](./using-plugins.md#module-shorthands), что позволяет упростить приведенную выше конфигурацию следующим образом:

```js title="docusaurus.config.js"
module.exports = {
  // ...
  plugins: ['content-blog', 'content-pages'],
  themes: ['classic'],
};
```

:::

Модули также могут быть загружены из локальных директорий:

```js title="docusaurus.config.js"
const path = require('path');

module.exports = {
  // ...
  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],
};
```

Чтобы указать параметры для плагина или темы, замените имя плагина или темы в файле конфигурации на массив, содержащий имя и объект параметров:

```js title="docusaurus.config.js"
module.exports = {
  // ...
  plugins: [
    [
      'content-blog',
      {
        path: 'blog',
        routeBasePath: 'blog',
        include: ['*.md', '*.mdx'],
        // ...
      },
    ],
    'content-pages',
  ],
};
```

Параметры для плагинов или темы, подключающихся в пресетах, нужно указывать в поле `presets`. В примере ниже `docs` относится к `@docusaurus/plugin-content-docs`, а `theme` относится к `@docusaurus/theme-classic`.

```js title="docusaurus.config.js"
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
```

:::tip

Точно также работает сокращенное написание `presets: [['classic', {...}]]`.

:::

Дополнительные сведения о настройке тем, подключаемых модулей и предустановок смотрите в разделе [Использование плагинов](./using-plugins.md).

### Собственные поля {#custom-configurations}

Docusaurus защищает `docusaurus.config.js` от неизвестных полей. Собственные уникальные поля добавляйте в `customFields`.

Пример:

```js title="docusaurus.config.js"
module.exports = {
  // ...
  // highlight-start
  customFields: {
    image: '',
    keywords: [],
  },
  // highlight-end
  // ...
};
```

## Доступ к параметрам из компонентов {#accessing-configuration-from-components}

Объект с настройками сайта доступен для всех ваших компонентов. Получить к нему доступ можно через React-контекст, как `siteConfig`.

Простой пример:

```jsx
import React from 'react';
// highlight-next-line
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Hello = () => {
  // highlight-start
  const {siteConfig} = useDocusaurusContext();
  // highlight-end
  const {title, tagline} = siteConfig;

  return <div>{`${title} · ${tagline}`}</div>;
};
```

:::tip

Если же вам нужно просто иметь поля, к которым вы сможете достучаться со стороны клиента, то лучше создайте отдельные JS-файлы и импортируйте их как ES6-модули. Необязательно помещать эти данные в `docusaurus.config.js`.

:::

## Настройка Babel {#customizing-babel-configuration}

Для новых проектов на Docusaurus мы автоматически создаем `babel.config.js` в корне проекта.

```js title="babel.config.js"
module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};
```

В большинстве случаев настроек по умолчанию будет достаточно. Если вы хотите по-своему настроить babel (например, добавить поддержку Flow), вы можете напрямую отредактировать этот файл. Чтобы ваши изменения вступили в силу, вам нужно будет перезапустить дев-сервер Docusaurus.
