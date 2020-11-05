# :optional

Псевдо-класс **`:optional`** находит любые `<input>` элементы, у которых не установлен атрибут `required`. Он позволяет формам легко отмечать необязательные поля, и давать им соответствующие стили.

Чтобы задать особый внешний вид обязательным полям формы можно использовать псевдо-класс [`:required`](required.md).

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
    - **:optional**
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

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/#selector-optional)
- [HTML5](https://www.w3.org/TR/html50/#selector-optional)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#opt-pseudos)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-required-value)

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>:optional</title>
    <style>
      input:optional {
        opacity: 0.5; /* Полупрозрачность */
      }
    </style>
  </head>
  <body>
    <form action="handler.php">
      <p>Пожалуйста, укажите ваше имя и возраст.</p>
      <p>Имя: <input name="name" /></p>
      <p>
        Возраст:
        <input type="number" min="18" required name="old" />
      </p>
      <p><input type="submit" value="Отправить" /></p>
    </form>
  </body>
</html>
```

В данном примере необязательное текстовое поле делается полупрозрачным с помощью свойства [`opacity`](opacity.md).

## См. также

- [:required](required.md)
- [:invalid](invalid.md)
- [:valid](valid.md)

## Ссылки

- Псевдо-класс [:optional](https://developer.mozilla.org/ru/docs/Web/CSS/:optional) <sup><small>MDN (рус.)</small></sup>
