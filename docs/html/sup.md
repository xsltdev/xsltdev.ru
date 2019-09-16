---
description: Тег sup (от англ. superscript — надстрочный индекс) отображает шрифт в виде верхнего индекса
---

# &lt;sup&gt;

Тег **`<sup>`** _(от англ. **sup**erscript — надстрочный индекс)_ отображает шрифт в виде верхнего индекса. Шрифт при этом отображается выше базовой линии текста и уменьшенного размера.

## Синтаксис

```html
<sup>Текст</sup>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-sub-and-sup-elements)
- [HTML 5](http://www.w3.org/TR/html5/textlevel-semantics.html#the-sub-and-sup-elements)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>SUP</title>
  </head>
  <body>
    <p><b>Великая теорема Ферма</b></p>
    <p>
      <i
        >X <sup><small>n</small></sup> + Y <sup><small>n</small></sup> = Z
        <sup><small>n</small></sup></i
      >
    </p>
    <p>где n - целое число > 2</p>
  </body>
</html>
```

## Ссылки

- [`<sup>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/sup) на MDN
