# :any-link

Псевдокласс **`:any-link`** представляет собой элемент, который действует как исходный якорь гиперссылки, независимо от того, была ли она посещена.

Другими словами, он соответствует всем элементам [`<a>`](../html/a.md), [`<area>`](../html/area.md), или [`<link>`](../html/link.md), которые имеют атрибути `href`. Таким образом, он соответствует всем элементам, которые используют [`:link`](:link.md) или [`:visited`](:visited.md).

## Синтаксис

```css
/* Выбирает любой элемент, который будет соответствовать:link или :visited */
:any-link {
  color: green;
}
```

## Спецификация

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-any-link-pseudo)

## Поддержка браузерами

- Chrome 65+
- Firefox 50+
- Safari 9+

## Пример

```html tab="HTML"
<a href="https://example.com">External link</a><br />
<a href="#">Internal target link</a><br />
<a>Placeholder link (won't get styled)</a>
```

```css tab="CSS"
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* WebKit browsers */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

## См. также

- Связанные псевдоклассы [`:link`](:link.md), [`:visited`](:visited.md)

## Ссылки

- [:any-link](https://developer.mozilla.org/ru/docs/Web/CSS/:any-link) на MDN
