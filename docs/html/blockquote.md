---
layout: default
title: blockquote
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;blockquote&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<blockquote>`** _(от англ. **block** **quot**ation - блок цитата)_ указывает на то, что заключенный в нем текст является развернутой цитатой. URI на источник цитаты можно указать в атрибуте `cite`, тогда как текстовое представление источника может быть задано элементом [`<cite>`](/html/cite/).

Текст, обозначенный этим тегом, традиционно отображается как выровненный блок с отступами слева и справа (примерно по 40 пикселей), а также с отбивкой сверху и снизу.

## Синтаксис

```html
<blockquote>Цитата</blockquote>
```

Закрывающий тег обязателен.

## Атрибуты

- `cite` - Адрес, который указывает на источник цитаты.

Для этого элемента также доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

### cite

Задаёт адрес страницы, который указывает на источник цитаты внутри `<blockquote>`. Значение атрибута на странице не отображается и предназначено для поисковых систем.

**Синтаксис**

```html
<blockquote cite="источник цитаты">Цитата</blockquote>
```

**Значения**

Адрес.

**Значение по умолчанию**

Нет.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-blockquote-element)
- [HTML5](http://www.w3.org/TR/html5/grouping-content.html#the-blockquote-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.2.2)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>cite</title>
  </head>
  <body>
    <p>Цитата из «Двенадцати стульев»:</p>
    <blockquote cite="https://ru.wikiquote.org/wiki/Двенадцать_стульев">Неделю тому назад состоялся вечер «Общества спасания на водах», о чём свидетельствовал также лозунг на стене: Дело помощи утопающим — дело рук самих утопающих.</blockquote>
  </body>
</html>
```
