---
description: Тег summary (от англ. summary — резюме, сводка) указывает заголовок для details, по которому можно щёлкать для разворачивания/сворачивания информации
---

# &lt;summary&gt;

Тег **`<summary>`** _(от англ. **summary** — резюме, сводка)_ указывает заголовок для [`<details>`](details.md), по которому можно щёлкать для разворачивания/сворачивания информации.

Элемент `<summary>` должен идти первым внутри `<details>`.

## Поддержка браузерами

<p class="ciu_embed" data-feature="details" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=details">Can I Use details?</a> Data on support for the details feature across the major browsers from caniuse.com.
</p>

Полифилы для включения поддержки:

- [`<details>` and `<summary>` polyfill](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#details-and-summary)

## Синтаксис

```html
<details>
  <summary>Текст</summary>
</details>
```

Закрывающий тег обязателен.

## Атрибуты

Нет.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/forms.html#the-summary-element)
- [HTML 5.1](https://www.w3.org/TR/2016/REC-html51-20161101/interactive-elements.html#the-summary-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>summary</title>
  </head>
  <body>
    <details>
      <summary>Информация об авторе</summary>
      <p>Бендер Родригез</p>
    </details>
  </body>
</html>
```

## Ссылки

- Тег [`<summary>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/summary) <sup><small>MDN (рус.)</small></sup>
