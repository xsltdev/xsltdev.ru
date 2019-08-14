# background-position

Свойство **`background-position`** задаёт начальное положение фонового изображения, установленного с помощью свойства [`background-image`](background-image.md).

Допустимо указывать несколько значений для каждого фона, перечисляя значения через запятую.

## Синтаксис

```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: unset;
```

## Значения

У свойства `background-position` два значения, положение по горизонтали (может быть — `left`, `center`, `right`) и вертикали (может быть — `top`, `center`, `bottom`). Кроме использования ключевых слов положение также можно задавать в процентах, пикселях или других единицах. Если применяются ключевые слова, то порядок их следования не имеет значения, при процентной записи вначале задаётся положение рисунка по горизонтали, а затем, через пробел, положение по вертикали. Отношение между используемыми ключевыми словами и процентной записью следующее.

- `top left` = `left top` = `0% 0%` (в левом верхнем углу)
- `top` = `top center` = `center top` = `50% 0%` (по центру вверху)
- `right top` = `top right` = `100% 0%` (в правом верхнем углу)
- `left` = `left center` = `center left` = `0% 50%` (по левому краю и по центру)
- `center` = `center center` = `50% 50%` (по центру)
- `right` = `right center` = `center right` = `100% 50%` (по правому краю и по центру)
- `bottom left` = `left bottom` = `0% 100%` (в левом нижнем углу)
- `bottom` = `bottom center` = `center bottom` = `50% 100%` (по центру внизу)
- `bottom right` = `right bottom` = `100% 100%` (в правом нижнем углу)

В скобках указано, где располагается фоновый рисунок относительно контейнера.

Значение по-умолчанию:

```css
background-position: 0% 0%;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#background-position)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/colors.html#propdef-background-position)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#background-position)

## Поддержка браузерами

Смещение краёв фона:

<p class="ciu_embed" data-feature="css-background-offsets" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-background-offsets">Can I Use css-background-offsets?</a> Data on support for the css-background-offsets feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

### Пример 1

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>background-position</title>
    <style type="text/css">
      html {
        height: 100%; /* Высота страницы */
      }
      body {
        background-image: url('/example/image/mybg.png'); /* Путь к фоновому рисунку */
        background-position: right bottom; /* Положение фона */
        background-repeat: no-repeat; /* Отменяем повторение фона */
      }
    </style>
  </head>
  <body>
    <p>...</p>
  </body>
</html>
```

### Пример 2

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-position</title>
    <style>
      body {
        background-image: url('/example/image/pattern-left.png'), url('/example/image/pattern-right.png');
        background-repeat: repeat-y, repeat-y;
        background-position: left, right;
      }
    </style>
  </head>
  <body>
    <div style="height:2000px"></div>
  </body>
</html>
```
