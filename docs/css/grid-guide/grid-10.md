---
layout: default
title: Именованные grid-линии и функция repeat
nav_order:
parent: Руководство Grid
grand_parent: CSS
---

<!-- prettier-ignore-start -->
# Именованные grid-линии и функция repeat
{: .no_toc }
<!-- prettier-ignore-end -->

<!-- prettier-ignore -->
1. TOC
{:toc}

С помощью ранее рассмотренной функции repeat мы можем растиражировать столбцы и строки, которые создаются между именованными grid-линиями:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Grid Layout в CSS3</title>
    <style>
      * {
        box-sizing: border-box;
      }
      html,
      body {
        margin: 0;
        padding: 0;
      }
      .grid-container {
        height: 100vh;
        display: grid;
        grid-template-columns: 10px repeat(3, [column] 1fr [colgutter] 10px);
        grid-template-rows: 10px repeat(2, [row] 1fr [rowgutter] 10px);
      }

      .grid-item {
        background-color: #ddd;
      }

      .special-item {
        grid-column: column 2;
        grid-row: row 1;
        background-color: #bbb;
      }
      .item1 {
        grid-column: column 1;
        grid-row: row 1;
      }
      .item2 {
        grid-column: column 3;
        grid-row: row 1;
      }
      .item3 {
        grid-column: column 1;
        grid-row: row 2;
      }
      .item4 {
        grid-column: column 2;
        grid-row: row 2;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="grid-item special-item"></div>
      <div class="grid-item item1"></div>
      <div class="grid-item item2"></div>
      <div class="grid-item item3"></div>
      <div class="grid-item item4"></div>
    </div>
  </body>
</html>
```

Возьмем из данного примера определение столбцов:

```css
grid-template-columns: 10px repeat(3, [column] 1fr [colgutter] 10px);
```

Первый столбец будет иметь ширину в 10 пикселей. Затем происходит тиражирование столбцов с помощью функции repeat. Она создает подряд три копии двух столбцов. Первый столбец имеет ширину 1fr, то есть имеет пропорциональные размеры, и располагается между grid-линиями "column" и "colgutter". После grid-линии "colgutter" идет еще один столбец шириной в 10 пикселей. И эти два столбца будут повторяться три раза. То есть всего в гриде будет 7 столбцов.

Со строками будет во многом аналогично, только там создается 5 строк с помощью grid-линий "row" и "rowgutter".

При определении стиля элементов, используя имя grid-линий и их порядковый номер, мы можем явным образом указать с помощью свойств grid-column и grid-row, где именно должен располагаться элемент:

```css
.special-item {
  grid-column: column 2; /* второй столбец с именем column */
  grid-row: row 1; /* первая строка с именем row */
  background-color: #bbb;
}
```

Причем свойство grid-column: column 2 указывает на столбец в гриде, который начинается со второй grid-линии "column". В итоге мы получим следующий грид:

![Именованные grid-линии и функция repeat](grid-10-1.png)

Возможно, многие найдут такой подход более интуитивно понятным для определения позиции элемента.

И более того мы можем дополнительно добавлять новые именованные грид-линии вне функции repeat:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Grid Layout в CSS3</title>
    <style>
      * {
        box-sizing: border-box;
      }
      html,
      body {
        margin: 0;
        padding: 0;
      }
      .grid-container {
        height: 100vh;
        display: grid;
        grid-template-columns:
          10px repeat(3, [column] 1fr [colgutter] 10px)
          [sidebarstart] 150px [sidebarend] 10px;
        grid-template-rows: 10px repeat(2, [row] 1fr [rowgutter] 10px);
      }

      .grid-item {
        background-color: #ddd;
      }

      .special-item {
        grid-column: column 2;
        grid-row: row 1;
        background-color: #bbb;
      }
      .item1 {
        grid-column: column 1;
        grid-row: row 1;
      }
      .item2 {
        grid-column: column 3;
        grid-row: row 1;
      }
      .item3 {
        grid-column: column 1;
        grid-row: row 2;
      }
      .item4 {
        grid-column: column 2;
        grid-row: row 2;
      }
      .sidebar {
        grid-column: sidebarstart / sidebarend;
        grid-row: 2 / 5;
        background-color: #ccc;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="grid-item special-item"></div>
      <div class="grid-item item1"></div>
      <div class="grid-item item2"></div>
      <div class="grid-item item3"></div>
      <div class="grid-item item4"></div>
      <div class="grid-item sidebar"></div>
    </div>
  </body>
</html>
```

И также стоит отметить, что вне зависимости от того, именованные строки,столбцы и grid-линии или неименованные, мы по прежнему можем позиционировать элементы, используя номера grid-линий, как в данном случае происходит в отношении сайдбара:

```css
.sidebar {
  grid-column: sidebarstart / sidebarend;
  grid-row: 2 / 5;
  background-color: #ccc;
}
```

![Именованные grid-линии и функция repeat](grid-10-2.png)

## Ссылки

- [Именованные grid-линии и функция repeat](https://metanit.com/web/html5/13.10.php)
