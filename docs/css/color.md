---
description: Свойство color определяет цвет текста элемента
---

# color

Свойство **`color`** определяет цвет текста элемента.

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

    - **color**
    - [color-adjust](color-adjust.md)
    - [opacity](opacity.md)

    </div>

## Синтаксис

```css
/* Keyword values */
color: currentcolor;

/* <named-color> values */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* <hex-color> values */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()> values */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);

/* <hsl()> values */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);

/* Global values */
color: inherit;
color: initial;
color: unset;
```

## Значения

`<цвет>`
: цвет

`transparent`
: Устанавливает прозрачный цвет.

Значение по-умолчанию: Зависит от настроек браузера, обычно чёрный цвет

Применяется ко всем элементам

## Спецификации

- [CSS Transitions](http://dev.w3.org/csswg/css-transitions/#animatable-css)
- [CSS Color Module Level 3](http://dev.w3.org/csswg/css3-color/#color)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/colors.html#colors)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#color)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>color</title>
    <style>
      p::first-letter {
        color: #f15a22; /* Цвет символа */
        font-size: 2em; /* Размер шрифта */
      }
      p {
        color: rgb(0, 113, 181); /* Цвет текста */
      }
    </style>
  </head>
  <body>
    <p>
      Явление культурологического порядка mezzo forte
      вызывает неизменный микрохроматический интервал. Эти
      слова совершенно справедливы, однако октавер
      неизменяем. Легато использует нечётный динамический
      эллипсис. Кластерное вибрато выстраивает неизменный
      пласт.
    </p>
    <p>
      Звукоряд, как бы это ни казалось парадоксальным,
      неравномерен. Развивая эту тему, пентатоника имеет
      midi-контроллер. Алеаторика просветляет зеркальный
      флажолет. Векторно-зеркальная синхронность свободна.
      Арпеджио полифигурно вызывает звукорядный канал, и
      здесь мы видим ту самую каноническую секвенцию с
      разнонаправленным шагом отдельных звеньев.
    </p>
  </body>
</html>
```
