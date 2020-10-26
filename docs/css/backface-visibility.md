---
description: Свойство backface-visibility определяет, показывать обратную сторону элемента или нет
---

# backface-visibility

Свойство **`backface-visibility`** определяет, показывать обратную сторону элемента или нет. Как правило, обратная сторона становится видна при трансформации элемента, например, при его вращении относительно горизонтальной или вертикальной оси в трёхмерном пространстве. В обычной ситуации свойство `backface-visibility` не оказывает влияния на отображение элемента.

## Синтаксис

```css
/* Keyword values */
backface-visibility: visible;
backface-visibility: hidden;

/* Global values */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: unset;
```

## Значения

`visible`
: Обратная сторона элемента видна и отображается через переднюю поверхность элемента зеркально.

`hidden`
: Обратная сторона не видна, скрываясь за передней поверхностью элемента.

Значение по-умолчанию:

```css
backface-visibility: visible;
```

Применяется к трансформируемым элементам

## Спецификации

- [CSS Transforms Level 1](https://drafts.csswg.org/css-transforms/#backface-visibility-property)

## Поддержка браузерами

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
    <title>backface-visibility</title>
    <style>
      .flip {
        position: relative;
        transform-style: preserve-3d; /* Вращение в 3D */
        width: 250px;
        height: 273px;
        transition: 1s; /* Время вращения */
      }
      .flip:hover {
        transform: rotateY(
          180deg
        ); /* При наведении вращаем фото */
      }
      .flip-face {
        position: absolute;
        top: 0;
        bottom: 0;
      }
      .flip-face.back {
        background: #4b846a;
        font: 18px/1.6 Arial;
        padding: 20px;
        color: #fff;
        transform: rotateY(180deg); /* Вращаем по оси Y */
        backface-visibility: hidden; /* Скрываем обратную поверхность */
      }
    </style>
  </head>
  <body>
    <figure class="flip">
      <div class="flip-face front">
        <img src="image/squirrel.jpg" alt="Белка" />
      </div>
      <figcaption class="flip-face back">
        Вот такие белки живут в красноярских лесах — с серой
        шерсткой, любопытные и падкие на печенюшки.
      </figcaption>
    </figure>
  </body>
</html>
```

В данном примере при наведении курсора на фотографию появляется эффект её разворота и отображения обратной стороны с текстом.

## Примечания

- Chrome до версии 36, Safari до версии 9, Opera до версии 23 и Android поддерживают свойство `-webkit-backface-visibility`.
- Firefox до версии 16 поддерживает свойство `-moz-backface-visibility`.
