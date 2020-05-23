---
description: Свойство text-shadow добавляет тень к тексту, а также устанавливает её параметры - цвет тени, смещение относительно надписи и радиус размытия
---

# text-shadow

Свойство **`text-shadow`** добавляет тень к тексту, а также устанавливает её параметры: цвет тени, смещение относительно надписи и радиус размытия.

Свойство `text-shadow` может работать совместно с псевдоэлементами [`::first-letter`](first-letter.md) и [`::first-line`](first-line.md).

## Синтаксис

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;

text-shadow: none | <тень> [, <тень>] *;
```

где `<тень>`: `<сдвиг по x> <сдвиг по y> <радиус размытия> <цвет>`

## Значения

`none`
: Отменяет добавление тени.

`<цвет>`
: Цвет тени в любом доступном CSS формате. По умолчанию цвет тени совпадает с цветом текста. Необязательный параметр.

`<сдвиг по x>`
: Смещение тени по горизонтали относительно текста. Положительное значение этого параметра задает сдвиг тени вправо, отрицательное — влево. Обязательный параметр.

`<сдвиг по y>`
: Смещение тени по вертикали относительно текста. Также допустимо использовать отрицательное значение, которое поднимает тень выше текста. Обязательный параметр.

`<радиус>`
: Задаёт радиус размытия тени. Чем больше это значение, тем сильнее тень сглаживается, становится шире и светлее. Если этот параметр не задан, по умолчанию устанавливается равным 0. Учтите, что алгоритм сглаживания в браузерах обычно разный, поэтому вид тени может несколько различаться в зависимости от заданных параметров сглаживания.

Допускается указывать несколько параметров тени, разделяя их между собой запятой. В CSS3 учитывается следующий порядок: первая тень в списке размещается на самом верху, последняя в списке — в самом низу.

### Примечания

Браузер Internet Explorer понимает свойство `text-shadow` только с версии 10. До этого используется свойство `filter: Shadow(параметры)`. К примеру, следующая конструкция задает цвет тени (#666666), её направление (45° от вертикали) и величину смещения (4 пикселя).

```
filter: Shadow(Color=#666666, Direction=45, Strength=4);
```

Значение по-умолчанию: `none`

Применяется ко всем элементам

## Спецификации

- [CSS Text-decoration Level 3](http://dev.w3.org/csswg/css-text-decor-3/#text-shadow)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-textshadow" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-textshadow">Can I Use css-textshadow?</a> Data on support for the css-textshadow feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>text-shadow</title>
    <style>
      .shadowtext {
        text-shadow: 1px 1px 2px black, 0 0 1em red; /* Параметры тени */
        color: white; /* Белый цвет текста */
        font-size: 2em; /* Размер надписи */
      }
    </style>
  </head>
  <body>
    <p class="shadowtext">
      В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!
    </p>
  </body>
</html>
```
