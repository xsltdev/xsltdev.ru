---
description: Свойство max-block-size определяет максимальный размер элемента в направлении, перпендикулярном направлению письма, указанному в writing-mode
---

# max-block-size

Свойство **`max-block-size`** определяет максимальный размер элемента в направлении, перпендикулярном направлению письма, указанному в `writing-mode`. То есть, если направление записи горизонтальное, то `max-block-size` эквивалентно [`max-height`](max-height.md); если направление записи вертикальное, `max-block-size` равен [`max-width`](max-width.md).

Максимальная длина другого размера указывается с помощью свойства `max-inline-size`.

??? info "Логические размеры"

    <div class="col3" markdown="1">

    - [block-size](block-size.md)
    - [inline-size](inline-size.md)
    - **max-block-size**
    - [max-inline-size](max-inline-size.md)
    - [min-block-size](min-block-size.md)
    - [min-inline-size](min-inline-size.md)

    </div>

## Синтаксис

```css
/* <length> values */
max-block-size: 300px;
max-block-size: 25em;

/* <percentage> values */
max-block-size: 75%;

/* Keyword values */
max-block-size: none;
max-block-size: max-content;
max-block-size: min-content;
max-block-size: fit-content;
max-block-size: fill-available;

/* Global values */
max-block-size: inherit;
max-block-size: initial;
max-block-size: unset;
```

## Значения

Значением свойства `max-block-size` может быть любое значение, допустимое для свойств `max-width` и `max-height`:

`<length>`
: Максимальная ширина как абсолютное значение.

`<percentage>`
: Максимальная ширина, выраженная в процентах от ширины содержащего блока.

Значения ключевых слов:

`none`
: Ширина не имеет максимального значения.

`max-content`
: Внутренняя предпочтительная ширина.

`min-content`
: Собственная минимальная ширина.

`fill-available`
: Ширина содержащего блока минус горизонтальное поле, граница и отступ.

`fit-content`
: То же, что и `max-content`.

## Спецификация

- [CSS Logical Properties and Values Level 1](https://drafts.csswg.org/css-logical/#propdef-max-block-size)

## Пример

=== "CSS"

    ```css
    .standard-box {
      padding: 4px;
      background-color: #abcdef;
      color: #000;
      font: 16px 'Open Sans', 'Helvetica', 'Arial', sans-serif;
      max-block-size: 160px;
      min-block-size: 100px;
    }

    .horizontal {
      writing-mode: horizontal-tb;
    }

    .vertical {
      writing-mode: vertical-rl;
    }
    ```

=== "HTML"

    ```html
    <p>
      Writing mode <code>horizontal-tb</code> (the default):
    </p>
    <div class="standard-box horizontal">
      Call me Ishmael. Some years ago—never mind how long
      precisely—having little or no money in my purse, and
      nothing particular to interest me on shore, I thought I
      would sail about a little and see the watery part of the
      world. It is a way I have of driving off the spleen and
      regulating the circulation.
    </div>

    <p>Writing mode <code>vertical-rl</code>:</p>
    <div class="standard-box vertical">
      Call me Ishmael. Some years ago—never mind how long
      precisely—having little or no money in my purse, and
      nothing particular to interest me on shore, I thought I
      would sail about a little and see the watery part of the
      world. It is a way I have of driving off the spleen and
      regulating the circulation.
    </div>
    ```

## См. также

- [`max-width`](max-width.md) и [`max-height`](max-height.md)

## Ссылки

- [`max-block-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size) <sup><small>MDN (англ.)</small></sup>
- [Новые логические свойства в CSS!](https://medium.com/web-standards/logical-css-props-c5046c563640)
