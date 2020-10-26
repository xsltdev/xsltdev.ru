---
description: Свойство border-bottom позволяет одновременно установить толщину, стиль и цвет нижней границы элемента
---

# border-bottom

Свойство **`border-bottom`** позволяет одновременно установить толщину, стиль и цвет нижней границы элемента.

Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит, какое из них соответствует нужному свойству.

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
