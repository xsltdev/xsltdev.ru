---
description: Тег ul (от англ. unordered list — неупорядоченный список) устанавливает маркированный (неупорядоченный) список
---

# &lt;ul&gt;

Тег **`<ul>`** _(от англ. **u**nordered **l**ist — неупорядоченный список)_ устанавливает маркированный (неупорядоченный) список.

Каждый пункт списка должен начинаться с элемента [`<li>`](li.md).

## Синтаксис

```html
<ul>
  <li>пункт маркированного списка</li>
</ul>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

`compact`
: **Не используйте этот атрибут**, так как он устарел: вместо этого используйте CSS. Чтобы получить эффект, аналогичный атрибуту `compact`, можно использовать свойство [`line-height`](../css/line-height.md) со значением `80%`.

: Этот логический атрибут означает, что список должен отображаться в компактном стиле. Интерпретация этого атрибута зависит от пользовательского агента, и он работает не во всех браузерах.

`type`
: **Не используйте этот атрибут**, так как он устарел; вместо этого используйте свойство CSS [`list-style-type`](../css/list-style-type.md).

: Этот атрибут устанавливает стиль маркера для списка. Значения, определенные в HTML 3.2 и HTML 4.0 / 4.01:

: - `circle`
: - `disc`
: - `square`
: - Четвертый тип маркера был определен в интерфейсе WebTV, но не все браузеры поддерживают его: `triangle`.

: Если этот элемент отсутствует, и если к элементу не применяется свойство CSS `list-style-type`, пользовательский агент выбирает тип маркера в зависимости от уровня вложенности списка.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)
- [HTML 5](http://www.w3.org/TR/html5/grouping-content.html#the-ul-element)

## Примеры

### Пример 1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>UL</title>
  </head>
  <body>
    <ul>
      <li>Баал</li>
      <li>Агарес</li>
      <li>Марбас</li>
      <li>Пруфлас</li>
      <li>Аамон</li>
    </ul>
  </body>
</html>
```

### Пример 2

Вложенные списки

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Внимание, закрывающий тег </li> здесь не размещаем -->
    <ul>
      <li>second item first subitem</li>
      <li>
        second item second subitem
        <!-- Same for the second nested unordered list! -->
        <ul>
          <li>
            second item second subitem first sub-subitem
          </li>
          <li>
            second item second subitem second sub-subitem
          </li>
          <li>
            second item second subitem third sub-subitem
          </li>
        </ul>
      </li>
      <!-- Closing </li> tag for the li that
            contains the third unordered list -->
      <li>second item third subitem</li>
    </ul>
    <!-- Здесь размещается закрывающий тег </li> -->
  </li>
  <li>third item</li>
</ul>
```

### Пример 3

Упорядоченный список внутри неупорядоченного списка

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

## См. также

- [`<ol>`](ol.md)
- [`<li>`](li.md)
- [list-style](../css/list-style.md)
- [line-height](../css/line-height.md)

## Ссылки

- Тег [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) <sup><small>MDN (рус.)</small></sup>
