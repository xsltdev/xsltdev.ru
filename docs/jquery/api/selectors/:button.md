# :button

Селектор **`:button`** выбирает все элементы `<input>` и `<button>`, которые имеют атрибут `type` со значением `button`.

## Синтаксис

```js
$(':button')
```

Добавлен в версии jQuery 1.0

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Использование jQuery селектора :button</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script>
      $(document).ready(function() {
        $(':button').css('border', '1px solid orange') // выбираем все элементы <input> и <button>, которые имеют атрибут type со значением button.
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
      <input type="reset" /><input type="button" value="Кнопка" />
      <button type="button">Кнопка</button>
    </form>
  </body>
</html>
```

В этом примере с использованием селектора `:button` мы выбрали и стилизовали все элементы `<input>` и `<button>`, которые имеют атрибут `type` со значением `button`.

Результат:

![Пример использования jQuery селектора :button](942.png)

Пример использования jQuery селектора `:button`.
