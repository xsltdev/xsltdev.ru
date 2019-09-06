---
direction: Свойство empty-cells задаёт отображение границ и фона в ячейке, если она пустая
---

# empty-cells

Свойство **`empty-cells`** задаёт отображение границ и фона в ячейке, если она пустая.

При одновременном добавлении к таблице свойства [`border-collapse`](border-collapse.md) со значением `collapse`, свойство `empty-cells` игнорируется.

Ячейка считается пустой в следующих случаях:

- нет вообще никаких символов;
- в ячейке содержится только перевод строки, символ табуляции или пробел;
- значение [`visibility`](visibility.md) установлено как `hidden`.

Добавление неразрывного пробела `&nbsp`; воспринимается как видимое содержание, т. е. ячейка уже будет непустой.

## Синтаксис

```css
/* Keyword values */
empty-cells: show;
empty-cells: hide;

/* Global values */
empty-cells: inherit;
empty-cells: initial;
empty-cells: unset;
```

## Значения

`show`
: Отображает границу вокруг ячейки и фон в ней.

`hide`
: Граница и фон в пустых ячейках не отображается. Если все ячейки в строке пустые, то строка прячется целиком.

Значение по-умолчанию:

```css
empty-cells: show;
```

Применяется к: К [`<td>`](../html/td.md), [`<th>`](../html/th.md) или к элементам, у которых [`display`](display.md)`: table-cell`

## Спецификации

- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/tables.html#empty-cells)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>empty-cells</title>
    <style>
      table {
        border: 4px double #399; /* Граница вокруг таблицы */
      }
      td {
        background: #fc0; /* Цвет фона */
        border: 1px solid #333; /* Граница вокруг ячеек */
        empty-cells: hide; /* Прячем пустые ячейки */
        padding: 5px; /* Поля в ячейках */
      }
    </style>
  </head>
  <body>
    <table width="100%">
      <tr>
        <td>Леонардо</td>
        <td>5</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Рафаэль</td>
        <td></td>
        <td>11</td>
      </tr>
      <tr>
        <td>Микеланджело</td>
        <td>24</td>
        <td></td>
      </tr>
      <tr>
        <td>Донателло</td>
        <td></td>
        <td>13</td>
      </tr>
    </table>
  </body>
</html>
```
