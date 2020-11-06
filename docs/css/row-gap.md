---
description: Свойство row-gap устанавливает расстояние между строками сетки элемента
---

# row-gap

Свойство **`row-gap`** устанавливает расстояние между строками сетки элемента.

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
    - [place-self](place-self.md)
    - **row-gap**
    - [column-gap](column-gap.md)
    - [gap](gap.md)

    </div>

## Синтаксис

```css
/* <length> values */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* <percentage> value */
row-gap: 10%;

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: unset;
```

## Значения

Значение по-умолчанию: `normal`

Применяется к флексам, гридам

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#propdef-row-gap)

## Поддержка браузерами

Поддержка в флексах:

- Firefox 63+

Поддержка в гридах:

- Chrome 66+
- Edge 16+
- Firefox 61+
- Safari 10.1+

## Описание и примеры

### Flex

HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

### Grid

HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

## См. также

- Свойство [`column-gap`](column-gap.md)
- Свойство [`gap`](gap.md)
