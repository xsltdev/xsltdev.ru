# .focus()

Метод **`.focus()`** привязывает JavaScript обработчик событий "`focus`" (получение фокуса элементом), или запускает это событие на выбранный элемент.

## Синтаксис

Синтаксис 1.0:

```js
$(selector).focus() // метод используется без параметров
$(selector).focus(handler)
```

- `handler` - `Function( Event eventObject )`

Синтаксис 1.4.3:

```js
$(selector).focus(eventData, handler)
```

- `eventData` - `Anything`
- `handler` - `Function( Event eventObject )`

Метод `.focus()`, используемый вместе с функцией, переданной в качестве параметра (`handler`) является, короткой записью метода `.on()`, а без параметра является короткой записью метода `.trigger()`:

```js
$(selector).on('focus', handler)
$(selector).trigger('focus')
```

Добавлен в версии jQuery 1.0 (синтаксис обновлен в версии 1.4.3)

## Параметры

`eventData`
: Объект, содержащий данные, которые будут переданы в обработчик событий.

`handler`
: Функция, которая будет выполнена каждый раз, когда событие срабатывает. Функция в качестве параметра может принимать объект `Event`.

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Использование jQuery метода .focus() (без параметров и с функцией)
    </title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script>
      $(document).ready(function() {
        $('button').click(function() {
          // задаем функцию при нажатиии на элемент <button>
          $('div').focus() // вызываем событие focus на элементе <div>
        })
        $('input').focus(function() {
          // задаем функцию при получении фокуса элементом <input>
          // добавляем элементу <input> атрибут placeholder со значением focus
          $('div').attr('placeholder', 'focus')
        })
        $('input').blur(function() {
          // задаем функцию при потери фокуса элементом <input>
          // добавляем элементу <input> атрибут placeholder со значением blur
          $('div').attr('placeholder', 'blur')
        })
      })
    </script>
  </head>
  <body>
    <button>Клик</button>
    <input />
  </body>
</html>
```

В этом примере с использованием метода `.focus()` мы при нажатии на элемент `<button>` (кнопка) вызываем событие "`focus`" на элементе `<input>`. Самому элементу `<input>` задаем, что при срабатывании события "`focus`" на элементе выполнить функцию, которая с использованием метода `.attr()` добавляет атрибут `placeholder` со значением `focus`.

Кроме того, мы с использованием метода `.blur()` устанавливаем, что при получении фокуса элементом `<input>` вызвать функцию, которая с использованием метода `.attr()` добавляет атрибут `placeholder` со значением `blur`.

Результат:

![Пример использования метода focus]()

Пример использования метода `.focus()` (без параметров и с функцией)
