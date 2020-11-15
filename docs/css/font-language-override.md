---
description: Свойство font-language-override управляет использованием глифов, зависящих от языка
---

# font-language-override

Свойство **`font-language-override`** управляет использованием глифов, зависящих от языка.

По умолчанию браузеры используют глобальный атрибут HTML `lang` для определения языка текста, содержащегося в элементе; с этой информацией они используют специальные глифы, разработанные для этого языка. Например, многие шрифты имеют специальный символ для орграфа `fi`, в результате чего точка на `i` сливается с предыдущим символом. Эту лигатуру не следует использовать при отображении тюркского языка, поскольку у них есть два `i` (`i` и `ı`), один с точкой и один без точки: использование лигатуры преобразует `i` с точкой в ​​`i` без точки.

Иногда автор хочет переопределить этот язык: например, если шрифт не знает об азербайджанском языке, он, как и турецкий, имеет `i` без точки. В этом случае переопределение языка-шрифта может использоваться для принудительного использования турецких глифов, которые лучше подходят для азери, чем значение по умолчанию.

??? info "Шрифт и Цвет"

    <div class="col3" markdown="1">

    - [@font-face](font-face.md)

    </div>

    <div class="col3" markdown="1">

    - [font](font.md)
    - [font-family](font-family.md)
    - [font-feature-settings](font-feature-settings.md)
    - [font-kerning](font-kerning.md)
    - **font-language-override**
    - [font-optical-sizing](font-optical-sizing.md)
    - [font-size](font-size.md)
    - [font-size-adjust](font-size-adjust.md)
    - [font-stretch](font-stretch.md)
    - [font-style](font-style.md)
    - [font-synthesis](font-synthesis.md)
    - [font-variant](font-variant.md)
    - [font-variant-alternates](font-variant-alternates.md)
    - [font-variant-caps](font-variant-caps.md)
    - [font-variant-east-asian](font-variant-east-asian.md)
    - [font-variant-ligatures](font-variant-ligatures.md)
    - [font-variant-numeric](font-variant-numeric.md)
    - [font-variant-position](font-variant-position.md)
    - [font-variation-settings](font-variation-settings.md)
    - [font-weight](font-weight.md)
    - [line-height](line-height.md)

    </div>

    <div class="col3" markdown="1">

    - [color](color.md)
    - [color-adjust](color-adjust.md)
    - [opacity](opacity.md)

    </div>

## Синтаксис

```css
font-language-override: normal;
font-language-override: 'TRK';

/* Global values */
font-language-override: initial;
font-language-override: inherit;
font-language-override: unset;
```

## Значения

`normal`
: Это ключевое слово заставляет браузер использовать в шрифте глифы, определенные для данного языка.

`<string>`
: Это ключевое слово заставляет браузер использовать язык, определенный строкой. Значения представляют собой [системные строки языка OpenType](https://docs.microsoft.com/ru-ru/typography/opentype/spec/languagetags).

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__font-language-override" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

    ```html
    <p class="para1">Default language setting.</p>
    <p class="para2">
      This is a string with the
      <code>font-language-override</code> set to Danish
    </p>
    ```

=== "CSS"

    ```css
    p.para1 {
      font-language-override: none;
    }
    p.para2 {
      font-language-override: 'DAN';
    }
    ```

## Ссылки

- Свойство [`font-language-override`](https://developer.mozilla.org.cach3.com/ru/docs/Web/CSS/font-language-override) <sup><small>MDN (рус.)</small></sup>
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#propdef-font-language-override)
