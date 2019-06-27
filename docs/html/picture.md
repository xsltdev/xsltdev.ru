# &lt;picture&gt;

Тег **`<picture>`** _(от англ. **picture** -- картина, изображение)_ представляет собой контейнер для хранения нескольких элементов [`<source>`](/html/source/), которые поддерживают элемент [`<img>`](/html/img/).

Это позволяет указывать разные изображения с учётом размера экрана, плотности пикселей, формата изображения и других параметров. Вот несколько областей применения `<picture>`:

- для экранов ретина можно показывать картинку большего размера;
- выводить рисунки разного размера для мобильных и настольных устройств;
- отображать изображения разных пропорций, учитывающих ориентацию устройства;
- выводить изображение в векторном формате SVG, а для браузеров, его не поддерживающих, показывать PNG.

## Поддержка браузерами

<p class="ciu_embed" data-feature="picture" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=picture">Can I Use picture?</a> Data on support for the picture feature across the major browsers from caniuse.com.
</p>

Полифилы для включения поддержки:

- [`<picture>` polyfill](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#picture-and-img-srcset)

## Синтаксис

```html
<picture>
  <source />
  <img />
</picture>
```

Внутри `<picture>` содержится ноль или несколько элементов [`<source>`](/html/source/), которые идут перед одним элементом [`<img>`](/html/img/).

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>picture</title>
  </head>
  <body>
    <picture>
      <source srcset="image/html5-logo.svg" />
      <img src="image/html5-logo.png" width="256" height="256" alt="HTML5" />
    </picture>
  </body>
</html>
```
