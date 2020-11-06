---
description: Свойство background-attachment устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента
---

# background-attachment

Свойство **`background-attachment`** устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента.

Изображение может быть зафиксировано и оставаться неподвижным, либо перемещаться совместно с документом. Можно указать несколько значений для ряда фоновых изображений, перечисляя значения через запятую.

??? info "Фон"

    <div class="col3" markdown="1">

    - [background](background.md)
    - **background-attachment**
    - [background-blend-mode](background-blend-mode.md)
    - [background-clip](background-clip.md)
    - [background-color](background-color.md)
    - [background-image](background-image.md)
    - [background-origin](background-origin.md)
    - [background-position](background-position.md)
    - [background-position-x](background-position-x.md)
    - [background-position-y](background-position-y.md)
    - [background-repeat](background-repeat.md)
    - [background-size](background-size.md)

    </div>

## Синтаксис

```css
/* Keyword values */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Global values */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
```

## Значения

`fixed`
: Делает фоновое изображение элемента неподвижным.

`scroll`
: Позволяет перемещаться фону вместе с содержимым.

`local`
: Фон фиксируется с учётом поведения элемента. Если элемент имеет прокрутку, то фон будет прокручиваться вместе с содержимым, но фон, выходящий за рамки элемента, остаётся на месте.

Значение по-умолчанию:

```css
background-attachment: scroll;
```

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#the-background-attachment)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/colors.html#propdef-background-attachment)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#background-attachment)

## Поддержка браузерами

<p class="ciu_embed" data-feature="background-attachment" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=background-attachment">Can I Use background-attachment?</a> Data on support for the background-attachment feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

### Пример 1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-attachment</title>
    <style>
      body {
        background-image: url('/example/image/help.png');
        background-attachment: fixed;
      }
    </style>
  </head>
  <body>
    <div style="height:2000px">Пример текста</div>
  </body>
</html>
```

### Пример 2

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-attachment</title>
    <style>
      body {
        background-image: url('/example/image/pattern-left.png'),
          url('/example/image/pattern-right.png');
        background-repeat: repeat-y, repeat-y;
        background-position: left, right;
        background-attachment: fixed, fixed;
      }
    </style>
  </head>
  <body>
    <div style="height:2000px"></div>
  </body>
</html>
```
