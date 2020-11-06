---
description: Свойство border-bottom позволяет одновременно установить толщину, стиль и цвет нижней границы элемента
---

# border-bottom

Свойство **`border-bottom`** позволяет одновременно установить толщину, стиль и цвет нижней границы элемента.

Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит, какое из них соответствует нужному свойству.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - **border-bottom**
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - [border-bottom-style](border-bottom-style.md)
    - [border-bottom-width](border-bottom-width.md)
    - [border-collapse](border-collapse.md)
    - [border-color](border-color.md)
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - [border-image-repeat](border-image-repeat.md)
    - [border-image-slice](border-image-slice.md)
    - [border-image-source](border-image-source.md)
    - [border-image-width](border-image-width.md)
    - [border-left](border-left.md)
    - [border-left-color](border-left-color.md)
    - [border-left-style](border-left-style.md)
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - [border-right-style](border-right-style.md)
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

## Синтаксис

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;
```

## Значения

Значение `border-bottom-width` определяет толщину границы. Для управления её видом предоставляется несколько значений свойства `border-bottom-style`. Их названия и результат действия представлен на рис. 1.

![Рис.1. Стили рамок](border_style.png)

`border-bottom-color` устанавливает цвет границы, значение может быть в любом допустимом для CSS формате.

Значение по-умолчанию: Зависит от использования

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-bottom)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#propdef-border-bottom)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#border-bottom)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-bottom</title>
    <style>
      .panel {
        background: #ccc; /* Цвет фона */
      }
      .panel p.content {
        padding: 5px; /* Добавляем поля */
        margin: 0; /* Убираем отступы у параграфа */
        border-top: 2px dotted white; /* Параметры линии вверху */
      }
      .panel p.title {
        font-family: sans-serif; /* Рубленый шрифт */
        font-weight: bold; /* Жирное начертание */
        font-size: 90%; /* Размер шрифта */
        padding: 5px; /* Добавляем поля */
        margin: 0; /* Убираем отступы у параграфа */
        background: maroon; /* Цвет фона */
        color: white; /* Цвет текста */
        border-bottom: 2px solid white; /* Параметры линии внизу */
      }
    </style>
  </head>
  <body>
    <div class="panel">
      <p class="title">
        Резкий базовый тип личности глазами современников
      </p>
      <p class="content">
        Его экзистенциальная тоска выступает как
        побудительный мотив творчества, однако пародия
        многопланово заканчивает общекультурный цикл.
      </p>
    </div>
  </body>
</html>
```
