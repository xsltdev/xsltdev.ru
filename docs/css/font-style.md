---
description: Свойтво font-style определяет начертание шрифта — обычное, курсивное или наклонное
---

# font-style

Свойтво **`font-style`** определяет начертание шрифта — обычное, курсивное или наклонное.

Когда для текста установлено курсивное или наклонное начертание, браузер обращается к системе для поиска подходящего шрифта. Если заданный шрифт не найден, браузер использует специальный алгоритм для имитации нужного вида текста. Результат и качество при этом могут получиться неудовлетворительными, особенно при печати документа.

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
    - **font-style**
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
font-style: normal;
font-style: italic;
font-style: oblique;

/* Global values */
font-style: inherit;
font-style: initial;
font-style: unset;
```

## Значения

`normal`
: Обычное начертание текста.

`italic`
: Курсивное начертание.

`oblique`
: Наклонное начертание. Курсив и наклонный шрифт при всей их похожести не одно и то же. Курсив это специальный шрифт имитирующий рукописный, наклонный же образуется путем наклона обычных знаков вправо.

### Примечание

Браузеры текст со значением `oblique` всегда отображают как курсив (`italic`).

Значение по-умолчанию:

```css
font-style: normal;
```

Применяется ко всем элементам

## Спецификации

- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css3-fonts/#font-style-prop)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/fonts.html#propdef-font-style)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#font-style)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>font-style</title>
    <style>
      h1 {
        font-family: Verdana, Arial, Helvetica, sans-serif; /* Рубленый шрифт заголовка */
      }
      p {
        font-family: 'Times New Roman', Times, serif; /* Шрифт с засечками */
        font-style: italic; /* Курсивное начертание */
      }
    </style>
  </head>
  <body>
    <h1>Культурный памятник Средневековья</h1>
    <p>
      Амазонская низменность неумеренно берёт небольшой
      провоз кошек и собак, а Хайош-Байа славится красными
      винами.
    </p>
  </body>
</html>
```
