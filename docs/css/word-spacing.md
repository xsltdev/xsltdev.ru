---
description: Свойство word-spacing устанавливает интервал между словами
---

# word-spacing

Свойство **`word-spacing`** устанавливает интервал между словами.

Если для текста задано выравнивание через [`text-align`](text-align.md) со значением `justify` (выравнивание по ширине), то интервал между словами будет установлен принудительно, но не меньше значения, указанного через `word-spacing`.

## Синтаксис

```css
/* Keyword value */
word-spacing: normal;

/* <length> values */
word-spacing: 3px;
word-spacing: 0.3em;

/* <percentage> values */
word-spacing: 50%;
word-spacing: 200%;

/* Global values */
word-spacing: inherit;
word-spacing: initial;
word-spacing: unset;
```

## Значения

В качестве значений принимаются любые единицы длины, принятые в CSS — например, пикселы (px), дюймы (in), пункты (pt) и др. Значение может быть и отрицательным, но следует проверять работоспособность в разных браузерах. Процентная запись не применима.

`normal`
: Устанавливает интервал между словами как обычно.

Значение по-умолчанию: `normal`

Применяется ко всем элементам

## Спецификации

- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#propdef-word-spacing)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/text.html#propdef-word-spacing)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#word-spacing)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>word-spacing</title>
    <style>
      .tel {
        word-spacing: 10px;
        font-size: 2em;
      }
    </style>
  </head>
  <body>
    <p class="tel">Тел.: 555-221-061</p>
  </body>
</html>
```
