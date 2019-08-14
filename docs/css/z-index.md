# z-index

Любые позиционированные элементы на веб-странице могут накладываться друг на друга в определенном порядке, имитируя тем самым третье измерение, перпендикулярное экрану.

Каждый элемент может находиться как ниже, так и выше других объектов веб-страницы, их размещением по z-оси и управляет **`z-index`**. Это свойство работает только для элементов, у которых значение [`position`](position.md) задано как `absolute`, `fixed` или `relative`.

## Синтаксис

```css
/* Keyword value */
z-index: auto;

/* <integer> values */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Negative values to lower the priority */

/* Global values */
z-index: inherit;
z-index: initial;
z-index: unset;
```

## Значения

В качестве значения используются целые числа (положительные, отрицательные и ноль). Чем больше значение, тем выше находится элемент по сравнению с теми элементами, у которых оно меньше. При равном значении `z-index`, на переднем плане находится тот элемент, который в коде HTML описан ниже. Допустимо использовать отрицательное значение.

Кроме числовых значений применяется `auto` — порядок элементов в этом случае строится автоматически, исходя из их положения в коде HTML и принадлежности к родителю, поскольку дочерние элементы имеют тот же номер, что их родительский элемент.

Значение по-умолчанию:

```css
z-index: auto;
```

Применяется к: К позиционированным элементам

## Спецификации

- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visuren.html#z-index)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Порядок карт</title>
    <style>
      .card {
        position: relative;
      }
      .three {
        top: 50px;
        left: 55px;
        z-index: 5;
      }
      .seven {
        left: -120px;
        top: 25px;
        z-index: 2;
      }
      .ace {
        left: -295px;
        z-index: 1;
      }
      .card:hover {
        z-index: 10;
      }
    </style>
  </head>
  <body>
    <img src="image/3.png" alt="3" class="card three" />
    <img src="image/7.png" alt="7" class="card seven" />
    <img src="image/ace.png" alt="Туз" class="card ace" />
  </body>
</html>
```
