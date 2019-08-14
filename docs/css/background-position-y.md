# background-position-y

Свойство **`background-position-y`** задаёт положение фонового изображения внутри элемента по вертикали.

Если для элемента установлено несколько фоновых изображений, то можно изменять положение каждого изображения, перечисляя значения через запятую.

## Синтаксис

```css
/* Keyword values */
background-position-y: top;
background-position-y: center;
background-position-y: bottom;

/* <percentage> values */
background-position-y: 25%;

/* <length> values */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* Side-relative values */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* Multiple values */
background-position-y: 0px, center;

/* Global values */
background-position-y: inherit;
background-position-y: initial;
background-position-y: unset;
```

## Значения

- `top` - Выравнивает фон по верхнему краю. Эквивалент записи 0 или 0%.
- `center` - Выравнивает фон по центру вертикали. Эквивалент записи 50%.
- `bottom` - Выравнивает фон по нижнему краю. Эквивалент записи 100%.
- `<проценты>` - Задаёт положение фона в процентах от высоты элемента. Значение 0% или 0 выравнивает верхний край фонового изображения по верхнему краю элемента. Значение 100% выравнивает нижний край рисунка по нижнему краю элемента.
- `<размер>` - Задаёт положение фона в любых доступных для CSS единицах — пиксели (px), сантиметры (cm), em и др. относительно верхнего края элемента.

Значение по-умолчанию:

```css
background-position-y: top;
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
    <title>background-position-y</title>
    <style>
      .heart {
        background: url('/example/image/heart-sprite.png') no-repeat;
        width: 64px;
        height: 64px;
      }
      .heart:hover {
        background-position-y: -64px;
      }
    </style>
  </head>
  <body>
    <div class="heart"></div>
  </body>
</html>
```

В данном примере при наведении курсора мыши на рисунок, фоновая картинка смещается вверх по вертикали, показывая цветной рисунок вместо чёрно-белого.
