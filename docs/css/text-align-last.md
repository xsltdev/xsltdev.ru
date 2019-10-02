---
description: Свойство text-align-last задаёт выравнивание последней строки текста, когда свойство text-align установлено как justify
---

# text-align-last

Свойство **`text-align-last`** задаёт выравнивание последней строки текста, когда свойство [`text-align`](text-align.md) установлено как `justify`.

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
      При переходе через горы опирайся на долину; располагайся на высотах,
      смотря, где солнечная сторона. При бое с противником, находящимся на
      возвышенности, не иди прямо вверх. Таково расположение войска в горах.
    </div>
  </body>
</html>
```
