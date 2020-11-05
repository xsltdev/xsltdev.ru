---
description: Псевдокласс :focus-within определяет стиль элемента, когда он сам или элементы внутри него получают фокус
---

# :focus-within

Псевдокласс **`:focus-within`** определяет стиль элемента, когда он сам или элементы внутри него получают фокус. В отличие от [`:focus`](focus.md), который применяется непосредственно к самому элементу, `:focus-within` работает для родителя. Это позволяет выделять цветом или другими методами всю форму или отдельные её части, когда пользователь работает с полями формы.

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
    - **:focus-within**
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
*:focus-within {
  property: value;
}
```

## Сертификат

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-focus-within-pseudo)

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>:focus-within</title>
    <style>
      div {
        padding: 10px; /* Поля вокруг текста */
      }
      div:focus-within {
        background: #def0e7; /* Цвет фона */
      }
    </style>
  </head>
  <body>
    <form action="/example/handler.php">
      <div>Введите ваше имя: <input name="user" /></div>
      <p><button>Отправить</button></p>
    </form>
  </body>
</html>
```

В данном примере меняется цвет фона у `<div>`, когда текстовое поле внутри него получает фокус (рис. 1).

![Рис. 1. Использование :focus-within](focus-within.png)
