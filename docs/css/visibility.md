---
description: Свойство visibility предназначено для отображения или скрытия элемента, включая рамку вокруг него и фон
---

# visibility

Свойство **`visibility`** предназначено для отображения или скрытия элемента, включая рамку вокруг него и фон.

При скрытии элемента, хотя он и становится не виден, место, которое элемент занимает, остается за ним. Если предполагается вывод разных элементов в одно и то же место экрана, для обхода этой особенности следует использовать абсолютное позиционирование или воспользоваться свойством [`display`](display.md).

??? info "Блоки"

    <div class="col3" markdown="1">

    - [height](height.md)
    - [width](width.md)
    - [max-height](max-height.md)
    - [max-width](max-width.md)
    - [min-height](min-height.md)
    - [min-width](min-width.md)

    </div>

    <div class="col3" markdown="1">

    - [margin](margin.md)
    - [margin-bottom](margin-bottom.md)
    - [margin-left](margin-left.md)
    - [margin-right](margin-right.md)
    - [margin-top](margin-top.md)
    - [margin-trim](margin-trim.md)

    </div>

    <div class="col3" markdown="1">

    - [padding](padding.md)
    - [padding-bottom](padding-bottom.md)
    - [padding-left](padding-left.md)
    - [padding-right](padding-right.md)
    - [padding-top](padding-top.md)

    </div>

    <div class="col3" markdown="1">

    - [overflow](overflow.md)
    - [overflow-x](overflow-x.md)
    - [overflow-y](overflow-y.md)
    - **visibility**

    </div>

## Синтаксис

```css
/* Keyword values */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Global values */
visibility: inherit;
visibility: initial;
visibility: unset;
```

## Значения

`visible`
: Отображает элемент как видимый.

`hidden`
: Элемент становится невидимым или правильней сказать, полностью прозрачным, поскольку он продолжает участвовать в форматировании страницы.

`collapse`
: Если это значение применяется не к строкам или колонкам таблицы, то результат его использования будет таким же, как `hidden`. В случае использования `collapse` для содержимого ячеек таблиц, то они реагируют, словно к ним было добавлено [`display: none`](display.md). Иными словами, заданные строки и колонки убираются, а таблица перестраивается по новой. Это значение не поддерживается браузером Internet Explorer.

### Примечание

- Internet Explorer до версии 7.0 включительно не поддерживает значение `collapse`.
- Браузер Safari до версии 4.0 не поддерживает значение `collapse`.
- Opera до версии 9.5 воспринимает значение `collapse` как `hidden` для всех элементов.

Значение по-умолчанию: `visible`

Применяется ко всем элементам

## Спецификации

- [CSS Basic Box Model](http://dev.w3.org/csswg/css3-box/#the-visibility-property)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visufx.html#visibility)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>visibility</title>
    <style>
      .button {
        background: #fc0;
        padding: 10px 20px;
        display: inline-block;
      }
      .descr {
        visibility: hidden;
      }
      .button:hover + .descr {
        visibility: visible;
      }
    </style>
  </head>
  <body>
    <div class="button">Кнопка</div>
    <p class="descr">
      Данная эксклюзия является подмножеством
      астрациональных супремативных монотенных федоний
      кадонарного экстрафазория.
    </p>
  </body>
</html>
```
