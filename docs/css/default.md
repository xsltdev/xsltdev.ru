---
description: Псевдокласс :default определяет элемент формы, установленный изначально при загрузке страницы
---

# :default

Псевдокласс **`:default`** определяет элемент формы, установленный изначально при загрузке страницы.

Этот псевдокласс может использоваться для [`<button>`](/html/button/), [`<input type="checkbox">`](/html/input/), [`<input type="radio">`](/html/input/) и [`<option>`](/html/option/).

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - [:any-link](any-link.md)
    - [:blank](blank.md)
    - [:checked](checked.md)
    - [:current()](current.md)
    - **:default**
    - [:defined](defined.md)
    - [:dir()](dir.md)
    - [:disabled](disabled.md)
    - [:empty](empty.md)
    - [:enabled](enabled.md)
    - [:first](first.md)
    - [:first-child](first-child.md)
    - [:first-of-type](first-of-type.md)
    - [:focus](focus.md)
    - [:focus-visible](focus-visible.md)
    - [:focus-within](focus-within.md)
    - [:fullscreen](fullscreen.md)
    - [:future](future.md)
    - [:has()](has.md)
    - :host
    - :host()
    - :host-context()
    - [:hover](hover.md)
    - [:indeterminate](indeterminate.md)
    - [:in-range](in-range.md)
    - [:invalid](invalid.md)
    - [:is()](is.md)
    - [:lang()](lang.md)
    - [:last-child](last-child.md)
    - [:last-of-type](last-of-type.md)
    - [:left](left-pseudo-class.md)
    - [:link](link.md)
    - :local-link
    - [:not()](not.md)
    - [:nth-child()](nth-child.md)
    - :nth-col()
    - [:nth-last-child()](nth-last-child.md)
    - :nth-last-col()
    - [:nth-last-of-type()](nth-last-of-type.md)
    - [:nth-of-type()](nth-of-type.md)
    - [:only-child](only-child.md)
    - [:only-of-type](only-of-type.md)
    - [:optional](optional.md)
    - [:out-of-range](out-of-range.md)
    - [:past](past.md)
    - [:placeholder-shown](placeholder-shown.md)
    - [:read-only](read-only.md)
    - [:read-write](read-write.md)
    - [:required](required.md)
    - :right
    - [:root](root.md)
    - [:scope](scope.md)
    - [:target](target.md)
    - :target-within
    - :user-invalid
    - [:valid](valid.md)
    - [:visited](visited.md)
    - [:where()](where.md)

    </div>

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

=== "HTML"

    ```html
    <input type="radio" name="season" id="spring" />
    <label for="spring">Spring</label>

    <input type="radio" name="season" id="summer" checked />
    <label for="spring">Summer</label>

    <input type="radio" name="season" id="fall" />
    <label for="spring">Fall</label>

    <input type="radio" name="season" id="winter" />
    <label for="spring">Winter</label>
    ```

=== "CSS"

    ```css
    input:default {
      box-shadow: 0 0 2px 1px coral;
    }

    input:default + label {
      color: coral;
    }
    ```

=== "Результат"

    ![Результат работы псевдокласса :default](default_1.png)
