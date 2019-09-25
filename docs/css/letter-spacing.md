---
description: Свойство letter-spacing определяет интервал между символами в пределах элемента
---

# letter-spacing

Свойство **`letter-spacing`** определяет интервал между символами в пределах элемента.

Браузеры обычно устанавливают расстояние между символами, исходя из типа и вида шрифта, его размеров и настроек операционной системы. Чтобы изменить это значение и применяется данное свойство. Допустимо использовать отрицательное значение, но в этом случае надо убедиться, что сохраняется читабельность текста.

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
      Кульминация, после осторожного анализа, существенно перечеркивает
      экваториальный большой круг небесной сферы, как это случилось в 1994 году
      с кометой <em>Шумейкеpов-Леви 9</em>.
    </p>
  </body>
</html>
```
