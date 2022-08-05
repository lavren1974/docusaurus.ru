---
id: blog
title: Блог
---

Функциональность блога позволяет вам быстро развернуть полноценный блог.

:::info

Перейдите в [API-справочник блога](./api/plugins/plugin-content-blog.md), чтобы узнать список доступных параметров.

:::

## Начальная настройка {#initial-setup}

Для настройки блога вашего сайта, сначала создайте директорию `blog`.

Затем добавьте в шапку страницы ссылку на блог, используя файл с настройками `siteConfig.js`:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    // ...
    navbar: {
      items: [
        // ...
        // highlight-next-line
        {to: 'blog', label: 'Blog', position: 'left'}, // или position: 'right'
      ],
    },
  },
};
```

## Добавление постов {#adding-posts}

Чтобы опубликовать в блоге пост, создайте файл Markdown в директории блога.

Например, создайте файл по пути `my-website/blog/2019-09-05-hello-docusaurus-v2.md`:

```yml
---
title: Добро пожаловать Docusaurus v2
автор: Джоэль Марси
author_title: Соавтор Docusaurus 1
author_url: https://github.com/JoelMarcey
author_image_url: https://graph. acebook.com/611217057/picture/?height=200&width=200
теги: [hello, docusaurus-v2]
описание: Это мой первый пост на Docusaurus 2.
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---
Добро пожаловать в этот блог. Этот блог создан с помощью [**Docusaurus 2**](https://docusaurus.io/).

<!--truncate-->

Это мой первый пост на Docusaurus 2.

Еще многое нужно исследовать.
```

:::note

Docusaurus извлечет дату в формате `YYYYY-MM-DD` из имени файла например `YYYY-MM-DD-my-blog-post-title.md`.

На самом деле необязательно указывать дату в имени файла — можно сделать в FrontMatter.

<details>
<summary>Пример поддерживаемых шаблонов</summary>

- `2021-05-28-my-blog-post-title.md`
- `2021-05-28-my-blog-post-title.mdx`
- `2021-05-28-my-blog-post-title/index.md`
- `2021-05-28/my-blog-post-title.md`
- `2021/05/28/my-blog-post-title.md`
- `2021/05-28-my-blog-post-title.md`
- `2021/05/28/my-blog-post-title/index.md`
- ...

</details>

:::

:::tip

Файлы блога удобно хранить по директориям, тогда изображения постов будут рядом с соответствующими Markdown-файлами.

:::

Единственное обязательное поле во вступлении — это `title`; мы предоставляем возможность добавить больше метаданных для вашего поста в блог, например, информацию об авторе. Обо всех доступных полях читайте в [документации по API](api/plugins/plugin-content-blog.md#markdown-frontmatter).

## Список постов {#blog-list}

Главная страница блога (по умолчанию доступна по пути `/blog`) является _страницей списка блога_, на которой собраны разные посты блога.

Используйте специальный комментарий `<!--truncate-->` в посте, чтобы ограничить часть, которая будет отображена на странице списка. Все, что размещено до `<!--truncate-->`, станет частью резюме. Например:

```yml
---
title: Пример обрезки
---

Все это будет частью резюме сообщения в блоге.

Даже это.

<!--truncate-->

Но ничего снизу, здесь не будет.

И не это.

Или это.
```

По умолчанию на каждой странице списка отображается 10 постов, но при помощи опци `postsPerPage` в конфигурации плагина вы можете изменить это число. Если вы установите `postsPerPage: 'Все'`, пагинация будет отключена и все записи будут отображаться на первой странице. Вы также можете добавить мета-описание на страницу со списком блогов для улучшения SEO:

```js title="docusaurus.config.js"
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          // highlight-start
          blogTitle: 'Блог Docusaurus!',
          blogDescription: 'Блог на сайте Docusaurus!',
          postsPerPage: 'ALL',
          // highlight-end
        },
      },
    ],
  ],
};
```

## Боковая панель блога {#blog-sidebar}

На боковой панели отображаются последние записи в блоге. Количество отображаемых элементов по умолчанию равно 5, но вы можете настроить с помощью опции `blogSidebarCount` в конфигурации плагина. Если вы укажете параметр `blogSidebarCount: 0`, боковая панель будет полностью отключена, а контейнер — удален. Это увеличит ширину основного контейнера. Также если вы укажете параметр `blogSidebarCount: 'ALL'`, отобразятся _все_ записи.

Вы также можете изменить текст заголовка боковой панели, используя параметр `blogSidebarTitle`. Например, если вы укажете `blogSidebarCount: 'ALL'`, то вместо элемента Последние посты по умолчанию, будут показываться Все посты:

```js title="docusaurus.config.js"
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          // highlight-start
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // highlight-end
        },
      },
    ],
  ],
};
```

:::note

Поскольку заголовок боковой панели закодирован в файле конфигурации, в настоящее время он непереводим.

:::

## Лента новостей {#feed}

Вы можете сгенернировать RSS/Atom канал путем указания feedOptions. RSS и Atom каналы генерируются по-умолчанию. Чтобы отлючить их, установите `feedOptions.type` в `null`.

```ts
type BlogOptions = {
  feedOptions?: {
    type?: 'rss' | 'atom' | 'all' | null;
    title?: string;
    description?: string;
    copyright: string;
    language?: string; // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  };
};
```

Пример использования:

```js {8-11} title="docusaurus.config.js"
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
        },
      },
    ],
  ],
};
```

Доступ к ленте:

Ленту RSS можно найти здесь:

```text
https://{your-domain}/blog/rss.xml
```

и для Atom:

```text
https://{your-domain}/blog/atom.xml
```

## Дополнительные возможности {#advanced-topics}

### Режим "Только блог" {#blog-only-mode}

Вы можете запустить свой сайт на Docusaurus, на котором вместо обычной посадочной страницы в качестве главной будет использоваться страница вашего блога. Установите `routeBasePath` значение `'/'`, чтобы указать, что это корневой путь.

```js {10} title="docusaurus.config.js"
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/', // установите это значение равным '/'.
        },
      },
    ],
  ],
};
```

:::caution

Не забудьте удалить существующую домашнюю страницу по адресу `./src/pages/index.js`, иначе два файла будут сопоставлены с одним маршрутом!

:::

### Множество блогов {#multiple-blogs}

По умолчанию классическая тема предполагает наличие только одного блога на веб-сайте и, следовательно, включает только один экземпляр плагина блога. Если вы хотите иметь несколько блогов на одном сайте, это тоже возможно! Вы можете добавить еще один блог, указав в параметре `plugins` другой подключаемый модуль блога для `docusaurus.config.js`.

Задайте для `routeBasePath` URL, по которому вы хотите получить доступ к своему второму блогу. Обратите внимание, что `routeBasePath` в этом случае должен отличаться от первого блога, иначе может произойти конфликт путей! И ещё, задайте для `path` путь к каталогу, содержащему записи вашего второго блога.

Согласно документации для [multi-instance plugins](./using-plugins.md#multi-instance-plugins-and-plugin-ids), вам необходимо присвоить плагинам уникальный идентификатор.

```js title="docusaurus.config.js"
module.exports = {
  // ...
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Требуется для всех многоэкземплярных плагинов
         */
        id: 'second-blog',
        /**
         * URL для раздела блога вашего сайта.
         * *НЕ* используйте слэш в конце.
         */
        routeBasePath: 'my-second-blog',
        /**
         * Путь к данным в файловой системе относительно каталога сайта.
         */
        path: './my-second-blog',
      },
    ],
  ],
};
```

В качестве примера мы размещаем второй блог [здесь](/tests/blog).
