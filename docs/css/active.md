---
description: Псевдокласс :active соответствует элементу в момент, когда он активируется пользователем
---

# :active

Псевдокласс **`:active`** соответствует элементу в момент, когда он активируется пользователем.

Он позволяет странице среагировать, когда элемент активируется. Взаимодействие элемента с мышью — это, как правило, время между нажатием и отпусканием пользователем кнопки мыши. Также псевдокласс `:active` срабатывает при использовании клавишы `TAB` на клавиатуре. Обычно это используется для HTML-элементов [`<a>`](/html/a/) и [`<button>`](/html/button/), но может применяться и к другим элементам.

Это свойство может быть переопределено любыми другими псевдоклассами, относящимся к ссылке, такими как `:link`, `:hover` и `:visited`, описанными в последующих правилах. Чтобы стилизировать нужные ссылки, вам нужно ставить правило `:active` после всех других правил, относящихся к ссылке, как определено правилом LVHA-порядком: `:link` — `:visited` — `:hover` — `:active`.

Примечание: В системах с много-кнопочными мышами, CSS3 указывает, что псевдокласс `:active` должен применяться только к первой кнопке; для праворуких мышей — это обычно самая левая кнопка.

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - **:active**
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
/* Selects any <a> that is being activated */
a:active {
  color: red;
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html#selector-active)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#active-pseudo)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#useraction-pseudos)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/selector.html#dynamic-pseudo-classes)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#anchor-pseudo-classes)

## Описание и примеры

=== "HTML"

    ```html
    <a href="#">This link will turn lime while you click on it.</a>
    ```

=== "CSS"

    ```css
    /* Unvisited links */
    a:link {
      color: blue;
    }
    /* Visited links */
    a:visited {
      color: purple;
    }
    /* User hovers */
    a:hover {
      background: yellow;
    }
    /* Active links */
    a:active {
      color: lime;
    }
    ```

## См. также

- Связанные псевдоклассы [`:link`](link.md), [`:visited`](visited.md), [`:hover`](hover.md)

## Ссылки

- Псевдо-класс [`:active`](https://developer.mozilla.org/ru/docs/Web/CSS/:active) <sup><small>MDN (рус.)</small></sup>
