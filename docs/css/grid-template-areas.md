---
layout: default
title: grid-template-areas
nav_order:
parent: CSS
---

<!-- prettier-ignore-start -->
# grid-template-areas
{: .no_toc }
<!-- prettier-ignore-end -->

Свойство **`grid-template-areas`** определяет шаблон сетки ссылаясь на имена областей, которые заданы с помощью свойства [`grid-area`](/css/grid-area/).

Повторение названия области приводит к тому, что содержимое охватывает эти ячейки. Точка означает пустую ячейку. Сам синтаксис предоставляет визуализацию структуры сетки.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

```css
/* Keyword value */
grid-template-areas: none;

/* <string> values */
grid-template-areas: 'a b';
grid-template-areas:
  'a b b'
  'a c d';

/* Global values */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: unset;
```

## Значения

Значение по-умолчанию: `none`

Применяется к: к grid-контейнерам

- `<grid-area-name>` — имя области заданное с помощью `grid-area`;
- `.` — точка обозначающая пустую ячейку;
- `none` — области не определены;

## Спецификации

- [CSS Grid Layout](https://drafts.csswg.org/css-grid/#propdef-grid-template-areas)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-grid" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-grid">Can I Use css-grid?</a> Data on support for the css-grid feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```css
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header header'
    'main main . sidebar'
    'footer footer footer footer';
}
```

Пример выше создаст сетку из 4 колонок и 3 строк. Вся верхняя строка будет состоять из области `header`. Строка по середине будет состоять из области `main`, занимающей две колонки, пустой ячейки и области `sidebar`, которая занимает одну колонку. Последняя строка будет состоять только из области `footer`.

![CSS Grid Template Areas](grid-template-areas.png)

У каждой строки должно быть одинаковое количество ячеек. Вы можете использовать любое количество примыкающих точек для объявления пустых ячеек. Пока между точками нет пробелов, они представляют одну ячейку.

Обратите внимание на то, что вы никак не называете линии, только области. Когда вы используете такой синтаксис, линии на обоих концах областей будут именоваться автоматически. Если ваша область называется `foo`, то название первых линий для строк и столбцов будет `foo-start`, а название для последних линий строк и столбцов будет `foo-end`. Это означает, что у некоторых линий может быть несколько имён, как нашем случае, у самой левой линии будет три названия: `header-start`, `main-start`, и `footer-start`.
