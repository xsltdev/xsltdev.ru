---
description: Свойство box-shadow добавляет тень к элементу
---

# box-shadow

Свойство **`box-shadow`** добавляет тень к элементу.

Допускается использовать несколько теней, указывая их параметры через запятую, при наложении теней первая тень в списке будет выше, последняя ниже. Если для элемента задается радиус скругления через свойство [`border-radius`](border-radius.md), то тень также получится с закруглёнными уголками. Добавление тени увеличивает ширину элемента, поэтому возможно появление горизонтальной полосы прокрутки в браузере.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - [border-bottom-style](border-bottom-style.md)
    - [border-bottom-width](border-bottom-width.md)
    - [border-collapse](border-collapse.md)
    - [border-color](border-color.md)
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - [border-image-repeat](border-image-repeat.md)
    - [border-image-slice](border-image-slice.md)
    - [border-image-source](border-image-source.md)
    - [border-image-width](border-image-width.md)
    - [border-left](border-left.md)
    - [border-left-color](border-left-color.md)
    - [border-left-style](border-left-style.md)
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - [border-right-style](border-right-style.md)
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - **box-shadow**

    </div>

## Синтаксис

```css
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* Global keywords */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```

## Значения

`none`
: Отменяет добавление тени.

`inset`
: Тень выводится внутри элемента.

`<сдвиг по x>`
: Смещение тени по горизонтали относительно элемента. Положительное значение этого параметра задаёт сдвиг тени вправо, отрицательное — влево.

`<сдвиг по y>`
: Смещение тени по вертикали относительно элемента. Положительное значение задаёт сдвиг тени вниз, отрицательное — вверх.

`<размытие>`
: Задаёт радиус размытия тени. Чем больше это значение, тем сильнее тень сглаживается, становится шире и светлее. Если этот параметр не задан, по умолчанию устанавливается равным 0, тень при этом будет чёткой, а не размытой.

`<растяжение>`
: Положительное значение растягивает тень, отрицательное, наоборот, её сжимает. Если этот параметр не задан, по умолчанию устанавливается 0, при этом тень будет того же размера, что и элемент.

`<цвет>`
: Цвет тени в любом доступном CSS формате, по умолчанию тень чёрная.

Допускается указывать несколько теней, разделяя их параметры между собой запятой. Учитывается следующий порядок: первая тень в списке размещается на самом верху, последняя в списке — в самом низу.

### Примечания

Safari до версии 5.1, Chrome до версии 10.0, Android до версии 4.0 поддерживают свойство `-webkit-box-shadow`.

Firefox до версии 4.0 поддерживает свойство `-moz-box-shadow`.

Internet Explorer до версии 9.0 не поддерживает свойство `box-shadow`, взамен можно использовать свойство `filter`:

```
filter: progid:DXImageTransform.Microsoft.dropshadow(offX=5, offY=5, color=#000000);
```

Здесь: `offX` — смещение тени по горизонтали; `offY` — смещение тени по вертикали; `color` — цвет тени.

Применение фильтра `dropshadow` дает чёткую резкую тень, поэтому для эффекта размытия можно использовать фильтр `shadow`.

```
filter: progid:DXImageTransform.Microsoft.shadow(direction=120, color=#000000, strength=10);
```

Здесь: `direction` — угол направления тени от 0 до 360°; `color` — цвет тени; `strength` — смещение тени в пикселях.

Значение по-умолчанию:

```css
box-shadow: none;
```

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#box-shadow)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-boxshadow" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-boxshadow">Can I Use css-boxshadow?</a> Data on support for the css-boxshadow feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>box-shadow</title>
    <style>
      .shadow {
        background: #fc0; /* Цвет фона */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Параметры тени */
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="shadow">
      В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!
    </div>
  </body>
</html>
```
