---
description: Свойство resize указывает, можно ли пользователю изменять размеры текстового поля
---

# resize

Свойство **`resize`** указывает, можно ли пользователю изменять размеры текстового поля.

## Синтаксис

```css
/* Keyword values */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* Global values */
resize: inherit;
resize: initial;
resize: unset;
```

## Значения

`none`
: Размеры элемента не изменяются.

`both`
: Можно изменять размеры элемента по горизонтали и вертикали.

`horizontal`
: Можно изменять размеры элемента только по горизонтали.

`vertical`
: Можно изменять размеры элемента только по вертикали.

### Примечание

Хотя по умолчанию значение установлено как `none`, многие браузеры самостоятельно меняют его на `both`. Если вы не хотите, чтобы размер поля изменялся, задавайте явное значение `none`, а не оставляйте его по умолчанию.

Значение по-умолчанию: `none`

Применяется к [`<textarea>`](../html/textarea.md) или к любому элементу, у которого свойство [`overflow`](overflow.md) отличается от `visible`

## Спецификации

- [CSS Basic User Interface Module Level 3](http://dev.w3.org/csswg/css3-ui/#resize)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-resize" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-resize">Can I Use css-resize?</a> Data on support for the css-resize feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>resize</title>
    <style>
      textarea {
        resize: both;
      }
    </style>
  </head>
  <body>
    <p>
      Потяните за правый уголок, чтобы изменить размер
      текстового поля.
    </p>
    <p><textarea cols="30" rows="7"></textarea></p>
  </body>
</html>
```
