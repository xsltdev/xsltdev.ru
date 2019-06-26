---
layout: default
title: colgroup
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;colgroup&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<colgroup>`** _(от англ. **group** of **col**umns - группа колонок)_ предназначен для задания ширины и стиля одной или нескольких колонок таблицы.

Этот элемент позволяет уменьшить код таблицы за счёт сокращения повторяющихся атрибутов, и при его наличии браузер начинает показывать содержимое таблицы, не дожидаясь её полной загрузки. Элемент `<colgroup>` можно использовать в комбинации с [`<col>`](/html/col/), который определяет характеристики одной или нескольких колонок.

Обычно закрывающий тег не требуется, но если `<colgroup>` выступает как контейнер для элементов `<col>`, тогда следует добавить тег `</colgroup>` в конце группы.

Разница между свойствами `<colgroup>` и `<col>` не очень велика: `<colgroup>` позволяет объединять колонки в определённые группы, также при добавлении атрибута `rules` со значением `groups` к элементу [`<table>`](/html/table/) браузер будет рисовать линию только между колонками, созданными с помощью `<colgroup>`. В остальных случаях поведение колонок назначенных через элементы `<colgroup>` и `<col>` идентично.

Для `<colgroup>` допустимо использовать следующие стилевые свойства: `border`, `background`, `width`, `visibility`. Остальные свойства не оказывают никакого эффекта на элемент.

## Синтаксис

```html
<table>
	<colgroup>
	<tr>
		<td>...</td>
	</tr>
</table>
```

Закрывающий тег не обязателен.

## Атрибуты

- `span` - Количество колонок, к которым следует применять атрибуты.

### span

Определяет число колонок, к которым будут применяться заданные характеристики. Если этот атрибут отсутствует, то элемент `<colgroup>` работает для одной колонки. Допускается применять атрибут `span` к нескольким колонкам и таким образом формировать группы колонок с одинаковыми характеристиками.

**Синтаксис**

```html
<colgroup span="<число>"></colgroup>
```

**Значения**

Целое положительное значение.

**Значение по умолчанию**

1

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/tables.html#the-colgroup-element)
- [HTML5](http://www.w3.org/TR/html5/tabular-data.html#the-colgroup-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/tables.html#edef-COLGROUP)

## Описание и примеры

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>COLGROUP</title>
	</head>
	<body>
		<table width="100%" cellpadding="2" cellspacing="0" border="1" rules="groups">
			<colgroup width="150">
			<colgroup span="9" align="center" width="50">
				<col span="5">
				<col span="4">
			</colgroup>
			<tr>
				<td> </td><td>1995</td><td>1996</td><td>1997</td>
				<td>1998</td><td>1999</td><td>2000</td><td>2001</td>
				<td>2002</td><td>2003</td>
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
