---
description: Псевдо-класс :where() принимает список селекторов в качестве аргумента и выбирает все элементы, которые могут быть выбраны одним из селекторов в этом списке
---

# :where()

Псевдо-класс **`:where()`** принимает список селекторов в качестве аргумента и выбирает все элементы, которые могут быть выбраны одним из селекторов в этом списке.

Разница между `:where()` и `:is()` заключается в том, что `:where()` всегда имеет 0 специфику, тогда как `:is()` принимает специфику наиболее конкретного селектора из своих аргументов.

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
    - **:where()**

    </div>

## Спецификация

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#zero-matches)

## Пример

Ниже приведен типичный пример, когда эвристика специфичности не соответствует ожиданиям автора:

```css
a:not(:hover) {
  text-decoration: none;
}

nav a {
  /* Has no effect */
  text-decoration: underline;
}
```

Однако с помощью `:where()` автор может явно объявить свое намерение:

```css
a:where(:not(:hover)) {
  text-decoration: none;
}

nav a {
  /* Works now! */
  text-decoration: underline;
}
```

## См. также

- [:is()](is.md)

## Ссылки

- Псевдо-класс [:where()](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) <sup><small>MDN (рус.)</small></sup>
