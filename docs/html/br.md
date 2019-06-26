---
layout: default
title: br
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;br&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<br>`** _(от англ. **br**eak - разрыв)_ устанавливает перевод строки в том месте, где он находится.

В отличие от элемента [`<p>`](/html/p/), использование `<br>` не добавляет пустой отступ перед строкой.

## Синтаксис

```html
Текст<br />
текст
```

Закрывающий тег не требуется.

## Атрибуты

Нет.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element)
- [HTML5](http://www.w3.org/TR/html5/text-level-semantics.html#the-br-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.3.2.1)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>BR</title>
  </head>
  <body>
    <p>Р.Л. Стивенсон</p>
    <p>
      Лето в стране настало,<br />
      Вереск опять цветёт.<br />
      Но некому готовить<br />
      Вересковый мёд.
    </p>
  </body>
</html>
```
