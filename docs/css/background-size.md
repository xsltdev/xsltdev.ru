---
description: Свойство background-size масштабирует фоновое изображение, согласно заданным размерам
---

# background-size

Свойство **`background-size`** масштабирует фоновое изображение, согласно заданным размерам.

## Синтаксис

```css
/* Keyword values */
background-size: cover;
background-size: contain;

/* One-value syntax */
/* the width of the image (height becomes 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Multiple backgrounds */
background-size: auto, auto; /* Not to be confused with `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Global values */
background-size: inherit;
background-size: initial;
background-size: unset;
```

## Значения

`<размер>`
: Задаёт размер в любых доступных для CSS единицах — пикселях (px), сантиметрах (cm), em и др.

`<проценты>`
: Задаёт размер фоновой картинки в процентах от ширины или высоты элемента.

`auto`
: Если задано одновременно для ширины и высоты (auto auto), размеры фона остаются исходными; если только для одной стороны картинки (100px auto), то размер вычисляется автоматически исходя из пропорций картинки.

`cover`
: Масштабирует изображение с сохранением пропорций так, чтобы его ширина или высота равнялась ширине или высоте блока.

`contain`
: Масштабирует изображение с сохранением пропорций таким образом, чтобы картинка целиком поместилась внутрь блока.

Если установлено одно значение, оно устанавливает ширину фона, второе значение принимается за `auto`. Пропорции картинки при этом сохраняются. Использование двух значений через пробел задаёт ширину и высоту фоновой картинки.

Значение по-умолчанию:

```css
background-size: auto;
```

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#the-background-size)

## Поддержка браузерами

<p class="ciu_embed" data-feature="background-img-opts" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=background-img-opts">Can I Use background-img-opts?</a> Data on support for the background-img-opts feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-size</title>
    <style>
      div {
        height: 200px; /* Высота блока */
        border: 2px solid #000; /* Параметры рамки */
        background: url('/example/image/mybg.png') 100% 100%
          no-repeat; /* Добавляем фон */
        background-size: cover; /* Масштабируем фон */
      }
    </style>
  </head>
  <body>
    <div>...</div>
  </body>
</html>
```
