---
description: Свойство border-bottom-style устанавливает стиль границы внизу элемента
---

# border-bottom-style

Свойство **`border-bottom-style`** устанавливает стиль границы внизу элемента.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - **border-bottom-style**
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
/* Keyword values */
border-bottom-style: none;
border-bottom-style: hidden;
border-bottom-style: dotted;
border-bottom-style: dashed;
border-bottom-style: solid;
border-bottom-style: double;
border-bottom-style: groove;
border-bottom-style: ridge;
border-bottom-style: inset;
border-bottom-style: outset;

/* Global values */
border-bottom-style: inherit;
border-bottom-style: initial;
border-bottom-style: unset;
```

## Значения

`none`
: Линия не отображается и значение её толщины обнуляется.

`hidden`
: Имеет тот же эффект, что и `none` за исключением применения `border-bottom-style` к ячейкам таблицы, у которой значение свойства [`border-collapse`](border-collapse.md) установлено как `collapse`. В этом случае нижняя граница в ячейке не будет отображаться вообще.

`dotted`
: Линия состоящая из набора точек.

`dashed`
: Пунктирная линия, состоящая из серии коротких отрезков.

`solid`
: Сплошная линия.

`double`
: Двойная линия.

`groove`
: Создает эффект вдавленной линии.

`ridge`
: Создает эффект рельефной линии.

`inset`
: Псевдотрехмерная линия.

`outset`
: Псевдотрехмерная линия.

Вид указанных стилей представлен на рис. 1.

![Рис.1. Стили границ](border_style_1.png)

Значение по-умолчанию: Нет

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-bottom-style)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-style-properties)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-bottom-style</title>
    <style>
      .panel {
        background: #ccc; /* Цвет фона */
      }
      .panel p {
        padding: 5px; /* Добавляем поля */
        margin: 0; /* Убираем отступы у абзаца */
      }
      .title {
        background: navy; /* Цвет фона */
        color: white; /* Цвет текста */
        border-bottom-width: 2px; /* Толщина линии внизу */
        border-bottom-style: solid; /* Стиль линии внизу */
        border-bottom-color: white; /* Цвет линии внизу */
      }
    </style>
  </head>
  <body>
    <div class="panel">
      <p class="title">Флэнжер</p>
      <p>
        Флэнжер изящно дает конструктивный рефрен, потому
        что современная музыка не запоминается.
      </p>
    </div>
  </body>
</html>
```
