---
description: Тег thead (от англ. table head — голова, верх таблицы) предназначен для хранения одной или нескольких строк, которые представлены вверху таблицы
---

# &lt;thead&gt;

Тег **`<thead>`** _(от англ. **t**able **head** — голова, верх таблицы)_ предназначен для хранения одной или нескольких строк, которые представлены вверху таблицы.

Допустимо использовать не более одного элемента `<thead>` в пределах одной таблицы, и он должен идти в исходном коде сразу после элемента [`<table>`](table.md).

## Синтаксис

```html
<table>
  <thead>
    <tr>
      <td>...</td>
    </tr>
  </thead>
  <tfoot>
    ...
  </tfoot>
  <tbody>
    ...
  </tbody>
</table>
```

Закрывающий тег не обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element)
- [HTML 5](http://www.w3.org/TR/html5/tabular-data.html#the-thead-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>THEAD</title>
  </head>
  <body>
    <table style="width: 600px;">
      <thead style="background: #fc0">
        <tr>
          <td>...</td>
          <td>...</td>
        </tr>
      </thead>
      <tbody style="background: #ccc">
        <tr>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```
