---
description: Свойство letter-spacing определяет интервал между символами в пределах элемента
---

# letter-spacing

Свойство **`letter-spacing`** определяет интервал между символами в пределах элемента.

Браузеры обычно устанавливают расстояние между символами, исходя из типа и вида шрифта, его размеров и настроек операционной системы. Чтобы изменить это значение и применяется данное свойство. Допустимо использовать отрицательное значение, но в этом случае надо убедиться, что сохраняется читабельность текста.

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

    - **letter-spacing**
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
    - [text-transform](text-transform.md)
    - [white-space](white-space.md)
    - [word-spacing](word-spacing.md)

    </div>

## Синтаксис

```css
/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* Keyword values */
letter-spacing: normal;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

## Значения

В качестве значений принимаются любые единицы длины, принятые в CSS — например, пиксели (px), дюймы (in), пункты (pt) и др. Наилучший результат дает использование относительных единиц основанных на размере шрифта (em и ex).

`normal`
: Задает интервал между символами как обычно.

Значение по-умолчанию:

```css
letter-spacing: normal;
```

Применяется ко всем элементам

## Спецификации

- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#letter-spacing-property)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/text.html#propdef-letter-spacing)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#letter-spacing)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>letter-spacing</title>
    <style>
      em {
        letter-spacing: 2px;
      }
    </style>
  </head>
  <body>
    <p>
      Кульминация, после осторожного анализа, существенно
      перечеркивает экваториальный большой круг небесной
      сферы, как это случилось в 1994 году с кометой
      <em>Шумейкеpов-Леви 9</em>.
    </p>
  </body>
</html>
```
