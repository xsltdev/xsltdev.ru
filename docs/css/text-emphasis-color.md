---
description: Свойство text-emphasis-color устанавливает цвет меток выделения
---

# text-emphasis-color

Свойство **`text-emphasis-color`** устанавливает цвет меток выделения. Это значение также можно установить с помощью свойства [`text-emphasis`](text-emphasis.md).

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

- [`text-emphasis-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color) на MDN
