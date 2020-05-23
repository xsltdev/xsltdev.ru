---
description: Псевдо-класс link позволяет вам выбирать ссылки внутри элементов
---

# :link

Псевдо-класс **`:link`** позволяет вам выбирать ссылки внутри элементов.

Он выберет любую ссылку, которая ещё не была посещена, даже те, которые уже стилизованы, используя селекторы с другими, относящимися к ссылкам, псевдо-классам типа [`:hover`](hover.md), [`:active`](active.md) или [`:visited`](visited.md). Чтобы стилизовать ссылки должным образом, вам нужно вставлять правила `:link` до других, как определено LVHA-порядком: `:link` — `:visited` — `:hover` — `:active`. Псевдо-класс `:focus` обычно размещается прямо перед или сразу после `:hover`, в зависимости от ожидаемого эффекта.

## Синтаксис

```css
:link {
  background-color: gold;
  color: green;
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html#selector-link)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#link)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#link)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/selector.html#link-pseudo-classes)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#anchor-pseudo-classes)

## Описание и примеры

```html tab="HTML"
<a href="#ordinary-target">This is an ordinary link.</a><br />
<a href="">You've already visited this link.</a><br />
<a>Placeholder link (won't get styled)</a>
```

```css tab="CSS"
a:link {
  background-color: gold;
  color: green;
}
```
