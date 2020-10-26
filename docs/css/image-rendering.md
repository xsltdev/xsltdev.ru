---
description: Свойство image-rendering сообщает браузеру, каким алгоритмом интерполировать изображение при масштабировании его размеров или изменении масштаба в параметрах браузера
---

# image-rendering

Свойство **`image-rendering`** сообщает браузеру, каким алгоритмом интерполировать изображение при масштабировании его размеров или изменении масштаба в параметрах браузера.

## Синтаксис

```css
/* Keyword values */
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* Global values */
image-rendering: inherit;
image-rendering: initial;
image-rendering: unset;
```

## Значения

`auto`
: Браузер применяет встроенный в него алгоритм интерполяции, обычно применяется бикубический метод.

`crisp-edges`
: Цель алгоритма — быстрое отображение картинки, для чего применяется метод интерполяции по ближайшим точкам. Он не создаёт сглаживания вокруг линий и его можно рекомендовать в тех случаях, когда требуется сохранить первоначальный набор цветов и резкость краёв.

`pixelated`
: При увеличении размера картинки сохраняет контраст и контуры изображения, не допуская размытия цветов и контуров. При уменьшении размеров аналогичен `auto`.

### Примечание

- Chrome вместо `crisp-edges` поддерживает значение `-webkit-optimize-contrast`.
- Opera поддерживает значение `-o-crisp-edges`.
- Firefox поддерживает значение `-moz-crisp-edges`.

Значение по-умолчанию:

```css
image-rendering: auto;
```

Применяется к изображениям, фоновым картинкам, [`<video>`](../html/video.md), [`<canvas>`](../html/canvas.md)

## Спецификации

- [CSS Image Values and Replaced Content Module Level 3](http://dev.w3.org/csswg/css3-images/#the-image-rendering)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>image-rendering</title>
    <style>
      img {
        border: 1px solid #ccc;
      }
      .fast {
        image-rendering: pixelated;
      }
    </style>
  </head>
  <body>
    <p>
      <img
        src="image/russia.png"
        alt="Флаг России"
        width="200"
      />
      <img
        src="image/russia.png"
        alt="Флаг России"
        width="200"
        class="fast"
      />
    </p>
  </body>
</html>
```
