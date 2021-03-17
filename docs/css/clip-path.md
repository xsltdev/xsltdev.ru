---
description: Свойство clip-path создает ограниченную область, которая определяет какая часть элемента должна быть видимой
---

# clip-path

Свойство **`clip-path`** создает ограниченную область, которая определяет какая часть элемента должна быть видимой.

Те части, которые находятся внутри области, видимы, в то время как части вне области, скрыты. Обрезанная область — это траектория, определяемая либо как внутренняя ссылка, либо как внешний SVG, либо как фигура, такая как круг (`circle()`).

Свойство `clip-path` заменило устаревшее свойство [`clip`](clip.md).

??? info "Маски и Фигуры"

    <div class="col3" markdown="1">

    - **clip-path**
    - [mask](mask.md)
    - [mask-border](mask-border.md)
    - [mask-border-mode](mask-border-mode.md)
    - [mask-border-outset](mask-border-outset.md)
    - [mask-border-repeat](mask-border-repeat.md)
    - [mask-border-slice](mask-border-slice.md)
    - [mask-border-source](mask-border-source.md)
    - [mask-border-width](mask-border-width.md)
    - [mask-clip](mask-clip.md)
    - [mask-composite](mask-composite.md)
    - [mask-image](mask-image.md)
    - [mask-mode](mask-mode.md)
    - [mask-origin](mask-origin.md)
    - [mask-position](mask-position.md)
    - [mask-repeat](mask-repeat.md)
    - [mask-size](mask-size.md)
    - [mask-type](mask-type.md)

    </div>

    <div class="col3" markdown="1">

    - [shape-image-threshold](shape-image-threshold.md)
    - [shape-margin](shape-margin.md)
    - [shape-outside](shape-outside.md)

    </div>

## Синтаксис

```css
/* Keyword values */
clip-path: none;

/* Image values */
clip-path: url('resources.svg#c1');

/* Box values */
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;

/* Geometry values */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

/* Box and geometry values combined */
clip-path: padding-box circle(50px at 0 100px);

/* Global values */
clip-path: inherit;
clip-path: initial;
clip-path: unset;
```

## Значения

Свойство `clip-path` определяется как одно или комбинация значений перечисленных ниже.

**`none`**
: Обрезанная область не создается.

`url()`
: Представляет URL ссылку на траекторию, ограничивающую элемент.

`inset()`, `circle()`, `ellipse()`, `polygon()`
: Функция `<basic-shape>`. Размер и положение области определяется значением `<geometry-box>`. Если геометрия не определена, `border-box` будет использоваться в качестве блока.

`<geometry-box>`
: Если определен в комбинации с `<basic-shape>`, это значение определяет блок для базовой области. Если задан самостоятельно, определяет границы блока, включая формирование углов (такое как [`border-radius`](border-radius.md)).

Геометрия может быть определена с помощью одного из следующих значений:

`fill-box`
: Использует границы объекта в качестве базовой области.

`stroke-box`
: Использует stroke bounding box в качестве базовой области.

`view-box`
: Использует ближайший SVG `viewport` в качестве базового блока. Если отриут `viewBox` определен для элемента, создающего SVG `viewport`, базовый блок позиционируется в оригинальной системе координат, установленной атрибутом `viewBox` и ширина и высота базового блока устанавливаются равными значениям атрибута `viewBox`.

`margin-box`
: Использует margin box в качестве базового блока.

`border-box`
: Использует border box в качестве базового блока.

`padding-box`
: Использует padding box в качестве базового блока.

`content-box`
: Использует content box в качестве базового блока.

**Значение по-умолчанию:**

```css
clip-path: none;
```

Применяется ко всем элементам; в SVG, это применяется к контейнерам, исключая элемент `defs` и все графические элементы

## Спецификации

- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/#the-clip-path)
- [Scalable Vector Graphics (SVG) 1.1 (Second Edition)](http://www.w3.org/TR/SVG11/masking.html#ClipPathProperty)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-clip-path" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-clip-path">Can I Use css-clip-path?</a> Data on support for the css-clip-path feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

=== "HTML"

    ```html
    <img
      id="clipped"
      src="https://mdn.mozillademos.org/files/12668/MDN.svg"
      alt="MDN logo"
    />
    <svg height="0" width="0">
      <defs>
        <clipPath id="cross">
          <rect y="110" x="137" width="90" height="90" />
          <rect x="0" y="110" width="90" height="90" />
          <rect x="137" y="0" width="90" height="90" />
          <rect x="0" y="0" width="90" height="90" />
        </clipPath>
      </defs>
    </svg>

    <select id="clipPath">
      <option value="none">none</option>
      <option value="circle(100px at 110px 100px)">circle</option>
      <option value="url(#cross)" selected>cross</option>
      <option value="inset(20px round 20px)">inset</option>
    </select>
    ```

=== "CSS"

    ```css
    #clipped {
      margin-bottom: 20px;
      clip-path: url(#cross);
    }
    ```
