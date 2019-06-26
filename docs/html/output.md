---
layout: default
title: output
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;output&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<output>`** _(от англ. **output** -- вывод)_ определяет область, в которую выводится информация, преимущественно с помощью скриптов.

Полифилы для включения поддержки:

- [`<output>` polyfill](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#output-progress-menu-command)

## Синтаксис

```html
<output> </output>
```

Закрывающий тег обязателен.

## Атрибуты

- `for` -- Определяет идентификатор одного и более элементов для связывания с элементом `<output>`.
- `form` -- Задаёт имя формы, которой принадлежит область для вывода.
- `name` -- Задаёт уникальное имя элемента.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/forms.html#the-output-element)
- [HTML 5](http://www.w3.org/TR/html5/forms.html#the-output-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>output</title>
  </head>
  <body>
    <form oninput="result.value=(cm.value/2.54).toFixed(2)">
      <p>Введите длину в сантиметрах: <input type="number" name="cm" autofocus /></p>
      <p>Длина в дюймах: <output name="result">0</output></p>
    </form>
  </body>
</html>
```
