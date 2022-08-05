---
description: Как установить Docusaurus локально и быстро запустить сайт Docusaurus.
---

# Установка

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Docusaurus - это, по сути, набор [пакетов npm](https://github.com/facebook/docusaurus/tree/main/packages).

:::tip совет

Используйте **[быстрый трек](introduction.md#fast-track)** чтобы понять Docusaurus за **5 минут ⏱**!

Используйте **[docusaurus.new](https://docusaurus.new)** для немедленного тестирования Docusaurus в вашем браузере!

:::

## Требования {#requirements}

- [Node.js](https://nodejs.org/en/download/) версия 16.14 или выше (которую можно проверить, запустив `node -v`). Вы можете использовать [nvm](https://github.com/nvm-sh/nvm) для управления несколькими версиями Node на одной установленной машине.
  - При установке Node.js, рекомендуется установить все флажки, связанные с зависимостями.

## Scaffold project website {#scaffold-project-website}

Самый простой способ установить Docusaurus - использовать инструмент командной строки, который поможет вам построить каркас веб-сайта Docusaurus. Вы можете запустить эту команду в любом месте в новом пустом репозитории или в существующем репозитории, она создаст новый каталог, содержащий файлы scaffolded.

```bash
npx create-docusaurus@latest my-website classic
```

Мы рекомендуем `classic` шаблон, чтобы вы могли быстро начать работу, и он содержит функции, найденные в Docusaurus 1. `classic` шаблон содержит `@docusaurus/preset-classic` стандартную документацию, блог, настраиваемые страницы и структуру CSS (с поддержкой темного режима). Вы можете очень быстро приступить к работе с классическим шаблоном и настроить его позже, когда вы лучше познакомитесь с Docusaurus.

Вы также можете использовать вариант TypeScript шаблона, передав `--typescript` флаг. Дополнительные сведения смотри в разделе [Поддержка TypeScript](./typescript-support.md).

```bash
npx create-docusaurus@latest my-website classic --typescript
```

:::info информация FB-Only

Если вы настраиваете новый веб-сайт Docusaurus для проекта Facebook с открытым исходным кодом, используйте шаблон `facebook` , который поставляется с некоторыми полезными настройками по умолчанию для Facebook:

```bash
npx create-docusaurus@latest my-website facebook
```

:::

<details>
  <summary>Альтернативные команды установки</summary>

Вы также можете инициализировать новый проект, используя предпочитаемого вами менеджера проектов:

```mdx-code-block
<Tabs>
<TabItem value="npm">
```

```bash
npm init docusaurus
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn create docusaurus
```

```mdx-code-block
</TabItem>
<TabItem value="pnpm">
```

```bash
pnpm create docusaurus
```

```mdx-code-block
</TabItem>
</Tabs>
```

</details>

Запустите `npx create-docusaurus@latest --help`, или ознакомьтесь с документацией по[API docs](./api/misc/create-docusaurus.md) для получения дополнительной информации обо всех доступных флагах.

## Структура проекта {#project-structure}

Предполагая, что вы выбрали классический шаблон и назвали свой сайт `my-website`, вы увидите следующие файлы, сгенерированные в новом каталоге `my-website/`:

```bash
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

### Краткое изложение структуры проекта {#project-structure-rundown}

- `/blog/` - Содержит файлы блога Markdown. Вы можете удалить каталог, если вы отключили плагин блога, или вы можете изменить его имя после установки `path` параметра. Более подробную информацию можно найти в [руководстве по блогу](blog.mdx)
- `/docs/` - Содержит файлы Markdown для документов. Настройте порядок расположения боковой панели документов в `sidebars.js`. Вы можете удалить каталог, если вы отключили плагин docs, или вы можете изменить его имя после установки `path` параметра. Более подробную информацию можно найти в [руководстве docs](./guides/docs/docs-introduction.md)
- `/src/` - Файлы, не относящиеся к документации, такие как страницы или пользовательские компоненты React. Вам не нужно строго размещать здесь файлы, не относящиеся к документации, но размещение их в централизованном каталоге упрощает указание на случай, если вам нужно выполнить какую-то проверку/обработку
  - `/src/pages` - Любой файл JSX/TSX/MDX в этом каталоге будет преобразован в страницу веб-сайта. Более подробную информацию можно найти в [руководстве по страницам](guides/creating-pages.md)
- `/static/` - Статический каталог. Любое содержимое здесь будет скопировано в корень конечного `build` каталога
- `/docusaurus.config.js` - Файл конфигурации, содержащий конфигурацию сайта. Это эквивалент `siteConfig.js` Docusaurus v1
- `/package.json` - Сайт Docusaurus — это приложение React. Вы можете установить и использовать в них любые пакеты npm, которые вам нравятся
- `/sidebars.js` - Используется документацией для указания порядка документов на боковой панели

### Монорепозиторий {#monorepos}

Если вы используете Docusaurus для документирования существующего проекта, вам может подойти монорепозиторий. Монорепозитории позволяют обмениваться зависимостями между похожими проектами. Например, ваш веб-сайт может использовать ваши локальные пакеты для демонстрации новейших функций, а не зависеть от выпущенной версии; ваши участники также могут удобно обновлять документы по мере реализации функций. Ниже приведен пример структуры папок монорепозитория:

```bash
my-monorepo
├── package-a # Another package, your actual project
│   ├── src
│   └── package.json # Package A's dependencies
├── website   # Docusaurus root
│   ├── docs
│   ├── src
│   └── package.json # Docusaurus' dependencies
├── package.json # Monorepo's shared dependencies
```

В этом случае вы должны запустить `npx create-docusaurus` в `./my-monorepo` папке.

Если вы используете хостинг-провайдера, такого как Netlify или Vercel, вам нужно будет изменить `Базовую директорию` сайта на тот, где находится ваш корень Docusaurus. В данном случае это было бы `./website`. Подробнее о настройке команд игнорирования читайте в [документации по развертыванию](./deployment.mdx#deploying-to-netlify).

Узнайте больше о монорепозиториях в [Yarn документации](https://yarnpkg.com/features/workspaces) (Yarn — это не единственный способ настроить монорепозиторий, но это распространенное решение), или ознакомьтесь с [Docusaurus](https://github.com/facebook/docusaurus) и [Jest](https://github.com/facebook/jest) чтобы найти несколько реальных примеров.

## Запуск сервера разработки {#running-the-development-server}

Для предварительного просмотра изменений по мере редактирования файлов вы можете запустить локальный сервер разработки, который будет обслуживать ваш веб-сайт и отражать последние изменения.

```bash npm2yarn
cd my-website
npm run start
```

По умолчанию окно браузера открывается по адресу http://localhost:3000.

Поздравляем! Вы только что создали свой первый сайт Docusaurus! Просмотрите сайт, чтобы увидеть, что доступно.

## Сборка {#build}

Docusaurus - это современный генератор статических веб-сайтов, поэтому нам нужно встроить веб-сайт в каталог со статическим содержимым и поместить его на веб-сервер, чтобы его можно было просматривать. Для создания веб-сайта:

```bash npm2yarn
npm run build
```

и содержимое будет создано в `/build` каталоге, который можно скопировать на любой статический файлообменник, такой как [GitHub pages](https://pages.github.com/), [Vercel](https://vercel.com/) или [Netlify](https://www.netlify.com/). Дополнительные сведения смотрите в документации по [развертыванию](deployment.mdx) .

## Обновление версии Docusaurus {#updating-your-docusaurus-version}

Есть много способов обновить версию Docusaurus. Один гарантированный способ — вручную изменить номер `package.json` версии на желаемую версию. Обратите внимание, что все `@docusaurus/`- пакеты с пространством имен должны использовать одну и ту же версию.

import UpgradeGuide from '@site/src/components/UpgradeGuide';

<UpgradeGuide />

Затем в каталоге, содержащем `package.json`, запустите команду установки вашего менеджера пакетов:

```bash npm2yarn
npm install
```

Чтобы убедиться, что обновление прошло успешно, запустите:

```bash npm2yarn
npx docusaurus --version
```

Вы должны увидеть правильную версию в качестве вывода.

В качестве альтернативы, если вы используете Yarn, вы можете сделать:

```bash
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```

:::tip совет

Используйте новые невыпущенные функции Docusaurus с [`@canary` тегом npm dist](/community/canary)

:::

## Проблемы? {#problems}

Обратитесь за помощью в [Stack Overflow](https://stackoverflow.com/questions/tagged/docusaurus), в нашем [GitHub репозитории](https://github.com/facebook/docusaurus), на нашем [сервере Discord](https://discordapp.com/invite/docusaurus), или в [Twitter](https://twitter.com/docusaurus).

**Последнее обновление страницы : 5 августа 2022 г.**