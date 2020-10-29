---
description: Тег address (от англ. address - адрес) предназначен для хранения контактной информации автора и может включать в себя любые элементы HTML вроде ссылок, текста, выделений
---

# &lt;address&gt;

Тег **`<address>`** _(от англ. **address** - адрес)_ предназначен для хранения контактной информации автора (адрес, телефон, e-mail, ссылка на сайт и др.) и может включать в себя любые элементы HTML вроде ссылок, текста, выделений и т. д. Планируется, что поисковые системы будут анализировать содержимое этого элемента для сбора информации об авторах.

`<address>` не должен использоваться для разметки почтовых адресов в целом, только для контактной информации.

Используйте `<address>` в следующем контексте:

- если `<address>` располагается внутри `<body>`, то информация внутри `<address>` относится ко всему документу в целом;
- если `<address>` располагается внутри `<article>`, то информация внутри `<address>` относится к автору статьи.

По умолчанию текст внутри контейнера `<address>` отображается курсивным начертанием.

## Синтаксис

```html
<address>Текст</address>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/sections.html#the-address-element)
- [HTML5](http://www.w3.org/TR/html5/sections.html#the-address-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/global.html#h-7.5.6)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta
      http-equiv="Content-Type"
      content="text/html; charset=utf-8"
    />
    <title>address</title>
  </head>

  <body>
    <address>Этот сайт сделал Бондаренко Юрий</address>
  </body>
</html>
```

## Ссылки

- Тег [`<address>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/address) <sup><small>MDN (рус.)</small></sup>
