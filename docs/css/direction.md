---
direction: Свойство direction предназначено для сайтов, в которых имеет значение направление текста
---

# direction

Свойство **`direction`** предназначено для сайтов, в которых имеет значение направление текста.

Например, при использовании арабского алфавита чтение происходит справа налево.

Свойство `direction` достаточно универсально и управляет следующими возможностями:

- способ отображения текста в блоке;
- порядок колонок в таблице;
- позиция полосы прокрутки в блоке;
- положение последней висячей строки текстового блока при `text-align: justify`.

Для использования со встроенными элементами, значение свойства [`unicode-bidi`](unicode-bidi.md) должно быть задано как `embed` или `override`.

## Синтаксис

```css
/* Keyword values */
direction: ltr;
direction: rtl;

/* Global values */
direction: inherit;
direction: initial;
direction: unset;
```

## Значения

`ltr`
: Устанавливает направление слева направо.

`rtl`
: Задаёт направление справа налево.

### Примечание

При добавлении свойства `direction` со значением `rtl` к блоку с полосой прокрутки (например, [`<textarea>`](../html/textarea.md)), браузер Internet Explorer и Firefox отображают скроллинг слева, а Opera и Safari — справа.

Значение по-умолчанию:

```css
direction: ltr;
```

Применяется ко всем элементам

## Спецификации

- [CSS Writing Modes Module Level 3](http://dev.w3.org/csswg/css3-writing-modes/#direction)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visuren.html#direction)

## Описание и примеры

Пример 1.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>direction</title>
    <style>
      div.rtl {
        direction: rtl; /* Направление */
        width: 200px; /* Ширина блока */
        height: 150px; /* Высота блока */
        overflow: scroll; /* Полоса прокрутки */
        text-align: left; /* Выравнивание по левому краю */
        padding: 5px; /* Поля вокруг текста */
        border: 1px solid #000; /* Параметры рамки */
      }
    </style>
  </head>
  <body>
    <div class="rtl">
      Велосипед уже изобрели, различные приемы верстки тоже. Так что больше
      знакомься с мировым опытом по части верстки и тебе не придется тратить
      время на разработку того, что всем давно известно.
    </div>
  </body>
</html>
```

Пример 2.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>direction</title>
    <style>
      table {
        direction: rtl; /* Колонки идут справа налево */
        width: 100%; /* Ширина таблицы */
        border-spacing: 0; /* Убираем пространство между ячейками */
      }
    </style>
  </head>
  <body>
    <table border="1">
      <tr>
        <td></td>
        <td>1999</td>
        <td>2000</td>
        <td>2001</td>
        <td>2002</td>
        <td>2003</td>
      </tr>
      <tr>
        <td>Нефть</td>
        <td>16</td>
        <td>34</td>
        <td>62</td>
        <td>74</td>
        <td>57</td>
      </tr>
      <tr>
        <td>Золото</td>
        <td>4</td>
        <td>69</td>
        <td>72</td>
        <td>56</td>
        <td>47</td>
      </tr>
      <tr>
        <td>Дерево</td>
        <td>7</td>
        <td>73</td>
        <td>79</td>
        <td>34</td>
        <td>86</td>
      </tr>
    </table>
  </body>
</html>
```
