---
description: Псевдокласс :only-child применяется к дочернему элементу, только если он является единственным у родителя
---

# :only-child

Псевдокласс **`:only-child`** применяется к дочернему элементу, только если он является единственным у родителя.

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - [:any-link](any-link.md)
    - [:blank](blank.md)
    - [:checked](checked.md)
    - [:current()](current.md)
    - [:default](default.md)
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
    - **:only-child**
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

## Описание

В качестве примера рассмотрим следующий код HTML:

```html
<article>
  <h1>Роль цитокинов при дорсалгии</h1>
  <p>Автор: Гордон Фримен, канд. физ.-мат. наук</p>
  <p>Содержание статьи</p>
  <address>Почта: freemen@blackmesa.com</address>
  <p>
    Опубликовано:
    <time datetime="2018-11-27">27 ноября 2018</time>
  </p>
</article>
```

Псевдокласс `:only-child` без указания селектора выберет все единственные элементы и установит для них красный цвет текста. Здесь единственным будет элемент `<time>`, поскольку он является единственным дочерним элементом у своего родителя `<p>`.

```css
article :only-child {
  color: red;
}
```

При добавлении селектора к `:only-child` сперва рассматриваются все единственные дочерние элементы у своих родителей, затем проверяется, относятся ли они к указанному типу. Если эти два условия совпадают (в данном случае единственный элемент и элемент `<h1>`), тогда заголовок окрасится красным цветом. Поскольку `<h1>` не является единственным и кроме него есть другие элементы (`<p>` и `<address>`), то ничего выбрано не будет.

```css
article h1:only-child {
  color: red;
}
```

Вместо `:only-child` можно использовать комбинации `:first-child:last-child` или `:nth-child(1):nth-last-child(1)`.

## Примеры

### Пример 1

=== "HTML"

    ```html
    <div>
      <span>Этот span единственный ребёнок своего папы:(</span>
    </div>

    <div>
      <span>Этот span один из потомков родителя</span>
      <span>Этот span один из детей отца</span>
    </div>
    ```

=== "CSS"

    ```css
    span:only-child {
      color: red;
    }
    ```

=== "Результат"

    ![only-child](only-child.png)

### Пример 2

Пример со списком

=== "HTML"

    ```html
    <ol>
      <li>
        Первый
        <ul>
          <li>Это единственный ребёнок</li>
        </ul>
      </li>
      <li>
        Второй
        <ul>
          <li>Этот список с двумя элементами</li>
          <li>Этот список с двумя элементами</li>
        </ul>
      </li>
      <li>
        Третий
        <ul>
          <li>Этот список с тремя элементами</li>
          <li>Этот список с тремя элементами</li>
          <li>Этот список с тремя элементами</li>
        </ul>
      </li>
      <ol></ol>
    </ol>
    ```

=== "CSS"

    ```css
    li li {
      list-style-type: disc;
    }
    li:only-child {
      color: #6699ff;
      font-style: italic;
      list-style-type: square;
    }
    ```

=== "Результат"

    ![only-child](only-child2.png)

## См. также

- [`:only-of-type`](only-of-type.md)

## Ссылки

- Псевдо-класс [`:only-child`](https://developer.mozilla.org/ru/docs/Web/CSS/:only-child) <sup><small>MDN (рус.)</small></sup>
