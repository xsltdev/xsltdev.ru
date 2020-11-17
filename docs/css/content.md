---
description: Свойство content позволяет вставлять генерируемое содержание в текст веб-страницы, которое первоначально в тексте отсутствует
---

# content

Свойство **`content`** позволяет вставлять генерируемое содержание в текст веб-страницы, которое первоначально в тексте отсутствует.

Применяется совместно с псевдоэлементами `::after` и `::before`, они соответственно указывают отображать новое содержимое после или до элемента, к которому добавляются.

??? info "Списки, счетчики, генерируемый контент"

    <div class="col3" markdown="1">

    - [counter-increment](counter-increment.md)
    - [counter-reset](counter-reset.md)
    - [list-style-image](list-style-image.md)
    - [list-style-type](list-style-type.md)
    - [list-style-position](list-style-position.md)
    - [list-style](list-style.md)

    </div>

    <div class="col3" markdown="1">

    - **content**
    - [quotes](quotes.md)

    </div>

## Синтаксис

```css
/* Keywords that cannot be combined with other values */
content: normal;
content: none;

/* <string> value, non-latin characters must be encoded */
content: 'prefix';

/* <url> value */
content: url('http://www.example.com/test.png');

/* <counter> values */
content: counter(chapter_counter);
content: counters(section_counter, '.');

/* attr() value linked to the HTML attribute value */
content: attr(value string);

/* Language- and position-dependent keywords */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* Except for normal and none, several values */
/* can be used simultaneously */
content: open-quote chapter_counter;

/* Global values */
content: inherit;
content: initial;
content: unset;
```

## Значения

`<строка>`
: Текст, который добавляется на веб-страницу, строка при этом должна браться в двойные или одинарные кавычки. Допускается использовать юникод для вставки спецсимволов. Спецсимволы HTML которые начинаются с амперсанда (`&sect`; например), будут отображаться как есть, т. е. простым текстом (`&sect`;, а не `§`).

`attr(<атрибут>)`
: Возвращает строку, которая является значением атрибута тега указанного в скобках. Например, `a::after {content:attr(href)}` добавит после ссылки её адрес, т. е. значение атрибута `href`. Если указанного атрибута нет, то вернётся пустая строка.

`open-quote`
: Вставляет открывающую кавычку, тип которой устанавливается с помощью стилевого свойства [`quotes`](quotes.md).

`close-quote`
: Вставляет закрывающую кавычку.

`no-open-quote`
: Отменяет добавление открывающей кавычки.

`no-close-quote`
: Отменяет добавление закрывающей кавычки.

`url`
: Абсолютный или относительный адрес вставляемого объекта. Если указанный файл браузер не может отобразить, то значение игнорируется.

`counter`
: Выводит значение счётчика, заданного свойством [`counter-reset`](counter-reset.md).

`none`
: Не добавляет никакого содержимого.

`normal`
: Задаётся как `none` для псевдоэлементов `::before` и `::after`.

Значение по-умолчанию:

```css
content: normal;
```

Применяется к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/generate.html#content)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-gencontent" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-gencontent">Can I Use css-gencontent?</a> Data on support for the css-gencontent feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>content</title>
    <style>
      .tag {
        color: navy; /* Цвет текста */
        font-family: monospace; /* Моноширинный шрифт */
        quotes: '<' '>'; /* Устанавливаем вид кавычек */
      }
      .tag::before {
        content: open-quote; /* Добавляем перед текстом открывающую кавычку */
      }
      .tag::after {
        content: close-quote; /* Добавляем после текста закрывающую кавычку */
      }
    </style>
  </head>
  <body>
    <p>
      Элемент <span class="tag">DEL</span> используется для
      выделения текста, который был удалён в новой версии
      документа.
    </p>
  </body>
</html>
```
