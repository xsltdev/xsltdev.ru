---
description: Свойство object-fit управляет соотношением сторон заменяемых элементов, таких как img и video, когда у них задана ширина или высота, а также способом масштабирования
---

# object-fit

Свойство **`object-fit`** управляет соотношением сторон заменяемых элементов, таких как [`<img>`](../html/img.md) и [`<video>`](../html/video.md), когда у них задана ширина или высота, а также способом масштабирования.

Свойство `object-fit` может сохранять исходные пропорции элемента или наоборот, искажать пропорции, в угоду соблюдения размеров.

## Синтаксис

```css
object-fit: fill | contain | cover | none;
```

## Значения

`fill`
: Элемент масштабируется, чтобы соответствовать заданным размерам, при этом пропорции игнорируются.

`contain`
: Элемент масштабируется, чтобы целиком уместиться в заданные размеры с соблюдением пропорций.

`cover`
: Элемент увеличивается или уменьшается, чтобы целиком заполнить заданную область с сохранением пропорций.

`none`
: Сохраняются исходные пропорции элемента, установленные значения ширины или высоты не влияют на содержимое.

Влияние разных значений на фотографии продемонстрировано на рис. 1. Был использован следующий стиль.

```css
img {
  background: #ccc;
  overflow: hidden;
  width: 200px;
  height: 200px;
}
```

![Исходные изображения](css_fit-object-src.jpg)

![fill](css_fit-object-fill.jpg)

![contain](css_fit-object-contain.jpg)

![cover](css_fit-object-cover.jpg)

![none](css_fit-object-none.jpg)

Рис. 1. Фотографии с разным значением `object-fit`

### Примечание

Opera до версии 19 поддерживает свойство `-o-object-fit`.

Значение по-умолчанию:

```css
object-fit: fill;
```

Применяется к: К [`<img>`](../html/img.md), [`<video>`](../html/video.md), [`<object>`](../html/object.md), [`<input type="image">`](../html/input.md)

## Спецификации

- [CSS Images Module Level 4](https://drafts.csswg.org/css-images-4/#the-object-fit)
- [CSS Images Module Level 3](https://drafts.csswg.org/css-images-3/#the-object-fit)

## Поддержка браузерами

<p class="ciu_embed" data-feature="object-fit" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=object-fit">Can I Use object-fit?</a> Data on support for the object-fit feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>object-fit</title>
    <style>
      .dolphin img {
        object-fit: cover;
        height: 400px;
        width: 300px;
      }
    </style>
  </head>
  <body>
    <p class="dolphin"><img src="image/dolphin.jpg" alt="Дельфин" /></p>
  </body>
</html>
```
