---
description: Сокращенное свойство place-items устанавливает свойства align-items и justify-items соответственно
---

# place-items

Сокращенное свойство **`place-items`** устанавливает свойства [`align-items`](align-items.md) и [`justify-items`](justify-items.md) соответственно. Если второе значение не установлено, для него также используется первое значение.

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
    - **place-items**
    - [justify-self](justify-self.md)
    - [align-self](align-self.md)
    - [place-self](place-self.md)
    - [row-gap](row-gap.md)
    - [column-gap](column-gap.md)
    - [gap](gap.md)

    </div>

## Синтаксис

```css
/* Keyword values */
place-items: auto center;
place-items: normal start;

/* Positional alignment */
place-items: center normal;
place-items: start auto;
place-items: end normal;
place-items: self-start auto;
place-items: self-end normal;
place-items: flex-start auto;
place-items: flex-end normal;
place-items: left auto;
place-items: right normal;

/* Baseline alignment */
place-items: baseline normal;
place-items: first baseline auto;
place-items: last baseline normal;
place-items: stretch auto;

/* Global values */
place-items: inherit;
place-items: initial;
place-items: unset;
```

## Значения

Значение по-умолчанию: `normal legacy`

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#place-items-property)

## Поддержка браузерами

- Chrome 59+
- Firefox 45+

## Описание и примеры

```css
#container {
  height: 200px;
  width: 240px;
  place-items: center; /* You can change this value by selecting another option in the list */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}
```

## См. также

- Свойство [`align-items`](align-items.md)
- Свойство [`align-self`](align-self.md)
- Свойство [`justify-items`](justify-items.md)
- Свойство [`justify-self`](justify-self.md)
