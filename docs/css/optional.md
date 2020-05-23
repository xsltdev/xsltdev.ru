# :optional

Псевдо-класс **`:optional`** находит любые `<input>` элементы, у которых не установлен атрибут `required`. Он позволяет формам легко отмечать необязательные поля, и давать им соответствующие стили.

Чтобы задать особый внешний вид обязательным полям формы можно использовать псевдо-класс [`:required`](required.md).

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
      <p>Возраст: <input type="number" min="18" required name="old" /></p>
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

- [:optional](https://developer.mozilla.org/ru/docs/Web/CSS/:optional) на MDN
