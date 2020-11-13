---
description: Свойство hanging-punctuation определяет как браузер будет отображать знаки пунктуации, попадающие в начало или в конец строки
---

# hanging-punctuation

Свойство **`hanging-punctuation`** определяет как браузер будет отображать знаки пунктуации, попадающие в начало или в конец строки. Висячая пунктуация может располагаться за границами контейнера.

??? info "Текст"

    <div class="col3" markdown="1">

    - **hanging-punctuation**
    - [hyphens](hyphens.md)
    - [letter-spacing](letter-spacing.md)
    - [line-break](line-break.md)
    - [overflow-wrap](overflow-wrap.md)
    - [paint-order](paint-order.md)
    - [tab-size](tab-size.md)
    - [text-align](text-align.md)
    - [text-align-last](text-align-last.md)
    - [text-indent](text-indent.md)
    - [text-justify](text-justify.md)
    - [text-size-adjust](text-size-adjust.md)
    - [text-transform](text-transform.md)
    - [white-space](white-space.md)
    - [word-break](word-break.md)
    - [word-spacing](word-spacing.md)

    </div>

    <div class="col3" markdown="1">

    - [letter-spacing](letter-spacing.md)
    - [text-decoration](text-decoration.md)
    - [text-decoration-color](text-decoration-color.md)
    - [text-decoration-line](text-decoration-line.md)
    - [text-decoration-style](text-decoration-style.md)
    - [text-decoration-thickness](text-decoration-thickness.md)
    - [text-decoration-skip](text-decoration-skip.md)
    - [text-decoration-skip-ink](text-decoration-skip-ink.md)
    - [text-emphasis](text-emphasis.md)
    - [text-emphasis-color](text-emphasis-color.md)
    - [text-emphasis-position](text-emphasis-position.md)
    - [text-emphasis-style](text-emphasis-style.md)
    - [text-indent](text-indent.md)
    - [text-rendering](text-rendering.md)
    - [text-shadow](text-shadow.md)
    - [text-underline-position](text-underline-position.md)
    - [text-transform](text-transform.md)
    - [white-space](white-space.md)
    - [word-spacing](word-spacing.md)

    </div>

## Синтаксис

```css
/* Значения ключевых слов */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: force-end;
hanging-punctuation: allow-end;

/* Два ключевых слова */
hanging-punctuation: first force-end;
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last force-end;
hanging-punctuation: last allow-end;

/* Три ключевых слова */
hanging-punctuation: first force-end last;
hanging-punctuation: first allow-end last;

/* Общие значения */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: unset;
```

## Значения

Значение по-умолчанию: `none`

Свойство `hanging-punctuation` может быть определено с помощью одного, двух или трех ключевых слов.

Для одного значения может быть использовано любое из описанных ниже значений.

Для двух значений используются следующие варианты:

- `first` вместе с одним из `last`, `allow-end` или `force-end`
- `last` вместе с одним из `first`, `allow-end` или `force-end`

Для трех значений используются один из следующих вариантов:

- `first`, `allow-end` и `last`
- `first`, `force-end` и `last`

**`none`**
: Никакие символы не выносятся.

`first`
: Открывающая скобка или кавычка в начале первой строки выровненного элемента будет вынесена.

`last`
: Закрывающая скобка или кавычка последней строки выровненного элемента будет вынесена.

`force-end`
: Точка или запятая в конце строки выносится.

`allow-end`
: Точка или запятая в конце строки будет вынесена, если нет лучшего варианта для выравнивания.

## Спецификация

- [CSS Text Module Level 3](https://drafts.csswg.org/css-text-3/#hanging-punctuation-property)

## Поддержка браузерами

- Safari 10+

## Пример

=== "HTML"

    ```html
    <p>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur dignissim nunc mauris, et sollicitudin est
      scelerisque sed. Praesent laoreet tortor massa, sit amet
      vulputate nulla pharetra ut.”
    </p>
    ```

=== "CSS"

    ```css
    p {
      hanging-punctuation: first last;
      margin: 0.5rem;
    }
    ```

=== "Результат"

    ![hanging-punctuation](hanging-punctuation.png)

## Ссылки

- [`hanging-punctuation`](https://developer.mozilla.org/ru/docs/Web/CSS/hanging-punctuation) <sup><small>MDN (рус.)</small></sup>
