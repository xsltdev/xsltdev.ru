---
description: Псевдокласс :empty находит любой элемент, у которого нет потомков
---

# :empty

Псевдокласс **`:empty`** находит любой элемент, у которого нет потомков.

Учитываются элементы и текст (включая пробелы). Комментарии не повлияют на то, что элемент будет рассматриваться как не пустой.

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
    - **:empty**
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
/* Selects any <div> that contains no content */
div:empty {
  background: lime;
}
```

## Спецификации

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#empty-pseudo)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#empty-pseudo)

## Пример

=== "HTML"

    ```html
    <div class="box"><!-- I will be lime. --></div>
    <div class="box">I will be pink.</div>
    <div class="box">
      <!-- I will be pink because of the whitespace around this comment. -->
    </div>
    ```

=== "CSS"

    ```css
    .box {
      background: pink;
      height: 80px;
      width: 80px;
    }

    .box:empty {
      background: lime;
    }
    ```

=== "Результат"

    ![Результат работы псевдокласса :empty](empty.png)
