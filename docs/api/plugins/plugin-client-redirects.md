---
sidebar_position: 4
slug: /api/plugins/@docusaurus/plugin-client-redirects
---

# 📦 plugin-client-redirects

импортировать APITable из '@site/src/components/APITable';

Docusaurus-плагин для создания **браузерных редиректов**.

This plugin will write additional HTML pages to your static site that redirect the user to your existing Docusaurus pages with JavaScript.

:::caution production only

This plugin is always inactive in development and **only active in production** because it works on the build output.

:::

:::caution

Если это возможно, лучше использовать серверные редиректы.

Прежде чем использовать данный плагин, сначала проверьте, что у вашего хостинг-провайдера нет подобной возможности.

:::

## Установка {#installation}

```bash npm2yarn
npm install --save @docusaurus/plugin-client-redirects
```

## Конфигурация {#configuration}

Accepted fields:

```mdx-code-block
<APITable>
```

| Option            | Type                      | По-умолчанию | Описание                                                                                                                                               |
| ----------------- | ------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fromExtensions`  | `string[]`                | `[]`         | The extensions to be removed from the route after redirecting.                                                                                         |
| `toExtensions`    | `string[]`                | `[]`         | The extensions to be appended to the route after redirecting.                                                                                          |
| `redirects`       | <code><a href="#RedirectRule">RedirectRule</a>[]</code> | `[]`         | The list of redirect rules.                                                                                                                            |
| `createRedirects` | <code><a href="#CreateRedirectsFn">CreateRedirectsFn</a></code> | `undefined`  | A callback to create a redirect rule. Docusaurus query this callback against every path it has created, and use its return value to output more paths. |

```mdx-code-block
</APITable>
```

:::note

This plugin will also read the [`siteConfig.onDuplicateRoutes`](../docusaurus.config.js.md#onDuplicateRoutes) config to adjust its logging level when multiple files will be emitted to the same location.

:::

### Types {#types}

#### `RedirectRule` {#RedirectRule}

```ts
type RedirectRule = {
  to: string;
  from: string | string[];
};
```

:::note

The idea of "from" and "to" is central in this plugin. "From" means a path that you want to _create_, i.e. an extra HTML file that will be written; "to" means a path to want to redirect _to_, usually a route that Docusaurus already knows about.

This is why you can have multiple "from" for the same "to": we will create multiple HTML files that all redirect to the same destination. On the other hand, one "from" can never have more than one "to": the written HTML file needs to have a determinate destination.

:::

#### `CreateRedirectsFn` {#CreateRedirectsFn}

```ts
// The parameter `path` is a route that Docusaurus has already created. It can
// be seen as the "to", and your return value is the "from". Returning a falsy
// value will not create any redirect pages for this particular path.
type CreateRedirectsFn = (path: string) => string[] | string | null | undefined;
```

### Example configuration {#ex-config}

Here's an example configuration:

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      // highlight-start
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/docs/newDoc',
            from: '/docs/oldDoc',
          },
          // Redirect from multiple old paths to the new path
          {
            to: '/docs/newDoc2',
            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/community')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/community', '/docs/team'),
              existingPath.replace('/community', '/docs/support'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
      // highlight-end
    ],
  ],
};
```
