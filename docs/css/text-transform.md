---
description: Свойство text-transform управляет преобразованием текста элемента в заглавные или прописные символы
---

# text-transform

Свойство **`text-transform`** управляет преобразованием текста элемента в заглавные или прописные символы.

Когда значение отлично от `none`, регистр исходного текста будет изменён.

## Синтаксис

```css
/* Keyword values */
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: none;
text-transform: full-width;

/* Global values */
text-transform: inherit;
text-transform: initial;
text-transform: unset;
```

## Значения

`capitalize`
: Первый символ каждого слова в предложении будет заглавным. Остальные символы свой вид не меняют.

`lowercase`
: Все символы текста становятся строчными (нижний регистр).

`uppercase`
: Все символы текста становятся прописными (верхний регистр).

`none`
: Не меняет регистр символов.

Значение по-умолчанию:

```css
text-transform: none;
```

Применяется ко всем элементам

## Спецификации

- [CSS Text Level 4](http://dev.w3.org/csswg/css4-text/#text-transform)
- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#text-transform)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/text.html#caps-prop)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#text-transform)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>text-transform</title>
    <style>
      h1 {
        text-transform: uppercase; /* Заглавные буквы */
      }
      p {
        text-transform: capitalize; /* Каждое слово начинается с заглавной буквы */
      }
    </style>
  </head>
  <body>
    <h1>Культурный памятник Средневековья</h1>
    <p>
      Амазонская низменность неумеренно берёт небольшой
      провоз кошек и собак, а Хайош-Байа славится красными
      винами.
    </p>
  </body>
</html>
```
