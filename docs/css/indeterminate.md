---
description: Псевдо-класс :indeterminate представляет любой элемент формы, состояние которого неопределенно
---

# :indeterminate

Псевдо-класс **`:indeterminate`** представляет любой элемент формы, состояние которого неопределенно.

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
    - **:indeterminate**
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
/* Selects any <input> whose state is indeterminate */
input:indeterminate {
  background: lime;
}
```

## Описание

Элементы, предназначенные для этого селектора:

- [`<input type="checkbox">`](/html/input/) элементы, неопределенное свойство которых установлено в JavaScript
- [`<input type="radio">`](/html/input/), когда все переключатели с одинаковым именем в форме не отмечены
- [`<progress>`](/html/progress/) в неопределенном состоянии

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/#selector-indeterminate)
- [HTML5](http://www.w3.org/TR/html5/#selector-indeterminate)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#indeterminate)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#indeterminate)

## Пример

=== "HTML"

    ```html
    <div>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox">This label starts out lime.</label>
    </div>
    <div>
      <input type="radio" id="radio" />
      <label for="radio">This label starts out lime.</label>
    </div>
    ```

=== "CSS"

    ```css
    input:indeterminate + label {
      background: lime;
    }
    ```

=== "JS"

    ```js
    var inputs = document.getElementsByTagName('input')

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].indeterminate = true
    }
    ```

=== "Результат"

    ![Пример работы псевдо-класса :indeterminate](indeterminate.png)
