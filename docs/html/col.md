---
description: Тег col (от англ. column - столбец, колонка) задаёт ширину и другие характеристики одной или нескольких колонок таблицы
---

# &lt;col&gt;

Тег **`<col>`** _(от англ. **col**umn - столбец, колонка)_ задаёт ширину и другие характеристики одной или нескольких колонок таблицы.

При наличии этого элемента браузер начинает показывать содержимое таблицы, не дожидаясь её полной загрузки. `<col>` можно использовать совместно с элементом [`<colgroup>`](colgroup.md), который задаёт группу колонок, обладающих общими характеристиками.

Для `<col>` допустимо использовать следующие стилевые свойства: `border`, `background`, `width`, `visibility`. Остальные свойства не оказывают никакого эффекта на элемент.

??? info "Таблицы"

    <div class="col4" markdown="1">

    - [caption](caption.md)
    - **col**
    - [colgroup](colgroup.md)
    - [table](table.md)
    - [tbody](tbody.md)
    - [td](td.md)
    - [tfoot](tfoot.md)
    - [th](th.md)
    - [thead](thead.md)
    - [tr](tr.md)

    </div>

## Синтаксис

```html
<table>
  <col />
  <tr>
    <td>...</td>
  </tr>
</table>
```

Закрывающий тег не требуется.

## Атрибуты

`span`
: Количество колонок, к которым следует применять параметры.

### span

Определяет число колонок, к которым будут применяться заданные характеристики. Если этот атрибут отсутствует, то элемент `<col>` работает для одной колонки. Допускается применять атрибут `span` к нескольким колонкам и таким образом формировать группы колонок с одинаковыми характеристиками.

**Синтаксис**

```html
<col span="<число>" />
```

**Значения**

Целое положительное число.

**Значение по умолчанию**

1

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/tables.html#the-col-element)
- [HTML5](http://www.w3.org/TR/html5/tabular-data.html#the-col-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/tables.html#h-11.2.4.2)

## Описание и примеры

```html
<html>
  <head>
    <meta
      http-equiv="Content-Type"
      content="text/html; charset=utf-8"
    />
    <title>COL</title>
  </head>
  <body>
    <table
      width="400"
      border="0"
      cellpadding="5"
      cellspacing="0"
    >
      <col width="150" valign="top" />
      <col width="250" valign="top" />
      <tr>
        <td style="background: #B0B28E">
          Рутений распознает окисленный интермедиат, что
          позже подтвердилось многочисленными опытами.
        </td>
        <td style="background: #CCCCCC">
          При осуществлении искусственных ядерных реакций
          было доказано, что хлорсульфит натрия
          кристалличен.
        </td>
      </tr>
    </table>
  </body>
</html>
```

## Ссылки

- Тег [`<col>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/col) <sup><small>MDN (рус.)</small></sup>
