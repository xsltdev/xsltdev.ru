---
description: Свойство border-image-repeat определяет, как обрабатывается заполнение граничного изображения, чтобы оно вписалось в размер границы
---

# border-image-repeat

Свойство **`border-image-repeat`** определяет, как обрабатывается заполнение граничного изображения, чтобы оно вписалось в размер границы.

Оно имеет синтаксис с одним значением, которое описывает поведение всех сторон, и двухзначный синтаксис, который устанавливает разные значение для горизонтального и вертикального поведения.

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
