# font-feature-settings

Свойство **`font-feature-settings`** позволяет вам управлять расширенными типографскими функциями в шрифтах OpenType.

**Примечание.** По возможности разработчики должны использовать свойство [`font-variant`](font-variant.md) шрифта или соответствующие длинные свойства `font-variant-ligatures`, `font-variant-caps`, `font-variant-east-asian`, `font-variant-alternates`, `font-variant-numeric` или `font-variant-position`.

Свойство `font-feature-settings` является низкоуровневой функцией, предназначенной для обработки особых случаев, когда нет другого способа включить или получить доступ к функции шрифтов OpenType. В частности, это свойство CSS не должно использоваться для включения строчной капители (small caps).

## Синтаксис

```css
/* Use the default settings */
font-feature-settings: normal;

/* Set values for OpenType feature tags */
font-feature-settings: 'smcp';
font-feature-settings: 'smcp' on;
font-feature-settings: 'swsh' 2;
font-feature-settings: 'smcp', 'swsh' 2;

/* Global values */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: unset;
```

## Значения

`normal`
: текст отображается с настройками по-умолчанию.

`<feature-tag-value>`
: При отображении текста список значений тега функции OpenType передается механизму компоновки текста для включения или отключения функций шрифта. Тег всегда является строкой из 4 символов ASCII. Если он имеет больше или меньше символов или содержит символы вне диапазона `U+20` — `U+7E`, то все свойство недействительно. Значение представляет собой положительное целое число. Два ключевых слова `on` и `off` синонимы для `1` и `0` соответственно. Если значение не задано, по умолчанию используется значение `1`. Для небулевых функций OpenType (например, стилистических альтернатив) значение подразумевает выбранный глиф; для булевых значений это переключатель.

### Список функций

- [OpenType Layout tag registry](https://www.microsoft.com/typography/otspec/featurelist.htm)

Значение по-умолчанию:

```css
font-feature-settings: normal;
```

Применяется к: ко всем элементам, включая [`::first-letter`](::first-letter.md) и [`::first-line`](::first-line.md).

## Спецификации

- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#propdef-font-feature-settings)

## Поддержка браузерами

<p class="ciu_embed" data-feature="font-feature" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=font-feature">Can I Use font-feature?</a> Data on support for the font-feature feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```css
/* use small-cap alternate glyphs */
.smallcaps {
  font-feature-settings: 'smcp' on;
}

/* convert both upper and lowercase to small caps (affects punctuation also) */
.allsmallcaps {
  font-feature-settings: 'c2sc', 'smcp';
}

/* enable historical forms */
.hist {
  font-feature-settings: 'hist';
}

/* disable common ligatures, usually on by default */
.noligs {
  font-feature-settings: 'liga' 0;
}

/* enable tabular (monospaced) figures */
td.tabular {
  font-feature-settings: 'tnum';
}

/* enable automatic fractions */
.fractions {
  font-feature-settings: 'frac';
}

/* use the second available swash character */
.swash {
  font-feature-settings: 'swsh' 2;
}

/* enable stylistic set 7 */
.fancystyle {
  font-family: Gabriola; /* available on Windows 7, and on Mac OS */
  font-feature-settings: 'ss07';
}
```
