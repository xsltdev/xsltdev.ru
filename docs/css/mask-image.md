---
description: Свойство mask-image устанавливает изображение, которое используется как слой маски для элемента
---

# mask-image

Свойство **`mask-image`** устанавливает изображение, которое используется как слой маски для элемента.

??? info "Маски и Фигуры"

    <div class="col3" markdown="1">

    - [clip-path](clip-path.md)
    - [mask](mask.md)
    - [mask-border](mask-border.md)
    - [mask-border-mode](mask-border-mode.md)
    - [mask-border-outset](mask-border-outset.md)
    - [mask-border-repeat](mask-border-repeat.md)
    - [mask-border-slice](mask-border-slice.md)
    - [mask-border-source](mask-border-source.md)
    - [mask-border-width](mask-border-width.md)
    - [mask-clip](mask-clip.md)
    - [mask-composite](mask-composite.md)
    - **mask-image**
    - [mask-mode](mask-mode.md)
    - [mask-origin](mask-origin.md)
    - [mask-position](mask-position.md)
    - [mask-repeat](mask-repeat.md)
    - [mask-size](mask-size.md)
    - [mask-type](mask-type.md)

    </div>

    <div class="col3" markdown="1">

    - [shape-image-threshold](shape-image-threshold.md)
    - [shape-margin](shape-margin.md)
    - [shape-outside](shape-outside.md)

    </div>

## Синтаксис

```css
/* Keyword value */
mask-image: none;

/* <mask-source> value */
mask-image: url('masks.svg#mask1');

/* <image> values */
mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
mask-image: image(url('mask.png'), skyblue);

/* Multiple values */
mask-image: image(url('mask.png'), skyblue), linear-gradient(rgba(0, 0, 0, 1), transparent);

/* Global values */
mask-image: inherit;
mask-image: initial;
mask-image: unset;
```

## Значения

**`none`**
: это ключевое слово интерпретируется как прозрачный слой черного изображения.

`<mask-source>`
: ссылка `<url>` на `<mask>` или изображение.

`<image>`
: изображение, используемое в качестве слоя маски.

Значение по-умолчанию:

```css
mask-image: none;
```

## Спецификации

- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/#the-mask-image)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-masks" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-masks">Can I Use css-masks?</a> Data on support for the css-masks feature across the major browsers from caniuse.com.
</p>

## Пример

=== "HTML"

    ```html
    <div id="masked"></div>
    ```

=== "CSS"

    ```css
    #masked {
      width: 100px;
      height: 100px;
      background-color: #8cffa0;
      -webkit-mask-image: url('https://mdn.mozillademos.org/files/12676/star.svg');
      mask-image: url('https://mdn.mozillademos.org/files/12676/star.svg');
    }
    ```
