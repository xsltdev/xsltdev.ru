---
description: Свойство text-emphasis-position устанавливает, где отображаются метки выделения. Как и в ruby тексте, если места для меток выделения недостаточно, высота строки увеличивается
---

# text-emphasis-position

Свойство **`text-emphasis-position`** устанавливает, где отображаются метки выделения. Как и в ruby тексте, если места для меток выделения недостаточно, высота строки увеличивается.

## Синтаксис

```css
/* Initial value */
text-emphasis-position: over right;

/* Keywords value */
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* Global values */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: unset;
```

## Предпочтительное положение

Предпочтительное положение меток зависит от языка. В японском языке, например, предпочтительная позиция `over right`. В китайском, с другой стороны, предпочтительная позиция `under right`.

<table>
<caption>Предпочтительная отметка акцента и ruby позиция</caption>
<thead>
<tr>
<th rowspan="2" scope="col">Язык</th>
<th colspan="2" scope="col">Предпочитаемая позиция</th>
<th colspan="2" rowspan="2" scope="col"></th>
</tr>
<tr>
<th>Горизонтальный</th>
<th>Вертикальный</th>
</tr>
</thead>
<tbody>
<tr>
<td>Японский</td>
<td rowspan="3">over</td>
<td rowspan="3">right</td>
<td rowspan="3"><img alt="Emphasis marks appear over each emphasized character in horizontal Japanese text." src="https://drafts.csswg.org/css-text-decor-3/images/text-emphasis-ja.png" style="height: 28px; width: 225px;" title="Emphasis (shown in blue for clarity) applied above a fragment of Japanese text"></td>
<td rowspan="4"><img alt="Emphasis marks appear on the right of each emphasized character in vertical Japanese text." src="https://drafts.csswg.org/css-text-decor-3/images/text-emphasis-v.gif" style="height: 89px; width: 34px;" title="Emphasis applied on the right of a fragment of Japanese text"></td>
</tr>
<tr>
<td>Корейский</td>
</tr>
<tr>
<td>Монгольский</td>
</tr>
<tr>
<td>Китайский</td>
<td>under</td>
<td>right</td>
<td><img alt="Emphasis marks appear below each emphasized character in horizontal Simplified Chinese text." src="https://drafts.csswg.org/css-text-decor-3/images/text-emphasis-zh.gif" style="height: 28px; width: 133px;" title="Emphasis (shown in blue for clarity) applied below a fragment of Chinese text"></td>
</tr>
</tbody>
</table>

## Значения

`over`
: Нарисуйте отметки над текстом в горизонтальном режиме письма.

`under`
: Нарисуйте отметки под текстом в горизонтальном режиме письма.

`right`
: Рисует метки справа от текста в режиме вертикальной записи.

`left`
: Нарисуйте отметки слева от текста в режиме вертикальной записи.

## Спецификация

- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/#text-emphasis-style-property)

## См. также

- [`text-emphasis-style`](text-emphasis-style.md)
- [`text-emphasis-color`](text-emphasis-color.md)
- [`text-emphasis`](text-emphasis.md)

## Ссылки

- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/#text-emphasis-position-property)
