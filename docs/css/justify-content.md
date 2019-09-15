# justify-content

Свойство **`justify-content`** определяет, как браузер распределяет пространство вокруг флекс-элементов вдоль главной оси контейнера.

Это делается после того, как применяются размеры и автоматические отступы, за исключением ситуации, когда по крайней мере у одного элемента [`flex-grow`](/css/flex-grow/) больше нуля. При этом не остаётся никакого свободного пространства для манипулирования.

## Синтаксис

```css
/* Позиционное выравнивание */
justify-content: center; /* Выравнивание элементов по центру */
justify-content: start; /* Выравнивание элементов в начале */
justify-content: end; /* Выравнивание элементов в конце */
justify-content: flex-start; /* Выравнивание элементов с самого начала */
justify-content: flex-end; /* Выравнивание элементов с самого конца */
justify-content: left; /* Выравнивание элементов по левому краю */
justify-content: right; /* Выравнивание элементов по правому краю */

/* Выравнивание относительно осевой линии */
justify-content: baseline;
justify-content: first baseline;
justify-content: last baseline;

/* Распределенное выравнивание */
justify-content: space-between; /* Равномерно распределяет все элементы по ширине flex-блока.
                                   Первый элемент вначале, последний в конце */
justify-content: space-around; /* Равномерно распределяет все элементы по ширине flex-блока.
                                   Все элементы имеют полуразмерное пространство
                                   с обоих концов */
justify-content: space-evenly; /* Равномерно распределяет все элементы по ширине flex-блока.
                                   Все элементы имеют равное пространство вокруг */
justify-content: stretch; /* Равномерно распределяет все элементы по ширине flex-блока.
                                   Все элементы имеют "авто-размер", чтобы соответствовать
                                   контейнеру */

/* Выравнивание при переполнении */
justify-content: safe center;
justify-content: unsafe center;

/* Глобальные значения */
justify-content: inherit;
justify-content: initial;
justify-content: unset;
```

## Значения

Значение по-умолчанию: `normal`

Применяется к: flex-контейнеры

- `flex-start` — Флексы прижаты к началу строки.
- `flex-end` — Флексы прижаты к концу строки.
- `center` — Флексы прижимаются по центру строки.
- `space-between` — Флексы равномерно распределяются по всей строке. Первый и последний флекс прижимаются к соответствующим краям контейнера.
- `space-around` — Флексы равномерно распределяются по всей строке. Пустое пространство перед первым и после последнего элементов равно половине пространства между двумя соседними элементами.

### Примечание

- Safari до версии 9 поддерживает свойство `-webkit-justify-content`.

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#propdef-justify-content)
- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/#propdef-justify-content)

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
    <title>justify-content</title>
    <style>
      section {
        display: flex;
        margin-bottom: 10px;
      }
      section > div {
        border: 1px solid #ccc;
        width: 100px;
        height: 100px;
        background: repeating-radial-gradient(circle at 50% 50%, #fff, #fff 25px, #f96 25px, #f96 50px);
      }
      .flex-start {
        justify-content: flex-start;
      }
      .flex-end {
        justify-content: flex-end;
      }
      .center {
        justify-content: center;
      }
      .space-between {
        justify-content: space-between;
      }
      .space-around {
        justify-content: space-around;
      }
    </style>
  </head>
  <body>
    <section class="flex-start">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="flex-end">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="center">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="space-between">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section class="space-around">
      <div></div>
      <div></div>
      <div></div>
    </section>
  </body>
</html>
```
