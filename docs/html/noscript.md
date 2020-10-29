---
description: Тег noscript (от англ. no script — без скриптов) показывает своё содержимое, если браузер не поддерживает работу со скриптами или их поддержка отключена пользователем
---

# &lt;noscript&gt;

Тег **`<noscript>`** _(от англ. **no** **script** — без скриптов)_ показывает своё содержимое, если браузер не поддерживает работу со скриптами или их поддержка отключена пользователем.

В остальных случаях браузер игнорирует этот элемент и всё, что располагается внутри него.

## Синтаксис

```html
<noscript>Текст</noscript>
```

Закрывающий тег обязателен.

## Атрибуты

Нет.

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting-1.html#the-noscript-element)
- [HTML 5](http://www.w3.org/TR/html5/scripting-1.html#the-noscript-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/interact/scripts.html#h-18.3.1)

## Описание и примеры

```html
<html>
  <head>
    <title>NOSCRIPT</title>
    <meta
      http-equiv="Content-Type"
      content="text/html; charset=utf-8"
    />
    <script type="text/javascript">
      alert('Hello, world!')
    </script>
  </head>
  <body>
    <noscript
      ><p>Ваш браузер не поддерживает скрипты!</p></noscript
    >
  </body>
</html>
```

## См. также

- [`<script>`](script.md) — предназначен для описания скриптов, может содержать ссылку на программу или её текст на определённом языке.

## Ссылки

- Тег [`<noscript>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/noscript) <sup><small>MDN (рус.)</small></sup>
