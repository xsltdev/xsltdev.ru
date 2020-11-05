---
description: Псевдокласс :first-of-type находит первого потомка своего типа среди детей родителя
---

# :first-of-type

Псевдокласс **`:first-of-type`** находит первого потомка своего типа среди детей родителя.

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
    - **:first-of-type**
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
/* Selects any <p> that is the first element
	   of its type among its siblings */
p:first-of-type {
  color: red;
}
```

## Спецификации

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#first-of-type-pseudo)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#first-of-type-pseudo)

## Описание и примеры

Этот пример показывает, как применится универсальный селектор, если простой селектор не написан.

=== "HTML"

    ```html
    <article>
      <div>This `div` is first!</div>
      <div>This <span>nested `span` is first</span>!</div>
      <div>
        This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
      </div>
      <div>This <span>nested `span` gets styled</span>!</div>
      <b>This `b` qualifies!</b>
      <div>This is the final `div`.</div>
    </article>
    ```

=== "CSS"

    ```css
    article :first-of-type {
      background-color: pink;
    }
    ```

=== "Результат"

    ![Результат работы псевдокласса :first-of-type](first-of-type.png)
