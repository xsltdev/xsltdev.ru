# :last

Селектор `:last` выбирает последний элемент дерева DOM.

Чтобы выбрать первый элемент дерева DOM необходимо воспользоваться jQuery селектором [`:first`](selector:first.md).

## Синтаксис

```js
$('selector:last')
```

Добавлен в версии jQuery 1.0

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Использование jQuery селекторов :first и :last.</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script>
      $(document).ready(function() {
        $('p:first').css('background-color', 'green') // выбираем первый элемент <p> в документе
        $('p:last').css('background-color', 'yellow') // выбираем последний элемент <p> в документе
      })
    </script>
  </head>
  <body>
    <h2>Заголовок второго уровня</h2>
    <div>
      <p>Первый абзац</p>
    </div>
    <p>Второй абзац</p>
    <div>
      <p>Последний абзац</p>
    </div>
  </body>
</html>
```

В этом примере с использованием селектора `:last` мы выбрали и стилизовали последний элемент `<p>` в документе, а с помощью селектора `:first` мы выбрали первый элемент `<p>`.

Результат нашего примера:

![Пример использования jQuery селекторов :first и :last.](988.png)

Пример использования jQuery селекторов `:first` и `:last`.
