---
description: Псевдокласс :any-link представляет собой элемент, который действует как исходный якорь гиперссылки, независимо от того, была ли она посещена
---

# :any-link

Псевдокласс **`:any-link`** представляет собой элемент, который действует как исходный якорь гиперссылки, независимо от того, была ли она посещена.

Другими словами, он соответствует всем элементам [`<a>`](/html/a/), [`<area>`](/html/area/), или [`<link>`](/html/link/), которые имеют атрибути `href`. Таким образом, он соответствует всем элементам, которые используют [`:link`](link.md) или [`:visited`](visited.md).

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - **:any-link**
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
    - [:left](left-pseudo-class.md)
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

## Синтаксис

```css
/* Выбирает любой элемент, который будет соответствовать:link или :visited */
:any-link {
  color: green;
}
```

## Спецификация

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-any-link-pseudo)

## Поддержка браузерами

- Chrome 65+
- Firefox 50+
- Safari 9+

## Пример

=== "HTML"

    ```html
    <a href="https://example.com">External link</a><br />
    <a href="#">Internal target link</a><br />
    <a>Placeholder link (won't get styled)</a>
    ```

=== "CSS"

    ```css
    a:any-link {
      border: 1px solid blue;
      color: orange;
    }

    /* WebKit browsers */
    a:-webkit-any-link {
      border: 1px solid blue;
      color: orange;
    }
    ```

## См. также

- Связанные псевдоклассы [`:link`](link.md), [`:visited`](visited.md)

## Ссылки

- Псевдо-класс [:any-link](https://developer.mozilla.org/ru/docs/Web/CSS/:any-link) <sup><small>MDN (рус.)</small></sup>
