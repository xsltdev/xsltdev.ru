---
description: Правило @document ограничивает правила стиля, содержащиеся в нем, на основе URL-адреса документа
---

# @document

Правило **`@document`** ограничивает правила стиля, содержащиеся в нем, на основе URL-адреса документа. Он разработан в основном для пользовательских таблиц стилей, хотя он также может использоваться в авторских таблицах стилей.

К примеру, если адреса мобильной и основной версии сайта различаются, то мы можем задать собственный стиль элементов для каждой версии.

??? info "@-правила"

    <div class="col3" markdown="1">

    - [@charset](charset.md)
    - [@import](import.md)
    - [@namespace](namespace.md)
    - [@media](media.md)
    - [@supports](supports.md)
    - **@document**
    - [@page](page.md)
    - [@font-face](font-face.md)
    - [@keyframes](keyframes.md)
    - [@viewport](viewport.md)
    - [@counter-style](counter-style.md)
    - [@font-feature-values](font-feature-values.md)

    </div>

## Синтаксис

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Значения

Правило `@document` может указывать одну или несколько подходящих функций. Если какая-либо из функций применяется к данному URL-адресу, это правило вступит в силу для этого URL-адреса. Доступны следующие функции:

`url()`
: который соответствует точному URL-адресу.

`url-prefix()`
: который совпадает, если URL-адрес документа начинается с указанного значения.

`domain()`
: который совпадает, если URL-адрес документа находится в предоставленном домене (или его субдомене).

`media-document()`
: с параметром видео, изображения, плагина или всего.

`regexp()`
: который совпадает, если URL-адрес документа сопоставляется с предоставленным регулярным выражением. Выражение должно соответствовать всему URL-адресу.

Значения, предоставляемые функциям `url()`, `url-prefix()`, `domain()`, и `media-document()` могут быть необязательно заключены в одинарные или двойные кавычки. Значения, предоставляемые функции `regexp()` должны быть заключены в кавычки.

Экранированные значения, предоставляемые функции `regexp()` акже должны быть экранированы из CSS. Например, `.` (период) соответствует любому символу в регулярных выражениях. Чтобы соответствовать буквальному периоду, вам сначала нужно избежать этого, используя правила регулярных выражений (`\.`), А затем убежать от этой строки с помощью правил CSS (`\\.`).

## Спецификации

- [CSS Conditional Rules Module Level 3](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document)

## Примеры

### Пример 1

```css
@document url(http://www.w3.org/),
          url-prefix(http://www.w3.org/Style/),
          domain(mozilla.org),
          media-document(video),
          regexp("https:.*") {
  /* CSS rules here apply to:
     - The page "http://www.w3.org/"
     - Any page whose URL begins with "http://www.w3.org/Style/"
     - Any page whose URL's host is "mozilla.org"
       or ends with ".mozilla.org"
     - Any standalone video
     - Any page whose URL starts with "https:" */

  /* Make the above-mentioned pages really ugly */
  body {
    color: purple;
    background: yellow;
  }
}
```

### Пример 2

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>@document</title>
    <style>
      .ssl {
        display: none;
      }
      @-moz-document regexp("https:.*") {
        .ssl {
          display: block;
          background: #5bd4b6;
          color: #fff;
          padding: 20px;
        }
      }
    </style>
  </head>
  <body>
    <div class="ssl">
      Для вашей безопасности на сайте мы используем
      защищённый протокол.
    </div>
  </body>
</html>
```

В данном примере блок с классом `ssl` будет виден только на сайте, адрес которого начинается с протокола `https`.

## Ссылки

- [@document](https://developer.mozilla.org/ru/docs/Web/CSS/@document) <sup><small>MDN (рус.)</small></sup>
