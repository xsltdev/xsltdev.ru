# flex-direction

Свойство **`flex-direction`** задаёт направление основных осей в контейнере и тем самым определяет положение флексов в контейнере.

На само направление также влияет значение атрибута `dir` у контейнера.

## Синтаксис

```css
/* The direction text is laid out in a line */
flex-direction: row;

/* Like <row>, but reversed */
flex-direction: row-reverse;

/* The direction in which lines of text are stacked */
flex-direction: column;

/* Like <column>, but reversed */
flex-direction: column-reverse;

/* Global values */
flex-direction: inherit;
flex-direction: initial;
flex-direction: unset;
```

## Значения

Значение по-умолчанию: `row`

Наследуется: нет

Применяется к: К флекс-элементам

Анимируется: нет

- `row` — Главная ось направлена так же, как и ориентация текста, по умолчанию слева направо. Если значение `dir` задано как `rtl`, то направление оси идёт справа налево.
- `row-reverse` — Похоже на значение `row`, но меняются местами начальная и конечная точки и главная ось направлена справа налево. Если значение `dir` задано как `rtl`, то направление оси идёт слева направо.
- `column` — Главная ось располагается вертикально и направлена сверху вниз.
- `column-reverse` — Главная ось располагается вертикально, но меняется положение начальной и конечной точек и ось направлена снизу вверх.

### Примечание

Safari до версии 9 поддерживает свойство `-webkit-flex-direction`.

## Спецификации

- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/#propdef-flex-direction)

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
    <title>flex-direction</title>
    <style>
      .flex-row {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: row-reverse;
      }
    </style>
  </head>
  <body>
    <ul class="flex-row">
      <li><img src="image/thumb1.jpg" alt="" /></li>
      <li><img src="image/thumb2.jpg" alt="" /></li>
      <li><img src="image/thumb3.jpg" alt="" /></li>
    </ul>
  </body>
</html>
```
