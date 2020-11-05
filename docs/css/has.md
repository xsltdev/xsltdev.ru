---
description: Псевдокласс has() представляет элемент, если какой-либо из селекторов, переданных в качестве параметров, соответствует хотя бы одному элементу
---

# :has()

Псевдокласс **`:has()`** представляет элемент, если какой-либо из селекторов, переданных в качестве параметров (относительно [`:scope`](scope.md) данного элемента), соответствует хотя бы одному элементу.

Псевдокласс `:has()` принимает список селекторов в качестве аргумента.

В текущей спецификации `:has()` нельзя использовать в таблицах стилей; только с такими функциями, как `document.querySelector()`.

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
    - **:has()**
    - :host
    - :host()
    - :host-context()
    - [:hover](hover.md)
    - [:indeterminate](indeterminate.md)
    - [:in-range](in-range.md)
    - [:invalid](invalid.md)
    - [:is()](is.md)
    - [:lang()](lang.md)
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

```js
/* Selects any <a>, as long as it has an <img> element directly inside it  */
/* Note that this is not supported in any browser yet */
/* It also isn't intended to work in stylesheets */
var test = document.querySelector('a:has(> img)')
```

## Спецификация

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#relational)

## Пример

Например, следующий селектор соответствует только элементам `<a>`, которые содержат дочерний элемент `<img>`:

```css
a: has(> img);
```

Следующий селектор соответствует элементу `<dt>`, за которым сразу следует другой элемент `<dt>`:

```css
dt: has(+ dt);
```

Следующий селектор соответствует элементам `<section>`, которые не содержат элементов заголовков:

```css
section: not(: has(h1, h2, h3, h4, h5, h6));
```

Обратите внимание, что порядок имеет значение в вышеупомянутом селекторе. Поменять местами вложенность двух псевдоклассов, например:

```css
section: has(: not(h1, h2, h3, h4, h5, h6));
```

... приведет к совпадению с любым элементом `<section>`, который содержит все, что не является элементом заголовка.

## См. также

- [:scope](scope.md)

## Ссылки

- [`:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) <sup><small>MDN (рус.)</small></sup>
