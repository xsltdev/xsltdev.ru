---
description: Свойство margin-trim позволяет контейнеру обрезать поля своих дочерних элементов там, где они примыкают к краям контейнера
---

# margin-trim

Свойство **`margin-trim`** позволяет контейнеру обрезать поля своих дочерних элементов там, где они примыкают к краям контейнера.

??? info "Блоки"

    <div class="col3" markdown="1">

    - [height](height.md)
    - [width](width.md)
    - [max-height](max-height.md)
    - [max-width](max-width.md)
    - [min-height](min-height.md)
    - [min-width](min-width.md)

    </div>

    <div class="col3" markdown="1">

    - [margin](margin.md)
    - [margin-bottom](margin-bottom.md)
    - [margin-left](margin-left.md)
    - [margin-right](margin-right.md)
    - [margin-top](margin-top.md)
    - **margin-trim**

    </div>

    <div class="col3" markdown="1">

    - [padding](padding.md)
    - [padding-bottom](padding-bottom.md)
    - [padding-left](padding-left.md)
    - [padding-right](padding-right.md)
    - [padding-top](padding-top.md)

    </div>

    <div class="col3" markdown="1">

    - [overflow](overflow.md)
    - [overflow-x](overflow-x.md)
    - [overflow-y](overflow-y.md)
    - [visibility](visibility.md)

    </div>

## Синтаксис

```css
margin-trim: none;
margin-trim: in-flow;
margin-trim: all;

/* Global values */
margin-trim: inherit;
margin-trim: initial;
margin-trim: unset;
```

## Значения

`none`
: Поля не обрезаны контейнером.

`in-flow`
: Для блоков `in-flow`, содержащихся в этом контейнере, поля осей блоков, смежные с краями блока, обрезаются до нуля.
:
: Также обрезаются все схлопнутые поля.

`all`
: Обрезаются все поля

Значение по-умолчанию: `none`

Применяется к блочным контейнерам, колоночным контейнерам

## Спецификации

- [CSS Basic Box Model](https://drafts.csswg.org/css-box-3/#margin-trim)

## Поддержка браузерами

Не поддерживается браузерами.
