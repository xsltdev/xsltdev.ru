---
description: Свойство text-emphasis-color устанавливает цвет меток выделения
---

# text-emphasis-color

Свойство **`text-emphasis-color`** устанавливает цвет меток выделения. Это значение также можно установить с помощью свойства [`text-emphasis`](text-emphasis.md).

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
    - **text-emphasis-color**
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
text-emphasis-color: currentColor;

/* <color> */
text-emphasis-color: #555;
text-emphasis-color: blue;
text-emphasis-color: rgba(90, 200, 160, 0.8);
text-emphasis-color: transparent;

/* Global values */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: unset;
```

## Значения

`<цвет>`
: Определяет цвет меток выделения. Если цвет отсутствует, по умолчанию `currentColor`.

## Спецификация

- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/#text-emphasis-color-property)

## Пример

=== "HTML"

    ```html
    <p>Here's an example:</p>

    <em>This has emphasis marks!</em>
    ```

=== "CSS"

    ```css
    em {
      -webkit-text-emphasis-color: green;
      -webkit-text-emphasis-style: '*';
      text-emphasis-color: green;
      text-emphasis-style: '*';
    }
    ```

=== "Результат"

    ![text-emphasis-color](text-emphasis-color.png)

## См. также

- [`text-emphasis-style`](text-emphasis-style.md)
- [`text-emphasis`](text-emphasis.md)
- [`text-emphasis-position`](text-emphasis-position.md)

## Ссылки

- [`text-emphasis-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color) <sup><small>MDN (рус.)</small></sup>
