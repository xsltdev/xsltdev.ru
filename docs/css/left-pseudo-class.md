---
description: Псевдо-класс left представляет все левые страницы печатного документа
---

# :left

Псевдо-класс **`:left`** представляет все левые страницы печатного документа.

Вы не сможете изменить все свойства CSS с помощью этого псевдокласса. Вы можете изменять только свойства [`margin`](margin.md), [`padding`](padding.md), [`border`](border.md) и [`background`](background.md) окна страницы. Все остальные свойства будут проигнорированы.

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - [:any-link](any-link.md)
    - [:blank](blank.md)
    - [:checked](checked.md)
    - [:current()](current.md)
    - [:default](default.md)
    - [:defined](defined.md)
    - [:dir()](dir.md)
    - [:disabled](disabled.md)
    - [:empty](empty.md)
    - [:enabled](enabled.md)
    - [:first](first.md)
    - [:first-child](first-child.md)
    - [:first-of-type](first-of-type.md)
    - [:focus](focus.md)
    - [:focus-visible](focus-visible.md)
    - [:focus-within](focus-within.md)
    - [:fullscreen](fullscreen.md)
    - [:future](future.md)
    - [:has()](has.md)
    - :host
    - :host()
    - :host-context()
    - [:hover](hover.md)
    - [:indeterminate](indeterminate.md)
    - [:in-range](in-range.md)
    - [:invalid](invalid.md)
    - [:is()](is.md)
    - [:lang()](lang.md)
    - [:last-child](last-child.md)
    - [:last-of-type](last-of-type.md)
    - **:left**
    - [:link](link.md)
    - :local-link
    - [:not()](not.md)
    - [:nth-child()](nth-child.md)
    - :nth-col()
    - [:nth-last-child()](nth-last-child.md)
    - :nth-last-col()
    - [:nth-last-of-type()](nth-last-of-type.md)
    - [:nth-of-type()](nth-of-type.md)
    - [:only-child](only-child.md)
    - [:only-of-type](only-of-type.md)
    - [:optional](optional.md)
    - [:out-of-range](out-of-range.md)
    - [:past](past.md)
    - [:placeholder-shown](placeholder-shown.md)
    - [:read-only](read-only.md)
    - [:read-write](read-write.md)
    - [:required](required.md)
    - :right
    - [:root](root.md)
    - [:scope](scope.md)
    - [:target](target.md)
    - :target-within
    - :user-invalid
    - [:valid](valid.md)
    - [:visited](visited.md)
    - [:where()](where.md)

    </div>

??? info "Страницы"

    <div class="col3" markdown="1">

    - [page-break-after](page-break-after.md)
    - [page-break-before](page-break-before.md)
    - [page-break-inside](page-break-inside.md)

    </div>

    <div class="col3" markdown="1">

    - [@page](page.md)
    - [:blank](blank.md)
    - [:first](first.md)
    - **:left**
    - [:right](right-pseudo-class.md)

    </div>

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

- Edge — да
- Firefox — нет поддержки
- IE 8+ — да
