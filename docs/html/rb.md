---
description: Элемент rb (Ruby Base) используется для разграничения базового текстового компонента аннотации ruby, то есть текста, который аннотируется
---

# &lt;rb&gt;

Элемент **`<rb>`** (Ruby Base) используется для разграничения базового текстового компонента аннотации [`<ruby>`](ruby.md), то есть текста, который аннотируется. Один элемент `<rb>` должен переносить каждый отдельный атомарный сегмент основного текста.

## Синтаксис

```html
<rb></rb>
```

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [HTML 5](https://www.w3.org/TR/html50/text-level-semantics.html#the-rb-element)

## Описание и примеры

<!-- prettier-ignore-start -->
```html
<ruby>
  <rb>漢<rb>字
  <rp>(</rp><rt>kan<rt>ji<rp>)</rp>
</ruby>
```
<!-- prettier-ignore-end -->

Результат:

<ruby><rb>漢<rb>字<rp>(</rp><rt>kan<rt>ji<rp>)</rp></ruby>

## Ссылки

- Тег [`<rb>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/rb) <sup><small>MDN (рус.)</small></sup>
