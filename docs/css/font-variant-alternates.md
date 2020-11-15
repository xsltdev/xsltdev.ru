---
description:
---

# font-variant-alternates

Свойство **`font-variant-alternates`** управляет использованием альтернативных глифов. На эти альтернативные глифы можно ссылаться по альтернативным именам, определенным в [`@font-feature-values`](font-feature-values.md).

Правило `@font-feature-values` ​​может определять имена для альтернативных функций глифов (стилистика, набор стилей, вариант символа, перекос, орнамент или аннотация), связывая имя с параметрами OpenType. Это свойство позволяет использовать эти удобочитаемые имена (определенные в `@font-feature-values`) в таблице стилей.

??? info "Шрифт и Цвет"

    <div class="col3" markdown="1">

    - [@font-face](font-face.md)

    </div>

    <div class="col3" markdown="1">

    - [font](font.md)
    - [font-family](font-family.md)
    - [font-feature-settings](font-feature-settings.md)
    - [font-kerning](font-kerning.md)
    - [font-language-override](font-language-override.md)
    - [font-optical-sizing](font-optical-sizing.md)
    - [font-size](font-size.md)
    - [font-size-adjust](font-size-adjust.md)
    - [font-stretch](font-stretch.md)
    - [font-style](font-style.md)
    - [font-synthesis](font-synthesis.md)
    - [font-variant](font-variant.md)
    - **font-variant-alternates**
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
/* Keyword values */
font-variant-alternates: normal;
font-variant-alternates: historical-forms;

/* Functional notation values */
font-variant-alternates: stylistic(user-defined-ident);
font-variant-alternates: styleset(user-defined-ident);
font-variant-alternates: character-variant(
  user-defined-ident
);
font-variant-alternates: swash(user-defined-ident);
font-variant-alternates: ornaments(user-defined-ident);
font-variant-alternates: annotation(user-defined-ident);
font-variant-alternates: swash(ident1) annotation(ident2);

/* Global values */
font-variant-alternates: initial;
font-variant-alternates: inherit;
font-variant-alternates: unset;
```

## Значения

`normal`
: отключает альтернативные глифы

`historical-forms`
: Это ключевое слово включает исторические формы - глифы, которые были распространены в прошлом, но не сегодня. Ему соответствует значение `hist` в OpenType.

`stylistic()`
: Эта функция позволяет изменять стили для отдельных символов. Параметр - это имя для конкретного шрифта, сопоставленное с числом. Это соответствует значению `salt` OpenType, например `salt 2`.

`styleset()`
: Эта функция позволяет использовать стилистические альтернативы для наборов символов. Параметр - это имя для конкретного шрифта, сопоставленное с числом. Он соответствует значению OpenType `ssXY`, например `ss02`.

`character-variant()`
: Эта функция позволяет использовать определенные стилистические варианты для персонажей. Он похож на `styleset()`, но не создает согласованных глифов для набора символов; отдельные персонажи будут иметь независимые и не обязательно согласованные стили. Параметр - это имя для конкретного шрифта, сопоставленное с числом. Он соответствует значению OpenType `cvXY`, например `cv02`.

`swash()`
: Эта функция включает глифы автомата перекоса. Параметр - это имя для конкретного шрифта, сопоставленное с числом. Он соответствует значениям `swsh` и `cswh` OpenType, например `swsh 2` и `cswh 2`.

`ornaments()`
: Эта функция позволяет использовать украшения, такие как флероны и другие символы дингбата. Параметр - это имя для конкретного шрифта, сопоставленное с числом. Он соответствует значению OpenType `ornm`, например `ornm 2`.

`annotation()`
: Эта функция включает аннотации, такие как цифры в кружках или инвертированные символы. Параметр - это имя для конкретного шрифта, сопоставленное с числом. Он соответствует значению OpenType `nalt`, как `nalt 2`.

## Определение

|                      |                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| Начальное значение   | `normal`                                                                                       |
| Применяется ко       | всем элементам, включая [`::first-letter`](first-letter.md) и [`::first-line`](first-line.md). |
| Наследуется          | да                                                                                             |
| Вычисленное значение | как определено                                                                                 |
| Тип анимации         | дискретный                                                                                     |

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__font-variant-alternates" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

```html
<p>Firefox rocks!</p>
<p class="variant">Firefox rocks!</p>
```

=== "CSS"

```css
@font-feature-values "Leitura Display Swashes" {
  @swash {
    fancy: 1;
  }
}

p {
  font-size: 1.5rem;
}

.variant {
  font-family: Leitura Display Swashes;
  font-variant-alternates: swash(fancy);
}
```

## Ссылки

- Свойство [`font-variant-alternates`](https://developer.mozilla.org/ru/docs/Web/CSS/font-variant-alternates) <sup><small>MDN (рус.)</small></sup>
