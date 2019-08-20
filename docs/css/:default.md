# :default

Псевдокласс **`:default`** определяет элемент формы, установленный изначально при загрузке страницы.

Этот псевдокласс может использоваться для [`<button>`](button.md), [`<input type="checkbox">`](input.md), [`<input type="radio">`](input.md) и [`<option>`](option.md).

## Синтаксис

```css
/* Selects any default <input> */
input:default {
  background-color: lime;
}
```

## Значения

Группированные элементы, которые допускают множественный выбор, могут также иметь несколько значений `:default`, то есть они могут иметь несколько элементов, первоначально выбранных. В этом случае все значения по умолчанию представлены с использованием псевдокласса `:default`. Например, вы можете установить флажки по умолчанию среди группы флажков.

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/#selector-default)
- [HTML5](http://www.w3.org/TR/html5/#selector-default)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#default-pseudo)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-default)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-default-pseudo" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=css-default-pseudo">Can I Use css-default-pseudo?</a> Data on support for the css-default-pseudo feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html tab="HTML"
<input type="radio" name="season" id="spring" />
<label for="spring">Spring</label>

<input type="radio" name="season" id="summer" checked />
<label for="spring">Summer</label>

<input type="radio" name="season" id="fall" />
<label for="spring">Fall</label>

<input type="radio" name="season" id="winter" />
<label for="spring">Winter</label>
```

```css tab="CSS"
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

Результат:

![Результат работы псевдокласса :default](default_1.png)
