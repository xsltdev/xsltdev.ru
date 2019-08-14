# min-height

Свойство **`min-height`** задаёт минимальную высоту элемента.

Значение высоты элемента будет вычисляться в зависимости от установленных значений свойств [`height`](height.md), [`max-height`](max-height.md) и `min-height`.

Если значение высоты (`height`) меньше значения `min-height`, то высота элемента принимается равной `min-height`.

## Синтаксис

```css
/* <length> value */
min-height: 3.5em;

/* <percentage> value */
min-height: 10%;

/* Keyword values */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fill-available;

/* Global values */
min-height: inherit;
min-height: initial;
min-height: unset;
```

## Значения

В качестве значений принимаются пиксели (px), проценты (%) и другие единицы измерения, принятые в CSS. Отрицательные значения не допускаются.

Значение по-умолчанию:

```css
min-height: 0;
```

Применяется к: Ко всем элементам, кроме строчных и таблиц

## Спецификации

- [CSS Intrinsic & Extrinsic Sizing Module Level 3](http://dev.w3.org/csswg/css3-sizing/#width-height-keywords)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visudet.html#min-max-heights)

## Поддержка браузерами

<p class="ciu_embed" data-feature="minmaxwh" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=minmaxwh">Can I Use minmaxwh?</a> Data on support for the minmaxwh feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>min-height</title>
    <style>
      footer {
        background: #66806e url(/example/image/clover.png) no-repeat 20px bottom; /* Параметры фона */
        min-height: 80px; /* Минимальная высота */
        color: #e4bc96; /* Цвет текста */
        padding: 5px 5px 5px 140px; /* Поля вокруг текста */
      }
      footer p {
        margin: 5px 0;
      }
      footer a {
        color: #fffde0;
      }
    </style>
  </head>
  <body>
    <footer>
      <p>Сайт Cloverfield</p>
      <p><a href="page/techinfo.html">Информация о сайте</a> <a href="page/activity.html">Об авторе</a></p>
    </footer>
  </body>
</html>
```
