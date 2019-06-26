# flex-basis

Свойство **`flex-basis`** определяет основу флекса, которая является начальным размером элемента.

Похоже на свойства [`width`](/css/width/) и [`height`](/css/height/), к которым добавляется содержимое элемента.

## Синтаксис

```css
/* Specify <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Automatically size based on the flex item’s content */
flex-basis: content;

/* Global values */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```

## Значения

Значение по-умолчанию: `auto`

Наследуется: нет

Применяется к: К флекс-элементам

Анимируется: да

- `auto` -- Указывает автоматический размер, основанный на содержимом элемента.
- `<ширина>` -- Задаёт ширину элемента в `px`, `mm`, `pt` или в процентах. При этом размер вычисляется относительно родителя. Отрицательное значение недопустимо.

### Примечание

Safari до версии 9 поддерживает свойство `-webkit-flex-basis`.

## Спецификации

- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/#propdef-flex-basis)

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
    <title>flex-basis</title>
    <style>
      .flex-container {
        display: flex; /* Флексы */
        height: 300px; /* Высота */
        color: #fff; /* Белый цвет текста */
        font-size: 2.6em; /* Размер шрифта */
        flex-flow: column wrap; /* Располагаем в виде колонок */
      }
      .flex-item {
        display: flex; /* Флексы */
        align-items: center; /* Выравнивание текста по вертикали */
        justify-content: center; /* Выравнивание текста по горизонтали */
      }
      .one {
        background: #508694; /* Цвет фона */
        margin-right: 10px; /* Отступ справа */
        flex-basis: 100%;
        order: 1; /* Первый блок */
      }
      .two {
        background: #bb844c; /* Цвет фона */
        margin-bottom: 10px; /* Отступ снизу */
        flex: 1 1 0;
        order: 2; /* Второй блок */
      }
      .three {
        background: #929d79; /* Цвет фона */
        flex: 1 1 0;
        order: 3; /* Третий блок */
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div class="flex-item one">Первый</div>
      <div class="flex-item two">Второй</div>
      <div class="flex-item three">Третий</div>
    </div>
  </body>
</html>
```
