---
layout: default
title: legend
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;legend&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<legend>`** _(от англ. **legend** -- легенда, надпись)_ применяется для создания заголовка группы элементов формы, которая определяется с помощью [`<fieldset>`](/html/fieldset/).

Группа элементов обозначается в браузере с помощью рамки, а текст, который располагается внутри контейнера `<legend>`, встраивается в эту рамку.

## Синтаксис

```html
<fieldset>
  <legend>Текст</legend>
</fieldset>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/forms.html#the-label-element)
- [HTML 5](http://www.w3.org/TR/html5/forms.html#the-label-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/interact/forms.html#h-17.9.1)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>LEGEND</title>
  </head>
  <body>
    <fieldset>
      <legend>Работа со временем</legend>
      <p>
        <input type="checkbox" /> создание пунктуальности (никогда не будете никуда опаздывать);<br />
        <input type="checkbox" /> излечение от пунктуальности (никогда никуда не будете торопиться);<br />
        <input type="checkbox" /> изменение восприятия времени и часов.
      </p>
    </fieldset>
  </body>
</html>
```
