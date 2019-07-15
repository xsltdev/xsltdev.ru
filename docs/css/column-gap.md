# column-gap

Свойство **`column-gap`** задаёт расстояние между колонками в многоколоночном тексте.

## Синтаксис

```css
/* Keyword value */
column-gap: normal;

/* <length> values */
column-gap: 3px;
column-gap: 2.5em;

/* <percentage> value */
column-gap: 3%;

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: unset;
```

## Значения

Значение по-умолчанию: `normal`

Применяется к: колонкам, флексам, гридам

- `<размер>` - Значение ширины межколоночного интервала в единицах CSS (например, пикселах).
- `normal` - Межколоночный интервал устанавливается браузером.

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#column-row-gap)
- [CSS Grid Layout](https://drafts.csswg.org/css-grid/#gutters)

* [CSS Multi-column Layout Module](https://drafts.csswg.org/css-multicol-1/#column-gap)

### Примечания

Firefox поддерживает свойство `-moz-column-gap`.

Safari, Chrome и Аndroid поддерживают свойство `-webkit-column-gap`.

## Поддержка браузерами

<p class="ciu_embed" data-feature="multicolumn" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=multicolumn">Can I Use multicolumn?</a> Data on support for the multicolumn feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

### Flex

HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
</div>
```

CSS

```css
#flexbox {
  display: flex;
  height: 100px;
  column-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: auto;
}
```

### Grid

HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

### Колонки

HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS `column-gap` property. Don't you think that's fun and exciting? I sure do!
</p>
```

CSS

```css
.content-box {
  column-count: 3;
  column-gap: 40px;
}
```

## См. также

- [row-gap](row-gap.md)
- [gap](gap.md)
