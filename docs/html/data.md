---
layout: default
title: data
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;data&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<data>`** _(от англ. **data** - данные)_ представляет содержимое в машиночитаемом виде, предназначенное для внешних автоматизированных систем или скриптов на самом сайте.

Внутри `<data>`, к примеру, может храниться идентификатор товара.

## Синтаксис

```html
<data value="<значение>">...</data>
```

Закрывающий тег обязателен.

## Атрибуты

- `value` - Устанавливает значение атрибута в машиночитаемой форме.

Также для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-data-element)
- [HTML5](http://www.w3.org/TR/html5/text-level-semantics.html#the-data-element)

## Описание и примеры

```html
<p><data value="1319898155">14:22</data> <b>egof</b> I'm not that nerdy, I've only seen 30% of the star trek episodes</p>
<p><data value="1319898192">14:23</data> <b>kaj</b> if you know what percentage of the star trek episodes you have seen, you are inarguably nerdy</p>
<p><data value="1319898200">14:23</data> <b>egof</b> it's unarguably</p>
<p><data value="1319898228">14:23</data> <i>* kaj blinks</i></p>
<p><data value="1319898260">14:24</data> <b>kaj</b> you are not helping your case</p>
```
