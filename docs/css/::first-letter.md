---
description: Псевдо-элемент ::first-letter применяет стили к первой букве первой строки элемента уровня блока, но только тогда, когда не предшествует другой контент
---

# ::first-letter

Псевдо-элемент **`::first-letter`** применяет стили к первой букве первой строки элемента уровня блока, но только тогда, когда не предшествует другой контент (например, изображения или встроенные таблицы).

## Синтаксис

```css
/* Selects the first letter of a <p> */
p::first-letter {
  font-size: 130%;
}
```

## Значения

Первая буква элемента не всегда тривиальна для идентификации:

- Пунктуация, которая предшествует или сразу следует за первой буквой, включается в псевдоэлемент. Пунктуация включает любой символ Юникода, определенный в открытии (Ps), закрытии (Pe), начальной кавычки (Pi), финальной кавычки (Pf) и других классах пунктуации (Po).
- На некоторых языках есть орграфы, которые всегда капитализируются вместе, как IJ на голландском языке. В этих случаях обе буквы орграфа должны быть сопоставлены псевдоэлементом `::first-letter` (это плохо поддерживается браузерами).
- Комбинация псевдо-элемента [`::before`](::before.md) и свойства [`content`](content.md) может вводить некоторый текст в начале элемента. В этом случае `::first-letter` будет соответствовать первой букве этого сгенерированного контента.

Только малый поднабор свойств CSS можно использовать с псевдоэлементом `::first-letter`:

- Свойства шрифта: [`font`](/css/font/), [`font-style`](/css/font-style/), [`font-feature-settings`](/css/font-feature-settings/), [`font-kerning`](/css/font-kerning/), [`font-language-override`](/css/font-language-override/), [`font-stretch`](/css/font-stretch/), [`font-synthesis`](/css/font-synthesis/), [`font-variant`](/css/font-variant/), [`font-variant-alternates`](/css/font-variant-alternates/), [`font-variant-caps`](/css/font-variant-caps/), [`font-variant-east-asian`](/css/font-variant-east-asian/), [`font-variant-ligatures`](/css/font-variant-ligatures/), [`font-variant-numeric`](/css/font-variant-numeric/), [`font-variant-position`](/css/font-variant-position/), [`font-weight`](/css/font-weight/), [`font-size`](/css/font-size/), [`font-size-adjust`](/css/font-size-adjust/), [`line-height`](/css/line-height/) и [`font-family`](/css/font-family/)
- Свойства фона: [`background`](/css/background/), [`background-color`](/css/background-color/), [`background-image`](/css/background-image/), [`background-clip`](/css/background-clip/), [`background-origin`](/css/background-origin/), [`background-position`](/css/background-position/), [`background-repeat`](/css/background-repeat/), [`background-size`](/css/background-size/), [`background-attachment`](/css/background-attachment/) и [`background-blend-mode`](/css/background-blend-mode/)
- Свойства отступов: [`margin`](/css/margin/), [`margin-top`](/css/margin-top/), [`margin-right`](/css/margin-right/), [`margin-bottom`](/css/margin-bottom/), [`margin-left`](/css/margin-left/)
- Свойства полей: [`padding`](/css/padding/), [`padding-top`](/css/padding-top/), [`padding-right`](/css/padding-right/), [`padding-bottom`](/css/padding-bottom/), [`padding-left`](/css/padding-left/)
- Свойства рамок: [`border`](/css/border/), [`border-style`](/css/border-style/), [`border-color`](/css/border-color/), [`border-width`](/css/border-width/), [`border-radius`](/css/border-radius/), [`border-image`](/css/border-image/)
- Цвет [`color`](/css/color/)
- Свойства [`text-decoration`](/css/text-decoration/), [`text-shadow`](/css/text-shadow/), [`text-transform`](/css/text-transform/), [`letter-spacing`](/css/letter-spacing/), [`word-spacing`](/css/word-spacing/), [`line-height`](/css/line-height/), [`text-decoration-color`](/css/text-decoration-color/), [`text-decoration-line`](/css/text-decoration-line/), [`text-decoration-style`](/css/text-decoration-style/), [`box-shadow`](/css/box-shadow/), [`float`](/css/float/), [`vertical-align`](/css/vertical-align/)

## Спецификации

- [CSS Pseudo-Elements Level 4](https://drafts.csswg.org/css-pseudo-4/#first-letter-pseudo)
- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/#text-shadow)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#first-letter)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/selector.html#first-letter)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#the-first-letter-pseudo-element)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-first-letter" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-first-letter">Can I Use css-first-letter?</a> Data on support for the css-first-letter feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html tab="HTML"
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>
  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
  dolor in hendrerit in vulputate velit esse molestie consequat.
</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>“特殊的汉字标点符号开头。</p>
```

```css tab="CSS"
p::first-letter {
  color: red;
  font-size: 130%;
}
```

Результат

![Результат работы псевдоэлемента ::first-letter](first-letter.png)
