---
description: Свойство text-emphasis-position устанавливает, где отображаются метки выделения. Как и в ruby тексте, если места для меток выделения недостаточно, высота строки увеличивается
---

# text-emphasis-position

Свойство **`text-emphasis-position`** устанавливает, где отображаются метки выделения. Как и в ruby тексте, если места для меток выделения недостаточно, высота строки увеличивается.

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
    - **text-emphasis-position**
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
