---
description: Свойство word-break указывает, как делать перенос строк внутри слов, которые не помещаются по ширине в заданную область
---

# word-break

Свойство **`word-break`** указывает, как делать перенос строк внутри слов, которые не помещаются по ширине в заданную область.

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
    - **word-break**
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
word-break: normal;
word-break: break-all;
word-break: keep-all;

/* Global values */
word-break: inherit;
word-break: initial;
word-break: unset;
```

## Значения

`normal`
: Используются правила переноса строк по умолчанию. Как правило, в этом случае строки не переносятся или переносятся в тех местах, где явно задан перенос (например, с помощью [`<br>`](../html/br.md)).

`break-all`
: Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока. Значение не работает для текста на китайском, корейском или японском языке.

`keep-all`
: Не разрешает перенос строк в словах на китайском, корейском или японском языке. Для остальных языков действует как `normal`.

Значение по-умолчанию: `normal`

Применяется ко всем элементам

## Спецификации

- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#word-break)

## Поддержка браузерами

<p class="ciu_embed" data-feature="word-break" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=word-break">Can I Use word-break?</a> Data on support for the word-break feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>word-break</title>
    <style>
      .col {
        background: #f0f0f0; /* Цвет фона */
        width: 180px; /* Ширина блока */
        padding: 10px; /* Поля */
        word-break: break-all; /* Перенос слов */
      }
    </style>
  </head>
  <body>
    <div class="col">
      <p>Cуществительное</p>
      <p>высокопревосходительство</p>
      <p>Одушевленное существительное</p>
      <p>одиннадцатиклассница</p>
      <p>Химическое вещество</p>
      <p>метоксихлордиэтиламинометилбутиламиноакридин</p>
    </div>
  </body>
</html>
```
