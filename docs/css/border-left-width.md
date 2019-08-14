# border-left-width

Свойство **`border-left-width`** устанавливает толщину границы слева от элемента.

## Синтаксис

```css
/* Keyword values */
border-left-width: thin;
border-left-width: medium;
border-left-width: thick;

/* <length> values */
border-left-width: 10em;
border-left-width: 3vmax;
border-left-width: 6px;

/* Global keywords */
border-left-width: inherit;
border-left-width: initial;
border-left-width: unset;
```

## Значения

Три переменные — `thin` (2 пикселя), `medium` (4 пикселя) и `thick` (6 пикселей) задают толщину границы слева. Для более точного значения, толщину можно указывать в пикселях или других единицах.

Значение по-умолчанию:

```css
border-left-width: medium;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#the-border-width)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-width-properties)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-left-width</title>
    <style>
      .line {
        border-left-color: red; /* Цвет линии слева */
        border-left-style: double; /* Стиль линии */
        border-left-width: thick; /* Толщина линии */
        padding-left: 10px; /* Расстояние между линией и текстом */
      }
    </style>
  </head>
  <body>
    <div class="line">
      <h3>Обратите внимание!</h3>
      <p>В наши расчёты не входит задача взорвать весь город, поэтому будьте аккуратнее, когда начнете пересыпать ядерное топливо из мешка. Чтобы не загрязнить комнату, не забудьте положить на пол газету.</p>
    </div>
  </body>
</html>
```
