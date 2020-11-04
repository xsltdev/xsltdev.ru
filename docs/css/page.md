---
description: Правило @page используется для модификации некоторых свойств CSS при печати документа
---

# @page

Правило **`@page`** используется для модификации некоторых свойств CSS при печати документа. Вы не можете изменить все CSS свойства с `@page`. Вы можете изменить только [`margin`](margin.md), [`orphans`](orphans.md), [`widows`](widows.md), и разрывы страницы документа. Попытки изменить любые другие свойства CSS будут игнорироваться.

Правило `@page` доступно через интерфейс объектной модели CSS `CSSPageRule`.

??? info "@-правила"

    <div class="col3" markdown="1">

    - [@charset](charset.md)
    - [@import](import.md)
    - [@namespace](namespace.md)
    - [@media](media.md)
    - [@supports](supports.md)
    - [@document](document.md)
    - **@page**
    - [@font-face](font-face.md)
    - [@keyframes](keyframes.md)
    - [@viewport](viewport.md)
    - [@counter-style](counter-style.md)
    - [@font-feature-values](font-feature-values.md)

    </div>

## Синтаксис

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

### size

Указывает целевой размер и ориентацию полей страницы, содержащихся в блоке. В общем случае, когда одно поле страницы отображается на одном листе страницы, он также определяет размер и ориентацию листа страницы.

```css
/* Keyword values for scalable size */
size: auto;
size: portrait;
size: landscape;

/* <length> values */
/* 1 value: height = width */
size: 6in;

/* 2 values: width then height */
size: 4in 6in;

/* Keyword values for absolute size */
size: A4;
size: B5;
size: JIS-B4;
size: letter;

/* Mixing size and orientation */
size: A4 portrait;
```

Значения:

`auto`
: Браузер сам выбирает размер листа.

`landscape`
: Содержимое страницы отображается в альбомной ориентации

`portrait`
: Содержимое страницы отображается в портретном режиме. Это ориентация по умолчанию.

`<length>`
: Любое значение длины. Первое значение соответствует ширине поля страницы, а второе соответствует его высоте. Если указано только одно значение, оно используется как для ширины, так и для высоты.

`<page-size>`
: `A5` (148mm x 210mm), `A4` (210mm x 297mm), `A3` (297mm x 420mm), `B5` (176mm x 250mm), `B4` (250mm x 353mm), `JIS-B5` (182mm x 257mm), `JIS-B4` (257mm x 364mm), `letter` (8.5in x 11in), `legal` (8.5in x 14in), `ledger` (11in x 17in).

### marks

Добавляет обрезку и/или регистрационные отметки в документ.

```css
@page {
  /* Keyword values */
  marks: none;
  marks: crop;
  marks: cross;
  marks: crop cross;
}
```

Значения:

`crop`
: Будут напечатаны отметки для обрезки

`cross`
: Будут напечатаны крестики

`none`
: Никаких отметок не будет напечатано

### bleed

Определяет степень заступа за пределы поля страницы, при котором отображаемая область страницы отрезается.

```css
/* Keyword values */
bleed: auto;

/* <length> values */
bleed: 8pt;
bleed: 1cm;
```

## Пример

=== "HTML"

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>@page</title>
        <link
          rel="stylesheet"
          href="/example/css/print.css"
          media="print"
        />
      </head>
      <body>
        <h1>Метод ловли льва в пустыне</h1>
        <h2>Метод последовательного перебора</h2>
        <p>
          Пусть лев имеет габаритные размеры LxWxH, где L —
          длина льва от кончика носа до кисточки хвоста, W —
          ширина льва, а H — его высота. После чего пустыню
          разбиваем на ряд элементарных прямоугольников, размер
          которых совпадает с шириной и длиной льва. Учитывая,
          что лев может находиться не строго на заданном
          участке, а одновременно на двух из них, клетку для
          ловли следует делать повышенной площади, а именно
          2Lx2W. Благодаря этому мы избежим ошибки, когда в
          клетке окажется пойманным лишь половина льва или, что
          хуже, только его хвост.
        </p>
        <p>
          Далее последовательно накрываем каждый из размеченных
          прямоугольников пустыни клеткой и проверяем, пойман
          лев или нет. Как только лев окажется в клетке,
          процедура поимки считается завершенной.
        </p>
      </body>
    </html>
    ```

=== "print.css"

    ```css
    body {
      font-family: Times, 'Times New Roman', serif; /* Шрифт с засечками */
    }
    h1,
    h2,
    p {
      color: #000; /* Черный цвет текста */
    }
    @page :first {
      margin: 1cm; /* Отступы для первой страницы */
    }
    @page :left {
      margin: 1cm 3cm 1cm 1.5cm; /* Отступы для всех левых страниц */
    }
    @page :right {
      margin: 1cm 3cm 1cm 1.5cm; /* Отступы для всех правых страниц */
    }
    ```

## Спецификации

- [CSS Logical Properties and Values Level 1](https://drafts.csswg.org/css-logical/#logical-page)
- [CSS Paged Media Module Level 3](https://drafts.csswg.org/css-page-3/#at-page-rule)
- [CSS Level 2 (Revision 1)](https://www.w3.org/TR/CSS2/page.html#page-selectors)

## См. также

- [`:blank`](blank.md)
- [`:first`](first.md)
- [`:left`](left-pseudo-class.md)
- [`:right`](right.md)

## Ссылки

- [`@page`](https://developer.mozilla.org/ru/docs/Web/CSS/@page) <sup><small>MDN (рус.)</small></sup>
