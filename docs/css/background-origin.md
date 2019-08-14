# background-origin

Свойство **`background-origin`** определяет область позиционирования фонового рисунка.

Это свойство не применяется, когда значение [`background-attachment`](background-attachment.md) задано как `fixed`.

## Синтаксис

```css
/* Keyword values */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* Global values */
background-origin: inherit;
background-origin: initial;
background-origin: unset;
```

## Значения

- `padding-box` -- Фон позиционируется относительно края элемента с учетом толщины границы.
- `border-box` -- Фон позиционируется относительно границы, при этом линия границы может перекрывать изображение.
- `content-box` -- Фон позиционируется относительно содержимого элемента.

Значений может быть несколько (для каждого из множественных фоновых рисунков), при этом значения разделяются между собой запятой.

Значение по-умолчанию:

```css
background-origin: padding-box;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#the-background-origin)

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
    <title>background-origin</title>
    <style>
      .example {
        border: 20px solid #fc0;
        padding: 20px;
        height: 200px;
        background: url('/example/image/figure.jpg') no-repeat;
        background-origin: content-box;
      }
    </style>
  </head>
  <body>
    <div class="example">...</div>
  </body>
</html>
```
