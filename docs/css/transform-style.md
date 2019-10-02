---
description: Свойство transform-style определяет, как дочерние элементы будут отображаться в 3D-пространстве
---

# transform-style

Свойство **`transform-style`** определяет, как дочерние элементы будут отображаться в 3D-пространстве. Это свойство должно использоваться совместно с [`transform`](transform.md).

## Синтаксис

```css
/* Keyword values */
transform-style: preserve-3d;
transform-style: flat;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

## Значения

`flat`
: Дочерние элементы лежат в той же плоскости, что и их родитель.

`preserve-3d`
: Дочерние элементы будут отображаться в 3D-пространстве.

### Примечание

- Chrome до версии 36, Safari, Opera, Android и iOS поддерживают свойство `-webkit-transform-style`.
- Firefox до версии 16 поддерживает свойство `-moz-transform-style`.

Значение по-умолчанию: `flat`

Применяется к трансформируемым элементам

## Спецификации

- [CSS Transforms Level 1](http://dev.w3.org/csswg/css-transforms/#transform-style)

## Поддержка браузерами

CSS Transform 2D:

<p class="ciu_embed" data-feature="transforms2d" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=transforms2d">Can I Use transforms2d?</a> Data on support for the transforms2d feature across the major browsers from caniuse.com.
</p>

CSS Transform 3D:

<p class="ciu_embed" data-feature="transforms3d" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=transforms3d">Can I Use transforms3d?</a> Data on support for the transforms3d feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>transform-style</title>
    <style>
      .turn {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }
      .turn:hover {
        -webkit-transform: rotateY(45deg);
        transform: rotateY(45deg);
      }
    </style>
  </head>
  <body>
    <p>
      <img src="image/igels.png" alt="Ёжик" class="turn" />
      <img src="image/igels.png" alt="Ёжик" class="turn" />
    </p>
  </body>
</html>
```
