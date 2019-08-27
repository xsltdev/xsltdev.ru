# Селектор элемента

Селектор элемента выбирает все HTML элементы с определенным именем элемента (имя тега узлов дерева DOM).

Для поиска элемента, библиотека jQuery использует функцию JavaScript `document.getElementByTagName()`, вследствие чего, поиск элемента происходит быстро.

## Синтаксис

```js
$('element')
```

Добавлен в версии jQuery 1.0

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Использование jQuery селектора элемента</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script>
      $(document).ready(function() {
        $('a').css('text-decoration', 'none') // выбираем все HTML элементы <a> и убираем декорирование (нижнее подчеркивание)
      })
    </script>
  </head>
  <body>
    <a href="#">Ссылка 1</a>
    <div>
      <a href="#">Ссылка 2</a>
    </div>
  </body>
</html>
```

В этом примере с использованием jQuery селектора элемента мы выбрали все элементы `<a>` в документе и стилизовали их с использованием CSS свойства `text-decoration` (убрали декорирование текста - нижнее подчеркивание).

Результат нашего примера:

![Пример использования jQuery селектора элемента.](994.png)

Пример использования jQuery селектора элемента.

## Ссылки

- [Element Selector (“element”)](https://api.jquery.com/element-selector/)
