---
description: Тег progress (от англ. progress — прогрес) используется для отображения прогресса завершённости задачи
---

# &lt;progress&gt;

Тег **`<progress>`** _(от англ. **progress** — прогрес)_ используется для отображения прогресса завершённости задачи.

Изменение значения происходит через JavaScript.

Вид элемента зависит от браузера и операционной системы и может довольно сильно различаться между собой.

## Поддержка браузерами

<p class="ciu_embed" data-feature="progress" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=progress">Can I Use progress?</a> Data on support for the progress feature across the major browsers from caniuse.com.
</p>

Полифилы для включения поддержки:

- [`<progress>` polyfill](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#output-progress-menu-command)

## Синтаксис

```html
<progress value="<число>" max="<число>">Текст</progress>
```

Закрывающий тег обязателен.

## Атрибуты

`value`
: Текущее значение прогресса.

`max`
: Максимальное значение прогресса.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/forms.html#the-progress-element)
- [HTML 5](http://www.w3.org/TR/html5/forms.html#the-progress-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>progress</title>
  </head>
  <body>
    <p>Пожалуйста, подождите, фотографии загружаются.</p>
    <progress max="100" value="25">
      Загружено на <span id="value">25</span>%
    </progress>
  </body>
</html>
```

## Ссылки

- [`<progress>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/progress) на MDN
