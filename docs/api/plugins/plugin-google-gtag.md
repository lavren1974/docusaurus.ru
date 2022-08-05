---
sidebar_position: 7
slug: /api/plugins/@docusaurus/plugin-google-gtag
---

# 📦 plugin-google-gtag

импортировать APITable из '@site/src/components/APITable';

The default [Global Site Tag (gtag.js)](https://developers.google.com/analytics/devguides/collection/gtagjs/) plugin. It is a JavaScript tagging framework and API that allows you to send event data to Google Analytics, Google Ads, and Google Marketing Platform. This section describes how to configure a Docusaurus site to enable global site tag for Google Analytics.

:::tip совет

You can use [Google's Tag Assistant](https://tagassistant.google.com/) tool to check if your gtag is set up correctly!

:::

:::caution осторожно production only

This plugin is always inactive in development and **only active in production** to avoid polluting the analytics statistics.

:::

## Установка {#installation}

```bash npm2yarn
npm install --save @docusaurus/plugin-google-gtag
```

:::tip совет

If you use the preset `@docusaurus/preset-classic`, you don't need to install this plugin as a dependency.

You can configure this plugin through the preset options.

:::

## Файл конфигурации {#configuration}

Accepted fields:

```mdx-code-block
<APITable>
```

| Название      | Type      | По-умолчанию | Описание                                                   |
| ------------- | --------- | ------------ | ---------------------------------------------------------- |
| `trackingID`  | `string`  | **Required** | The tracking ID of your gtag service.                      |
| `anonymizeIP` | `boolean` | `false`      | Whether the IP should be anonymized when sending requests. |

```mdx-code-block
</APITable>
```

### Example configuration {#ex-config}

You can configure this plugin through preset options or plugin options.

:::tip совет

Most Docusaurus users configure this plugin through the preset options.

:::

```js config-tabs
// Preset Options: gtag
// Plugin Options: @docusaurus/plugin-google-gtag

const config = {
  trackingID: 'G-226F0LR9KE',
  anonymizeIP: true,
};
```
