---
description: Правило @supports позволяет проверить, поддерживает браузер ту или иную возможность, и на основе этого применить стили
---

# @supports

Правило **`@supports`** позволяет проверить, поддерживает браузер ту или иную возможность, и на основе этого применить стили. Можно создавать составные условия с помощью логических операторов `not`, `and`, `or`.

## Синтаксис

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}
@supports not (display: grid) {
  div {
    float: right;
  }
}
```

В JavaScript к `@supports` можно получить доступ через интерфейс объектной модели CSS `CSSSupportsRule`.

## Значения

В качестве условия в круглых скобках пишется CSS свойство и его значение. Далее в фигурных скобках идут стили. Если браузер поддерживает указанное свойство, то применяются заданные стили, в противном случае они игнорируются.

```css
@supports (transform: perspective(300px)) {
  /* Браузер поддерживает свойство transform с функцией perspective() */
}
```

Для проверки того, что свойство не поддерживается применяется логический оператор `not`, он ставится перед условием.

```css
@supports not (transform: perspective(300px)) {
  /* Браузер НЕ поддерживает свойство transform с функцией perspective() */
}
```

Объединить несколько условий можно через логический оператор `and`. Если хотя бы одно из условий не поддерживается, то стили не применяются.

```css
@supports (transform-origin: 50% 100%) and
  (transform: perspective(300px)) {
  /* Браузер одновременно поддерживает свойства transform-origin И
	transform с функцией perspective() */
}
```

Для выбора одного из условий используется логический оператор `or`. Если поддерживается хотя бы одно из условий, то применяются стили.

```css
@supports (perspective: 300px) or
  (transform: perspective(300px)) {
  /* Браузер поддерживает свойство perspective ИЛИ
	свойство transform с функцией perspective() */
}
```

## Спецификации

- [CSS Conditional Rules Module Level 4](https://drafts.csswg.org/css-conditional-4/#at-supports)
- [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/#at-supports)

## Примеры

### Пример 1

Тестирование на поддержку заданного свойства CSS:

```css
@supports (animation-name: test) {
  /* CSS applied when animations are supported without a prefix */
  @keyframes {
    /* Other at-rules can be nested inside */
  }
}
```

Тестирование на поддержку заданного свойства CSS или версии с префиксом:

```css
@supports (
  (perspective: 10px) or (-moz-perspective: 10px) or
    (-webkit-perspective: 10px) or (-ms-perspective: 10px)
    or (-o-perspective: 10px)
) {
  /* CSS applied when 3D transforms, prefixed or not, are supported */
}
```

Тестирование на отсутствие поддержки определенного свойства CSS:

```css
@supports not (
  (text-align-last: justify) or
    (-moz-text-align-last: justify)
) {
  /* CSS to provide fallback alternative for text-align-last: justify */
}
```

Тестирование на поддержку пользовательских свойств:

```css
@supports (--foo: green) {
  body {
    color: var(--varName);
  }
}
```

<!-- prettier-ignore -->
Тестирование на поддержку селектора, например [`:is()`](is.md)

<!-- prettier-ignore -->
```css
/* This rule won't be applied in browsers which don't support :is() */
:is(ul, ol) > li {
  /* CSS applied when the :is(…) selector is supported */
}

@supports not selector(:is(a, b)) {
  /* Fallback for when :is() is unsupported */
  ul > li,
  ol > li {
    /* The above expanded for browsers which don't support :is(…) */
  }
}

@supports selector(:nth-child(1n of a, b)) {
  /* This rule needs to be inside the @supports block, otherwise
     it will be partially applied in browsers which don't support
     the `of` argument of :nth-child(…) is supported */
  :is(:nth-child(1n of ul, ol) a, details > summary) {
    /* CSS applied when the :is(…) selector and
         the `of` argument of :nth-child(…) are both supported */
  }
}
```

### Пример 2

```html
<!DOCTYPE html>
<html>
  <head>
    <title>@supports</title>
    <meta charset="utf-8" />
    <style>
      @supports (display: flex) {
        .no {
          display: none;
        }
      }
      @supports not (display: flex) {
        .yes {
          display: none;
        }
      }
    </style>
  </head>
  <body>
    <p class="yes">
      Ваш браузер поддерживает display: flex.
    </p>
    <p class="no">
      Ваш браузер не поддерживает display: flex.
    </p>
  </body>
</html>
```

## Ссылки

- [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) на MDN
