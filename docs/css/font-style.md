---
description: Свойтво font-style определяет начертание шрифта — обычное, курсивное или наклонное
---

# font-style

Свойтво **`font-style`** определяет начертание шрифта — обычное, курсивное или наклонное.

Когда для текста установлено курсивное или наклонное начертание, браузер обращается к системе для поиска подходящего шрифта. Если заданный шрифт не найден, браузер использует специальный алгоритм для имитации нужного вида текста. Результат и качество при этом могут получиться неудовлетворительными, особенно при печати документа.

## Синтаксис

```css
font-style: normal;
font-style: italic;
font-style: oblique;

/* Global values */
font-style: inherit;
font-style: initial;
font-style: unset;
```

## Значения

`normal`
: Обычное начертание текста.

`italic`
: Курсивное начертание.

`oblique`
: Наклонное начертание. Курсив и наклонный шрифт при всей их похожести не одно и то же. Курсив это специальный шрифт имитирующий рукописный, наклонный же образуется путем наклона обычных знаков вправо.

### Примечание

Браузеры текст со значением `oblique` всегда отображают как курсив (`italic`).

Значение по-умолчанию:

```css
font-style: normal;
```

Применяется ко всем элементам

## Спецификации

- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css3-fonts/#font-style-prop)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/fonts.html#propdef-font-style)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#font-style)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>font-style</title>
    <style>
      h1 {
        font-family: Verdana, Arial, Helvetica, sans-serif; /* Рубленый шрифт заголовка */
      }
      p {
        font-family: 'Times New Roman', Times, serif; /* Шрифт с засечками */
        font-style: italic; /* Курсивное начертание */
      }
    </style>
  </head>
  <body>
    <h1>Культурный памятник Средневековья</h1>
    <p>
      Амазонская низменность неумеренно берёт небольшой провоз кошек и собак, а
      Хайош-Байа славится красными винами.
    </p>
  </body>
</html>
```
