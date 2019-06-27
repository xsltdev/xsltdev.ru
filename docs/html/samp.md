# &lt;samp&gt;

Тег **`<samp>`** _(от англ. **samp**le -- пример)_ используется для отображения текста, который является результатом вывода компьютерной программы или скрипта.

Браузеры обычно отображают текст в контейнере `<samp>` с помощью моноширинного шрифта.

## Синтаксис

```html
<samp>Текст</samp>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-samp-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-samp-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.2.1)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>SAMP</title>
    <style>
      code {
        color: green; /* Цвет текста */
      }
      samp {
        color: maroon; /* Цвет текста */
      }
    </style>
  </head>
  <body>
    <p>Проверка, поддерживает браузер JavaScript 1.3 или нет.</p>
    <p>
      <code>
        <script language="JavaScript1.3">
          JS13 = 1</script
        ><br />
        <script language="JavaScript">
          <br>
          					if (window.JS13) document.write("Ваш браузер поддерживает JavaScript 1.3");<br>
        </script>
      </code>
    </p>
    <p>В результате выполнения скрипта вы увидите текст <samp>Ваш браузер поддерживает JavaScript 1.3</samp>, в том случае, если браузер работает с версией 1.3.</p>
  </body>
</html>
```
