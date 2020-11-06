---
description: Свойство gap устанавливает промежутки между строками и столбцами сетки. Это сокращение для row-gap и column-gap
---

# gap

Свойство **`gap`** устанавливает промежутки между строками и столбцами сетки. Это сокращение для [`row-gap`](row-gap.md) и [`column-gap`](column-gap.md).

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
    - [row-gap](row-gap.md)
    - [column-gap](column-gap.md)
    - **gap**

    </div>

## Синтаксис

```css
/* One <length> value */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* One <percentage> value */
gap: 16%;
gap: 100%;

/* Two <length> values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* One or two <percentage> values */
gap: 16% 100%;
gap: 21px 82%;

/* calc() values */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Global values */
gap: inherit;
gap: initial;
gap: unset;
```

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#propdef-gap)

## Поддержка браузерами

`gap` для колонок (columns):

- Chrome 66+
- Edge 16+
- Firefox 61+

`gap` для Grid-раскладки:

- Chrome 66+
- Edge 16+
- Firefox 61+
- Safari 10.1+

`gap` для Flex-раскладки:

<p class="ciu_embed" data-feature="flexbox-gap" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<a href="http://caniuse.com/#feat=flexbox-gap">Can I Use flexbox-gap?</a> Data on support for the flexbox-gap feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

### Flex

HTML:

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
  gap: 20px 5px;
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
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

## См. также

- Свойство [`row-gap`](row-gap.md)
- Свойство [`column-gap`](column-gap.md)
- [Руководство по Grid Layout](grid-guide/grid-1.md)
