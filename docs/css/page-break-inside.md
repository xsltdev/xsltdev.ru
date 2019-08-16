# page-break-inside

Свойство **`page-break-inside`** разрешает или запрещает разрыв страницы внутри элемента при печати.

## Синтаксис

```css
/* Keyword values */
page-break-inside: auto;
page-break-inside: avoid;

/* Global values */
page-break-inside: inherit;
page-break-inside: initial;
page-break-inside: unset;
```

## Значения

`auto`
: Вставляет разрыв страницы при необходимости.

`avoid`
: Запрещает разрыв страницы внутри элемента.

Значение по-умолчанию:

```css
page-break-inside: auto;
```

Применяется к: К блочным элементам

## Спецификации

- [CSS Paged Media Module Level 3](http://dev.w3.org/csswg/css3-page/#page-break-inside)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/page.html#propdef-page-break-inside)

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
    <title>page-break-inside</title>
    <style>
      @media print {
        p {
          page-break-inside: avoid;
        }
      }
    </style>
  </head>
  <body>
    <h2>Мусорные пакеты</h2>
    <p>История о том, как однажды мусорных пакетов оказалось несколько больше, чем хотелось, как и для чего их можно использовать, и что из этого получилось.</p>
    <p class="more">Читать дальше</p>
  </body>
</html>
```
