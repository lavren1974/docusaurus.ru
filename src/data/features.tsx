/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Работает на MDX',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/undraw_typewriter.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Экономьте время и сосредоточьтесь на текстовых документах.
        Просто пишите документы и сообщения в блогах с помощью MDX,
        и Docusaurus строит их в статические HTML-файлы,
        готовые к обслуживанию.
        Вы даже можете встроить компоненты React в свою Markdown благодаря MDX.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Построен с использованием React',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/undraw_react.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Расширьте и настройте макет вашего проекта, написав компоненты React. 
        Используйте подключаемую архитектуру и создавайте свой собственный сайт, 
        повторно используя те же данные, созданные плагинами Docusaurus.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Готов к переводу',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/undraw_around_the_world.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        Локализация выходит из коробки. 
        Используйте git, Crowdin или любой другой менеджер переводов 
        для перевода ваших документов и их индивидуального развертывания.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Управление версиями документов',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/undraw_version_control.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        Поддерживайте пользователей во всех версиях вашего проекта. 
        Управление версиями документов помогает синхронизировать документацию с выпусками проектов.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Поиск контента',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        Сделайте так, чтобы ваше сообщество легко находило то, что им нужно в вашей документации. 
        Мы с гордостью поддерживаем поиск документации Algolia.
      </Translate>
    ),
  },
];

export default FEATURES;
