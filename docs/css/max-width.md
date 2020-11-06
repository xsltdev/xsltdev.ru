---
description: Свойство max-width устанавливает максимальную ширину элемента
---

# max-width

Свойство **`max-width`** устанавливает максимальную ширину элемента.

Значение ширины элемента будет вычисляться в зависимости от значений установленных свойств [`width`](width.md), `max-width` и [`min-width`](min-width.md).

Если значение ширины (`width`) больше значения `max-width`, то ширина элемента принимается равной значению `max-width`.

??? info "Блоки"

    <div class="col3" markdown="1">

    - [height](height.md)
    - [width](width.md)
    - [max-height](max-height.md)
    - **max-width**
    - [min-height](min-height.md)
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
max-width: 3.5em;

/* <percentage> value */
max-width: 75%;

/* Keyword values */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fill-available;

/* Global values */
max-width: inherit;
max-width: initial;
max-width: unset;
```

## Значения

В качестве значений принимаются пиксели (px), проценты (%) и другие единицы измерения, принятые в CSS. Отрицательные значения не допускаются.

`none`
: Отменяет действие этого свойства.

Значение по-умолчанию:

```css
max-width: none;
```

Применяется ко всем элементам, кроме строчных и таблиц

## Спецификации

- [CSS Intrinsic & Extrinsic Sizing Module Level 3](http://dev.w3.org/csswg/css3-sizing/#width-height-keywords)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visudet.html#min-max-widths)

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
    <title>Версия сайта для мобильных устройств</title>
    <style media="only screen and (max-device-width:480px)">
      body {
        max-width: 480px; /* Максимальная ширина страницы в пикселях */
      }
    </style>
  </head>
  <body>
    <h1>Текст заголовка</h1>
    <p>Текст примера</p>
  </body>
</html>
```
