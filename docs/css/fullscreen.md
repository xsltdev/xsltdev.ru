---
description: Псевдокласс :fullscreen выбирает элемент, который отображается, когда браузер находится в полноэкранном режиме
---

# :fullscreen

Псевдокласс **`:fullscreen`** выбирает элемент, который отображается, когда браузер находится в полноэкранном режиме.

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
