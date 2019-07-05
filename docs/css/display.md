# display

Свойство **`display`**, которое определяет, как элемент должен быть показан в документе.

## Синтаксис

```css
/* <display-outside> values */
display: block;
display: inline;
display: run-in;

/* <display-inside> values */
display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;
display: subgrid;

/* <display-outside> plus <display-inside> values */
display: block flow;
display: inline table;
display: flex run-in;

/* <display-listitem> values */
display: list-item;
display: list-item block;
display: list-item inline;
display: list-item flow;
display: list-item flow-root;
display: list-item block flow;
display: list-item block flow-root;
display: flow list-item block;

/* <display-internal> values */
display: table-row-group;
display: table-header-group;
display: table-footer-group;
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;

/* <display-box> values */
display: contents;
display: none;

/* <display-legacy> values */
display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;

/* Global values */
display: inherit;
display: initial;
display: unset;
```

## Значения

Значение по-умолчанию: `inline`

Наследуется: нет

Применяется к: ко всем элементам

Анимируется: нет

- `block` -- Элемент показывается как блочный. Применение этого значения для строчных элементов, например [`<span>`](/html/span/), заставляет его вести подобно блокам — происходит перенос строк в начале и в конце содержимого.
- `inline` -- Элемент отображается как строчный. Использование блочных элементов, таких, как [`<div>`](/html/div/) и [`<p>`](/html/p/), автоматически создаёт перенос и показывает их содержимое с новой строки. Значение `inline` отменяет эту особенность, поэтому содержимое блочных элементов начинается с того места, где окончился предыдущий элемент.
- `inline-block`-- Это значение генерирует блочный элемент, который обтекается другими элементами веб-страницы подобно строчному элементу. Фактически такой элемент по своему действию похож на встраиваемые элементы (вроде [`<img>`](/html/img/)). При этом его внутренняя часть форматируется как блочный элемент, а сам элемент — как строчный.
- `inline-table` -- Определяет, что элемент является таблицей, как при использовании [`<table>`](/html/table/), но при этом таблица является строчным элементом и происходит её обтекание другими элементами, например, текстом.
- `inline-flex` -- Элемент ведёт себя как строчный и выкладывает содержимое согласно флекс-модели.
- `flex` -- Элемент ведёт себя как блочный и выкладывает содержимое согласно флекс-модели.
- `grid`
- `list-item` -- Элемент выводится как блочный и добавляется маркер списка.
- `none` -- Временно удаляет элемент из документа. Занимаемое им место не резервируется, и веб-страница формируется так, словно элемента и не было. Изменить значение и сделать вновь видимым элемент можно с помощью скриптов, обращаясь к свойствам через объектную модель. В этом случае происходит переформатирование данных на странице с учётом вновь добавленного элемента.
- `run-in` -- Устанавливает элемент как блочный или строчный, в зависимости от контекста.
- `table` -- Определяет, что элемент является блочной таблицей, подобно использованию [`<table>`](/html/table/).
- `table-caption` -- Задаёт заголовок таблицы, подобно применению [`<caption>`](/html/caption/).
- `table-cell` -- Указывает, что элемент представляет собой ячейку таблицы ([`<td>`](/html/td/) или [`<th>`](/html/th/)).
- `table-column` -- Назначает элемент колонкой таблицы, словно был добавлен [`<col>`](/html/col/).
- `table-column-group` -- Определяет, что элемент является группой одной или более колонок таблицы, как при использовании [`<colgroup>`](/html/colgroup/).
- `table-footer-group` -- Используется для хранения одной или нескольких строк ячеек, которые отображаются в самом низу таблицы. По своему действию сходно с работой [`<tfoot>`](/html/tfoot/).
- `table-header-group` -- Элемент предназначен для хранения одной или нескольких строк ячеек, которые представлены вверху таблицы. По своему действию сходно с работой [`<thead>`](/html/thead/).
- `table-row` -- Элемент отображается как строка таблицы ([`<tr>`](/html/tr/)).
- `table-row-group` -- Создаёт структурный блок, состоящий из нескольких строк таблицы, аналогично действию [`<tbody>`](/html/tbody/).

### Примечания

Chrome 32 -- Значение `run-in` больше не поддерживается.

## Спецификации

- [CSS Display Module Level 3](http://dev.w3.org/csswg/css-display/#display)
- [CSS Ruby Layout Module Level 1](http://dev.w3.org/csswg/css-ruby/#display)
- [CSS Grid Layout](http://dev.w3.org/csswg/css-grid/#grid-declaration0)
- [CSS Flexible Box Layout Module](http://dev.w3.org/csswg/css3-flexbox/#flex-containers)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visuren.html#display-prop)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#display)

## Поддержка браузерами

`display: flow-root`:

<p class="ciu_embed" data-feature="flow-root" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=flow-root">Can I Use flow-root?</a> Data on support for the flow-root feature across the major browsers from caniuse.com.
</p>

`display: table-*`:

<p class="ciu_embed" data-feature="css-table" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-table">Can I Use css-table?</a> Data on support for the css-table feature across the major browsers from caniuse.com.
</p>

`display: contents`:

<p class="ciu_embed" data-feature="css-display-contents" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-display-contents">Can I Use css-display-contents?</a> Data on support for the css-display-contents feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>display</title>
    <style>
      .example {
        border: dashed 1px #634f36; /* Параметры рамки */
        background: #fffff5; /* Цвет фона */
        font-family: 'Courier New', Courier, monospace; /* Шрифт текста */
        padding: 7px; /* Поля вокруг текста */
        margin: 0 0 1em; /* Отступы */
      }
      .exampleTitle {
        border: 1px solid black; /* Параметры рамки */
        border-bottom: none; /* Убираем линию снизу */
        padding: 3px; /* Поля вокруг текста */
        display: inline; /* Устанавливаем как строчный элемент */
        background: #efecdf; /* Цвет фона */
        font-weight: bold; /* Жирное начертание */
        font-size: 90%; /* Размер текста */
        margin: 0; /* Убираем отступы */
        white-space: nowrap; /* Отменяем переносы текста */
      }
    </style>
  </head>
  <body>
    <p class="exampleTitle">Пример</p>
    <p class="example">
      <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><br />
      <html>
        <br />
        <body>
          <br />
          <b>Формула серной кислоты:</b>
          <i
            >H<sub><small>2</small></sub> SO<sub><small>4</small> </sub></i
          ><br />
        </body>
        <br />
      </html>
    </p>
  </body>
</html>
```
