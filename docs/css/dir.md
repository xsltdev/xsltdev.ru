---
description:
---

# :dir()

**`:dir()`** — это псевдо-класс CSS, который выбирает элементы на основе направления текста в них.

`:dir()` учитывает только семантическое направление, т. е. заданное в самом документе. Он не учитывает стилизованное направление, т. е. заданное CSS-правилами, например [`direction`](direction.md).

!!! info "Примечание"

    Примечание: помните о том, что псевдокласс `:dir()` не эквивалентен выбору по атрибуту `[dir=…]`. Последний применяется только к тем элементам HTML, у которых есть атрибут `dir`, игнорируя те, у которых он не задан — даже если они унаследовали его значение. (Похожим образом `[dir=rtl]` и `[dir=ltr]` не будут включать `auto`.) `:dir()` же, напротив, соостветсвует значению вычисленному user agent, даже унаследованному.

    Примечание: В HTML, направление задается атрибутом `dir`. В других форматах могут использоваться иные методы.

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - [:any-link](any-link.md)
    - [:blank](blank.md)
    - [:checked](checked.md)
    - [:current()](current.md)
    - [:default](default.md)
    - [:defined](defined.md)
    - **:dir()**
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
/* Выбирает все элементы с текстом справа-налево */
:dir(rtl) {
  background-color: red;
}
```

## Параметры

`ltr`
: Выбирает элементы с направлением текста слева-направо.

`rtl`
: Выбирает элементы с направлением текста справа-налево.

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-ltr)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-dir-pseudo)

## Пример

=== "HTML"

    ```html
    <div dir="rtl">
      <span>test1</span>
      <div dir="ltr">
        test2
        <div dir="auto">עִבְרִית</div>
      </div>
    </div>
    ```

=== "CSS"

    ```css
    :dir(ltr) {
      background-color: yellow;
    }

    :dir(rtl) {
      background-color: powderblue;
    }
    ```

## См. также

- [`:lang()`](lang.md)

## Ссылки

- Псевдо-класс [`:dir()`](https://developer.mozilla.org/ru/docs/Web/CSS/:dir) <sup><small>MDN (рус.)</small></sup>
