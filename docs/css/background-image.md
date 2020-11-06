---
description: Свойство background-image устанавливает фоновое изображение для элемента
---

# background-image

Свойство **`background-image`** устанавливает фоновое изображение для элемента.

Если одновременно для элемента задан цвет фона, он будет показан, пока фоновая картинка не загрузится полностью. То же произойдет, если изображения не доступны или их показ в браузере отключен. В случае наличия в рисунке прозрачных областей, через них будет проглядывать фоновый цвет. Допустимо указывать несколько фоновых изображений, перечисляя их параметры через запятую.

??? info "Фон"

    <div class="col3" markdown="1">

    - [background](background.md)
    - [background-attachment](background-attachment.md)
    - [background-blend-mode](background-blend-mode.md)
    - [background-clip](background-clip.md)
    - [background-color](background-color.md)
    - **background-image**
    - [background-origin](background-origin.md)
    - [background-position](background-position.md)
    - [background-position-x](background-position-x.md)
    - [background-position-y](background-position-y.md)
    - [background-repeat](background-repeat.md)
    - [background-size](background-size.md)

    </div>

## Синтаксис

```css
/* Single value */
background-image: url('https://example.com/bck.png');

/* Multiple values */
background-image: url('https://example.com/top.png'),
  url('https://example.com/bottom.png');

/* Keyword value */
background-image: none;

/* Global values */
background-image: inherit;
background-image: initial;
background-image: unset;
```

## Значения

`url()`
: В качестве значения используется путь к графическому файлу, который указывается внутри конструкции `url()`. Путь к файлу при этом можно писать как в кавычках (двойных или одинарных), так и без них.

`none`
: Отменяет фоновое изображение для элемента.

Значение по-умолчанию:

```css
background-image: none;
```

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#background-image)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/colors.html#propdef-background-image)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#background-image)

## Поддержка браузерами

Несколько фонов:

<p class="ciu_embed" data-feature="multibackgrounds" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=multibackgrounds">Can I Use multibackgrounds?</a> Data on support for the multibackgrounds feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-image</title>
    <style>
      body {
        background-image: url('/example/image/bg.jpg'); /* Путь к фоновому изображению */
        background-color: #c7b39b; /* Цвет фона */
      }
    </style>
  </head>
  <body>
    <p>...</p>
  </body>
</html>
```
