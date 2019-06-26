---
layout: default
title: rtc
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;rtc&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<rtc>`** _(от англ. **r**uby **t**ext **c**ontainer)_ обозначает текстовый контейнер внутри [`<ruby>`](/html/ruby/). В основном применяется в качестве описательной части или аннотации для иероглифов.

## Синтаксис

```html
<ruby>
  текст
  <rtc>аннотация</rtc>
</ruby>
```

Закрывающий тег не обязателен, если идёт последним.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-rtc-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>rtc</title>
  </head>
  <body>
    <p>
      <ruby>
        <rb>旧</rb><rb>金</rb><rb>山</rb> <rt>jiù</rt><rt>jīn</rt><rt>shān</rt>
        <rtc>Сан-Франциско</rtc>
      </ruby>
    </p>
  </body>
</html>
```
