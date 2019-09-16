---
description: Тег legend (от англ. legend - легенда, надпись) применяется для создания заголовка группы элементов формы, которая определяется с помощью fieldset
---

# &lt;legend&gt;

Тег **`<legend>`** _(от англ. **legend** — легенда, надпись)_ применяется для создания заголовка группы элементов формы, которая определяется с помощью [`<fieldset>`](fieldset.md).

Группа элементов обозначается в браузере с помощью рамки, а текст, который располагается внутри контейнера `<legend>`, встраивается в эту рамку.

## Синтаксис

```html
<fieldset>
  <legend>Текст</legend>
</fieldset>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

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
        <input type="checkbox" /> создание пунктуальности (никогда не будете
        никуда опаздывать);<br />
        <input type="checkbox" /> излечение от пунктуальности (никогда никуда не
        будете торопиться);<br />
        <input type="checkbox" /> изменение восприятия времени и часов.
      </p>
    </fieldset>
  </body>
</html>
```

## Ссылки

- [`<legend>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/legend) на MDN
