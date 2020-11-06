---
description: Свойство border-image-repeat определяет, как обрабатывается заполнение граничного изображения, чтобы оно вписалось в размер границы
---

# border-image-repeat

Свойство **`border-image-repeat`** определяет, как обрабатывается заполнение граничного изображения, чтобы оно вписалось в размер границы.

Оно имеет синтаксис с одним значением, которое описывает поведение всех сторон, и двухзначный синтаксис, который устанавливает разные значение для горизонтального и вертикального поведения.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - [border-bottom-style](border-bottom-style.md)
    - [border-bottom-width](border-bottom-width.md)
    - [border-collapse](border-collapse.md)
    - [border-color](border-color.md)
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - **border-image-repeat**
    - [border-image-slice](border-image-slice.md)
    - [border-image-source](border-image-source.md)
    - [border-image-width](border-image-width.md)
    - [border-left](border-left.md)
    - [border-left-color](border-left-color.md)
    - [border-left-style](border-left-style.md)
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - [border-right-style](border-right-style.md)
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

## Синтаксис

```css
/* border-image-repeat: type */
border-image-repeat: stretch;

/* border-image-repeat: horizontal vertical */
border-image-repeat: round stretch;

/* Global values */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: unset;
```

## Значения

`stretch`
: Растягивает рисунок границы до размеров элемента. Это значение используется по умолчанию.

`repeat`
: Повторяет рисунок границы.

`round`
: Повторяет рисунок и масштабирует его так, чтобы на стороне элемента оказалось целое число изображений.

Значение по-умолчанию:

```css
border-image-repeat: stretch;
```

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds-3/#border-image-repeat)

## Поддержка браузерами

<p class="ciu_embed" data-feature="border-image" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=border-image">Can I Use border-image?</a> Data on support for the border-image feature across the major browsers from caniuse.com.
</p>
