---
description: Тег div (от англ. division - раздел) является универсальным блочным элементом и предназначен для группирования элементов документа с целью изменения вида содержимого через стили
---

# &lt;div&gt;

Тег **`<div>`** _(от англ. **div**ision - раздел)_ является универсальным блочным элементом и предназначен для группирования элементов документа с целью изменения вида содержимого через стили. Для этого добавляется атрибут `class` или `id` с именем класса или идентификатора.

## Синтаксис

```html
<div>...</div>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element)
- [HTML 5](http://www.w3.org/TR/html5/grouping-content.html#the-div-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/global.html#h-7.5.4)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>DIV</title>
    <style>
      .block1 {
        width: 200px;
        background: #ccc;
        padding: 5px;
        padding-right: 20px;
        border: solid 1px black;
        float: left;
      }
      .block2 {
        width: 200px;
        background: #fc0;
        padding: 5px;
        border: solid 1px black;
        float: left;
        position: relative;
        top: 40px;
        left: -70px;
      }
    </style>
  </head>
  <body>
    <div class="block1">
      Почвообразовательный процесс физически иссушает монолит в полном
      соответствии с законом Дарси. В лабораторных условиях было установлено,
      что сушильный шкаф теоретически возможен. Выветривание, несмотря на
      внешние воздействия, однократно.
    </div>
    <div class="block2">
      Конкреция пространственно трансформирует пирогенный псевдомицелий, хотя
      этот факт нуждается в дальнейшей тщательной экспериментальной проверке.
    </div>
  </body>
</html>
```
