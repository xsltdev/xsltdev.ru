---
description: Псевдокласс :empty находит любой элемент, у которого нет потомков
---

# :empty

Псевдокласс **`:empty`** находит любой элемент, у которого нет потомков.

Учитываются элементы и текст (включая пробелы). Комментарии не повлияют на то, что элемент будет рассматриваться как не пустой.

## Синтаксис

```css
/* Selects any <div> that contains no content */
div:empty {
  background: lime;
}
```

## Спецификации

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#empty-pseudo)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#empty-pseudo)

## Пример

=== "HTML"

    ```html
    <div class="box"><!-- I will be lime. --></div>
    <div class="box">I will be pink.</div>
    <div class="box">
      <!-- I will be pink because of the whitespace around this comment. -->
    </div>
    ```

=== "CSS"

    ```css
    .box {
      background: pink;
      height: 80px;
      width: 80px;
    }

    .box:empty {
      background: lime;
    }
    ```

=== "Результат"

    ![Результат работы псевдокласса :empty](empty.png)
