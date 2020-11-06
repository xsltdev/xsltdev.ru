---
description: Свойство justify-self устанавливает способ выравнивания элемента внутри его контейнера вдоль inline оси
---

# justify-self

Свойство **`justify-self`** устанавливает способ выравнивания элемента внутри его контейнера вдоль inline оси.

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
    - **justify-self**
    - [align-self](align-self.md)
    - [place-self](place-self.md)
    - [row-gap](row-gap.md)
    - [column-gap](column-gap.md)
    - [gap](gap.md)

    </div>

## Синтаксис

```css
/* Basic keywords */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* Positional alignment */
justify-self: center; /* Pack item around the center */
justify-self: start; /* Pack item from the start */
justify-self: end; /* Pack item from the end */
justify-self: flex-start; /* Pack flex item from the start */
justify-self: flex-end; /* Pack flex item from the end */
justify-self: self-start;
justify-self: self-end;
justify-self: left; /* Pack item from the left */
justify-self: right; /* Pack item from the right */

/* Baseline alignment */
justify-self: baseline;
justify-self: first baseline;
justify-self: last baseline;

/* Overflow alignment (for positional alignment only) */
justify-self: safe center;
justify-self: unsafe center;

/* Global values */
justify-self: inherit;
justify-self: initial;
justify-self: unset;
```

## Значения

Значение по-умолчанию: `auto`

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

Применяется к грид-элементам

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#propdef-justify-self)

## Поддержка браузерами

- Chrome 57+
- Edge 16+
- Firefox 45+
- Safari 10.1

## См. также

- Свойство [`justify-items`](justify-items.md)
