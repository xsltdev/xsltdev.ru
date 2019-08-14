# border-top-color

Свойство **`border-top-color`** задаёт цвет верхней границы элемента.

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

- `цвет` -- цвет
- `transparent` -- Устанавливает прозрачный цвет.

Значение по-умолчанию: Значение свойства [`color`](color.md)

Применяется к: Ко всем элементам

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
