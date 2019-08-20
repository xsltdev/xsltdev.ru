# ::before

Псевдо-элемент **`::before`** является первым потомком соответствующего элемента.

Часто применяется для оформления дополнительным контентом [`content`](content.md) родительского элемента. Этот элемент по умолчанию [строковый](display.md).

## Синтаксис

```css
/* CSS3 синтаксис */
element::before { свойства }

/* CSS2 устаревший синтаксис (нужен только для поддержки IE8) */
element:before  { свойства }

/* добавляет контент "Hello world!" перед каждым элементом <p> */
p::before { content: "Hello world!"; }
```

Запись `::before` (с двумя двоеточиями) была введена в CSS3 для разделения между псевдо-классами и псевдо-элементами. Браузеры также поддерживают устаревшую запись `:before` (с одним двоеточием) из стандарта CSS 2.

## Спецификации

- [CSS Pseudo-Elements Level 4](https://drafts.csswg.org/css-pseudo-4/#selectordef-before)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/#animatable-properties)
- [CSS Animations](https://drafts.csswg.org/css-animations/)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/generate.html#before-after-content)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-gencontent" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-gencontent">Can I Use css-gencontent?</a> Data on support for the css-gencontent feature across the major browsers from caniuse.com.
</p>

## Пример

```html tab="HTML"
<q>Some quotes</q>, he said, <q>are better than none</q>.
```

```css tab="CSS"
q::before {
  content: '«';
  color: blue;
}
q::after {
  content: '»';
  color: red;
}
```
