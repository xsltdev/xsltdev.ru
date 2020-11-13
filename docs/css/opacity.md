---
description: Свойство opacity определяет уровень прозрачности элемента
---

# opacity

Свойство **`opacity`** определяет уровень прозрачности элемента.

При частичной или полной прозрачности через элемент проступает фоновый рисунок или другие элементы, расположенные ниже полупрозрачного объекта.

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
    - **opacity**

    </div>

## Синтаксис

```css
opacity: число;
```

## Значения

В качестве значения выступает число из диапазона `[0.0; 1.0]`. Значение `0` соответствует полной прозрачности элемента, `1`, наоборот — его непрозрачности. Дробные числа вида `0.6` устанавливают полупрозрачность. Допускается писать числа без нуля впереди, вида `opacity: .6`.

Значение по-умолчанию:

```css
opacity: 1;
```

Применяется ко всем элементам

## Спецификации

- [CSS Color Module Level 3](http://dev.w3.org/csswg/css3-color/#propdef-opacity)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-opacity" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-opacity">Can I Use css-opacity?</a> Data on support for the css-opacity feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>opacity</title>
    <style>
      .semi {
        opacity: 0.5; /* Полупрозрачность элемента */
      }
    </style>
  </head>
  <body>
    <p>
      <img src="image/igels.png" alt="Обычный рисунок" />
      <img
        src="image/igels.png"
        alt="Полупрозрачный рисунок"
        class="semi"
      />
    </p>
  </body>
</html>
```
