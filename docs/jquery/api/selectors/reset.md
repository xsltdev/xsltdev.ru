# :reset

Селектор **`:reset`** выбирает все элементы `<input>` и `<button>`, которые имеют атрибут `type` со значением `reset`.

## Синтаксис

```js
$(':reset')
```

Добавлен в версии jQuery 1.0

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Использование jQuery селектора :reset</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script>
      $(document).ready(function() {
        $(':reset').css('border', '1px solid orange') // выбираем все элементы <input> и <button>, которые имеют атрибут type со значением reset.
      })
    </script>
  </head>
  <body>
    <form>
      <input type="text" placeholder="Ваш логин" /><br /><br />
      <input type="password" placeholder="Ваш пароль" /><br /><br />
      <label
        >Мужчина <input type="radio" name="sex" value="male" checked
      /></label>
      <label>Женщина <input type="radio" name="sex" value="female"/></label
      ><br /><br />
      <label
        ><input type="checkbox" name="type1" value="busy" />Женат /
        замужем</label
      ><br /><br />
      <label
        ><input type="checkbox" name="type2" value="free" />Холост / -а</label
      ><br /><br />
      <label><input type="checkbox" name="type3" value="childfree" />Дети</label
      ><br /><br />
      <input type="reset" /><input type="submit" value="Продолжить" />
      <button type="reset">Сбросить</button>
    </form>
  </body>
</html>
```

В этом примере с использованием селектора `:reset` мы выбрали и стилизовали все элементы `<input>` и `<button>`, которые имеют атрибут `type` со значением `reset`.

Результат:

![Пример использования jQuery селектора :reset](943.png)

Пример использования jQuery селектора `:reset`.
