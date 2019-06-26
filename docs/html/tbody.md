---
layout: default
title: tbody
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;tbody&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<tbody>`** _(от англ. **t**able **body** -- тело таблицы)_ предназначен для хранения одной или нескольких строк таблицы.

Это позволяет создавать структурные блоки, к которым можно применять единое оформление через стили, а также управлять их видом через скрипты.

Допускается применять несколько элементов `<tbody>` внутри контейнера [`<table>`](/html/table/). Доступны и другие виды группировок строк — [`<tfoot>`](/html/tfoot/) и [`<thead>`](/html/thead/), ни один из них не должен перекрываться с элементом `<tbody>`.

## Синтаксис

```html
<table>
  <thead>
    ...
  </thead>
  <tfoot>
    ...
  </tfoot>
  <tbody>
    <tr>
      <td>...</td>
    </tr>
  </tbody>
</table>
```

Закрывающий тег не обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element)
- [HTML 5](http://www.w3.org/TR/html5/tabular-data.html#the-tbody-element)

## Описание и примеры

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>TBODY</title>
  </head>
  <body>
    <table width="600" border="1">
      <tbody align="right">
        <tr>
          <td>Ячейка 1</td>
          <td>Ячейка 2</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```
