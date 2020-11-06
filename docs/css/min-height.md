---
description: Свойство min-height задаёт минимальную высоту элемента
---

# min-height

Свойство **`min-height`** задаёт минимальную высоту элемента.

Значение высоты элемента будет вычисляться в зависимости от установленных значений свойств [`height`](height.md), [`max-height`](max-height.md) и `min-height`.

Если значение высоты (`height`) меньше значения `min-height`, то высота элемента принимается равной `min-height`.

??? info "Блоки"

    <div class="col3" markdown="1">

    - [height](height.md)
    - [width](width.md)
    - [max-height](max-height.md)
    - [max-width](max-width.md)
    - **min-height**
    - [min-width](min-width.md)

    </div>

    <div class="col3" markdown="1">

    - [margin](margin.md)
    - [margin-bottom](margin-bottom.md)
    - [margin-left](margin-left.md)
    - [margin-right](margin-right.md)
    - [margin-top](margin-top.md)
    - [margin-trim](margin-trim.md)

    </div>

    <div class="col3" markdown="1">

    - [padding](padding.md)
    - [padding-bottom](padding-bottom.md)
    - [padding-left](padding-left.md)
    - [padding-right](padding-right.md)
    - [padding-top](padding-top.md)

    </div>

    <div class="col3" markdown="1">

    - [overflow](overflow.md)
    - [overflow-x](overflow-x.md)
    - [overflow-y](overflow-y.md)
    - [visibility](visibility.md)

    </div>

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

`auto`
: Минимальная высота для flex-элементов по умолчанию, предоставляет более разумное значение по умолчанию, чем `0` для других способов разметки.

`max-content`
: Внутренняя предпочтительная высота.

`min-content`
: Внутренняя минимальная высота.

`fill-available`
: Высота родительского блока минус вертикальные `margin`, `border`, и `padding`. (Обратите внимание, что некоторые браузеры реализуют устаревшее имя для этого ключевого слова `available`.)

`fit-content`
: Согласно CSS3 Box, это синоним min-content. CSS3 Sizing определяет более сложный алгоритм, но ни один браузер не реализует его даже экспериментальным путем.

Значение по-умолчанию:

```css
min-height: auto;
```

Применяется ко всем элементам, кроме строчных и таблиц

## Спецификации

- [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/#width-height-keywords)
- [CSS Flexible Box Layout Module](https://drafts.csswg.org/css-flexbox-1/#min-auto)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/#animatable-css)
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
        background: #66806e url(/example/image/clover.png)
          no-repeat 20px bottom; /* Параметры фона */
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
      <p>
        <a href="page/techinfo.html">Информация о сайте</a>
        <a href="page/activity.html">Об авторе</a>
      </p>
    </footer>
  </body>
</html>
```
