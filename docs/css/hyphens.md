---
description: Свойство hyphens сообщает браузеру, как расставлять переносы слов в блоке текста
---

# hyphens

Свойство **`hyphens`** сообщает браузеру, как расставлять переносы слов в блоке текста.

Словарь переносов хранится в браузере и подключается только при наличии атрибута `lang` с кодом языка. Так, для русского языка следует добавить `lang="ru"` к элементу [`<html>`](/html/html/) или непосредственно к абзацу текста.

??? info "Текст"

    <div class="col3" markdown="1">

    - [hanging-punctuation](hanging-punctuation.md)
    - **hyphens**
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
    - [word-spacing](word-spacing.md)

    </div>

## Синтаксис

```css
/* Keyword values */
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Global values */
hyphens: inherit;
hyphens: initial;
hyphens: unset;
```

## Значения

`none`
: Слова не переносятся, даже при наличии в тексте мягких переносов `&shy`;.

`manual`
: Переносы слов в тексте происходят в тех местах, где добавлен `&shy`; или [`<wbr>`](../html/wbr.md), если их нет, то переносы не делаются.

`auto`
: Браузер автоматически добавляет переносы слов на основе встроенного словаря переносов.

### Примечание

- Internet Explorer поддерживает свойство `-ms-hyphens`.
- Safari поддерживает свойство `-webkit-hyphens`.
- Firefox поддерживает свойство `-moz-hyphens`.

Значение по-умолчанию:

```css
hyphens: manual;
```

Применяется ко всем элементам

## Спецификации

- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#hyphens-property)

## Описание и примеры

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>hyphens</title>
    <style>
      p {
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
      }
    </style>
  </head>
  <body>
    <p>
      Никотинамидадениндинуклеотидфосфат — широко
      распространённый в природе кофермент некоторых
      дегидрогеназ — ферментов, катализирующих
      окислительно-восстановительные реакции в живых
      клетках.
    </p>
  </body>
</html>
```
