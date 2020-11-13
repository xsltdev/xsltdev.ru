---
description: Свойство text-emphasis для выделения текста применяет к тексту метки выделения (кроме пробелов и управляющих символов)
---

# text-emphasis

Свойство **`text-emphasis`** для выделения текста применяет к тексту метки выделения (кроме пробелов и управляющих символов).

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
    - **text-emphasis**
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
/* Initial value */
text-emphasis: none; /* No emphasis marks */

/* <string> value */
text-emphasis: 'x';
text-emphasis: '点';
text-emphasis: '\25B2';
text-emphasis: '*' #555;
text-emphasis: 'foo'; /* Should NOT use. It may be computed to or rendered as 'f' only */

/* Keywords value */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* Keywords value combined with a color */
text-emphasis: filled sesame #555;

/* Global values */
text-emphasis: inherit;
text-emphasis: initial;
text-emphasis: unset;
```

## Значения

`none`
: Без выделения

`filled`
: Форма заполнена сплошным цветом.

`open`
: Форма полая.

`dot`
: Отображать маленькие кружки в виде отметок. Заполненная точка - `•` (`U+2022`), а открытая точка - `◦` (`U+25E6`).

`circle`
: Показать большие круги в виде отметок. Заполненный кружок - `●` (`U+25CF`), а открытый кружок - `○` (`U+25CB`).

`double-circle`
: Отображать двойные кружки в виде отметок. Заполненный двойной кружок - `◉` (`U+25C9`), а открытый двойной кружок - `◎` (`U+25CE`).

`triangle`
: Отображать треугольники в виде отметок. Заполненный треугольник - `▲` (`U+25B2`), а открытый треугольник - `△` (`U+25B3`).

`sesame`
: Показать сезам в виде отметок. Заполненный - `﹅` (`U+FE45`), а открытый - `﹆` (`U+FE46`).

`<строка>`
: Отобразить данную строку в виде отметок. Авторам не следует указывать более одного символа . Браузер может обрезать или игнорировать строки, состоящие из нескольких символов.

`<цвет>`
: Определяет цвет знака. Если цвет отсутствует, по умолчанию используется `currentColor`.

## Спецификация

- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/#text-emphasis-property)

## Пример

```css
h2 {
  -webkit-text-emphasis-style: triangle open;
  text-emphasis-style: triangle open;
}
```

Результат:

![text-emphasis-style](text-emphasis-style.png)

## См. также

- [`text-emphasis-style`](text-emphasis-style.md)
- [`text-emphasis-color`](text-emphasis-color.md)
- [`text-emphasis-position`](text-emphasis-position.md)

## Ссылки

- [`text-emphasis`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis)
