---
description: Свойство box-sizing применяется для изменения алгоритма расчёта ширины и высоты элемента
---

# box-sizing

Свойство **`box-sizing`** применяется для изменения алгоритма расчёта ширины и высоты элемента.

Согласно спецификации CSS ширина блока складывается из ширины контента ([`width`](width.md)), значений отступов ([`margin`](margin.md)), полей ([`padding`](padding.md)) и границ ([`border`](border.md)). Аналогично обстоит и с высотой блока. Свойство `box-sizing` позволяет изменить этот алгоритм, чтобы свойства `width` и `height` задавали размеры не контента, а размеры блока.

## Синтаксис

```css
/* Keyword values */
box-sizing: content-box;
box-sizing: border-box;

/* Global values */
box-sizing: inherit;
box-sizing: initial;
box-sizing: unset;
```

## Значения

`content-box`
: Основывается на стандартах CSS, при этом свойства `width` и `height` задают ширину и высоту контента и не включают в себя значения отступов, полей и границ.

`border-box`
: Свойства `width` и `height` включают в себя значения полей (`padding`) и границ (`border`), но не отступов (`margin`).

### Примечания

Firefox до версии 29 поддерживает свойство `-moz-box-sizing`.

Safari до версии 5.0, Chrome до версии 10.0, Android до версии 4.0 поддерживают свойство `-webkit-box-sizing`.

Значение по-умолчанию:

```css
box-sizing: content-box;
```

Применяется ко всем элементам

## Спецификации

- [CSS Basic User Interface Module Level 3](http://dev.w3.org/csswg/css3-ui/#box-sizing)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css3-boxsizing" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css3-boxsizing">Can I Use css3-boxsizing?</a> Data on support for the css3-boxsizing feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>box-sizing</title>
    <style>
      .box1 {
        background: #f0f0f0; /* Цвет фона */
        width: 300px; /* Ширина блока */
        padding: 10px; /* Поля */
        border: 2px solid #000; /* Параметры рамки */
      }
      .box2 {
        background: #fc0; /* Цвет фона */
        width: 300px; /* Ширина блока */
        padding: 10px; /* Поля */
        margin-top: 10px; /* Отступ сверху */
        border: 2px solid #000; /* Параметры рамки */
        box-sizing: border-box; /* Ширина блока с полями */
      }
    </style>
  </head>
  <body>
    <div class="box1">
      Ширина с учетом значения свойства width, полей и границ.
    </div>
    <div class="box2">Ширина равна значению свойства width.</div>
  </body>
</html>
```
