# columns

Универсальное свойство **`columns`** позволяет одновременно задать ширину и количество колонок многоколоночного текста.

## Синтаксис

```css
/* Column width */
columns: 1em;

/* Column count */
columns: auto;
columns: 1;

/* Combination of column width and count */
columns: 1 auto;
columns: auto 12em;
columns: auto auto;

/* Global values */
columns: inherit;
columns: initial;
columns: unset;
```

## Значения

Комбинация свойств [`column-width`](column-width.md) и [`column-count`](column-count.md). Порядок значения не имеет.

### Примечание

Firefox поддерживает свойство `-moz-columns`.

Safari, Chrome и Android поддерживают свойство `-webkit-columns`.

Значение по-умолчанию:

```css
columns: auto;
```

Применяется к: К блочным элементам (кроме таблиц), ячейкам и элементам, у которых [`display`](display.md) установлен как `inline-block`

## Спецификации

- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css3-multicol/#columns)

## Поддержка браузерами

<p class="ciu_embed" data-feature="multicolumn" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=multicolumn">Can I Use multicolumn?</a> Data on support for the multicolumn feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

Ширина колонок 200 пикселов, количество задаётся браузером.

```
columns: 200px auto;
```

Три колонки минимальной ширины 12em каждая.

```
columns: 3 12em;
```

Две колонки, их ширина определяется браузером.

```
columns: 2;
```
