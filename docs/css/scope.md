---
description: Псевдокласс scope представляет собой элементы, которые являются ориентиром для селекторов, чтобы соответствовать против
---

# :scope

Псевдокласс **`:scope`** представляет собой элементы, которые являются ориентиром для селекторов, чтобы соответствовать против.

В настоящее время при использовании в таблице стилей `:scope` совпадает с [`:root`](root.md), поскольку в настоящее время нет способа явно установить элемент области действия. При использовании из DOM API, такого как `querySelector()`, `querySelectorAll()`, `match()` или `Element.closest()`, `:scope` соответствует элементу, для которого вы вызвали метод.

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
    - **:scope**
    - [:target](target.md)
    - :target-within
    - :user-invalid
    - [:valid](valid.md)
    - [:visited](visited.md)
    - [:where()](where.md)

    </div>

## Синтаксис

```css
/* Selects a scoped element */
:scope {
  background-color: lime;
}
```

## Спецификация

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-scope-pseudo)

## Примеры

### Пример 1

В этом простом примере мы демонстрируем, что использование псевдокласса `:scope` из метода `Element.matches()` соответствует элементу, для которого он вызывается.

=== "JavaScript"

    ```js
    let paragraph = document.getElementById('para')
    let output = document.getElementById('output')

    if (paragraph.matches(':scope')) {
      output.innerText =
        'Yep, the element is its own scope as expected!'
    }
    ```

=== "HTML"

    ```html
    <p id="para">
      This is a paragraph. It is not an interesting paragraph.
      Sorry about that.
    </p>
    <p id="output"></p>
    ```

=== "Результат"

    ![:scope](scope.png)

### Пример 2

Ситуация, когда псевдокласс `:scope` оказывается полезной, - это когда вам нужно получить прямого потомка уже извлеченного элемента.

=== "JavaScript"

    ```js
    var context = document.getElementById('context')
    var selected = context.querySelectorAll(':scope > div')

    document.getElementById(
      'results'
    ).innerHTML = Array.prototype.map
      .call(selected, function (element) {
        return '#' + element.getAttribute('id')
      })
      .join(', ')
    ```

=== "HTML"

    ```html
    <div id="context">
      <div id="element-1">
        <div id="element-1.1"></div>
        <div id="element-1.2"></div>
      </div>
      <div id="element-2">
        <div id="element-2.1"></div>
      </div>
    </div>
    <p>
      Selected elements ids :
      <span id="results"></span>
    </p>
    ```

=== "Результат"

    ![:scope](scope2.png)

## См. также

- [`:root`](root.md)
- [`:has()`](has.md)

## Ссылки

- Псевдо-класс [`:scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope) <sup><small>MDN (рус.)</small></sup>
