---
description: Свойство font-size-adjust указывает, что размер шрифта должен быть выбран на основе высоты строчных букв, а не высоты заглавных букв
---

# font-size-adjust

Свойство **`font-size-adjust`** указывает, что размер шрифта должен быть выбран на основе высоты строчных букв, а не высоты заглавных букв.

Это полезно, поскольку разборчивость шрифтов, особенно при небольших размерах, определяется больше размером строчных букв, чем размером заглавных букв.

Разборчивость может стать проблемой, когда первое семейство шрифтов в свойстве [`font-family`](font-family.md) недоступно, а его замена имеет значительно отличающееся соотношение сторон (отношение размера строчных букв к размеру шрифта).

## Синтаксис

```css
/* Use the specified font size */
font-size-adjust: none;

/* Use a font size that makes lowercase
letters half the specified font size */
font-size-adjust: 0.5;

/* Global values */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: unset;
```

## Значения

`none`
: размер шрифта, основанный только на свойстве [`font-size`](font-size.md).

`<number>`
: задает отношение размера строчных букв к размеру шрифта.

Значение по-умолчанию:

```css
font-size-adjust: none;
```

Применяется к: ко всем элементам, включая [`::first-letter`](::first-letter.md) и [`::first-line`](::first-line.md).

## Поддержка браузерами

<p class="ciu_embed" data-feature="font-size-adjust" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=font-size-adjust">Can I Use font-size-adjust?</a> Data on support for the font-size-adjust feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html tab="HTML"
<p>CSS Examples: font-size-adjust</p>
<br />
<div class="times">
  This is the Times font (10px) which is hard to read in small sizes
</div>
<p></p>
<div class="verdana">
  This is the Verdana font (10px) which does much better, since it is a sans -
  serif font.
</div>
<br />
<p>Now we 'll do an adjustment:</p>
<p></p>
<div class="adjtimes">
  and the 10px Times, adjusted to the same aspect ratio as the Verdana. Cool,
  eh?
</div>
```

```css tab="CSS"
.times {
  font-family: Times, serif;
  font-size: 10px;
}
.verdana {
  font-family: Verdana, sans-serif;
  font-size: 10px;
}
.adjtimes {
  font-family: Times, sans-serif;
  font-size-adjust: 0.58;
  font-size: 10px;
}
```

Результат

![Результат работы свойства font-size-adjust](font-size-adjust.png)
