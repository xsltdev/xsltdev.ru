---
description: Свойство flex-wrap указывает, следует ли флексам располагаться в одну строку или можно занять несколько строк
---

# flex-wrap

Свойство **`flex-wrap`** указывает, следует ли флексам располагаться в одну строку или можно занять несколько строк.

Если перенос строк допускается, то свойство также позволяет контролировать направление, в котором выкладываются строки.

??? info "Flexbox и выравнивание"

    **Руководство по [Flexbox](flex-guide/flex-1.md)**

    <div class="col3" markdown="1">

    - [flex](flex.md)
    - [flex-basis](flex-basis.md)
    - [flex-direction](flex-direction.md)
    - [flex-flow](flex-flow.md)
    - [flex-grow](flex-grow.md)
    - [flex-shrink](flex-shrink.md)
    - **flex-wrap**
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
flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: unset;
```

## Значения

Значение по-умолчанию: `nowrap`

Наследуется: нет

Применяется к флекс-элементам

Анимируется: нет

`nowrap`
: Флексы выстраиваются в одну линию.

`wrap`
: Флексы выстраиваются в несколько строк, их направление задаётся свойством [`flex-direction`](flex-direction.md).

`wrap-reverse`
: Флексы выстраиваются в несколько строк, в направлении, противоположном [`flex-direction`](flex-direction.md).

### Примечание

Safari до версии 9 поддерживает свойство `-webkit-flex-wrap`.

## Спецификации

- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/#propdef-flex-wrap)

## Поддержка браузерами

<p class="ciu_embed" data-feature="flexbox" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=flexbox">Can I Use flexbox?</a> Data on support for the flexbox feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>flex-wrap</title>
    <style>
      .flex-container {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
      }
      .flex-item {
        padding: 20px;
        background: #f0f0f0;
        border-radius: 5px;
        margin: 1rem;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <ul class="flex-container">
      <li class="flex-item">
        <img src="image/aquaria1.jpg" alt="" />
      </li>
      <li class="flex-item">
        <img src="image/aquaria2.jpg" alt="" />
      </li>
      <li class="flex-item">
        <img src="image/aquaria3.jpg" alt="" />
      </li>
    </ul>
  </body>
</html>
```

Результат:

<style>
.flex-container {
padding: 0;
margin: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
}
.flex-item {
padding: 20px;
background: #f0f0f0;
border-radius: 5px;
margin: 1rem;
text-align: center;
}
</style>
<ul class="flex-container">
<li class="flex-item"><img src="image/aquaria1.jpg" alt=""></li>
<li class="flex-item"><img src="image/aquaria2.jpg" alt=""></li>
<li class="flex-item"><img src="image/aquaria3.jpg" alt=""></li>
</ul>

## См. также

- [Руководство по Flexbox](flex-guide/flex-1.md)
