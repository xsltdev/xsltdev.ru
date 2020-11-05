---
description: Псевдокласс :focus-visible применяется, в то время как элемент соответствует псевдоклассу :focus, и UA определяет с помощью эвристики, что фокус должен быть сделан очевидным для элемента
---

# :focus-visible

Псевдокласс **`:focus-visible`** применяется, в то время как элемент соответствует псевдоклассу [`:focus`](focus.md), и UA определяет с помощью эвристики, что фокус должен быть сделан очевидным для элемента.

Этот селектор полезен для предоставления другого индикатора фокуса, основанного на модальности ввода пользователя (мышь против клавиатуры).

Обратите внимание, что Firefox поддерживает аналогичную функциональность через старый псевдокласс с префиксом `:-moz-focusring`.

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
    - **:focus-visible**
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
:focus-visible {
  /*  */
}
```

## Спецификации

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo)

## Полифил

Псевдокласс `:focus-visible` можно эмулировать с помощью [focus-visible.js](https://github.com/WICG/focus-visible).

## Пример

=== "CSS"

    ```css
    input,
    button {
      margin: 10px;
    }

    .focus-only:focus {
      outline: 2px solid black;
    }

    .focus-visible-only:focus-visible {
      outline: 4px dashed darkorange;
    }
    ```

=== "HTML"

    ```html
    <input value="Default styles" /><br />
    <button>Default styles</button><br />
    <input class="focus-only" value=":focus only" /><br />
    <button class="focus-only">:focus only</button><br />
    <input class="focus-visible-only" value=":focus-visible only" /><br />
    <button class="focus-visible-only">:focus-visible only</button>
    ```

=== "Результат"

    ![:focus-visible](focus-visible.png)

## См. также

- [`:focus`](focus.md)
- [`:focus-within`](focus-within.md)

## Ссылки

- Псевдо-класс [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) <sup><small>MDN (рус.)</small></sup>
