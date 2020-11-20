---
description: Свойство block-size определяет горизонтальный или вертикальный размер блока элемента в зависимости от режима его записи
---

# block-size

Свойство **`block-size`** определяет горизонтальный или вертикальный размер блока элемента в зависимости от режима его записи. Он соответствует свойству [`width`](width.md) или [`height`](height.md), в зависимости от значения `writing-mode`.

Если режим записи ориентирован вертикально, значение `block-size` относится к ширине элемента; в противном случае это относится к высоте элемента. Связанным свойством является [`inline-size`](inline-size.md), который определяет другой размер элемента.

??? info "Логические размеры"

    <div class="col3" markdown="1">

    - **block-size**
    - [inline-size](inline-size.md)
    - [max-block-size](max-block-size.md)
    - [max-inline-size](max-inline-size.md)
    - [min-block-size](min-block-size.md)
    - [min-inline-size](min-inline-size.md)

    </div>

## Синтаксис

```css
/* <length> values */
block-size: 300px;
block-size: 25em;

/* <percentage> values */
block-size: 75%;

/* Keyword values */
block-size: 25em border-box;
block-size: 75% content-box;
block-size: max-content;
block-size: min-content;
block-size: available;
block-size: fit-content;
block-size: auto;

/* Global values */
block-size: inherit;
block-size: initial;
block-size: unset;
```

## Спецификация

- [CSS Logical Properties and Values Level 1](https://drafts.csswg.org/css-logical/#dimension-properties)

## Пример

=== "CSS"

    ```css
    .exampleText {
      writing-mode: vertical-rl;
      background-color: yellow;
      block-size: 200px;
    }
    ```

=== "HTML"

    ```html
    <p class="exampleText">Example text</p>
    ```

=== "Результат"

    ![block-size](block-size.png)

## См. также

- [width](width.md) и [height](height.md)

## Ссылки

- [block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size) <sup><small>MDN (рус.)</small></sup>
- [Новые логические свойства в CSS!](https://medium.com/web-standards/logical-css-props-c5046c563640)
