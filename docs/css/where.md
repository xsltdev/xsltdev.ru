# :where()

Псевдо-класс **`:where()`** принимает список селекторов в качестве аргумента и выбирает все элементы, которые могут быть выбраны одним из селекторов в этом списке.

Разница между `:where()` и `:is()` заключается в том, что `:where()` всегда имеет 0 специфику, тогда как `:is()` принимает специфику наиболее конкретного селектора из своих аргументов.

## Спецификация

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#zero-matches)

## Пример

Ниже приведен типичный пример, когда эвристика специфичности не соответствует ожиданиям автора:

```css
a:not(:hover) {
  text-decoration: none;
}

nav a {
  /* Has no effect */
  text-decoration: underline;
}
```

Однако с помощью `:where()` автор может явно объявить свое намерение:

```css
a:where(:not(:hover)) {
  text-decoration: none;
}

nav a {
  /* Works now! */
  text-decoration: underline;
}
```

## См. также

- [:is()](is.md)

## Ссылки

- [:where()](https://developer.mozilla.org/en-US/docs/Web/CSS/:where) на MDN
