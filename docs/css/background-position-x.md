# background-position-x

Свойство **`background-position-x`** задаёт положение фонового изображения внутри элемента по горизонтали.

Если для элемента установлено несколько фоновых изображений, то можно изменять положение каждого изображения, перечисляя значения через запятую.

## Синтаксис

```css
/* Keyword values */
background-position-x: left;
background-position-x: center;
background-position-x: right;

/* <percentage> values */
background-position-x: 25%;

/* <length> values */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* Side-relative values */
background-position-x: right 3px;
background-position-x: left 25%;

/* Multiple values */
background-position-x: 0px, center;

/* Global values */
background-position-x: inherit;
background-position-x: initial;
background-position-x: unset;
```

## Значения

- `left` - Выравнивает фон по левому краю. Эквивалент записи 0 или 0%.
- `center` - Выравнивает фон по центру горизонтали. Эквивалент записи 50%.
- `right` - Выравнивает фон по правому краю. Эквивалент записи 100%.
- `<проценты>` - Задаёт положение фона в процентах от ширины элемента. Значение 0% или 0 выравнивает левый край фонового изображения по левому краю элемента. Значение 100% выравнивает правый край рисунка по правому краю элемента.
- `<размер>` - Задаёт положение фона в любых доступных для CSS единицах — пиксели (px), сантиметры (cm), em и др. относительно левого края элемента.

Значение по-умолчанию:

```css
background-position-x: left;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 4](https://drafts.csswg.org/css-backgrounds-4/#background-position-longhands)

## Поддержка браузерами

<p class="ciu_embed" data-feature="background-position-x-y" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=background-position-x-y">Can I Use background-position-x-y?</a> Data on support for the background-position-x-y feature across the major browsers from caniuse.com.
</p>

Смещение краёв фона:

<p class="ciu_embed" data-feature="css-background-offsets" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-background-offsets">Can I Use css-background-offsets?</a> Data on support for the css-background-offsets feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-position-x</title>
    <style>
      .clock {
        background: url('/example/image/clock-sprite.png') no-repeat;
        width: 128px;
        height: 128px;
      }
      .clock:hover {
        background-position-x: 100%;
      }
    </style>
  </head>
  <body>
    <div class="clock"></div>
  </body>
</html>
```

В данном примере при наведении курсора мыши на рисунок, фоновая картинка смещается по горизонтали, показывая цветной рисунок вместо чёрно-белого.
