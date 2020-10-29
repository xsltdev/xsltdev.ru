---
description: Псевдокласс :active соответствует элементу в момент, когда он активируется пользователем
---

# :active

Псевдокласс **`:active`** соответствует элементу в момент, когда он активируется пользователем.

Он позволяет странице среагировать, когда элемент активируется. Взаимодействие элемента с мышью — это, как правило, время между нажатием и отпусканием пользователем кнопки мыши. Также псевдокласс `:active` срабатывает при использовании клавишы `TAB` на клавиатуре. Обычно это используется для HTML-элементов [`<a>`](/html/a/) и [`<button>`](/html/button/), но может применяться и к другим элементам.

Это свойство может быть переопределено любыми другими псевдоклассами, относящимся к ссылке, такими как `:link`, `:hover` и `:visited`, описанными в последующих правилах. Чтобы стилизировать нужные ссылки, вам нужно ставить правило `:active` после всех других правил, относящихся к ссылке, как определено правилом LVHA-порядком: `:link` — `:visited` — `:hover` — `:active`.

Примечание: В системах с много-кнопочными мышами, CSS3 указывает, что псевдокласс `:active` должен применяться только к первой кнопке; для праворуких мышей — это обычно самая левая кнопка.

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

- [:active](https://developer.mozilla.org/ru/docs/Web/CSS/:active) <sup><small>MDN (рус.)</small></sup>
