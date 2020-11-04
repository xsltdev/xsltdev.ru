---
description: Правило @font-face позволяет авторам указывать онлайн-шрифты для отображения текста на своих веб-страницах
---

# @font-face

Правило **`@font-face`** позволяет авторам указывать онлайн-шрифты для отображения текста на своих веб-страницах.

Позволяя авторам предоставлять свои собственные шрифты, `@font-face` устраняет необходимость зависеть от ограниченного количества шрифтов, установленных пользователями на их компьютерах.

??? info "@-правила"

    <div class="col3" markdown="1">

    - [@charset](charset.md)
    - [@import](import.md)
    - [@namespace](namespace.md)
    - [@media](media.md)
    - [@supports](supports.md)
    - [@document](document.md)
    - [@page](page.md)
    - **@font-face**
    - [@keyframes](keyframes.md)
    - [@viewport](viewport.md)
    - [@counter-style](counter-style.md)
    - [@font-feature-values](font-feature-values.md)

    </div>

## Синтаксис

```css
@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/OpenSans-Regular-webfont.woff2') format('woff2'),
    url('/fonts/OpenSans-Regular-webfont.woff') format('woff');
}
```

## Дескрипторы правила

`font-display`
: Определяет способ отображения шрифта в зависимости от того, будет ли он загружен и готов к использованию.

`font-family`
: Указывает имя, которое будет использоваться в качестве значения шрифта для свойств шрифта.

`font-stretch`
: Значение [`font-stretch`](font-stretch.md).

`font-style`
: Значение [`font-style`](font-style.md).

`font-weight`
: Значение [`font-weight`](font-weight.md).

`font-variant`
: Значение [`font-variant`](font-variant.md).

`font-feature-settings`
: Позволяет управлять расширенными типографскими функциями в шрифтах OpenType.

`font-variation-settings`
: Позволяет контролировать уровень шрифтов OpenType или TrueType на низком уровне, указывая имена четырех буквенных имен функций, которые могут меняться, вместе с их значениями.

`src`
: Задает ресурс, содержащий данные шрифта. Это может быть URL-адрес расположения файла шрифта или имя шрифта на компьютере пользователя.

`unicode-range`
: Диапазон кодов Unicode используемые из шрифта.

## Спецификации

- [WOFF File Format 2.0](https://www.w3.org/TR/WOFF2/)
- [WOFF File Format 1.0](http://www.w3.org/TR/WOFF/)
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-face-rule)

## Поддержка браузерами

<p class="ciu_embed" data-feature="fontface" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=fontface">Can I Use fontface?</a> Data on support for the fontface feature across the major browsers from caniuse.com.
</p>

## Пример

=== "HTML"

    ```html
    <html>
      <head>
        <title>Web Font Sample</title>
        <style type="text/css" media="screen, print">
          @font-face {
            font-family: 'Bitstream Vera Serif Bold';
            src: url('https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf');
          }

          body {
            font-family: 'Bitstream Vera Serif Bold', serif;
          }
        </style>
      </head>
      <body>
        This is Bitstream Vera Serif Bold.
      </body>
    </html>
    ```

=== "CSS"

    ```css
    @font-face {
      font-family: MyHelvetica;
      src: local('Helvetica Neue Bold'), local('HelveticaNeue-Bold'),
        url(MgOpenModernaBold.ttf);
      font-weight: bold;
    }
    ```
