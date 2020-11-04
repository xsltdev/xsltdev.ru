---
description: Правило @media в CSS связывает набор операторов, в CSS блок, ограниченный фигурными скобками, с условием, определенным запросом СМИ
---

# @media

Правило **`@media`** в CSS связывает набор операторов, в CSS блок, ограниченный фигурными скобками, с условием, определенным запросом СМИ. Правило `@media` может быть использовано не только на верхнем уровне CSS, но и внутри любого фрагмента условной группы-правил.

??? info "@-правила"

    <div class="col3" markdown="1">

    - [@charset](charset.md)
    - [@import](import.md)
    - [@namespace](namespace.md)
    - **@media**
    - [@supports](supports.md)
    - [@document](document.md)
    - [@page](page.md)
    - [@font-face](font-face.md)
    - [@keyframes](keyframes.md)
    - [@viewport](viewport.md)
    - [@counter-style](counter-style.md)
    - [@font-feature-values](font-feature-values.md)

    </div>

## Синтаксис

```
@media <media-query-list> {
	<group-rule-body>
}

где
<media-query-list> = <media-query>#

где
<media-query> = <media-condition> | [ not | only ]? <media-type> [ and <media-condition-without-or> ]?

где
<media-condition> = <media-not> | <media-and> | <media-or> | <media-in-parens>
<media-type> = <ident>
<media-condition-without-or> = <media-not> | <media-and> | <media-in-parens>

где
<media-not> = not <media-in-parens>
<media-and> = <media-in-parens> [ and <media-in-parens> ]+
<media-or> = <media-in-parens> [ or <media-in-parens> ]+
<media-in-parens> = ( <media-condition> ) | <media-feature> | <general-enclosed>

где
<media-feature> = ( [ <mf-plain> | <mf-boolean> | <mf-range> ] )
<general-enclosed> = [ <function-token> <any-value> ) ] | ( <ident> <any-value> )

где
<mf-plain> = <mf-name> : <mf-value>
<mf-boolean> = <mf-name>
<mf-range> = <mf-name> [ '<' | '>' ]? '='? <mf-value> | <mf-value> [ '<' | '>' ]? '='? <mf-name> | <mf-value> '<' '='? <mf-name> '<' '='? <mf-value> | <mf-value> '>' '='? <mf-name> '>' '='? <mf-value>

где
<mf-name> = <ident>
<mf-value> = <number> | <dimension> | <ident> | <ratio>
```

## Типы

`all`
: Подходит для всех устройств.

`print`
: Принтеры.

`screen`
: Предназначен в первую очередь для цветных компьютерных экранов.

`speech`
: Предназначен для синтезаторов речи.

Примечание: CSS2.1 и Media Queries 3 определили несколько дополнительных зачений (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, `aural`), но они устарели в Media Queries 4 и не рекомендуется к использованию.

## Спецификации

- [Compatibility Standard](https://compat.spec.whatwg.org/#css-media-queries)
- [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/#at-media)
- [Media Queries Level 4](https://drafts.csswg.org/mediaqueries-4/#media)
- [Media Queries](https://drafts.csswg.org/mediaqueries-3/#media0)
- [CSS Level 2 (Revision 1)](https://www.w3.org/TR/CSS2/media.html#at-media-rule)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-media-interaction" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<a href="http://caniuse.com/#feat=css-media-interaction">Can I Use css-media-interaction?</a> Data on support for the css-media-interaction feature across the major browsers from caniuse.com.
</p>

<p class="ciu_embed" data-feature="css-media-resolution" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
<a href="http://caniuse.com/#feat=css-media-resolution">Can I Use css-media-resolution?</a> Data on support for the css-media-resolution feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```css
@media print {
  body {
    font-size: 10pt;
  }
}
@media screen {
  body {
    font-size: 13px;
  }
}
@media screen, print {
  body {
    line-height: 1.2;
  }
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  body {
    line-height: 1.4;
  }
}
```
