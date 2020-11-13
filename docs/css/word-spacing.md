---
description: Свойство word-spacing устанавливает интервал между словами
---

# word-spacing

Свойство **`word-spacing`** устанавливает интервал между словами.

Если для текста задано выравнивание через [`text-align`](text-align.md) со значением `justify` (выравнивание по ширине), то интервал между словами будет установлен принудительно, но не меньше значения, указанного через `word-spacing`.

??? info "Текст"

    <div class="col3" markdown="1">

    - [hanging-punctuation](hanging-punctuation.md)
    - [hyphens](hyphens.md)
    - [letter-spacing](letter-spacing.md)
    - [line-break](line-break.md)
    - [overflow-wrap](overflow-wrap.md)
    - [paint-order](paint-order.md)
    - [tab-size](tab-size.md)
    - [text-align](text-align.md)
    - [text-align-last](text-align-last.md)
    - [text-indent](text-indent.md)
    - [text-justify](text-justify.md)
    - [text-size-adjust](text-size-adjust.md)
    - [text-transform](text-transform.md)
    - [white-space](white-space.md)
    - [word-break](word-break.md)
    - [word-spacing](word-spacing.md)

    </div>

    <div class="col3" markdown="1">

    - [letter-spacing](letter-spacing.md)
    - [text-decoration](text-decoration.md)
    - [text-decoration-color](text-decoration-color.md)
    - [text-decoration-line](text-decoration-line.md)
    - [text-decoration-style](text-decoration-style.md)
    - [text-decoration-thickness](text-decoration-thickness.md)
    - [text-decoration-skip](text-decoration-skip.md)
    - [text-decoration-skip-ink](text-decoration-skip-ink.md)
    - [text-emphasis](text-emphasis.md)
    - [text-emphasis-color](text-emphasis-color.md)
    - [text-emphasis-position](text-emphasis-position.md)
    - [text-emphasis-style](text-emphasis-style.md)
    - [text-indent](text-indent.md)
    - [text-rendering](text-rendering.md)
    - [text-shadow](text-shadow.md)
    - [text-underline-position](text-underline-position.md)
    - [text-transform](text-transform.md)
    - [white-space](white-space.md)
    - **word-spacing**

    </div>

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
