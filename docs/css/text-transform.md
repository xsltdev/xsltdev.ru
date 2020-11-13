---
description: Свойство text-transform управляет преобразованием текста элемента в заглавные или прописные символы
---

# text-transform

Свойство **`text-transform`** управляет преобразованием текста элемента в заглавные или прописные символы.

Когда значение отлично от `none`, регистр исходного текста будет изменён.

??? info "Текст"

    <div class="col3" markdown="1">

    - [hanging-punctuation](hanging-punctuation.md)
    - [hyphens](hyphens.md)
    - [letter-spacing](letter-spacing.md)
    - [line-break](line-break.md)
    - [overflow-wrap](overflow-wrap.md)
    - [paint-order](paint-order.md)
    - [tab-size](tab-size.md)
    - [text-align](text-align.md)
    - [text-align-last](text-align-last.md)
    - [text-indent](text-indent.md)
    - [text-justify](text-justify.md)
    - [text-size-adjust](text-size-adjust.md)
    - [text-transform](text-transform.md)
    - [white-space](white-space.md)
    - [word-break](word-break.md)
    - [word-spacing](word-spacing.md)

    </div>

    <div class="col3" markdown="1">

    - [letter-spacing](letter-spacing.md)
    - [text-decoration](text-decoration.md)
    - [text-decoration-color](text-decoration-color.md)
    - [text-decoration-line](text-decoration-line.md)
    - [text-decoration-style](text-decoration-style.md)
    - [text-decoration-thickness](text-decoration-thickness.md)
    - [text-decoration-skip](text-decoration-skip.md)
    - [text-decoration-skip-ink](text-decoration-skip-ink.md)
    - [text-emphasis](text-emphasis.md)
    - [text-emphasis-color](text-emphasis-color.md)
    - [text-emphasis-position](text-emphasis-position.md)
    - [text-emphasis-style](text-emphasis-style.md)
    - [text-indent](text-indent.md)
    - [text-rendering](text-rendering.md)
    - [text-shadow](text-shadow.md)
    - [text-underline-position](text-underline-position.md)
    - **text-transform**
    - [white-space](white-space.md)
    - [word-spacing](word-spacing.md)

    </div>

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
