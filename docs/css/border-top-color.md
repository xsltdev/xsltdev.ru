---
description: Свойство border-top-color задаёт цвет верхней границы элемента
---

# border-top-color

Свойство **`border-top-color`** задаёт цвет верхней границы элемента.

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
    - **border-top-color**
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

## Синтаксис

```css
/* <color> values */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255, 0, 0);
border-top-color: hsla(100%, 50%, 25%, 0.75);
border-top-color: currentColor;
border-top-color: transparent;

/* Global values */
border-top-color: inherit;
border-top-color: initial;
border-top-color: unset;
```

## Значения

`цвет`
: цвет

`transparent`
: Устанавливает прозрачный цвет.

Значение по-умолчанию: Значение свойства [`color`](color.md)

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-left-color)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-color-properties)

## Описание и примеры

```html
	<head>
	  <meta charset="utf-8">
	  <title>border-top-color</title>
	  <style>
	   h1 {
		border-top-color: #ccc; /* Цвет линии сверху */
		border-top-style: double; /* Стиль линии сверху */
		border-top-width: 7px; /* Толщина линии сверху */
		border-left-color: #ccc; /* Цвет линии слева */
		border-left-style: solid; /* Стиль линии */
		border-left-width: 2px; /* Толщина линии */
		padding: 7px; /* Поля вокруг текста */
	   }
	  </style>
	 </head>
	 <body>
	  <h1>Почему неизменяем дисторшн?</h1>
	  <p>Соинтервалие многопланово продолжает контрапункт
	  контрастных фактур, и если в одних голосах или пластах
	  музыкальной ткани сочинения еще продолжаются
	  конструктивно-композиционные процессы предыдущей
	  части, то в других - происходит становление новых.</p>
	 </body>
	</html>
```
