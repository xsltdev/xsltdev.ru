---
description: Псевдокласс :not задаёт правила стилей для элементов, которые не содержат указанный селектор
---

# :not()

Псевдокласс **`:not`** задаёт правила стилей для элементов, которые не содержат указанный селектор.

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
    - **:not()**
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

```
Селектор:not(<Селектор>) {
	...
}
```

В качестве селектора могут указываться единичные псевдоклассы, теги, идентификаторы, классы и селекторы атрибутов. Нельзя использовать псевдокласс `:not` (конструкция `:not(:not(...))` запрещена) и псевдоэлементы.

## Сертификаты

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#negation)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#negation)

## Пример 1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>not</title>
    <style>
      input:not([type='submit']) {
        border: 1px solid #ccc;
        padding: 3px;
      }
    </style>
  </head>
  <body>
    <form action="handler.php">
      <p>Ваше имя: <input name="user" /></p>
      <p>
        Прилагаемый файл: <input type="file" name="file" />
      </p>
      <p><input type="submit" value="Отправить" /></p>
    </form>
  </body>
</html>
```

В данном примере стиль применяется ко всем элементам `<input>` за исключением того, в параметрах которого установлено `type="submit"` (кнопка «Отправить»). Результат примера показан на рис. 1.

![not](css_not.png)

## Пример 2

=== "HTML"

    ```html
    <p>I am a paragraph.</p>
    <p class="fancy">I am so very fancy!</p>
    <div>I am NOT a paragraph.</div>
    ```

=== "CSS"

    ```css
    .fancy {
      text-shadow: 2px 2px 3px gold;
    }

    /* <p> elements that are not in the class `.fancy` */
    p:not(.fancy) {
      color: green;
    }

    /* Elements that are not <p> elements */
    body :not(p) {
      text-decoration: underline;
    }

    /* Elements that are not <div> and not <span> elements */
    body :not(div):not(span) {
      font-weight: bold;
    }

    /* Elements that are not `.crazy` or `.fancy` */
    /* Note that this syntax is not well supported yet. */
    body :not(.crazy, .fancy) {
      font-family: sans-serif;
    }
    ```

## Ссылки

- [`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) <sup><small>MDN (рус.)</small></sup>
