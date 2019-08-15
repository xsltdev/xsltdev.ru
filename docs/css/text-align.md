# text-align

Свойство **`text-align`** определяет горизонтальное выравнивание текста в пределах элемента.

## Синтаксис

```css
/* Keyword values */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: unset;
```

## Значения

`center`
: Выравнивание текста по центру. Текст помещается по центру горизонтали окна браузера или контейнера, где расположен текстовый блок. Строки текста словно нанизываются на невидимую ось, которая проходит по центру веб-страницы. Подобный способ выравнивания активно используется в заголовках и различных подписях, вроде подрисуночных, он придает официальный и солидный вид оформлению текста. Во всех других случаях выравнивание по центру применяется редко по той причине, что читать большой объем такого текста неудобно.

`justify`
: Выравнивание по ширине, что означает одновременное выравнивание по левому и правому краю. Чтобы произвести это действие браузер в этом случае добавляет пробелы между словами.

`left`
: Выравнивание текста по левому краю. В этом случае строки текста выравнивается по левому краю, а правый край располагается «лесенкой». Такой способ выравнивания является наиболее популярным на сайтах, поскольку позволяет пользователю легко отыскивать взглядом новую строку и комфортно читать большой текст.

`right`
: Выравнивание текста по правому краю. Этот способ выравнивания выступает в роли антагониста предыдущему типу. А именно, строки текста равняются по правому краю, а левый остается «рваным». Из-за того, что левый край не выровнен, а именно с него начинается чтение новых строк, такой текст читать труднее, чем, если бы он был выровнен по левому краю. Поэтому выравнивание по правому краю применяется обычно для коротких заголовков объемом не более трех строк. Мы не рассматриваем специфичные сайты, где текст приходится читать справа налево, там возможно подобный способ выравнивания и пригодится.

`start`
: Аналогично значению `left`, если текст идёт слева направо и `right`, когда текст идёт справа налево.

`end`
: Аналогично значению `right`, если текст идёт слева направо и `left`, когда текст идёт справа налево.

Значение по-умолчанию:

```css
text-align: left;
```

Применяется к: К блочным контейнерам

## Спецификации

- [CSS Text Level 3](https://drafts.csswg.org/css-text-3/#text-align-property)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/text.html#alignment-prop)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#text-align)

## Поддержка браузерами

`text-align: justify`:

<p class="ciu_embed" data-feature="css-text-justify" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-text-justify">Can I Use css-text-justify?</a> Data on support for the css-text-justify feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>text-align</title>
    <style>
      div {
        border: 1px solid black; /* Параметры рамки */
        padding: 5px; /* Поля вокруг текста */
        margin-bottom: 5px; /* Отступ снизу */
      }
      #left {
        text-align: left;
      }
      #right {
        text-align: right;
      }
      #center {
        text-align: center;
      }
      .content {
        width: 75%; /* Ширина слоя */
        background: #fc0; /* Цвет фона */
      }
    </style>
  </head>
  <body>
    <div id="left"><div class="content">Выравнивание по левому краю</div></div>
    <div id="center"><div class="content">Выравнивание по центру</div></div>
    <div id="right"><div class="content">Выравнивание по правому краю</div></div>
  </body>
</html>
```
