# &lt;tr&gt;

Тег **`<tr>`** _(от англ. **t**able **r**ow -- строка таблицы)_ служит контейнером для создания строки таблицы.

Каждая ячейка в пределах такой строки устанавливается с помощью элемента [`<th>`](/html/th/) или [`<td>`](/html/td/).

## Синтаксис

```html
<table>
  <tr>
    <td>...</td>
  </tr>
</table>
```

Закрывающий тег не обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element)
- [HTML 5](http://www.w3.org/TR/html5/tabular-data.html#the-tr-element)

## Описание и примеры

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>TR</title>
  </head>
  <body>
    <table width="100%" border="0" cellpadding="4">
      <tr align="right" valign="top">
        <td><img src="image/book.png" width="199" height="133" alt="Книга" /></td>
        <td>Lorem ipsum dolor sit amet...</td>
      </tr>
    </table>
  </body>
</html>
```
