---
description: Свойство orphans задает минимальное число строк текста, которое остается на предыдущей странице при печати документа
---

# orphans

Свойство **`orphans`** задает минимальное число строк текста, которое остается на предыдущей странице при печати документа.

Это свойство работает в том случае, если весь текст размещается на двух и более печатных страницах.

## Синтаксис

```css
/* <integer> values */
orphans: 2;
orphans: 3;

/* Global values */
orphans: inherit;
orphans: initial;
orphans: unset;
```

## Значения

`число`
: Целое число, которое задаёт количество строк внизу печатной страницы. Отрицательное значение запрещено.

Значение по-умолчанию:

```css
orphans: 2;
```

Применяется к блочным элементам

## Спецификации

- [CSS Fragmentation Module Level 3](http://dev.w3.org/csswg/css3-break/#widows-orphans)
- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css3-multicol/#filling-columns)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/page.html#break-inside)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-widows-orphans" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-widows-orphans">Can I Use css-widows-orphans?</a> Data on support for the css-widows-orphans feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>orphans</title>
    <style>
      @media print {
        p {
          widows: 3;
          orphans: 3;
        }
      }
    </style>
  </head>
  <body>
    <p>
      Роджерс определял терапию как, интроекция интегрирует гештальт, в полном
      соответствии с основными законами развития человека. Как было показано
      выше, интеллект начинает оппортунический конформизм, хотя этот факт
      нуждается в дальнейшей проверке наблюдением. Изучая с позиций, близких
      гештальтпсихологии и психоанализу процессы в малой группе, отражающих
      неформальную микроструктуру общества, Дж. Морено показал, что интроекция
      психологически вызывает кризис, о чем и писал А. Маслоу в своей работе
      «Мотивация и личность».
    </p>
  </body>
</html>
```
