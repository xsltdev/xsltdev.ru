---
layout: default
title: rp
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;rp&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<rp>`** используется для вывода текста в браузерах, которые не поддерживают элемент [`<ruby>`](/html/ruby/).

В остальных браузерах текст, заключенный в контейнер `<rp>`, не отображается. Элемент `<rp>` должен идти до или после [`<rt>`](/html/rt/).

## Синтаксис

```html
<ruby>
  текст
  <rp>текст</rp><rt>аннотация</rt><rp>текст</rp>
</ruby>
```

Закрывающий тег не обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

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
