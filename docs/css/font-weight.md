# font-weight

Свойство **`font-weight`** устанавливает насыщенность шрифта.

Значение указывается в виде чисел от 100 до 900 с шагом 100 или с помощью заданных ключевых слов.

## Синтаксис

```css
/* Keyword values */
font-weight: normal;
font-weight: bold;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Numeric keyword values */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;

/* Global values */
font-weight: inherit;
font-weight: initial;
font-weight: unset;
```

## Значения

Насыщенность шрифта задаётся с помощью ключевых слов: `bold` — жирное начертание и `normal` — нормальное начертание. Также допустимо использовать условные единицы от `100` до `900`. Значения `bolder` и `lighter` изменяют жирность относительно насыщенности родителя, соответственно, в большую и меньшую сторону.

Вот как числовые значения влияют на насыщенность шрифта.

- 100 — тонкое начертание;
- 200 — сверхсветлое;
- 300 — светлое;
- 400 — нормальное (аналогично `normal`);
- 500 — среднее;
- 600 — полужирное;
- 700 — жирное (аналогично `bold`);
- 800 — сверхжирное;
- 900 — тяжёлое.

Учтите, что не все шрифты поддерживают этот набор. Если указанное значение не поддерживается, то браузер приведёт шрифт к ближайшей насыщенности. К примеру, если вы указали `900` и оно не может быть показано, то браузер в действительности применит значение `700` как ближайшее, которое работает корректно.

Значение по-умолчанию:

```css
font-weight: normal;
```

## Спецификации

- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css3-fonts/#font-weight-prop)
- [CSS Transitions](http://dev.w3.org/csswg/css-transitions/#animatable-css)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/fonts.html#propdef-font-weight)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#font-weight)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>font-weight</title>
    <style>
      h1 {
        font-weight: normal; /* Нормальное начертание */
      }
      .select {
        color: maroon; /* Цвет текста */
        font-weight: 600; /* Полужирное начертание */
      }
    </style>
  </head>
  <body>
    <h1>Мелодический голос персонажа</h1>
    <p><span class="select">Поток сознания</span>, соприкоснувшись в чем-то со своим главным антагонистом в постструктурной поэтике, иллюстрирует былинный мифопоэтический хронотоп, об этом свидетельствуют краткость и завершенность формы, бессюжетность, своеобразие тематического развертывания.</p>
  </body>
</html>
```
