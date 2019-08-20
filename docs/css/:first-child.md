# :first-child

Псевдо-класс **`:first-child`** находит любой элемент, являющийся первым в своём родителе.

## Синтаксис

```css
/* Selects any <p> that is the first element
	   among its siblings */
p:first-child {
  color: lime;
}
```

## Спецификации

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#first-child-pseudo)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#first-child-pseudo)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/selector.html#first-child)

## Описание и примеры

```html tab="HTML"
<div>
  <p>This text is selected!</p>
  <p>This text isn't selected.</p>
</div>

<div>
  <h2>This text isn't selected: it's not a `p`.</h2>
  <p>This text isn't selected.</p>
</div>
```

```css tab="CSS"
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

Результат

![Результат работы псевдокласса :first-child](first-child.png)
