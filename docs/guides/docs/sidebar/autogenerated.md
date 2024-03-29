---
slug: /sidebar/autogenerated
---

# Автогенерация

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Docusaurus может **автоматически создавать боковую панель** из вашей **структуры файловой системы**: каждая папка создает категорию боковой панели, а каждый файл создает ссылку на страницу.

```ts
type SidebarItemAutogenerated = {
  type: 'autogenerated';
  dirName: string; // Исходная папка для создания фрагмента боковой панели (относительно docs)
};
```

Docusaurus может создать полную боковую панель из папки docs:

```js title="sidebars.js"
module.exports = {
  myAutogeneratedSidebar: [
    // highlight-start
    {
      type: 'autogenerated',
      dirName: '.', // '.' означает текущую папку docs
    },
    // highlight-end
  ],
};
```

`Автоматически созданный` элемент преобразуется Docusaurus в **фрагмент боковой панели** (также обсуждается в [сокращениях категорий](items.md#category-shorthand)): список элементов типа `doc` или `category`, поэтому вы можете объединять **несколько `автоматически созданных` элементов** из нескольких директорий, чередуя их с обычными элементами боковой панели, на одном уровне.

<details>
<summary>Реальный пример</summary>
Рассмотрим эту файловую структуру:

```bash
docs
├── api
│   ├── product1-api
│   │   └── api.md
│   └── product2-api
│       ├── basic-api.md
│       └── pro-api.md
├── intro.md
└── tutorials
    ├── advanced
    │   ├── advanced1.md
    │   ├── advanced2.md
    │   └── read-more
    │       ├── resource1.md
    │       └── resource2.md
    ├── easy
    │   ├── easy1.md
    │   └── easy2.md
    ├── tutorial-end.md
    ├── tutorial-intro.md
    └── tutorial-medium.md
```

И предположим, что идентификатор каждой страницы — это просто имя ее файла. Если ваша автоматически генерируемая боковая панель описана так:

```js title="sidebars.js"
module.exports = {
  mySidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorial-intro',
        // highlight-start
        {
          type: 'autogenerated',
          dirName: 'tutorials/easy', // Generate sidebar slice from docs/tutorials/easy
        },
        // highlight-end
        'tutorial-medium',
        // highlight-start
        {
          type: 'autogenerated',
          dirName: 'tutorials/advanced', // Generate sidebar slice from docs/tutorials/hard
        },
        // highlight-end
        'tutorial-end',
      ],
    },
    // highlight-start
    {
      type: 'autogenerated',
      dirName: 'api', // Generate sidebar slice from docs/api
    },
    // highlight-end
    {
      type: 'category',
      label: 'Community',
      items: ['team', 'chat'],
    },
  ],
};
```

Она будет преобразована следующим образом:

```js title="sidebars.js"
module.exports = {
  mySidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorial-intro',
        // highlight-start
        // Two files in docs/tutorials/easy
        'easy1',
        'easy2',
        // highlight-end
        'tutorial-medium',
        // highlight-start
        // Two files and a folder in docs/tutorials/hard
        'advanced1',
        'advanced2',
        {
          type: 'category',
          label: 'read-more',
          items: ['resource1', 'resource2'],
        },
        // highlight-end
        'tutorial-end',
      ],
    },
    // highlight-start
    // Two folders in docs/api
    {
      type: 'category',
      label: 'product1-api',
      items: ['api'],
    },
    {
      type: 'category',
      label: 'product2-api',
      items: ['basic-api', 'pro-api'],
    },
    // highlight-end
    {
      type: 'category',
      label: 'Community',
      items: ['team', 'chat'],
    },
  ],
};
```

Обратите внимание, что сами автогенерируемые исходные директории сами не становятся категориями: становятся только содержащиеся в них элементы. Это то, что мы подразумеваем под «фрагментом боковой панели».

</details>

## Соглашение об индексах категорий {#category-index-convention}

Docusaurus может автоматически связать категорию с ее индексной страницей.

Индексная страница категорий — это файл, следующий одному из следующих соглашений об именах файлов:

- `index` (без учета регистра) в названии файла: `docs/Guides/index.md`
- `README` (case-insensitive) в названии файла: `docs/Guides/README.mdx`
- То же имя, что и у родительской папки: `docs/Guides/Guides.md`

Это эквивалентно использованию категории с [ссылкой на документ](items.md#category-doc-link):

```js title="sidebars.js"
module.exports = {
  docs: [
    // highlight-start
    {
      type: 'category',
      label: 'Guides',
      link: {type: 'doc', id: 'Guides/index'},
      items: [],
    },
    // highlight-end
  ],
};
```

:::tip совет

Имя вступительного документа `README.md` делает его видимым при просмотре папки с использованием интерфейса GitHub, а использование `index.md` делает поведение более соответствующим тому, как устроена структура HTML-файлов.

:::

:::tip совет

Если в папке есть только индексная страница, она будет преобразована в ссылку, а не в категорию. Это полезно для **хранения материалов страницы рядом с ней**:

```
some-doc
├── index.md
├── img1.png
└── img2.png
```

:::

<details>

<summary>Настройка соответствия индекса категории</summary>

Можно отказаться от любых соглашений индексов категорий или определить еще больше соглашений. Вы можете внедрить свой собственный `isCategoryIndex` сопоставитель через [`sidebarItemsGenerator`](#customize-the-sidebar-items-generator)обратный вызов. Например, вы также можете выбрать `intro` в качестве другого имени файла, которое может автоматически стать индексом категории.

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        async sidebarItemsGenerator({
          ...args,
          isCategoryIndex: defaultCategoryIndexMatcher, // формат сопоставления по умолчанию, приведенный ниже
          defaultSidebarItemsGenerator,
        }) {
          return defaultSidebarItemsGenerator({
            ...args,
            // highlight-start
            isCategoryIndex(doc) {
              return (
                // Также пусть используется intro.md в дополнение к стандартным
                doc.fileName.toLowerCase() === 'intro' ||
                defaultCategoryIndexMatcher(doc)
              );
            },
            // highlight-end
          });
        },
      },
    ],
  ],
};
```

Или вообще откажитесь от каких-либо соглашениях об индексе категории.

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        async sidebarItemsGenerator({
          ...args,
          isCategoryIndex: defaultCategoryIndexMatcher, // Формат сопоставления по умолчанию, приведенный ниже
          defaultSidebarItemsGenerator,
        }) {
          return defaultSidebarItemsGenerator({
            ...args,
            // highlight-start
            isCategoryIndex() {
              // Ни один документ не будет автоматически выбран в качестве индекса категории
              return false;
            },
            // highlight-end
          });
        },
      },
    ],
  ],
};
```

Формат сопоставления `isCategoryIndex` будет иметь три поля:

- `fileName`, имя файла без расширения и с сохранением регистра
- `directories`, список имен директорий _от самого низкого уровня до самого высокого уровня_ относительно корневой директории документации
- `extension`, расширение файла с точкой в начале.

Например, для файла `guides/sidebar/autogenerated.md` атрибуты, которые получает функция сопоставления, выглядят следующим образом:

```js
const props = {
  fileName: 'autogenerated',
  directories: ['sidebar', 'guides'],
  extension: '.md',
};
```

Реализация по умолчанию:

```js
function isCategoryIndex({fileName, directories}) {
  const eligibleDocIndexNames = [
    'index',
    'readme',
    directories[0].toLowerCase(),
  ];
  return eligibleDocIndexNames.includes(fileName.toLowerCase());
}
```

</details>

## Автоматически генерируемые метаданные боковой панели {#autogenerated-sidebar-metadata}

Когда вы сами пишите код боковой панели вы указываете метаданные ее элементов в файле `sidebars.js`; для автоматически сгенерированных боковых панелей Docusaurus считывает данные из соответствующих файлов элементам файлов. Кроме того, вы можете настроить относительное положение каждого элемента, потому что по умолчанию элементы внутри фрагмента боковой панели будут создаваться в **алфавитном порядке** (с использованием имен файлов и папок).

### Метаданные страницы {#doc-item-metadata}

Атрибуты `label`, `className` и `customProps` объявляются во front matter, как `sidebar_label`, `sidebar_class_name` и `sidebar_custom_props` соответственно. Позиция может быть указана таким же образом, с помощью `sidebar_position` во front matter.

```md title="docs/tutorials/tutorial-easy.md"
---
# highlight-start
sidebar_position: 2
sidebar_label: Easy
sidebar_class_name: green
# highlight-end
---

# Простая инструкция

Это простейшая инструкция!
```

### Метаданные элемента категории {#category-item-metadata}

Добавьте файл `_category_.json` или `_category_.yml` в соответствующую папку. Вы можете указать любые метаданные категории, а также параметр `position`. `label`, `className`, `position` и `customProps` по умолчанию будут использовать соответствующие значения связанного документа категории, если такой имеется.

<Tabs>
<TabItem value="JSON">

```json title="docs/tutorials/_category_.json"
{
  "position": 2.5,
  "label": "Tutorial",
  "collapsible": true,
  "collapsed": false,
  "className": "red",
  "link": {
    "type": "generated-index",
    "title": "Обзор руководства"
  },
  "customProps": {
    "description": "Это описание можно использовать в смарт-карте DocCard."
  }
}
```

</TabItem>
<TabItem value="YAML">

```yml title="docs/tutorials/_category_.yml"
position: 2.5 # поддерживаются числа с плавающей запятой
label: 'Руководство'
collapsible: true # делает категорию сворачивающейся
collapsed: false # по умолчанию категория будет раскрыта
className: red
link:
  type: generated-index
  title: Обзор руководства
customProps:
  description: Это описание можно использовать в смарт-карте DocCard
```

</TabItem>
</Tabs>

:::info информация

Если `link` указана явно, Docusaurus не будет применять какие-либо [соглашения по умолчанию](items.md#category-index-convention).

Ссылки на документы могут быть указаны относительно, например. если категория создается с каталогом `guides`, то `"link": {"type": "doc", "id": "intro"}` будет преобразован в ID `guides/intro`, возвращаясь к `intro` только в том случае, если документ с прежним ID не существует.

Вы также можете использовать `link: null`, чтобы отказаться от соглашений по умолчанию и не создавать индексную страницу категории.

:::

:::info информация

Метаданные позиции используются только **внутри фрагмента боковой панели**: Docusaurus не меняет порядок других элементов боковой панели.

:::

## Использование числовых префиксов {#using-number-prefixes}

Простой способ упорядочить автоматически сгенерированную боковую панель — добавить к файлам и папкам числовые префиксы, что также расставит их в файловой системе в том же порядке при сортировке по имени файла:

```bash
docs
├── 01-Intro.md
├── 02-Tutorial Easy
│   ├── 01-First Part.md
│   ├── 02-Second Part.md
│   └── 03-End.md
├── 03-Tutorial Hard
│   ├── 01-First Part.md
│   ├── 02-Second Part.md
│   ├── 03-Third Part.md
│   └── 04-End.md
└── 04-End.md
```

Чтобы **упростить это**, Docusaurus поддерживает **паттерны префиксов с несколькими числами**.

По умолчанию Docusaurus **удалит числовой префикс** из идентификатора документа, заголовка, ярлыка и URL-адресов.

:::caution осторожно

**Предпочтительнее использовать [дополнительные метаданные](#autogenerated-sidebar-metadata)**.

Обновление префикса номера может раздражать, так как может потребоваться **обновление нескольких существующих Markdown ссылок**:

```diff title="docs/02-Tutorial Easy/01-First Part.md"
- Check the [Tutorial End](../04-End.md);
+ Check the [Tutorial End](../05-End.md);
```

:::

## Настройка генератора элементов боковой панели {#customize-the-sidebar-items-generator}

Вы можете указать собственную функцию `sidebarItemsGenerator` в конфигурации плагина (или пресета) документации:

```js title="docusaurus.config.js"
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        // highlight-start
        async sidebarItemsGenerator({
          defaultSidebarItemsGenerator,
          numberPrefixParser,
          item,
          version,
          docs,
          categoriesMetadata,
          isCategoryIndex,
        }) {
          // Example: return an hardcoded list of static sidebar items
          return [
            {type: 'doc', id: 'doc1'},
            {type: 'doc', id: 'doc2'},
          ];
        },
        // highlight-end
      },
    ],
  ],
};
```

:::tip совет

**Повторно используйте и улучшайте генератор по умолчанию** вместо написания генератора с нуля: [генератор по умолчанию, который мы предоставляем](https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-plugin-content-docs/src/sidebars/generator.ts), состоит из 250 строк.

**Добавляйте, обновляйте, фильтруйте и изменяйте порядок** элементов боковой панели в соответствии с вашими задачами:

```js title="docusaurus.config.js"
// highlight-start
// возвращает элементы боковой панели в обратном порядкке (включая элементы вложенных категорий)
function reverseSidebarItems(items) {
  // Развернуть элементы в катеогриях
  const result = items.map((item) => {
    if (item.type === 'category') {
      return {...item, items: reverseSidebarItems(item.items)};
    }
    return item;
  });
  // Развернуть элементы на текущем уровне
  result.reverse();
  return result;
}
// highlight-end

module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        // highlight-start
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return reverseSidebarItems(sidebarItems);
        },
        // highlight-end
      },
    ],
  ],
};
```

:::

**Последнее обновление страницы : 6 августа 2022 г.**