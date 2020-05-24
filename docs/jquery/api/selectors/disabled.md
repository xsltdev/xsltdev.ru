# :disabled

Селектор **`:disabled`** выбирает все элементы, которые не активны (у которых установлен логический атрибут `disabled`).

Селектор `:disabled` применяется только к следующим элементам:

- `<button>` - кнопка
- `<input>` - пользовательское поле для ввода информации
- `<optgroup>` - группировка связанных данных в раскрывающемся списке
- `<option>` - пункт списка
- `<select>` - раскрывающийся (выпадающий) список
- `<textarea>` - область многострочного ввода
- `<menuitem>` - определяет элемент меню
- `<fieldset>` - служит для визуальной группировки элементов

## Синтаксис

```js
$(':disabled')
```

Добавлен в версии jQuery 1.0

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Использование jQuery селектора :disabled</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script>
      $(document).ready(function() {
        $(':disabled').css('border', '2px solid green') // выбираем все элементы, которые имеют логический атрибут disabled.
      })
    </script>
  </head>
  <body>
    <form>
      <input type="text" /><br /><br />
      <input type="text" disabled /><br /><br />
      <button>Кнопка</button><br /><br />
      <button disabled>Кнопка</button>
    </form>
  </body>
</html>
```

В этом примере с использованием селектора `:disabled` мы выбрали и стилизовали все элементы `<input>` и `<button>`, которые имеют логический атрибут `disabled`.

Результат:

![Пример использования jQuery селектора :disabled](938.png)

Пример использования jQuery селектора `:disabled`.
