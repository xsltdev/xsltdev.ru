---
description: Псевдокласс :fullscreen выбирает элемент, который отображается, когда браузер находится в полноэкранном режиме
---

# :fullscreen

Псевдокласс **`:fullscreen`** выбирает элемент, который отображается, когда браузер находится в полноэкранном режиме.

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
    - **:fullscreen**
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
/* Selects any <div> that is being displayed in fullscreen mode */
/* Implemented in Firefox, WebKit/Chrome, and Edge/IE using prefixes;
   Edge also supports the non-prefixed version */
div:-moz-full-screen {
  background-color: pink;
}

div:-webkit-full-screen {
  background-color: pink;
}

div:fullscreen {
  background-color: pink;
}
```

## Значения

**Примечание.** Спецификация W3C использует одно слово `:fullscreen` — без тире, но экспериментальные реализации WebKit и Gecko используют префиксный вариант с двумя словами, разделенными тире: `:-webkit-full-screen` и `:-moz-full-screen`, соответственно.

Microsoft Edge и Internet Explorer используют стандартное соглашение: `:fullscreen` и `:-ms-fullscreen`, соответственно.

## Спецификации

- [Fullscreen API](https://fullscreen.spec.whatwg.org/#:fullscreen-pseudo-class)

## Пример

=== "HTML"

    ```html
    <div id="fullscreen">
      <h1>:fullscreen Demo</h1>
      <p>
        This text will become big and red when the browser is in
        fullscreen mode.
      </p>
      <button id="fullscreen-button">Enter Fullscreen</button>
    </div>
    ```

=== "CSS"

    ```css
    #fullscreen:fullscreen {
      padding: 42px;
      background-color: pink;
      border: 2px solid #f00;
      font-size: 200%;
    }

    #fullscreen:fullscreen > h1 {
      color: red;
    }

    #fullscreen:fullscreen > p {
      color: darkred;
    }

    #fullscreen:fullscreen > button {
      display: none;
    }
    ```
