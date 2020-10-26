---
description: Псевдокласс required применяет стилевые правила к элементу input, у которого установлен атрибут required
---

# :required

Псевдокласс **`:required`** применяет стилевые правила к элементу [`<input>`](/html/input/), у которого установлен атрибут `required`, он позволяет выделять поля обязательные к заполнению перед отправкой формы.

## Синтаксис

```css
input:required {
  /* ... */
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-required)
- [HTML5](https://www.w3.org/TR/html50/disabled-elements.html#selector-required)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#opt-pseudos)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-required-value)

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Комментарии</title>
    <style>
      #comment p {
        margin: 0 0 5px; /* Отступ снизу */
      }
      #comment label {
        width: 110px; /* Ширина текста */
        float: left; /* Выстраиваем по горизонтали */
        text-align: right; /* Текст по правому краю */
        padding-right: 10px; /* Поле справа */
      }
      #comment input[type='text'],
      #comment textarea {
        width: 320px; /* Ширина текстовых полей */
      }
      input:required {
        border: 1px solid red; /* Красная рамка для обязательных полей */
      }
    </style>
  </head>
  <body>
    <form id="comment">
      <p>
        <label for="user">Имя</label>
        <input id="user" type="text" required />
      </p>

      <p>
        <label for="email">E-mail</label
        ><input id="email" type="text" />
      </p>
      <p>
        <label for="text">Комментарий</label>
        <textarea cols="40" rows="10" id="text"></textarea>
      </p>
      <p>
        <label>&nbsp;</label
        ><input type="submit" id="send" value="Отправить" />
      </p>
    </form>
  </body>
</html>
```

В данном примере обязательным считается поле для ввода имени, оно выделяется красной рамкой за счёт применения псевдокласса `:required`. Результат:

![Использование псевдокласса :required](css_required.png)

## См. также

- [:optional](optional.md)
- [:invalid](invalid.md)
- [:valid](valid.md)

## Ссылки

- [:required](https://developer.mozilla.org/ru/docs/Web/CSS/:required) на MDN
