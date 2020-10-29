---
description: Свойство text-justify определяет какой тип выравнивания следует применить к тексту, когда text-align justify применяется к элементу
---

# text-justify

Свойство **`text-justify`** определяет какой тип выравнивания следует применить к тексту, когда `text-align: justify;` применяется к элементу.

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
