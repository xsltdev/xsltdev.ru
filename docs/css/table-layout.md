# table-layout

Свойство **`table-layout`** определяет, как браузер должен вычислять ширину ячеек таблицы, основываясь на её содержимом.

## Синтаксис

```css
/* Keyword values */
table-layout: auto;
table-layout: fixed;

/* Global values */
table-layout: inherit;
table-layout: initial;
table-layout: unset;
```

## Значения

`auto`
: Браузер загружает всю таблицу, анализирует её для определения размеров ячеек и только после этого отображает.

`fixed`
: Ширина колонок в этом случае определяется либо с помощью тега [`<col>`](../html/col.md), либо вычисляется на основе первой строки. Если данные о форматировании первой строки таблицы по каким-либо причинам получить невозможно, в этом случае таблица делится на колонки равной ширины. При использовании этого значения, содержимое, которое не помещается в ячейку указанной ширины, будет «обрезано» либо наложено поверх ячейки. Это зависит от используемого браузера, но в любом случае ширина ячейки меняться не будет. Для корректной работы этого значения обязательно должна быть задана ширина таблицы.

Значение по-умолчанию:

```css
table-layout: auto;
```

Применяется к: К тегу [`<table>`](../html/table.md) или к элементу, у которого значение [`display`](display.md) установлено как `table` или `inline-table`.

## Спецификации

- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/tables.html#width-layout)

## Описание и примеры

```html
	<!DOCTYPE html>
	<html>
	 <head>
	  <meta charset="utf-8">
	  <title>table-layout</title>
	  <style>
	   table {
		table-layout: fixed; /* Фиксированная ширина ячеек */
		width: 100%; /* Ширина таблицы */
	   }
	   .col1 { width: 160px; }
	   .coln { width: 60px; }
	  </style>
	 </head>
	 <body>
	  <table border="1">
	   <col class="col1">
	   <col span="9" class="coln">
	   <tr>
		<td> </td>
		<td>2012</td><td>2013</td><td>2014</td><td>2015</td>
		<td>2016</td><td>2017</td><td>2018</td><td>2019</td>
		<td>2020</td>
	   </tr>
	   <tr>
		<td>Нефть</td><td>5</td><td>7</td><td>2</td><td>8</td>
		<td>3</td><td>34</td><td>62</td><td>74</td><td>57</td>
	   </tr>
	   <tr>
		<td>Золото</td><td>3</td> <td>6</td><td>4</td><td>6</td>
		<td>4</td><td>69</td><td>72</td><td>56</td><td>47</td>
	   </tr>
	   <tr>
		<td>Дерево</td><td>5</td><td>8</td><td>3</td><td>4</td>
		<td>7</td><td>73</td><td>79</td><td>34</td><td>86</td>
	   </tr>
	  </table>
	 </body>
	</html>
```
