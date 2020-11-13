---
description: Свойство white-space устанавливает, как отображать пробелы между словами
---

# white-space

Свойство **`white-space`** устанавливает, как отображать пробелы между словами.

В обычных условиях любое количество пробелов в коде HTML показывается на веб-странице как один. Исключением является элемент [`<pre>`](/html/pre/), помещённый в этот контейнер текст выводится со всеми пробелами, как он был отформатирован пользователем. Таким образом, `white-space` имитирует работу `<pre>`, но в отличие от него не меняет шрифт на моноширинный.

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
    - **white-space**
    - [word-spacing](word-spacing.md)

    </div>

## Синтаксис

```css
/* Keyword values */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* Global values */
white-space: inherit;
white-space: initial;
white-space: unset;
```

## Значения

`normal`
: Текст в окне браузера выводится как обычно, переносы строк устанавливаются автоматически.

`nowrap`
: Пробелы не учитываются, переносы строк в коде HTML игнорируются, весь текст отображается одной строкой; вместе с тем, добавление [`<br>`](../html/br.md) переносит текст на новую строку.

`pre`
: Текст показывается с учётом всех пробелов и переносов, как они были добавлены разработчиком в коде HTML. Если строка получается слишком длинной и не помещается в окне браузера, то будет добавлена горизонтальная полоса прокрутки.

`pre-line`
: В тексте пробелы не учитываются, текст автоматически переносится на следующую строку, если он не помещается в заданную область.

`pre-wrap`
: В тексте сохраняются все пробелы и переносы, однако если строка по ширине не помещается в заданную область, то текст автоматически будет перенесён на следующую строку.

Значение по-умолчанию: `normal`

Применяется ко всем элементам

## Спецификации

- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#propdef-white-space)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/text.html#white-space-prop)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>white-space</title>
    <style>
      .example {
        border: 1px dashed #634f36; /* Параметры рамки */
        background: #fffff5; /* Цвет фона */
        font-family: 'Courier New', Courier, monospace; /* Семейство шрифта */
        padding: 7px; /* Поля вокруг текста */
        margin: 0 0 1em; /* Отступы */
        white-space: pre; /* Учитываются все пробелы и переносы */
      }
      .exampleTitle {
        border: 1px solid black; /* Параметры рамки */
        border-bottom: none; /* Убираем линию снизу */
        padding: 3px; /* Поля вокруг текста */
        display: inline; /* Отображать как встроенный элемент */
        background: #efecdf; /* Цвет фона */
        font-weight: bold; /* Жирное начертание */
        font-size: 90%; /* Размер шрифта */
        margin: 0; /* Убираем отступы */
        white-space: nowrap; /* Переносов в тексте нет */
      }
    </style>
  </head>
  <body>
    <p class="exampleTitle">Пример</p>
    <p class="example">
      <html>
        <body>
          <b>Великая теорема Ферма</b><br />
          <i
            >X <sup><small>n</small></sup> + Y
            <sup><small>n</small></sup> = Z
            <sup><small>n</small></sup></i
          ><br />
          где n - целое число > 2
        </body>
      </html>
    </p>
  </body>
</html>
```
