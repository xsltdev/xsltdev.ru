---
description: Свойство text-justify определяет какой тип выравнивания следует применить к тексту, когда text-align justify применяется к элементу
---

# text-justify

Свойство **`text-justify`** определяет какой тип выравнивания следует применить к тексту, когда `text-align: justify;` применяется к элементу.

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
    - **text-justify**
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
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* Устаревшее значение */
```

## Значения

`none`
: Выравнивание текста отключено. Оно имеет такой же эффект как отсутствие применение свойства `text-align`, хотя оно полезно, если вам нужно включать и выключать выравнивание.

`auto`
Браузер выбирает лучший тип выравнивания в текущей ситуации, основываясь на балансе между производительностью и качеством, а также на том, что более подходит для языка текста (например, английского, иероглифных языков, и т. п.). Оно используется по умолчанию, если `text-justify` не установлен.

`inter-word`
Выравнивание текста по средствам добавления пробелов между словами (эффективно варьируя `word-spacing`), что наиболее подходит для языков, которые используют разделение слов пробелами, таких как английский или корейский.

`inter-character`
Выравнивание текста по средствам добавления пробелов между символами (эффективно варьируя `letter-spacing`), что наиболее подходит для таких языков как японский.

`distribute`
Показывает тоже поведение, что и `inter-character` это значение сохранилось для обратной совместимости.

## Спецификация

- [CSS Text Module Level 3](https://drafts.csswg.org/css-text-3/#text-justify-property)

## Пример

```css
p {
  font-size: 1.5em;
  border: 1px solid black;
  padding: 10px;
  width: 95%;
  margin: 10px auto;
  text-align: justify;
}

.none {
  text-justify: none;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distribute;
}

.word {
  text-justify: inter-word;
}

.char {
  text-justify: inter-character;
}
```

## См. также

- [`text-align`](text-align.md)

## Ссылки

- [text-align](https://developer.mozilla.org/ru/docs/Web/CSS/text-justify) <sup><small>MDN (рус.)</small></sup>
