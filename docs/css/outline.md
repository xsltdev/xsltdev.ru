# outline

Универсальное свойство **`outline`**, одновременно устанавливающее цвет, стиль и толщину внешней границы на всех четырёх сторонах элемента.

В отличие от линии, задаваемой через [`border`](border.md), свойство `outline` не влияет на положение блока и его ширину. Также нельзя задать параметры линии на отдельных сторонах элемента, `outline` применяется сразу ко всем четырём сторонам.

## Синтаксис

```css
/* width | style | color */
outline: 1px solid white;

/* Global values */
outline: inherit;
outline: initial;
outline: unset;
```

## Значения

- `outline-color` — Задаёт цвет линии в любом допустимом для CSS формате.
- `outline-style` — Стиль линии.
- `outline-width` — Толщина границы.

Значение по-умолчанию: Нет

Применяется к: Ко всем элементам

## Спецификации

- [CSS Basic User Interface Module Level 3](http://dev.w3.org/csswg/css3-ui/#outline)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/ui.html#propdef-outline)

## Поддержка браузерами

<p class="ciu_embed" data-feature="outline" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=outline">Can I Use outline?</a> Data on support for the outline feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>outline</title>
    <style>
      .photo img {
        padding: 20px; /* Поля вокруг изображения */
        margin-right: 10px; /* Отступ справа */
        margin-bottom: 10px; /* Отступ снизу */
        outline: 1px solid #666; /* Параметры рамки */
        background: #f0f0f0; /* Цвет фона */
        float: left; /* Обтекание по правому краю */
      }
    </style>
  </head>
  <body>
    <div class="photo">
      <img src="image/girl.jpg" alt="Девочка с муфтой" />
      <img src="image/owl.jpg" alt="Сова" />
      <img src="image/boy.jpg" alt="Эвенкийский мальчик" />
    </div>
  </body>
</html>
```
