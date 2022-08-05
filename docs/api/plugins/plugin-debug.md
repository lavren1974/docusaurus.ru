---
sidebar_position: 5
slug: /api/plugins/@docusaurus/plugin-debug
---

# 📦 plugin-debug

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Плагин отладки отображает полезную отладочную информацию на [http://localhost:3000/\_\_docusaurus/debug](http://localhost:3000/__docusaurus/debug).

Как правило, отладочная информация пригодится разработчикам плагинов, которые с лёгкостью смогут посмотреть содержимое директории `.docusaurus` (например, созданные маршруты). Кроме этого, можно будет увидеть данные, которые не записываются в файлы сборки, например, данные плагина, загруженные с помощью хука жизненного цикла `contentLoaded`.

:::info

If you use the plugin via the classic preset, the preset will **enable the plugin in development and disable it in production** by default (`debug: undefined`) to avoid exposing potentially sensitive information. You can use `debug: true` to always enable it or `debug: false` to always disable it.

If you use a standalone plugin, you may need to achieve the same effect by checking the environment:

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    // highlight-next-line
    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-debug',
  ].filter(Boolean),
};
```

:::

:::note

Когда вы будете сообщать об ошибках в Docusaurus, мы может быть попросим вас активировать этот плагин в продакшен-сборке вашего сайта, чтобы упростить нам изучение его конфигурации.

If you don't have any sensitive information, you can keep it on in production [like we do](/__docusaurus/debug).

:::

## Установка {#installation}

```bash npm2yarn
npm install --save @docusaurus/plugin-debug
```

:::tip

If you use the preset `@docusaurus/preset-classic`, you don't need to install this plugin as a dependency.

You can configure this plugin through the preset options.

:::

## Конфигурация {#configuration}

This plugin currently has no options.

### Example configuration {#ex-config}

You can configure this plugin through preset options or plugin options.

:::tip

Most Docusaurus users configure this plugin through the preset options.

:::

```mdx-code-block
<Tabs groupId="api-config-ex">
<TabItem value="preset" label="Preset options">
```

If you use a preset, configure this plugin through the [preset options](../../using-plugins.md#docusauruspreset-classic):

```js title="docusaurus.config.js"
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-next-line
        debug: true, // This will enable the plugin in production
      },
    ],
  ],
};
```

```mdx-code-block
</TabItem>
<TabItem value="plugin" label="Plugin Options">
```

If you are using a standalone plugin, provide options directly to the plugin:

```js title="docusaurus.config.js"
module.exports = {
  // highlight-next-line
  plugins: ['@docusaurus/plugin-debug'],
};
```

```mdx-code-block
</TabItem>
</Tabs>
```
