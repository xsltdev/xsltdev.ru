# pointer-events

Свойство **`pointer-events`** позволяет управлять тем, как элементы будут реагировать на события мыши или прикосновения к сенсорному экрану.

Часто применяется для того, чтобы в сложной компоновке можно было взаимодействовать с нижележащими элементами, игнорируя вышележащие.

## Синтаксис

```css
/* Keyword values */
pointer-events: auto;
pointer-events: none;
pointer-events: visiblePainted; /* SVG only */
pointer-events: visibleFill; /* SVG only */
pointer-events: visibleStroke; /* SVG only */
pointer-events: visible; /* SVG only */
pointer-events: painted; /* SVG only */
pointer-events: fill; /* SVG only */
pointer-events: stroke; /* SVG only */
pointer-events: all; /* SVG only */

/* Global values */
pointer-events: inherit;
pointer-events: initial;
pointer-events: unset;
```

## Значения

`auto`
: Восстанавливает функциональность элемента по умолчанию.

`none`
: Предотвращает события мыши и щелчки по элементу.

Значение по-умолчанию:

```css
pointer-events: auto;
```

Применяется к: Ко всем элементам

## Спецификации

- [Scalable Vector Graphics (SVG) 1.1 (Second Edition)](http://www.w3.org/TR/SVG11/interact.html#PointerEventsProperty)

## Поддержка браузерами

<p class="ciu_embed" data-feature="pointer-events" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=pointer-events">Can I Use pointer-events?</a> Data on support for the pointer-events feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>pointer-events</title>
    <style>
      .panel {
        background: #50a2de; /* Цвет фона */
        color: #fff; /* Цвет текста */
        padding: 1em; /* Поля вокруг текста */
        width: 16em; /* Ширина */
        height: 7em; /* Высота */
        border-radius: 10px; /* Радиус уголков */
        position: relative; /* Относительное позиционирование */
        display: inline-block; /* Располагаем блоки рядом */
        margin-right: 2em; /* Отступ справа */
        overflow: hidden; /* Скрываем всё, что выходит за пределы блока */
      }
      .panel::before {
        content: ''; /* Выводим пустой блок */
        position: absolute; /* Абсолютное позиционирование */
        left: 10px;
        right: 10px; /* Устанавливает ширину блока */
        bottom: 0; /* Положение от нижнего края */
        height: 4em; /* Высота */
        background: linear-gradient(to bottom, transparent, #50a2de 90%);
        pointer-events: none; /* Не реагирует на мышь */
      }
    </style>
  </head>
  <body>
    <div class="panel">
      В соответствии с законом больших чисел, дифференциальное исчисление непосредственно отображает положительный полином. Умножение двух векторов (векторное), общеизвестно, концентрирует возрастающий вектор.
    </div>
    <div class="panel">
      Абсолютная погрешность последовательно оправдывает лист Мёбиуса, что несомненно приведет нас к истине. Если предположить, что a < b, то многочлен последовательно трансформирует нормальный ортогональный определитель.
    </div>
  </body>
</html>
```
