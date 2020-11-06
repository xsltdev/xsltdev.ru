---
description: Свойство flex-flow является сокращённым свойством для отдельных свойств flex-direction и flex-wrap
---

# flex-flow

Свойство **`flex-flow`** является сокращённым свойством для отдельных свойств [`flex-direction`](flex-direction.md) и [`flex-wrap`](flex-wrap.md).

??? info "Flexbox и выравнивание"

    **Руководство по [Flexbox](flex-guide/flex-1.md)**

    <div class="col3" markdown="1">

    - [flex](flex.md)
    - [flex-basis](flex-basis.md)
    - [flex-direction](flex-direction.md)
    - **flex-flow**
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
    - [gap](gap.md)

    </div>

## Синтаксис

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* Global values */
flex-flow: inherit;
flex-flow: initial;
flex-flow: unset;
```

## Значения

Значение по-умолчанию:

- [`flex-direction`](flex-direction.md): `row`
- [`flex-wrap`](flex-wrap.md): `nowrap`

Наследуется: нет

Применяется к флекс-элементам

Анимируется: нет

Смотрите отдельные свойства для их значений.

### Примечание

Safari до версии 9 поддерживает свойство `-webkit-flex-flow`.

## Спецификации

- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/#propdef-flex-flow)

## Поддержка браузерами

<p class="ciu_embed" data-feature="flexbox" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=flexbox">Can I Use flexbox?</a> Data on support for the flexbox feature across the major browsers from caniuse.com.
</p>

## См. также

- [Руководство по Flexbox](flex-guide/flex-1.md)
