---
description: Псевдокласс is() принимает список селекторов в качестве аргумента и выбирает любой элемент, который может быть выбран одним из селекторов в этом списке
---

# :is()

Псевдокласс **`:is()`** принимает список селекторов в качестве аргумента и выбирает любой элемент, который может быть выбран одним из селекторов в этом списке. Это полезно для написания больших селекторов в более компактной форме.

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
    - **:is()**
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

```css
/* Selects any paragraph inside a header, main
   or footer element that is being hovered */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* The above is equivalent to the following */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}

/* Backwards-compatible version with :-*-any() and :matches()
   (It is not possible to group selectors into single rule,
   because presence of invalid selector would invalidate whole rule.) */
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

## Спецификация

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#matches-pseudo)

## Пример

### Пример 1

=== "HTML"

    ```html
    <header>
      <p>This is my header paragraph</p>
    </header>

    <main>
      <ul>
        <li>
          <p>This is my first</p>
          <p>list item</p>
        </li>
        <li>
          <p>This is my second</p>
          <p>list item</p>
        </li>
      </ul>
    </main>

    <footer>
      <p>This is my footer paragraph</p>
    </footer>
    ```

=== "CSS"

    ```css
    :-webkit-any(header, main, footer) p:hover {
      color: red;
      cursor: pointer;
    }

    :-moz-any(header, main, footer) p:hover {
      color: red;
      cursor: pointer;
    }

    :matches(header, main, footer) p:hover {
      color: red;
      cursor: pointer;
    }

    :is(header, main, footer) p:hover {
      color: red;
      cursor: pointer;
    }
    ```

=== "JS"

    ```js
    let matchedItems

    try {
      matchedItems = document.querySelectorAll(
        ':is(header, main, footer) p'
      )
    } catch (e) {
      try {
        matchedItems = document.querySelectorAll(
          ':matches(header, main, footer) p'
        )
      } catch (e) {
        try {
          matchedItems = document.querySelectorAll(
            ':-webkit-any(header, main, footer) p'
          )
        } catch (e) {
          try {
            matchedItems = document.querySelectorAll(
              ':-moz-any(header, main, footer) p'
            )
          } catch (e) {
            console.log(
              "Your browser doesn't support :is(), :matches(), or :any()"
            )
          }
        }
      }
    }

    matchedItems.forEach(applyHandler)

    function applyHandler(elem) {
      elem.addEventListener('click', function (e) {
        alert(
          'This paragraph is inside a ' +
            e.target.parentNode.nodeName
        )
      })
    }
    ```

### Пример 2

Псевдокласс `:is()` может значительно упростить ваши CSS-селекторы. Например, следующий CSS:

```css
/* 3-deep (or more) unordered lists use a square */
ol ol ul,
ol ul ul,
ol menu ul,
ol dir ul,
ol ol menu,
ol ul menu,
ol menu menu,
ol dir menu,
ol ol dir,
ol ul dir,
ol menu dir,
ol dir dir,
ul ol ul,
ul ul ul,
ul menu ul,
ul dir ul,
ul ol menu,
ul ul menu,
ul menu menu,
ul dir menu,
ul ol dir,
ul ul dir,
ul menu dir,
ul dir dir,
menu ol ul,
menu ul ul,
menu menu ul,
menu dir ul,
menu ol menu,
menu ul menu,
menu menu menu,
menu dir menu,
menu ol dir,
menu ul dir,
menu menu dir,
menu dir dir,
dir ol ul,
dir ul ul,
dir menu ul,
dir dir ul,
dir ol menu,
dir ul menu,
dir menu menu,
dir dir menu,
dir ol dir,
dir ul dir,
dir menu dir,
dir dir dir {
  list-style-type: square;
}
```

можно заменить на:

```css
/* 3-deep (or more) unordered lists use a square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
  list-style-type: square;
}
```

### Пример 3

Псевдокласс `:is()` особенно полезен при работе с разделами и заголовками HTML5. Поскольку `<section>`, `<article>`, `<aside>` и `<nav>` обычно вкладываются вместе, без `:is()`, их стилизация для соответствия друг другу может быть сложной.

Например, без `:is()` стилизация всех элементов `<h1>` на разных глубинах может быть очень сложной:

```css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}
/* Level 2 */
section section h1,
section article h1,
section aside h1,
section nav h1,
article section h1,
article article h1,
article aside h1,
article nav h1,
aside section h1,
aside article h1,
aside aside h1,
aside nav h1,
nav section h1,
nav article h1,
nav aside h1,
nav nav h1 {
  font-size: 20px;
}
/* Level 3 */
/* ... don't even think about it! */
```

Использование `:is()`, однако, намного проще:

```css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Level 2 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```

## См. также

- [`:where()`](where.md)

## Ссылки

- Псевдо-класс [`:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) <sup><small>MDN (рус.)</small></sup>
