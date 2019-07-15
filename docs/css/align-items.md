# align-items

Свойство **`align-items`** выравнивает флекс-элементы внутри контейнера в перпендикулярном направлении.

## Синтаксис

```css
/* Basic keywords */
align-items: normal;
align-items: stretch;

/* Positional alignment */
align-items: center; /* Pack items around the center */
align-items: start; /* Pack items from the start */
align-items: end; /* Pack items from the end */
align-items: flex-start; /* Pack flex items from the start */
align-items: flex-end; /* Pack flex items from the end */
align-items: self-start;
align-items: self-end;
align-items: left; /* Pack items from the left */
align-items: right; /* Pack items from the right */

/* Baseline alignment */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Overflow alignment (for positional alignment only) */
align-items: safe center;
align-items: unsafe center;

/* Global values */
align-items: inherit;
align-items: initial;
align-items: unset;
```

## Значения

<table>
<thead>
<tr class="header"><th>Значение</th><th>Положение</th><th>Описание</th></tr>
</thead>
<tbody>
<tr><td>flex-start</td><td><img src="/css/flex-start_1.png" alt="flex-start" /></td><td>Флексы выравниваются в начале поперечной оси контейнера.</td></tr>
<tr><td>center</td><td><img src="/css/center.png" alt="center" /></td><td>Флексы выравниваются по линии поперечной оси.</td></tr>
<tr><td>flex-end</td><td><img src="/css/flex-end_1.png" alt="flex-end" /></td><td>Флексы выравниваются в конце поперечной оси контейнера.</td></tr>
<tr><td>stretch</td><td><img src="/css/stretch_1.png" alt="stretch" /></td><td>Флексы растягиваются таким образом, чтобы занять всё доступное пространство контейнера.</td></tr>
<tr><td class="value">baseline</td><td><img src="/css/baseline.png" alt="baseline" /></td><td>Флексы выравниваются по их базовой линии.</td></tr>
</tbody>
</table>

Значение по-умолчанию: `stretch`

Наследуется: нет

Применяется к: К флекс-контейнеру

Анимируется: нет

Объектная модель: `object.style.alignItems`

## Спецификации

- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/#propdef-align-items)

## Поддержка браузерами

<p class="ciu_embed" data-feature="flexbox" data-periods="future_1,current,past_1,past_2"><a href="http://caniuse.com/#feat=flexbox">Can I Use flexbox?</a> Data on support for the flexbox feature across the major browsers from caniuse.com.</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>align-items</title>
    <style>
      .flex-container {
        display: flex;
        align-items: stretch; /* Растягиваем */
      }
      .flex-item {
        margin-left: 1rem; /* Расстояние между блоков */
        padding: 10px; /* Поля вокруг текста */
        width: 33.333%; /* Ширина блоков */
      }
      .flex-item:first-child {
        margin-left: 0;
      }
      .item1 {
        background: #f0ba7d;
      }
      .item2 {
        background: #cae2aa;
      }
      .item3 {
        background: #a6c0c9;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div class="flex-item item1">Фенек — лисица, живущая в пустынях Северной Африки. Имеет достаточно миниатюрный размер и своеобразную внешность с большими ушами.</div>
      <div class="flex-item item2">Корсак — хищное млекопитающее рода лисиц.</div>
      <div class="flex-item item3">Лисица — хищное млекопитающее семейства псовых, наиболее распространённый и самый крупный вид рода лисиц.</div>
    </div>
  </body>
</html>
```

### Примечание

Safari до версии 9 поддерживает свойство `-webkit-align-items`.

## См. также

- [align-self](align-self.md)
