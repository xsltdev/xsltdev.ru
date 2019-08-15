# word-break

Свойство **`word-break`** указывает, как делать перенос строк внутри слов, которые не помещаются по ширине в заданную область.

## Синтаксис

```css
word-break: normal;
word-break: break-all;
word-break: keep-all;

/* Global values */
word-break: inherit;
word-break: initial;
word-break: unset;
```

## Значения

`normal`
: Используются правила переноса строк по умолчанию. Как правило, в этом случае строки не переносятся или переносятся в тех местах, где явно задан перенос (например, с помощью [`<br>`](../html/br.md)).

`break-all`
: Перенос строк добавляется автоматически, чтобы слово поместилось в заданную ширину блока. Значение не работает для текста на китайском, корейском или японском языке.

`keep-all`
: Не разрешает перенос строк в словах на китайском, корейском или японском языке. Для остальных языков действует как `normal`.

Значение по-умолчанию:

```css
word-break: normal;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#word-break)

## Поддержка браузерами

<p class="ciu_embed" data-feature="word-break" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=word-break">Can I Use word-break?</a> Data on support for the word-break feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>word-break</title>
    <style>
      .col {
        background: #f0f0f0; /* Цвет фона */
        width: 180px; /* Ширина блока */
        padding: 10px; /* Поля */
        word-break: break-all; /* Перенос слов */
      }
    </style>
  </head>
  <body>
    <div class="col">
      <p>Cуществительное</p>
      <p>высокопревосходительство</p>
      <p>Одушевленное существительное</p>
      <p>одиннадцатиклассница</p>
      <p>Химическое вещество</p>
      <p>метоксихлордиэтиламинометилбутиламиноакридин</p>
    </div>
  </body>
</html>
```
