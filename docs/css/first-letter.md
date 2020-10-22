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
- Комбинация псевдо-элемента [`::before`](before.md) и свойства [`content`](content.md) может вводить некоторый текст в начале элемента. В этом случае `::first-letter` будет соответствовать первой букве этого сгенерированного контента.

Только малый поднабор свойств CSS можно использовать с псевдоэлементом `::first-letter`:

- Свойства шрифта: [`font`](font.md), [`font-style`](font-style.md), [`font-feature-settings`](font-feature-settings.md), [`font-kerning`](font-kerning.md), [`font-language-override`](font-language-override.md), [`font-stretch`](font-stretch.md), [`font-synthesis`](font-synthesis.md), [`font-variant`](font-variant.md), [`font-variant-alternates`](font-variant-alternates.md), [`font-variant-caps`](font-variant-caps.md), [`font-variant-east-asian`](font-variant-east-asian.md), [`font-variant-ligatures`](font-variant-ligatures.md), [`font-variant-numeric`](font-variant-numeric.md), [`font-variant-position`](font-variant-position.md), [`font-weight`](font-weight.md), [`font-size`](font-size.md), [`font-size-adjust`](font-size-adjust.md), [`line-height`](line-height.md) и [`font-family`](font-family.md)
- Свойства фона: [`background`](background.md), [`background-color`](background-color.md), [`background-image`](background-image.md), [`background-clip`](background-clip.md), [`background-origin`](background-origin.md), [`background-position`](background-position.md), [`background-repeat`](background-repeat.md), [`background-size`](background-size.md), [`background-attachment`](background-attachment.md) и [`background-blend-mode`](background-blend-mode.md)
- Свойства отступов: [`margin`](margin.md), [`margin-top`](margin-top.md), [`margin-right`](margin-right.md), [`margin-bottom`](margin-bottom.md), [`margin-left`](margin-left.md)
- Свойства полей: [`padding`](padding.md), [`padding-top`](padding-top.md), [`padding-right`](padding-right.md), [`padding-bottom`](padding-bottom.md), [`padding-left`](padding-left.md)
- Свойства рамок: [`border`](border.md), [`border-style`](border-style.md), [`border-color`](border-color.md), [`border-width`](border-width.md), [`border-radius`](border-radius.md), [`border-image`](border-image.md)
- Цвет [`color`](color.md)
- Свойства [`text-decoration`](text-decoration.md), [`text-shadow`](text-shadow.md), [`text-transform`](text-transform.md), [`letter-spacing`](letter-spacing.md), [`word-spacing`](word-spacing.md), [`line-height`](line-height.md), [`text-decoration-color`](text-decoration-color.md), [`text-decoration-line`](text-decoration-line.md), [`text-decoration-style`](text-decoration-style.md), [`box-shadow`](box-shadow.md), [`float`](float.md), [`vertical-align`](vertical-align.md)

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

## Пример

=== "HTML"

    ```html
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

=== "CSS"

    ```css
    p::first-letter {
      color: red;
      font-size: 130%;
    }
    ```

=== "Результат"

    ![Результат работы псевдоэлемента ::first-letter](first-letter.png)
