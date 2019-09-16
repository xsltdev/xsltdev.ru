# Селектор :first

Селектор `:first` выбирает первый элемент дерева DOM.

Чтобы выбрать последний элемент дерева DOM необходимо воспользоваться jQuery селектором [`:last`](selector:last.md).

## Синтаксис

```js
$('selector:first')
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

В этом примере с использованием селектора `:first` мы выбрали и стилизовали первый элемент `<p>` в документе, а с помощью селектора `:last` мы выбрали последний элемент `<p>`.

Результат нашего примера:

![Пример использования jQuery селекторов :first и :last.](988.png)

Пример использования jQuery селекторов `:first` и `:last`.
