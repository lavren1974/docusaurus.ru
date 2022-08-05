---
sidebar_position: 2
slug: /api/themes/@docusaurus/theme-classic
---

# 📦 theme-classic

The classic theme for Docusaurus.

You can refer to the [theme configuration page](theme-configuration.md) for more details on the configuration.

```bash npm2yarn
npm install --save @docusaurus/theme-classic
```

:::tip совет

If you have installed `@docusaurus/preset-classic`, you don't need to install it as a dependency.

:::

## Файл конфигурации {#configuration}

Accepted fields:

```mdx-code-block
<APITable>
```

| Option      | Type                      | По-умолчанию | Описание                                                                                                                                                  |
| ----------- | ------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customCss` | <code>string[] \| string</code> | `[]`         | Stylesheets to be imported globally as [client modules](../../advanced/client.md#client-modules). Relative paths are resolved against the site directory. |

```mdx-code-block
</APITable>
```

:::note примечание

Most configuration for the theme is done in `themeConfig`, which can be found in [theme configuration](./theme-configuration.md).

:::

### Example configuration {#ex-config}

You can configure this theme through preset options or plugin options.

:::tip совет

Most Docusaurus users configure this plugin through the preset options.

:::

```js config-tabs
// Preset Options: theme
// Plugin Options: @docusaurus/theme-classic

const config = {
  customCss: require.resolve('./src/css/custom.css'),
};
```
