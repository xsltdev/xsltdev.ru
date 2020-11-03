---
description: Тег tr (от англ. table row — строка таблицы) служит контейнером для создания строки таблицы
---

# &lt;tr&gt;

Тег **`<tr>`** _(от англ. **t**able **r**ow — строка таблицы)_ служит контейнером для создания строки таблицы.

Каждая ячейка в пределах такой строки устанавливается с помощью элемента [`<th>`](th.md) или [`<td>`](td.md).

??? info "Таблицы"

    <div class="col4" markdown="1">

    - [caption](caption.md)
    - [col](col.md)
    - [colgroup](colgroup.md)
    - [table](table.md)
    - [tbody](tbody.md)
    - [td](td.md)
    - [tfoot](tfoot.md)
    - [th](th.md)
    - [thead](thead.md)
    - **tr**

    </div>

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

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element)
- [HTML 5](http://www.w3.org/TR/html5/tabular-data.html#the-tr-element)

## Описание и примеры

```html
<html>
  <head>
    <meta
      http-equiv="Content-Type"
      content="text/html; charset=utf-8"
    />
    <title>TR</title>
  </head>
  <body>
    <table width="100%" border="0" cellpadding="4">
      <tr align="right" valign="top">
        <td>
          <img
            src="image/book.png"
            width="199"
            height="133"
            alt="Книга"
          />
        </td>
        <td>Lorem ipsum dolor sit amet...</td>
      </tr>
    </table>
  </body>
</html>
```

## Ссылки

- Тег [`<tr>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/tr) <sup><small>MDN (рус.)</small></sup>
