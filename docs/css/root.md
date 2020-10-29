# :root

Псевдокласс **`:root`** определяет корневой элемент документа. В HTML этот селектор всегда соответствует элементу [`<html>`](../html/html.md), но в стилях приоритет `:root` выше, чем у селектора `html`.

## Синтаксис

```css
:root {
  ...;
}
```

## Спецификации

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#root-pseudo)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#root-pseudo)

## Пример

Использование `:root` полезно для объявления CSS Переменных:

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Ссылки

- [:root](https://developer.mozilla.org/ru/docs/Web/CSS/:root) <sup><small>MDN (рус.)</small></sup>
