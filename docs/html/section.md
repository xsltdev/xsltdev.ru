---
description: Тег section (от англ. section — раздел) задаёт раздел документа, может применяться для блока новостей, контактной информации, глав текста, вкладок в диалоговом окне и др
---

# &lt;section&gt;

Тег **`<section>`** _(от англ. **section** — раздел)_ задаёт раздел документа, может применяться для блока новостей, контактной информации, глав текста, вкладок в диалоговом окне и др.

Раздел обычно содержит заголовок. Допускается вкладывать один тег `<section>` внутрь другого.

## Синтаксис

```html
<section></section>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/sections.html#the-section-element)
- [HTML 5.1](http://www.w3.org/html/wg/drafts/html/master/sections.html#the-section-element)
- [HTML 5](http://www.w3.org/TR/html5/sections.html#the-section-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>section</title>
  </head>
  <body>
    <section>
      <h1>Съёмки фильма Полипропилен</h1>
      <p>
        История о том, как снимали фильм, где герои отдыхали
        на пляже, потом пришёл антагонист, избил
        протагонистов, сбросил их в бассейн, и что из этого
        получилось.
      </p>
    </section>
    <section>
      <h1>Хороший язык</h1>
      <p>
        История о том, как проходила студия изучения языка
        эсперанто, в то время, как над ней, на веранде
        велась студия приколистов, где травились анекдоты, и
        что из этого получилось.
      </p>
    </section>
  </body>
</html>
```

## Ссылки

- Тег [`<section>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/section) <sup><small>MDN (рус.)</small></sup>
