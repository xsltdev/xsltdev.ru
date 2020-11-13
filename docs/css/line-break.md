---
description: Свойство line-break устанавливает способ разрыва строки текста на китайском, японском или корейском (CJK) при работе с пунктуацией и символами.
---

# line-break

Свойство **`line-break`** устанавливает способ разрыва строки текста на китайском, японском или корейском (CJK) при работе с пунктуацией и символами.

??? info "Текст"

    <div class="col3" markdown="1">

    - [hanging-punctuation](hanging-punctuation.md)
    - [hyphens](hyphens.md)
    - [letter-spacing](letter-spacing.md)
    - **line-break**
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
    - [word-spacing](word-spacing.md)

    </div>

## Синтаксис

```css
/* Значения ключевым словом */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;

/* Глобальные значения */
line-break: inherit;
line-break: initial;
line-break: unset;
```

## Значения

Значение по-умолчанию: `auto`

`auto`
: Разрыв текста, используя правило разрыва строки по умолчанию.

`loose`
: Разрыв текста, используя правило разрыва строки с наименьшими ограничениями. Обычно используется для коротких строк, например, в газетах.

`normal`
: Разрыв текста, используя наиболее распространенное правило разрыва строки.

`strict`
: Разрыв текста, используя самое строгое правило разрыва строки.

## Спецификация

- [CSS Text Module Level 3](https://drafts.csswg.org/css-text-3/#line-break-property)

## Ссылки

- [line-break](https://developer.mozilla.org/ru/docs/Web/CSS/line-break) <sup><small>MDN (рус.)</small></sup>
