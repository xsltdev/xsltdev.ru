# text-overflow

Свойство `text-overflow` определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область.

Возможны два варианта: текст обрезается; текст обрезается и к концу строки добавляется многоточие. `text-overflow` работает в том случае, если для блока значение свойства [`overflow`](overflow.md) установлено как `auto`, `scroll` или `hidden`.

## Синтаксис

```css
/* Overflow behavior at line end
	   Right end if ltr, left end if rtl */
text-overflow: clip;
text-overflow: ellipsis;
text-overflow: '…';
text-overflow: fade;
text-overflow: fade(10px);
text-overflow: fade(5%);

/* Overflow behavior at left end | at right end
	   Directionality has no influence */
text-overflow: clip ellipsis;
text-overflow: '…' '…';
text-overflow: fade clip;
text-overflow: fade(10px) fade(10px);
text-overflow: fade(5%) fade(5%);

/* Global values */
text-overflow: inherit;
text-overflow: initial;
text-overflow: unset;
```

## Значения

- `clip` — Текст обрезается по размеру области.
- `ellipsis` — Текст обрезается и к концу строки добавляется многоточие.

Значение по-умолчанию:

```css
text-overflow: clip;
```

Применяется к: К блочным элементам

## Спецификации

- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui-4/#text-overflow)
- [CSS Basic User Interface Module Level 3](http://dev.w3.org/csswg/css3-ui/#text-overflow)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>text-overflow</title>
    <style>
      p.clip {
        white-space: nowrap; /* Запрещаем перенос строк */
        overflow: hidden; /* Обрезаем все, что не помещается в область */
        background: #fc0; /* Цвет фона */
        padding: 5px; /* Поля вокруг текста */
        text-overflow: ellipsis; /* Добавляем многоточие */
      }
    </style>
  </head>
  <body>
    <p class="clip">Магнитное поле ничтожно гасит большой круг небесной сферы, в таком случае эксцентриситеты и наклоны орбит возрастают.</p>
  </body>
</html>
```
