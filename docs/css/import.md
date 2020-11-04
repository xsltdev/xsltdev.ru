---
description: Правило @import используется для импорта CSS-стилей из других таблиц стилей
---

# @import

Правило **`@import`** используется для импорта CSS-стилей из других таблиц стилей.

Эти правила должны предшествовать всем другим типам правил, кроме правил [`@charset`](charset.md) поскольку это не вложенный оператор, `@import` не может использоваться внутри условных групповых at-правил.

??? info "@-правила"

    <div class="col3" markdown="1">

    - [@charset](charset.md)
    - **@import**
    - [@namespace](namespace.md)
    - [@media](media.md)
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

```css
@import url('fineprint.css') print;
@import url('bluish.css') projection, tv;
@import 'custom.css';
@import url('chrome://communicator/skin/');
@import 'common.css' screen, projection;
@import url('landscape.css') screen and
  (orientation: landscape);
```

## Значения

Чтобы браузеры могли избежать загрузки ресурсов для неподдерживаемых типов носителей, авторы могут указывать медиа-зависимые правила `@import`. Эти условные импорты задают медиа-запросы, разделенные запятыми, после URL.

При отсутствии какого-либо медиа-запроса импорт является безусловным. Указание `all` имеет тот же эффект.

### Медиа-типы

Медиа-типы описывают общую категорию устройства.

`all`
: любые устройства

`print`
: печатающие устройства, например, принтер

`screen`
: экранные устройства, например, монитор

`speech`
: синтезаторы речи

Устаревшие типы медиа: CSS2.1 и Media Queries 3 определили несколько дополнительных типов медиа (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` и `aural`), но они стали устаревшими в Media Queries 4 и не должны использоваться. `aural` тип был заменен `speech`.

## Спецификации

- [CSS Cascading and Inheritance Level 3](https://drafts.csswg.org/css-cascade-3/#at-ruledef-import)
- [Media Queries](https://drafts.csswg.org/mediaqueries-3/#media0)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/cascade.html#at-import)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#the-cascade)
