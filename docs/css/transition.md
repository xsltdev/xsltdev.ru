# transition

Универсальное свойство **`transition`**, которое позволяет одновременно задать значения [`transition-property`](transition-property.md), [`transition-duration`](transition-duration.md), [`transition-timing-function`](transition-timing-function.md) и [`transition-delay`](transition-delay.md).

Устанавливает эффект перехода между двумя состояниями элемента, они могут быть определены с помощью псевдокласса `:hover` или `:active`, а также динамически через JavaScript.

## Синтаксис

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```

## Значения

- `none` -- Отменяет эффект перехода.

### Примечание

- Chrome до версии 26, Safari до версии 6.1 и Android поддерживают свойство `-webkit-transition`.
- Opera до версии 12.10 поддерживает свойство `-o-transition`.
- Firefox до версии 16 поддерживает свойство `-moz-transition`.

Значение по-умолчанию:

```css
transition: all 0s ease 0s;
```

Применяется к: Ко всем элементам, к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Transitions](http://dev.w3.org/csswg/css-transitions/#transition)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-transitions" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-transitions">Can I Use css-transitions?</a> Data on support for the css-transitions feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>transition</title>
    <style>
      #bar {
        top: -5.5em;
        right: 5em; /* Положение */
        padding: 0.5em; /* Поля */
        margin: 0; /* Отступы */
        position: absolute; /* Абсолютное позиционирование */
        width: 2em; /* Ширина */
        background: #333; /* Цвет фона */
        color: #fff; /* Цвет текста */
        text-align: center; /* Выравнивание по центру */
        /* Переход */
        transition: top 1s ease-out 0.5s;
      }
      #bar:hover {
        top: 0;
      }
    </style>
  </head>
  <body>
    <ul id="bar">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>↓</li>
    </ul>
  </body>
</html>
```
