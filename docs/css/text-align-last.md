---
description: Свойство text-align-last задаёт выравнивание последней строки текста, когда свойство text-align установлено как justify
---

# text-align-last

Свойство **`text-align-last`** задаёт выравнивание последней строки текста, когда свойство [`text-align`](text-align.md) установлено как `justify`.

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
    - **text-align-last**
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
    - [word-spacing](word-spacing.md)

    </div>

## Синтаксис

```css
/* Keyword values */
text-align-last: auto;
text-align-last: start;
text-align-last: end;
text-align-last: left;
text-align-last: right;
text-align-last: center;
text-align-last: justify;

/* Global values */
text-align-last: inherit;
text-align-last: initial;
text-align-last: unset;
```

## Значения

`start`
: Строка выравнивается по начальному краю блока.

`end`
: Строка выравнивается по конечному краю блока.

`left`
: Строка выравнивается по левому краю.

`right`
: Строка выравнивается по правому краю.

`center`
: Строка выравнивается по центру.

`justify`
: Строка выравнивается по ширине. Если в последней строке только одно слово, то оно будет выравнено по левому краю.

### Примечание

Internet Explorer не поддерживает значения `start` и `end`.

Firefox до версии 49 поддерживает свойство `-moz-text-align-last`.

Значение по-умолчанию: `start`

Применяется к блочным элементам

## Спецификации

- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#text-align-last)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-text-align-last" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-text-align-last">Can I Use css-text-align-last?</a> Data on support for the css-text-align-last feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>text-align-last</title>
    <style>
      div {
        width: 300px;
        text-align: justify;
        text-align-last: justify;
      }
    </style>
  </head>
  <body>
    <div>
      При переходе через горы опирайся на долину;
      располагайся на высотах, смотря, где солнечная
      сторона. При бое с противником, находящимся на
      возвышенности, не иди прямо вверх. Таково расположение
      войска в горах.
    </div>
  </body>
</html>
```
