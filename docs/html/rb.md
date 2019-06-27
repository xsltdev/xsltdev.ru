# &lt;rb&gt;

Элемент **`<rb>`** (Ruby Base) используется для разграничения базового текстового компонента аннотации [`<ruby>`](/html/ruby/), то есть текста, который аннотируется. Один элемент `<rb>` должен переносить каждый отдельный атомарный сегмент основного текста.

## Синтаксис

```html
<rb></rb>
```

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

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
