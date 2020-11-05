---
description: Псевдо-класс :enabled находит любой включенный элемент
---

# :enabled

Псевдо-класс **`:enabled`** находит любой включенный элемент.

Элемент включен, если его можно активировать (например, выбрать, нажать на него или ввести текст) или поставить фокус. У элемента также есть [отключенное состояние](disabled.md), когда его нельзя активировать или сфокусировать.

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
    - **:enabled**
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
/* Selects any enabled <input> */
input:enabled {
  color: blue;
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/#selector-enabled)
- [HTML 5](http://www.w3.org/TR/html5/#selector-enabled)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#enableddisabled)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-classes)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#enableddisabled)

## Пример

Следующий пример делает цвет текста средне-зелёного оттенка, когда поле включено, и серым, когда отключено. Это позволяет понимать пользователю какие элементы интерактивны, а какие нет.

=== "HTML"

    ```html
    <form action="url_of_form">
      <label for="FirstField">Первое поле (включено):</label>
      <input type="text" id="FirstField" value="Lorem" /><br />
      <label for="SecondField">Второе поле (отключено):</label>
      <input type="text" id="SecondField" value="Ipsum" disabled="disabled" /><br />
      <input type="button" value="Submit" />
    </form>
    ```

=== "CSS"

    ```css
    input:enabled {
      color: #22aa22;
    }
    input:disabled {
      color: #d9d9d9;
    }
    ```

=== "Результат"

    ![Результат работы псевдокласса :enabled](enabled.png)
