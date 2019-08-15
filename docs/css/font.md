# font

Свойство **`font`** универсальное свойство, которое позволяет одновременно задать несколько характеристик шрифта и текста.

## Синтаксис

```css
/* size | family */
font: 2em 'Open Sans', sans-serif;

/* style | size | family */
font: italic 2em 'Open Sans', sans-serif;

/* style | variant | weight | size/line-height | family */
font: italic small-caps bolder 16px/3 cursive;

/* style | variant | weight | stretch | size/line-height | family */
font: italic small-caps bolder condensed 16px/3 cursive;

/* The font used in system dialogs */
font: message-box;
font: icon;

/* Global values */
font: inherit;
font: initial;
font: unset;
```

## Значения

В качестве обязательных значений свойства `font` указывается размер шрифта и его семейство. Остальные значения являются опциональными и задаются при желании. Для подробного ознакомления смотрите информацию о каждом свойстве отдельно.

Допускается в качестве значения использовать ключевые слова, определяющие шрифт различных элементов операционной системы пользователя.

- `caption` -- Шрифт для текста элементов форм вроде кнопок.
- `icon` -- Шрифт для текста под иконками.
- `menu` -- Шрифт применяемый в меню.
- `message-box` -- Шрифт для диалоговых окон.
- `small-caption` -- Шрифт для подписей к небольшим элементам управления.
- `status-bar` -- Шрифт для строки состояния окон.

Значение по-умолчанию:

```css
Зависит от использования
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css3-fonts/#font)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/fonts.html#font-shorthand)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#font)

## Описание и примеры

```css
p {
  font: 12pt/10pt sans-serif;
}
```

Из типографики пошла запись указывать через слэш размер шрифта и высоту строки. Поэтому `12pt` в данном случае означает размер основного текста в пунктах, а `10pt` — высоту строки. В качестве семейства указывается рубленый шрифт (`sans-serif`).

```css
p {
  font: bold italic 110% serif;
}
```

Значение `bold` устанавливает жирное начертание текста, а `italic` — курсивное. В данном случае их порядок не важен, поэтому `bold` и `italic` можно поменять местами. Размер текста задаётся в процентах, а в качестве гарнитуры используется шрифт с засечками (`serif`).

```css
p {
  font: normal small-caps 12px/14px fantasy;
}
```

Значение `small-caps` принадлежит свойству [`font-variant`](font-variant.md) и устанавливает текст в виде капители (заглавные буквы уменьшенного размера). Значение `normal` применяется сразу к двум свойствам: [`font-style`](font-style.md) и [`font-weight`](font-weight.md).

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>font</title>
    <style>
      .layer1 {
        font: 12pt sans-serif;
      }
      h1 {
        font: 2em serif;
      }
    </style>
  </head>
  <body>
    <div class="layer1">
      <h1>Экзистенциальный либерализм</h1>
      <p>Карл Маркс исходил из того, что типология средств массовой коммуникации неизбежна.</p>
    </div>
  </body>
</html>
```
