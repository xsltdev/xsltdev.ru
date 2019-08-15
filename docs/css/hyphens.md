# hyphens

Свойство **`hyphens`** сообщает браузеру, как расставлять переносы слов в блоке текста.

Словарь переносов хранится в браузере и подключается только при наличии атрибута `lang` с кодом языка. Так, для русского языка следует добавить `lang="ru"` к элементу [`<html>`](../html/html.md) или непосредственно к абзацу текста.

## Синтаксис

```css
/* Keyword values */
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Global values */
hyphens: inherit;
hyphens: initial;
hyphens: unset;
```

## Значения

`none`
: Слова не переносятся, даже при наличии в тексте мягких переносов `&shy`;.

`manual`
: Переносы слов в тексте происходят в тех местах, где добавлен `&shy`; или [`<wbr>`](../html/wbr.md), если их нет, то переносы не делаются.

`auto`
: Браузер автоматически добавляет переносы слов на основе встроенного словаря переносов.

### Примечание

- Internet Explorer поддерживает свойство `-ms-hyphens`.
- Safari поддерживает свойство `-webkit-hyphens`.
- Firefox поддерживает свойство `-moz-hyphens`.

Значение по-умолчанию:

```css
hyphens: manual;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#hyphens-property)

## Описание и примеры

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>hyphens</title>
    <style>
      p {
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
      }
    </style>
  </head>
  <body>
    <p>Никотинамидадениндинуклеотидфосфат — широко распространённый в природе кофермент некоторых дегидрогеназ — ферментов, катализирующих окислительно-восстановительные реакции в живых клетках.</p>
  </body>
</html>
```
