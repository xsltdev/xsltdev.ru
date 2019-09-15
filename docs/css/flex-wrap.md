# flex-wrap

Свойство **`flex-wrap`** указывает, следует ли флексам располагаться в одну строку или можно занять несколько строк.

Если перенос строк допускается, то свойство также позволяет контролировать направление, в котором выкладываются строки.

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

Применяется к: К флекс-элементам

Анимируется: нет

- `nowrap` — Флексы выстраиваются в одну линию.
- `wrap` — Флексы выстраиваются в несколько строк, их направление задаётся свойством [`flex-direction`](/css/flex-direction/).
- `wrap-reverse` — Флексы выстраиваются в несколько строк, в направлении, противоположном [`flex-direction`](/css/flex-direction/).

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
      <li class="flex-item"><img src="image/aquaria1.jpg" alt="" /></li>
      <li class="flex-item"><img src="image/aquaria2.jpg" alt="" /></li>
      <li class="flex-item"><img src="image/aquaria3.jpg" alt="" /></li>
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
