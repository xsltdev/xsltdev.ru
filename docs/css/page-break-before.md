---
description: Свойство page-break-before добавляет разрыв страницы при печати документа перед заданным элементом
---

# page-break-before

Свойство **`page-break-before`** добавляет разрыв страницы при печати документа перед заданным элементом.

## Синтаксис

```css
/* Keyword values */
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* Global values */
page-break-before: inherit;
page-break-before: initial;
page-break-before: unset;
```

## Значения

`always`
: Всегда добавляет разрыв страницы перед элементом.

`auto`
: Вставляет разрыв страницы при необходимости.

`avoid`
: Запрещает разрыв страницы перед элементом.

`left`
: Пропускает одну или две страницы перед элементом, чтобы следующая страница при печати была четной.

`right`
: Пропускает одну или две страницы перед элементом, чтобы следующая страница при печати была нечетной.

Значение по-умолчанию: `auto`

Применяется к блочным элементам

## Спецификации

- [CSS Paged Media Module Level 3](http://dev.w3.org/csswg/css3-page/#page-break-before)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/page.html#propdef-page-break-before)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-page-break" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-page-break">Can I Use css-page-break?</a> Data on support for the css-page-break feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>page-break-before</title>
    <style>
      @media print {
        .more {
          page-break-before: always;
        }
      }
    </style>
  </head>
  <body>
    <h2>Мусорные пакеты</h2>
    <p>
      История о том, как однажды мусорных пакетов оказалось
      несколько больше, чем хотелось, как и для чего их
      можно использовать, и что из этого получилось.
    </p>
    <p class="more">Читать дальше</p>
  </body>
</html>
```
