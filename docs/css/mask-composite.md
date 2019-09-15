# mask-composite

Свойство **`mask-composite`** задает операцию компоновки, используемую на текущем слое маски, со слоями маски ниже.

## Синтаксис

```css
/* Keyword values */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Global values */
mask-composite: inherit;
mask-composite: initial;
mask-composite: unset;
```

## Значения

Одно или несколько ключевых слов, перечисленных ниже, разделенных запятыми. Для композиции текущий слой маски называется "источник", а все слои ниже него называются "адресатом".

- `add` — Источник размещается над адресатом.
- `subtract` — Отображается только части источника за пределами адресата.
- `intersect` — Отображается источник только на пересечении источника и адресата.
- `exclude` — Отображается комбинация из непересекающихся частей источника и адресата.

Значение по-умолчанию:

```css
mask-composite: add;
```

Применяется к: ко всем элементам

## Спецификации

- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/#the-mask-composite)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-masks" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-masks">Can I Use css-masks?</a> Data on support for the css-masks feature across the major browsers from caniuse.com.
</p>

WebKit и Blink имеют свойство `-webkit-mask-composite`, которое имеет другие ключевые слова.

## Описание и примеры

```css
#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  mask-image: url('https://mdn.mozillademos.org/files/12668/MDN.svg'), url('https://mdn.mozillademos.org/files/12676/star.svg');
  mask-size: 100% 100%;
  mask-composite: add; /* Can be changed in the live sample */
}
```
