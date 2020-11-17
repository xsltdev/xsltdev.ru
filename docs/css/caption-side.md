---
description: Свойство caption-side определяет положение заголовка таблицы, который задается с помощью элемента caption, относительно самой таблицы
---

# caption-side

Свойство **`caption-side`** определяет положение заголовка таблицы, который задается с помощью элемента [`<caption>`](/html/caption/), относительно самой таблицы.

Свойство `caption-side` выводит заголовок до или после таблицы, а выравнивание текста по правому или левому краю устанавливается через свойство [`text-align`](text-align.md).

??? info "Колонки и таблицы"

    <div class="col3" markdown="1">

    - [column-count](column-count.md)
    - [column-fill](column-fill.md)
    - [column-gap](column-gap.md)
    - [column-rule](column-rule.md)
    - [column-rule-color](column-rule-color.md)
    - [column-rule-style](column-rule-style.md)
    - [column-rule-width](column-rule-width.md)
    - [column-span](column-span.md)
    - [column-width](column-width.md)
    - [columns](columns.md)

    </div>

    <div class="col3" markdown="1">

    - [border-collapse](border-collapse.md)
    - [border-spacing](border-spacing.md)
    - **caption-side**
    - [empty-cells](empty-cells.md)
    - [table-layout](table-layout.md)
    - [vertical-align](vertical-align.md)

    </div>

## Синтаксис

```css
/* Directional values */
caption-side: top;
caption-side: bottom;

/* Warning: non-standard values */
caption-side: left;
caption-side: right;
caption-side: top-outside;
caption-side: bottom-outside;

/* Global values */
caption-side: inherit;
caption-side: initial;
caption-side: unset;
```

## Значения

`top`
: Располагает заголовок по верхнему краю таблицы.

`bottom`
: Заголовок располагается под таблицей.

Значение по-умолчанию:

```css
caption-side: top;
```

Применяется к [`<caption>`](../html/caption.md) или ко всем элементам, у которых значение [`display`](display.md) установлено как `table-caption`.

## Спецификации

- [CSS Logical Properties Level 1](http://dev.w3.org/csswg/css-logical-props/#caption-side)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/tables.html#caption-position)

## Описание и примеры

```html
<!DOCTYPE htm>
<html>
  <head>
    <meta charset="utf-8" />
    <title>caption-side</title>
    <style>
      table {
        width: 100%; /* Ширина таблицы */
        border-collapse: collapse; /* Убираем двойную рамку между ячеек */
      }
      td {
        border: 1px solid green; /* Параметры границы */
        padding: 5px; /* Поля в ячейках */
      }
      caption {
        caption-side: bottom; /* Заголовок под таблицей */
      }
    </style>
  </head>
  <body>
    <table>
      <caption>
        Расклад карт
      </caption>
      <tr>
        <td></td>
        <td>♠</td>
        <td>♣</td>
        <td>♥</td>
        <td>♦</td>
      </tr>
      <tr>
        <td>Чебурашка</td>
        <td>6</td>
        <td>3</td>
        <td>1</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Крокодил Гена</td>
        <td>1</td>
        <td>5</td>
        <td>5</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Шапокляк</td>
        <td>3</td>
        <td>4</td>
        <td>6</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Крыса Лариса</td>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        <td>8</td>
      </tr>
    </table>
  </body>
</html>
```
