---
description: Тег dialog (от англ. dialog - диалог) задает диалоговое окно, в котором можно выводить сообщение или форму, например, для входа на сайт
---

# &lt;dialog&gt;

Тег **`<dialog>`** _(от англ. **dialog** - диалог)_ задает диалоговое окно, в котором можно выводить сообщение или форму, например, для входа на сайт.

Диалоговое окно отображается со следующим предустановленным стилем.

```css
position: absolute;
left: 0;
right: 0;
margin: auto;
border: solid;
padding: 1em;
background: white;
color: black;
```

Таким образом диалоговое окно отображается с белым фоном, чёрной рамкой и по центру горизонтальной оси. Ширина совпадает с шириной родительского контейнера.

Для отображения и сокрытия диалогового окна применяются, соответственно, методы `show()` и `hide()`, как показано в примере ниже. Кроме того, диалог можно превратить в модальное окно, используя вместо `show()` метод `showModal()`. В этом случае остальные элементы на странице блокируются — текст нельзя выделить, а кнопки нажать до тех пор, пока диалоговое окно не будет закрыто. Также модальное окно можно закрыть клавишей `Esc`.

??? info "Интерактивные элементы"

    <div class="col4" markdown="1">

    - [details](details.md)
    - **dialog**
    - [summary](summary.md)

    </div>

## Поддержка браузерами

<p class="ciu_embed" data-feature="dialog" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=dialog">Can I Use dialog?</a> Data on support for the dialog feature across the major browsers from caniuse.com.
</p>

Полифилы для включения поддержки:

- [`<dialog>` polyfill](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#dialog)

## Синтаксис

```html
<dialog open>...</dialog>
```

Закрывающий тег обязателен.

## Атрибуты

`open`
: Отображает диалоговое окно. Без этого атрибута в стилях к нему добавляется `display: none` и окно не выводится в браузере.

Для этого элемента также доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/forms.html#the-dialog-element)
- [HTML 5.1](http://www.w3.org/html/wg/drafts/html/master/interactive-elements.html#the-dialog-element)
- [HTML 5.2](https://www.w3.org/TR/html52/interactive-elements.html#elementdef-dialog)

## Описание и примеры

### Пример 1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>dialog</title>
    <style>
      body {
        background: url(/example/image/shark.jpg) no-repeat;
        background-size: cover;
      }
      dialog {
        background: rgba(255, 255, 255, 0.7);
        width: 300px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <button id="openDialog">Открыть окно</button>
    <dialog>
      <p>
        Полинезийцы называют Млечный путь Манго-Роа-И-Ата,
        что в переводе с маори означает «Длинная акула на
        рассвете».
      </p>
      <p><button id="closeDialog">Закрыть окно</button></p>
    </dialog>
    <script>
      var dialog = document.querySelector('dialog')
      document.querySelector(
        '#openDialog'
      ).onclick = function () {
        dialog.show() // Показываем диалоговое окно
      }
      document.querySelector(
        '#closeDialog'
      ).onclick = function () {
        dialog.close() // Прячем диалоговое окно
      }
    </script>
  </body>
</html>
```

### Пример 2

```html
<dialog open>
  <p>Greetings, one and all!</p>
</dialog>
```

### Пример 3

```html
<!-- Простой попап диалог с формой -->
<dialog id="favDialog">
  <form method="dialog">
    <section>
      <p>
        <label for="favAnimal">Favorite animal:</label>
        <select id="favAnimal">
          <option></option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </p>
    </section>
    <menu>
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>

<script>
  ;(function () {
    var updateButton = document.getElementById(
      'updateDetails'
    )
    var cancelButton = document.getElementById('cancel')
    var favDialog = document.getElementById('favDialog')

    // Update button opens a modal dialog
    updateButton.addEventListener('click', function () {
      favDialog.showModal()
    })

    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function () {
      favDialog.close()
    })
  })()
</script>
```

## Ссылки

- Тег [`<dialog>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog) <sup><small>MDN (рус.)</small></sup>
