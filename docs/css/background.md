# background

Универсальное свойство **`background`** позволяет установить одновременно до пяти характеристик фона. Значения могут идти в любом порядке, браузер сам определит, какое из них соответствует нужному свойству. Для подробного ознакомления смотрите информацию о каждом свойстве отдельно. Допустимо также указывать параметры сразу нескольких фонов, перечисляя их через запятую.

## Синтаксис

```
background: [<фон>, ]* <последний_фон>
```

Здесь:

- `<фон>` = [background-image](background-image.md) || [background-position](background-position.md) [ / [background-size](background-size.md) ]? || [background-repeat](background-repeat.md) || [background-attachment](background-attachment.md) || [background-origin](background-origin.md) || [background-clip](background-clip.md)
- `<последний_фон>` = [background-image](background-image.md) || [background-position](background-position.md) [ / [background-size](background-size.md) ]? || [background-repeat](background-repeat.md) || [background-attachment](background-attachment.md) || [background-origin](background-origin.md) || [background-clip](background-clip.md) || [background-color](background-color.md)

Если наряду с фоновыми изображениями требуется задать цвет фона элемента, он указывается в последнюю очередь после перечисления.

```css
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url('test.jpg') repeat-y;

/* Using a <box> and <background-color> */
background: border-box red;

/* A single image, centered and scaled */
background: no-repeat center/80% url('../img/image.png');
```

## Значения

Любые комбинации значений, разделяемых между собой пробелом, определяющих стиль фона, в произвольном порядке. Ни одно значение не является обязательным, поэтому неиспользуемые можно опустить.

Значение по-умолчанию:

```css
background: transparent none repeat scroll 0% 0%;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/css3-background/#the-background)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/colors.html#propdef-background)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#background)

## Поддержка браузерами

Несколько фонов:

<p class="ciu_embed" data-feature="multibackgrounds" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=multibackgrounds">Can I Use multibackgrounds?</a> Data on support for the multibackgrounds feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

### Пример 1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background</title>
    <style>
      div {
        height: 200px;
        width: 200px;
        overflow: auto;
        padding-left: 15px;
        background: url('/example/image/hand.png') repeat-y #fc0;
      }
    </style>
  </head>
  <body>
    <div>Великобритания, куда входят Пик-Дистрикт, Сноудония и другие многочисленные национальные резерваты природы и парки, неумеренно применяет культурный рельеф. Суша морей начинает туристический подземный сток. Дождливая погода дегустирует кандым. Винный фестиваль проходит в приусадебном музее Георгикон, там же беспошлинный ввоз вещей и предметов в пределах личной потребности связывает белый саксаул. Санитарный и ветеринарный контроль оформляет городской Гвианский щит.</div>
  </body>
</html>
```

### Пример 2

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background</title>
    <style>
      body {
        background: url('/example/image/hand.png') repeat-y, url('/example/image/bg-right.png') repeat-y 100% 0, #fc0;
      }
    </style>
  </head>
  <body></body>
</html>
```
