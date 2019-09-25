---
description: Свойство justify-content определяет, как браузер распределяет пространство вокруг флекс-элементов вдоль главной оси контейнера
---

# justify-content

Свойство **`justify-content`** определяет, как браузер распределяет пространство вокруг флекс-элементов вдоль главной оси контейнера.

Это делается после того, как применяются размеры и автоматические отступы, за исключением ситуации, когда по крайней мере у одного элемента [`flex-grow`](flex-grow.md) больше нуля. При этом не остаётся никакого свободного пространства для манипулирования.

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

/* Равномерно распределяет все элементы по ширине flex-блока.
Первый элемент вначале, последний в конце */
justify-content: space-between;

/* Равномерно распределяет все элементы по ширине flex-блока.
Все элементы имеют полуразмерное пространство
с обоих концов */
justify-content: space-around;

/* Равномерно распределяет все элементы по ширине flex-блока.
Все элементы имеют равное пространство вокруг */
justify-content: space-evenly;

/* Равномерно распределяет все элементы по ширине flex-блока.
Все элементы имеют "авто-размер", чтобы соответствовать
контейнеру */
justify-content: stretch;

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

Применяется к flex-контейнерам

`start`
: Элементы располагаются друг за другом и прижимаются к началу контейнера по главной оси.

`end`
: Элементы располагаются друг за другом и прижимаются к концу контейнера по главной оси.

`flex-start`
: Флексы прижаты к началу строки.

`flex-end`
: Флексы прижаты к концу строки.

`center`
: Флексы прижимаются по центру строки.

`left`
: Элементы упакованы вплотную друг к другу к левому краю контейнера выравнивания. Если ось свойства не параллельна встроенной оси, это значение ведет себя как `start`.

`right`
: Элементы упакованы вплотную друг с другом по направлению к правому краю контейнера выравнивания по соответствующей оси. Если ось свойства не параллельна встроенной оси, это значение ведет себя как `start`.

`baseline`, `first baseline`, `last baseline`
Определяет участие в выравнивании первой или последней базовой линии: выравнивает базовую линию выравнивания первого или последнего базового набора блока с соответствующей базовой линией в общем первом или последнем базовом наборе всех блоков в его группе совместного использования базовой линии. Обратно-совместимое выравнивание для `first baseline` - `start`, а для `last baseline` - `end`.

`space-between`
: Флексы равномерно распределяются по всей строке. Первый и последний флекс прижимаются к соответствующим краям контейнера.

`space-around`
: Флексы равномерно распределяются по всей строке. Пустое пространство перед первым и после последнего элементов равно половине пространства между двумя соседними элементами.

`space-evenly`
Элементы равномерно распределены внутри контейнера выравнивания вдоль главной оси. Интервал между каждой парой смежных элементов, краем основного начала и первым элементом, краем основного конца и последним элементом абсолютно одинаков.

`stretch`
Если объединенный размер элементов меньше, чем размер контейнера выравнивания, размер любого элемента авторазмера увеличивается одинаково (не пропорционально), при этом соблюдая ограничения, накладываемые `max-height` / `max-width` (или эквивалентными функциями), так что объединенный размер точно заполняет контейнер выравнивания вдоль главной оси.

`safe`
Если размер элемента выходит за пределы контейнера выравнивания, элемент выравнивается, как если бы режим выравнивания был `start`.

`unsafe`
Независимо от относительных размеров элемента и контейнера выравнивания, данное значение выравнивания учитывается.

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
        background: repeating-radial-gradient(
          circle at 50% 50%,
          #fff,
          #fff 25px,
          #f96 25px,
          #f96 50px
        );
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
