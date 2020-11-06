---
description: Свойство place-self - это сокращенное свойство, устанавливающее свойства align-self и justify-self
---

# place-self

Свойство **`place-self`** - это сокращенное свойство, устанавливающее свойства [`align-self`](align-self.md) и [`justify-self`](justify-self.md). Если второе значение отсутствует, для него используется первое значение.

??? info "Flexbox и выравнивание"

    **Руководство по [Flexbox](flex-guide/flex-1.md)**

    <div class="col3" markdown="1">

    - [flex](flex.md)
    - [flex-basis](flex-basis.md)
    - [flex-direction](flex-direction.md)
    - [flex-flow](flex-flow.md)
    - [flex-grow](flex-grow.md)
    - [flex-shrink](flex-shrink.md)
    - [flex-wrap](flex-wrap.md)
    - [order](order.md)

    </div>

    <div class="col3" markdown="1">

    - [justify-content](justify-content.md)
    - [align-content](align-content.md)
    - [place-content](place-content.md)
    - [justify-items](justify-items.md)
    - [align-items](align-items.md)
    - [place-items](place-items.md)
    - [justify-self](justify-self.md)
    - [align-self](align-self.md)
    - **place-self**
    - [row-gap](row-gap.md)
    - [column-gap](column-gap.md)
    - [gap](gap.md)

    </div>

## Синтаксис

```css
/* Keyword values */
place-self: auto center;
place-self: normal start;

/* Positional alignment */
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;
place-self: left auto;
place-self: right normal;

/* Baseline alignment */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* Global values */
place-self: inherit;
place-self: initial;
place-self: unset;
```

## Значения

Значение по-умолчанию: `auto auto`

Применяется к гридам

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#place-self-property)

## Поддержка браузерами

Поддержка в флексах:

- Chrome 59+
- Firefox 45+

Поддержка в гридах:

- Chrome 59+
- Firefox 45+

## См. также

- Свойство [`align-self`](align-self.md)
- Свойство [`justify-self`](justify-self.md)
