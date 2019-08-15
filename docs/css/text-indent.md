# text-indent

Свойство **`text-indent`** устанавливает величину отступа первой строки блока текста (например, для абзаца [`<p>`](../html/p.md)).

Воздействия на все остальные строки не оказывается. Допускается отрицательное значение для создания выступа первой строки, но следует проверить, чтобы текст не выходил за пределы окна браузера.

## Синтаксис

```css
/* <length> values */
text-indent: 3mm;
text-indent: 40px;

/* <percentage> value
relative to the containing block width */
text-indent: 15%;

/* Keyword values */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

/* Global values */
text-indent: inherit;
text-indent: initial;
text-indent: unset;
```

## Значения

В качестве значений принимаются любые единицы длины, принятые в CSS — например, пиксели (`px`), дюймы (`in`), пункты (`pt`) и др. При задании значения в процентах, отступ первой строки вычисляется в зависимости от ширины блока. Допустимо использовать отрицательные значения, но при этом в разных браузерах возможно появление ошибок.

Значение по-умолчанию:

```css
text-indent: 0;
```

Применяется к: К блочным элементам

## Спецификации

- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#text-indent)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/text.html#indentation-prop)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#text-indent)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-text-indent" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-text-indent">Can I Use css-text-indent?</a> Data on support for the css-text-indent feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>text-indent</title>
    <style>
      p {
        text-indent: 1.5em; /* Отступ первой строки */
        text-align: justify; /* Выравнивание по ширине */
      }
    </style>
  </head>
  <body>
    <p>Огневое нападение бывает пяти видов: первое, когда сжигают людей; второе, когда сжигают запасы; третье, когда сжигают обозы; четвертое, когда сжигают склады; пятое, когда сжигают отряды.</p>
    <p>Сунь-цзы, Искусство войны. Перевод Николай Конрад.</p>
  </body>
</html>
```
