---
description: Свойство font-family устанавливает семейство шрифта, которое будет использоваться для оформления текста содержимого
---

# font-family

Свойство **`font-family`** устанавливает семейство шрифта, которое будет использоваться для оформления текста содержимого.

Список шрифтов может включать одно или несколько названий, разделённых запятой. Если в имени шрифта содержатся пробелы, например, `Trebuchet MS`, оно должно заключаться в одинарные или двойные кавычки.

Когда браузер встречает первый шрифт в списке, он проверяет его наличие на компьютере пользователя. Если такого шрифта нет, берётся следующее имя из списка и также анализируется на присутствие. Поэтому несколько шрифтов увеличивает вероятность, что хотя бы один из них будет обнаружен на клиентском компьютере. Заканчивают список обычно ключевым словом, которое описывает тип шрифта — `serif`, `sans-serif`, `cursive`, `fantasy` или `monospace`. Таким образом, последовательность шрифтов лучше начинать с экзотических типов и заканчивать обобщённым именем, которое задаёт вид начертания.

## Синтаксис

```css
/* A font family name and a generic family name */
font-family: Gill Sans Extrabold, sans-serif;
font-family: 'Goudy Bookletter 1911', sans-serif;

/* A generic family name only */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;

/* Global values */
font-family: inherit;
font-family: initial;
font-family: unset;
```

## Значения

Любое количество имен шрифтов разделенных запятыми. Универсальные семейства шрифтов:

`serif`
: шрифты с засечками (антиквенные), типа `Times`;

`sans-serif`
: рубленные шрифты (шрифты без засечек или гротески), типичный представитель `Arial`;

`cursive`
: курсивные шрифты;

`fantasy`
: декоративные шрифты;

`monospace`
: моноширинные шрифты, ширина каждого символа в таком семействе одинакова (шрифт `Courier`).

Значение по-умолчанию: Шрифт, установленный в браузере по умолчанию. Обычно это `Times New Roman`.

Применяется ко всем элементам

## Спецификации

- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css3-fonts/#font-family-prop)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/fonts.html#propdef-font-family)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#font-family)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>font-family</title>
    <style>
      h1 {
        font-family: Geneva, Arial, Helvetica, sans-serif;
      }
      p {
        font-family: Georgia, 'Times New Roman', Times,
          serif;
      }
    </style>
  </head>
  <body>
    <h1>Танцы</h1>
    <p>
      Венгры страстно любят танцевать, особенно ценятся
      национальные танцы
    </p>
  </body>
</html>
```
