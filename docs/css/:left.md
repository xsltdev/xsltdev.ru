---
description: Псевдо-класс :left представляет все левые страницы печатного документа
---

# :left

Псевдо-класс **`:left`** представляет все левые страницы печатного документа.

Вы не сможете изменить все свойства CSS с помощью этого псевдокласса. Вы можете изменять только свойства [`margin`](margin.md), [`padding`](padding.md), [`border`](border.md) и [`background`](background.md) окна страницы. Все остальные свойства будут проигнорированы.

## Синтаксис

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

## Спецификации

- [CSS Paged Media Module Level 3](https://drafts.csswg.org/css-page-3/#left-right-first)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/page.html#page-selectors)

## Поддержка браузерами

- Edge -- да
- Firefox -- нет поддержки
- IE 8+ -- да
