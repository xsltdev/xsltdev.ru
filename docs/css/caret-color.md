---
description: Свойство caret-color задает цвет текстового курсора в полях ввода
---

# caret-color

Свойство **`caret-color`** задает цвет текстового курсора в полях ввода, например, [`input`](../html/input.md) или [`textarea`](../html/textarea.md).

## Синтаксис

```css
/* Keyword values */
caret-color: auto;
caret-color: transparent;
caret-color: currentColor;

/* <color> values */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0, 200, 0);
caret-color: hsla(228, 4%, 24%, 0.8);
```

## Значения

Значение по-умолчанию:

```css
caret-color: auto;
```

Применяется ко всем элементам

## Спецификации

- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#propdef-caret-color)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-caret-color" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-caret-color">Can I Use css-caret-color?</a> Data on support for the css-caret-color feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html tab="HTML"
<input value="This field uses a default caret." size="64" />
<input class="custom" value="I have a custom caret color!" size="64" />
<p contenteditable class="custom">
  This paragraph can be edited, and its caret has a custom color as well!
</p>
```

```css tab="CSS"
input {
  caret-color: auto;
  display: block;
  margin-bottom: 0.5em;
}

input.custom {
  caret-color: red;
}

p.custom {
  caret-color: green;
}
```
