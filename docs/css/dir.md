---
description:
---

# :dir()

**`:dir()`** — это псевдо-класс CSS, который выбирает элементы на основе направления текста в них.

`:dir()` учитывает только семантическое направление, т. е. заданное в самом документе. Он не учитывает стилизованное направление, т. е. заданное CSS-правилами, например [`direction`](direction.md).

!!! info "Примечание"

    Примечание: помните о том, что псевдокласс `:dir()` не эквивалентен выбору по атрибуту `[dir=…]`. Последний применяется только к тем элементам HTML, у которых есть атрибут `dir`, игнорируя те, у которых он не задан — даже если они унаследовали его значение. (Похожим образом `[dir=rtl]` и `[dir=ltr]` не будут включать `auto`.) `:dir()` же, напротив, соостветсвует значению вычисленному user agent, даже унаследованному.

    Примечание: В HTML, направление задается атрибутом `dir`. В других форматах могут использоваться иные методы.

## Синтаксис

```css
/* Выбирает все элементы с текстом справа-налево */
:dir(rtl) {
  background-color: red;
}
```

## Параметры

`ltr`
: Выбирает элементы с направлением текста слева-направо.

`rtl`
: Выбирает элементы с направлением текста справа-налево.

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-ltr)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-dir-pseudo)

## Пример

```html tab="HTML"
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">
    test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

```css tab="CSS"
:dir(ltr) {
  background-color: yellow;
}

:dir(rtl) {
  background-color: powderblue;
}
```

## См. также

- [:lang()](lang.md)

## Ссылки

- [:dir()](https://developer.mozilla.org/ru/docs/Web/CSS/:dir) на MDN
