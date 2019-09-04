---
description: Свойство background-repeat определяет, как будет повторяться фоновое изображение, установленное с помощью свойства background-image
---

# background-repeat

Свойство **`background-repeat`** определяет, как будет повторяться фоновое изображение, установленное с помощью свойства [`background-image`](background-image.md).

Можно установить повторение рисунка только по горизонтали, по вертикали или в обе стороны. Допустимо указывать несколько значений для каждого фона, перечисляя значения через запятую.

## Синтаксис

```css
/* One-value syntax */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Global values */
background-repeat: inherit;
background-repeat: initial;
background-repeat: unset;
```

Допустимо указывать два значения, первое ключевое слово задаёт повторение по горизонтали, второе по вертикали.

## Значения

`no-repeat`
: Устанавливает одно фоновое изображение в элементе без его повторений, положение которого определяется свойством [`background-position`](background-position.md) (по умолчанию в левом верхнем углу). Аналогично `no-repeat no-repeat`.

`repeat`
: Фоновое изображение повторяется по горизонтали и вертикали. Аналогично `repeat repeat`.

`repeat-x`
: Фоновый рисунок повторяется только по горизонтали. Аналогично `repeat no-repeat`.

`repeat-y`
: Фоновый рисунок повторяется только по вертикали. Аналогично `no-repeat repeat`.

`space`
: Изображение повторяется столько раз, чтобы полностью заполнить область; если это не удаётся, между картинками добавляется пустое пространство.

`round`
: Изображение повторяется так, чтобы в области поместилось целое число рисунков; если это не удаётся сделать, то фоновые рисунки масштабируются.

Значение по-умолчанию:

```css
background-repeat: repeat;
```

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#the-background-repeat)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/colors.html#propdef-background-repeat)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#background-repeat)

## Поддержка браузерами

<p class="ciu_embed" data-feature="background-repeat-round-space" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=background-repeat-round-space">Can I Use background-repeat-round-space?</a> Data on support for the background-repeat-round-space feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

### Пример 1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-repeat</title>
    <style>
      body {
        background-image: url('/example/image/bg_grey.png'); /* Путь к фоновому рисунку */
        background-position: left bottom; /* Положение фона */
        background-repeat: repeat-x; /* Повторяем фон по горизонтали */
      }
    </style>
  </head>
  <body>
    <p>
      Даже опытному верстальщику приходится иногда смотреть свой код на наличие
      опечаток и ошибок. Так что не брезгуй проверять код валидатором, это
      поможет избежать множества ляпов в будущем.
    </p>
  </body>
</html>
```

### Пример 2

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-repeat</title>
    <style>
      body {
        background-image: url('/example/image/pattern-left.png'),
          url('/example/image/pattern-right.png');
        background-position: left, right;
        background-repeat: repeat-y, repeat-y;
      }
    </style>
  </head>
  <body>
    <div style="height:2000px"></div>
  </body>
</html>
```
