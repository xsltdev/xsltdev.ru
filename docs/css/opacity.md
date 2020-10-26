---
description: Свойство opacity определяет уровень прозрачности элемента
---

# opacity

Свойство **`opacity`** определяет уровень прозрачности элемента.

При частичной или полной прозрачности через элемент проступает фоновый рисунок или другие элементы, расположенные ниже полупрозрачного объекта.

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
