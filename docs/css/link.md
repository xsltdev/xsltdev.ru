---
description: Псевдо-класс link позволяет вам выбирать ссылки внутри элементов
---

# :link

Псевдо-класс **`:link`** позволяет вам выбирать ссылки внутри элементов.

Он выберет любую ссылку, которая ещё не была посещена, даже те, которые уже стилизованы, используя селекторы с другими, относящимися к ссылкам, псевдо-классам типа [`:hover`](hover.md), [`:active`](active.md) или [`:visited`](visited.md). Чтобы стилизовать ссылки должным образом, вам нужно вставлять правила `:link` до других, как определено LVHA-порядком: `:link` — `:visited` — `:hover` — `:active`. Псевдо-класс `:focus` обычно размещается прямо перед или сразу после `:hover`, в зависимости от ожидаемого эффекта.

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
    - **:link**
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

## Пример

=== "HTML"

    ```html
    <a href="#ordinary-target">This is an ordinary link.</a
    ><br />
    <a href="">You've already visited this link.</a><br />
    <a>Placeholder link (won't get styled)</a>
    ```

=== "CSS"

    ```css
    a:link {
      background-color: gold;
      color: green;
    }
    ```
