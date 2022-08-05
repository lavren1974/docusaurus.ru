---
sidebar_position: 0
id: themes-overview
sidebar_label: Обзор тем
slug: /api/themes
---

# Темы Docusaurus

We provide official Docusaurus themes.

## Main themes {#main-themes}

The main themes implement the user interface for the [docs](../plugins/plugin-content-docs.md), [blog](../plugins/plugin-content-blog.md) and [pages](../plugins/plugin-content-pages.md) plugins.

- [@docusaurus/theme-classic](./theme-classic.md)
- 🚧 other themes are planned

:::caution осторожно

The goal is to have all themes share the exact same features, user-experience and configuration.

Only the UI design and underlying styling framework should change, and you should be able to change theme easily.

We are not there yet: only the classic theme is production ready.

:::

## Enhancement themes {#enhancement-themes}

These themes will enhance the existing main themes with additional user-interface related features.

- [@docusaurus/theme-live-codeblock](./theme-live-codeblock.md)
- [@docusaurus/theme-search-algolia](./theme-search-algolia.md)
