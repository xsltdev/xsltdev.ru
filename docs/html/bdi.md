---
layout: default
title: bdi
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;bdi&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<bdi>`** _(от англ. **b**i**d**irectional **i**solation - элемент двунаправленной изоляции)_ указывает фрагмент текста, который должен быть изолирован от изменения направления вывода текста.

Такое поведение важно для текстов, одновременно содержащих разные языки, читающихся слева направо и справа налево.

Хоть такой же эффект может быть достигнут с использованием [CSS](/css/) правила [`unicode-bidi: isolate`](/css/unicode-bidi/) для [`<span>`](/html/span/) или другого текстового элемента, семантическое значение достигается только с помощью элемента `<bdi>`. Более того, браузеры имеют опцию игнорирования стилей. В этом случае, текст будет отображен корректно при использовании HTML элемента, и некорректно при использовании CSS стилей.

## Синтаксис

```html
<bdi>Текст</bdi>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element)
- [HTML5](http://www.w3.org/TR/html5/the-bdi-element.html#the-bdi-element)

### Поддержка браузерами

**Настольные**

<table>
<tr><th></th><th>Chrome</th><th>Firefox</th><th>IE</th><th>Opera</th><th>Safari</th></tr>
<tr><td>Базовая поддержка</td><td>16</td><td>10.0</td><td>Нет</td><td>Нет</td><td>Нет</td></tr>
</table>

**Мобильные**

<table>
<tr><th></th><th>Android</th><th>Firefox Mobile</th><th>IE Mobile</th><th>Opera Mobile</th><th>Safari Mobile</th></tr>
<tr><td>Базовая поддержка</td><td>Нет</td><td>10.0</td><td>Нет</td><td>Нет</td><td>Нет</td></tr>
</table>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>BDI</title>
  </head>
  <body>
    <p dir="rtl"><bdi>שבת</bdi> — суббота</p>
    <p>В ашкеназском произношении звучит как «ша́бос» (идиш «ша́бес»), а в сефардском — как «шаба́т».</p>
  </body>
</html>
```
