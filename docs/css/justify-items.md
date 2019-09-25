---
description: Свойство justify-items определяет justify-self по умолчанию для всех элементов блока, предоставляя им способ выравнивания по умолчанию для каждого блока вдоль соответствующей оси
---

# justify-items

Свойство **`justify-items`** определяет [`justify-self`](justify-self.md) по умолчанию для всех элементов блока, предоставляя им способ выравнивания по умолчанию для каждого блока вдоль соответствующей оси.

## Синтаксис

```css
/* Basic keywords */
justify-items: auto;
justify-items: normal;
justify-items: stretch;

/* Positional alignment */
justify-items: center; /* Pack items around the center */
justify-items: start; /* Pack items from the start */
justify-items: end; /* Pack items from the end */
justify-items: flex-start; /* Pack flex items from the start */
justify-items: flex-end; /* Pack flex items from the end */
justify-items: self-start;
justify-items: self-end;
justify-items: left; /* Pack items from the left */
justify-items: right; /* Pack items from the right */

/* Baseline alignment */
justify-items: baseline;
justify-items: first baseline;
justify-items: last baseline;

/* Overflow alignment (for positional alignment only) */
justify-items: safe center;
justify-items: unsafe center;

/* Legacy alignment */
justify-items: legacy right;
justify-items: legacy left;
justify-items: legacy center;

/* Global values */
justify-items: inherit;
justify-items: initial;
justify-items: unset;
```

## Значения

Значение по-умолчанию: `legacy`

`legacy`
: Создает значение, унаследованное потомками блока. Обратите внимание, что если потомок имеет значение `justify-self: auto`, унаследованное ключевое слово не учитывается по нисходящему, только `left`, `right` или значением `center`, связанным с ним.

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

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#propdef-justify-items)

## Поддержка браузерами

Поддержка флексов:

- Chrome 52+
- Edge 12+
- Firefox 20+
- IE 11+
- Safari 9+

Поддержка Grid:

- Chrome 57+
- Edge 16+
- Firefox 45+
- Safari 10.1+

## См. также

- [place-items](place-items.md)
- [justify-self](justify-self.md)
- [align-items](align-items.md)
