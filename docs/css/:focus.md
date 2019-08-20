# :focus

Псевдо-класс **`:focus`** применяется, когда элемент получает фокус, либо при выборе его пользователем при помощи клавиатуры, либо активацией его мышью (например, при вводе формы).

## Синтаксис

```css
/* Selects any <input> when focused */
input:focus {
  color: red;
}
```

## Значения

**Примечание.** Этот псевдокласс применяется только к самому сфокусированному элементу. Используйте [`:focus-within`](:focus-within.md), если вы хотите выбрать элемент, содержащий сфокусированный элемент.

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html#selector-focus)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#focus-pseudo)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#the-user-action-pseudo-classes-hover-act)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/selector.html#dynamic-pseudo-classes)

## Описание и примеры

```html tab="HTML"
<input class="red-input" value="I'll be red when focused." /><br />
<input class="blue-input" value="I'll be blue when focused." />
```

```css tab="CSS"
.red-input:focus {
  background: yellow;
  color: red;
}

.blue-input:focus {
  background: yellow;
  color: blue;
}
```
