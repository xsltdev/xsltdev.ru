# :text

Селектор **`:text`** выбирает все элементы `<input>`, которые имеют атрибут `type` со значением `text`.

## Синтаксис

```js
$(':text')
```

Добавлен в версии jQuery 1.0

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Использование jQuery селектора :text.</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script>
      $(document).ready(function() {
        // выбираем все элементы <input>, которые имеют атрибут type со значением text
        $(':text').css('border', '1px solid orange')
      })
    </script>
  </head>
  <body>
    <form>
      <input type="text" placeholder="Ваш логин" />
      <br /><br />
      <input type="password" placeholder="Ваш пароль" />
      <br /><br />
      <label
        >Мужчина <input type="radio" name="sex" value="male" checked
      /></label>
      <label>Женщина <input type="radio" name="sex" value="female"/></label>
      <br /><br />
      <label
        ><input type="checkbox" name="type1" value="busy" />Женат /
        замужем</label
      >
      <br /><br />
      <label
        ><input type="checkbox" name="type2" value="free" />Холост / -а</label
      >
      <br /><br />
      <label
        ><input type="checkbox" name="type3" value="childfree" />Дети</label
      >
      <br /><br />
      <input type="reset" />
      <input type="submit" value="Продолжить" />
    </form>
  </body>
</html>
```

В этом примере с использованием селектора `:text` мы выбрали и стилизовали все элементы `<input>`, которые имеют атрибут `type` со значением `text`.

Результат:

![Пример использования jQuery селектора :text](948.png)

Пример использования jQuery селектора :text.
