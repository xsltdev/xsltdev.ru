---
description: Тег rp используется для вывода текста в браузерах, которые не поддерживают элемент ruby
---

# &lt;rp&gt;

Тег **`<rp>`** используется для вывода текста в браузерах, которые не поддерживают элемент [`<ruby>`](ruby.md).

В остальных браузерах текст, заключенный в контейнер `<rp>`, не отображается. Элемент `<rp>` должен идти до или после [`<rt>`](rt.md).

## Синтаксис

```html
<ruby>
  текст
  <rp>текст</rp><rt>аннотация</rt><rp>текст</rp>
</ruby>
```

Закрывающий тег не обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-rp-element)
- [HTML 5](https://www.w3.org/TR/html5/text-level-semantics.html#the-rp-element)

## Описание и примеры

Пример:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>rp</title>
  </head>
  <body>
    <p>
      <ruby> 字 <rp>(</rp><rt>zì</rt><rp>)</rp> </ruby>
    </p>
  </body>
</html>
```

Результат:

<ruby>
字 <rp>(</rp><rt>zì</rt><rp>)</rp>
</ruby>

## Ссылки

- [`<rp>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/rp) на MDN
