---
description: Свойство user-select управляет поведением выделения текста и других элементов на странице, в частности, позволяет запретить выделение текста
---

# user-select

Свойство **`user-select`** управляет поведением выделения текста и других элементов на странице, в частности, позволяет запретить выделение текста.

Обычно применяется для интерактивных элементов, на которые можно щёлкать, например, вкладки, и для которых выделение текста нежелательно.

## Синтаксис

```css
/* Keyword values */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* Global values */
user-select: inherit;
user-select: initial;
user-select: unset;

/* Mozilla-specific values */
-moz-user-select: none;
-moz-user-select: text;
-moz-user-select: all;

/* WebKit-specific values */
-webkit-user-select: none;
-webkit-user-select: text;

/* Doesn't work in Safari; use only
"none" or "text", or else it will
allow typing in the <html> container */
-webkit-user-select: all;

/* Microsoft-specific values */
-ms-user-select: none;
-ms-user-select: text;
-ms-user-select: element;
```

## Значения

`auto`
: Для редактируемых элементов значение принимается `contain`. Если у родителя значение `user-select` установлено как `all`, то для элемента оно тоже будет `all`. Если у родителя значение `user-select` установлено как `none`, то для элемента оно тоже будет `none`. Во всех остальных случаях принимается значение `text`.

`none`
: Пользователю запрещено выделять элемент.

`text`
: Пользователь может выделить текст в элементе.

`all`
: Позволяет выделить текст внутри элемента, включая дочерние элементы.

`contain`
: Позволяет выделять текст, но только внутри границ элемента.

### Примечание

- Internet Explorer поддерживает свойство `-ms-user-select`.
- Chrome, Opera, Safari и Android поддерживают свойство `-webkit-user-select`.
- Firefox поддерживает свойство `-moz-user-select`.
- Значение `contain` поддерживается только в IE.

Значение по-умолчанию: `auto`

Применяется ко всем элементам

## Спецификации

- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui-4/#propdef-user-select)

## Поддержка браузерами

<p class="ciu_embed" data-feature="user-select-none" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=user-select-none">Can I Use user-select-none?</a> Data on support for the user-select-none feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>user-select</title>
    <style>
      body {
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
      .enable {
        -ms-user-select: all;
        -moz-user-select: all;
        -webkit-user-select: all;
        user-select: all;
      }
    </style>
  </head>
  <body>
    <p>Этот текст нельзя выделить</p>
    <p><input type="text" value="Этот текст можно выделить" /></p>
    <p class="enable">Этот <b>текст</b> тоже можно выделить</p>
  </body>
</html>
```
