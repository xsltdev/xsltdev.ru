# text-decoration

Свойство **`text-decoration`** добавляет оформление текста в виде его подчёркивания, перечёркивания или линии над текстом.

Одновременно можно применить более одного стиля, перечисляя значения через пробел.

## Синтаксис

```css
text-decoration: none;
text-decoration: underline red;
text-decoration: underline wavy red;

text-decoration: inherit;
text-decoration: initial;
text-decoration: unset;
```

## Значения

`line-through`
: Создает перечёркнутый текст (пример).

`overline`
: Линия проходит над текстом (пример).

`underline`
: Устанавливает подчёркнутый текст (пример).

`none`
: Отменяет все эффекты, в том числе и подчёркивание у ссылок, которое задано по умолчанию.

Значение по-умолчанию:

```css
text-decoration: none;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Text Decoration Level 3](http://dev.w3.org/csswg/css-text-decor-3/#text-decoration-property)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/text.html#lining-striking-props)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#text-decoration)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>text-decoration</title>
    <style>
      a {
        text-decoration: none; /* Убираем подчеркивание у ссылок */
      }
      a:hover {
        text-decoration: underline; /* Добавляем подчёркивание 
									   при наведении курсора мыши на ссылку */
      }
    </style>
  </head>
  <body>
    <p><a href="page/1.html">Стратегическое нападение</a></p>
  </body>
</html>
```
