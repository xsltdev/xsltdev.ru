---
layout: default
title: wbr
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;wbr&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<wbr>`** _(от англ. **w**ord **br**eak -- разрыв слова)_ указывает браузеру место, где допускается делать перенос строки в тексте, если этого требует ширина родительского элемента.

## Синтаксис

```html
Текст<wbr />текст
```

Закрывающий тег не требуется.

## Атрибуты

Нет.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-wbr-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-wbr-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>WBR</title>
    <style>
      .word {
        font-size: 2em;
      }
      wbr {
        display: inline-block;
      }
    </style>
  </head>
  <body>
    <p>Самое длинное слово из химии</p>
    <p class="word">метоксихлор<wbr />диэтиламино<wbr />метил<wbr />бутил<wbr />амино<wbr />акридин</p>
  </body>
</html>
```
