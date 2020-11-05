---
description: Псевдокласс visited применяется к ссылкам, уже посещённым пользователем, и задаёт для них стилевое оформление
---

# :visited

Псевдокласс **`:visited`** применяется к ссылкам, уже посещённым пользователем, и задаёт для них стилевое оформление.

Этот стиль может переопределяться другими относящимися к ссылкам псевдо-классами, такими как [`:link`](link.md), [`:hover`](hover.md) и [`:active`](active.md), появляющимися в соответствующем порядке. Чтобы стилизировать ссылки должным образом, вам нужно вставлять правило `:visited` до правила `:link`, но после других, определённых LVHA-порядком: `:link` — `:visited` — `:hover` — `:active`.

!!! warn

    Из-за причин приватности, браузеры строго ограничивают стили, которые вы можете применить к элементу, используя этот псевдо-класс: только `color`, `background-color`, `border-color`, `border-bottom-color`, `border-left-color`, `border-right-color`, `border-top-color`, `outline-color`, `column-rule-color`, `fill` и `stroke`. Заметьте также, что альфа-канал будет игнорироваться: будет использоваться альфа-канал, используемый для непосещённых ссылок вместо него (но если прозрачность - `0`, то в этот случае игнорируется весь цвет, и один из используемых стилей для непосещённых ссылок).

    Несмотря на то, что цвет может меняться, метод `getComputedStyle` наврёт и всегда будет давать значение цвета непосещённых ссылок.

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
    - [:scope](scope.md)
    - [:target](target.md)
    - :target-within
    - :user-invalid
    - [:valid](valid.md)
    - **:visited**
    - [:where()](where.md)

    </div>

## Синтаксис

```css
a:visited {
  /* ... */
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-visited)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#link)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#link)
- [CSS Level 2 (Revision 1)](https://www.w3.org/TR/CSS2/selector.html#link-pseudo-classes)
- [CSS Level 1](https://www.w3.org/TR/CSS1/#anchor-pseudo-classes)

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>visited</title>
    <style>
      a:link {
        color: #0000d0; /* Цвет ссылок */
      }
      a:visited {
        color: #900060; /* Цвет посещённых ссылок */
      }
    </style>
  </head>
  <body>
    <p><a href="page/1.html">Посещённая ссылка</a></p>
    <p><a href="page/2.html">Непосещённая ссылка</a></p>
    <p><a href="page/3.html">Непосещённая ссылка</a></p>
  </body>
</html>
```

## См. также

- [:link](link.md)
- [:active](active.md)
- [:hover](hover.md)

## Ссылки

- Псевдо-класс [:visited](https://developer.mozilla.org/ru/docs/Web/CSS/:visited) <sup><small>MDN (рус.)</small></sup>
