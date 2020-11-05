---
description: Псевдокласс :lang() сопоставляет элементы на основе языка, на котором они определены
---

# :lang()

Псевдокласс **`:lang()`** сопоставляет элементы на основе языка, на котором они определены.

**Примечание.** В HTML язык определяется комбинацией атрибута `lang`, элемента [`<meta>`](/html/meta/) и, возможно, информации из протокола (например, заголовков HTTP). Для других типов документов могут быть другие методы для определения языка.

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - [:any-link](any-link.md)
    - [:blank](blank.md)
    - [:checked](checked.md)
    - [:current()](current.md)
    - [:default](default.md)
    - [:defined](defined.md)
    - [:dir()](dir.md)
    - [:disabled](disabled.md)
    - [:empty](empty.md)
    - [:enabled](enabled.md)
    - [:first](first.md)
    - [:first-child](first-child.md)
    - [:first-of-type](first-of-type.md)
    - [:focus](focus.md)
    - [:focus-visible](focus-visible.md)
    - [:focus-within](focus-within.md)
    - [:fullscreen](fullscreen.md)
    - [:future](future.md)
    - [:has()](has.md)
    - :host
    - :host()
    - :host-context()
    - [:hover](hover.md)
    - [:indeterminate](indeterminate.md)
    - [:in-range](in-range.md)
    - [:invalid](invalid.md)
    - [:is()](is.md)
    - **:lang()**
    - [:last-child](last-child.md)
    - [:last-of-type](last-of-type.md)
    - [:left](left-pseudo-class.md)
    - [:link](link.md)
    - :local-link
    - [:not()](not.md)
    - [:nth-child()](nth-child.md)
    - :nth-col()
    - [:nth-last-child()](nth-last-child.md)
    - :nth-last-col()
    - [:nth-last-of-type()](nth-last-of-type.md)
    - [:nth-of-type()](nth-of-type.md)
    - [:only-child](only-child.md)
    - [:only-of-type](only-of-type.md)
    - [:optional](optional.md)
    - [:out-of-range](out-of-range.md)
    - [:past](past.md)
    - [:placeholder-shown](placeholder-shown.md)
    - [:read-only](read-only.md)
    - [:read-write](read-write.md)
    - [:required](required.md)
    - :right
    - [:root](root.md)
    - [:scope](scope.md)
    - [:target](target.md)
    - :target-within
    - :user-invalid
    - [:valid](valid.md)
    - [:visited](visited.md)
    - [:where()](where.md)

    </div>

## Синтаксис

```css
/* Selects any <p> in English (en) */
p:lang(en) {
  quotes: '\201C''\201D''\2018''\2019';
}
```

## Спецификации

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#lang-pseudo)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#lang-pseudo)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/selector.html#lang)

## Описание и примеры

=== CSS

```css
:lang(en) > q {
  quotes: '\201C''\201D''\2018''\2019';
}
:lang(fr) > q {
  quotes: '« ' ' »';
}
:lang(de) > q {
  quotes: '»' '«' '\2039''\203A';
}
```

=== HTML

```html
<div lang="en">
  <q
    >This English quote has a <q>nested</q> quote inside.</q
  >
</div>
<div lang="fr">
  <q>This French quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="de">
  <q>This German quote has a <q>nested</q> quote inside.</q>
</div>
```

Результат

![Пример работы псевдо-класса :lang()](lang.png)
