---
description: Тег span (от англ. span — интервал) предназначен для выделения отдельных строк, символов или других строчных элементов для дальнейшего изменения их оформления с помощью стилей
---

# &lt;span&gt;

Тег **`<span>`** _(от англ. **span** — интервал)_ предназначен для выделения отдельных строк, символов или других строчных элементов для дальнейшего изменения их оформления с помощью стилей.

Например, внутри абзаца ([`<p>`](p.md)) можно изменить цвет и размер первого слова, если его выделить с помощью элемента `<span>` и задать для него желаемый стиль.

## Синтаксис

```html
<span>...</span>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-span-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-span-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/global.html#edef-SPAN)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>SPAN</title>
    <style>
      span {
        color: red; /* Красный цвет символов */
      }
    </style>
  </head>
  <body>
    <p>
      Разумные люди приспосабливаются к окружающему миру. Неразумные люди
      приспосабливают мир к себе. Вот почему прогресс определяется действиями
      неразумных людей.
    </p>
    <p>Автор: <span>Бернард Шоу</span></p>
  </body>
</html>
```

## Ссылки

- [`<span>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/span) на MDN
