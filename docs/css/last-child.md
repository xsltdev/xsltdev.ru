---
description: Псевдокласс :last-child представляет последний элемент среди группы элементов-братьев
---

# :last-child

Псевдокласс **`:last-child`** представляет последний элемент среди группы элементов-братьев.

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
    - **:last-child**
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
/* Selects any <p> that is the last element
	   among its siblings */
p:last-child {
  color: lime;
}
```

## Спецификации

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#last-child)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#last-child)

## Описание и примеры

### Пример 1

=== "HTML"

    ```html
    <div>
      <p>This text isn't selected.</p>
      <p>This text is selected!</p>
    </div>

    <div>
      <p>This text isn't selected.</p>
      <h2>This text isn't selected: it's not a `p`.</h2>
    </div>
    ```

=== "CSS"

    ```css
    p:last-child {
      color: lime;
      background-color: black;
      padding: 5px;
    }
    ```

=== "Результат"

    ![Пример работы псевдо-класса :last-child](last-child.png)

### Пример 2

=== "HTML"

    ```html
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>
        Item 3
        <ul>
          <li>Item 3.1</li>
          <li>Item 3.2</li>
          <li>Item 3.3</li>
        </ul>
      </li>
    </ul>
    ```

=== "CSS"

    ```css
    ul li {
      color: blue;
    }

    ul li:last-child {
      border: 1px solid red;
      color: red;
    }
    ```

=== "Результат"

    ![Пример работы псевдо-класса :last-child в списках](last-child-2.png)
