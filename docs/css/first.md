---
description: Псевдокласс :first используемый совместно с правилом @page, определяет первую страницу печатного документа
---

# :first

Псевдокласс **`:first`** используемый совместно с правилом [`@page`](page.md), определяет первую страницу печатного документа.

**Примечание.** Вы не можете изменить все свойства CSS с помощью этого псевдокласса. Вы можете изменять [`margin`](margin.md), [`orphans`](orphans.md), [`widows`](widows.md) и разрывы страниц документа. Кроме того, при определении `margin` вы можете использовать единицы абсолютной длины. Все остальные свойства будут игнорироваться.

## Синтаксис

```css
/* Selects the first page when printing */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

## Спецификации

- [CSS Paged Media Module Level 3](https://drafts.csswg.org/css-page-3/#left-right-first)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/page.html#page-selectors)

## Пример

=== "HTML"

    ```html
    <p>First Page.</p>
    <p>Second Page.</p>
    <button>Print!</button>
    ```

=== "CSS"

    ```css
    @page :first {
      margin-left: 50%;
      margin-top: 50%;
    }

    p {
      page-break-after: always;
    }
    ```

=== "JS"

    ```js
    document.querySelector('button').onclick = function () {
      window.print()
    }
    ```
