---
description: Тег code (от англ. code - код) предназначен для отображения одной или нескольких строк текста, который представляет собой программный код
---

# &lt;code&gt;

Тег **`<code>`** _(от англ. **code** - код)_ предназначен для отображения одной или нескольких строк текста, который представляет собой программный код.

Сюда относятся имена переменных, ключевые слова, тексты функции и т. д. Браузеры обычно отображают содержимое контейнера `<code>` как моноширинный текст уменьшенного размера.

В отличие от элемента [`<pre>`](pre.md) дополнительные пробелы внутри контейнера `<code>` не учитываются, так же, как и переносы текста. Для разметки кода программы элементы `<code>` и `<pre>` комбинируют.

??? info "Текстовые элементы"

    <div class="col4" markdown="1">

    - [a](a.md)
    - [abbr](abbr.md)
    - [b](b.md)
    - [bdi](bdi.md)
    - [bdo](bdo.md)
    - [br](br.md)
    - [cite](cite.md)
    - **code**
    - [data](data.md)
    - [del](del.md)
    - [dfn](dfn.md)
    - [em](em.md)
    - [i](i.md)
    - [ins](ins.md)
    - [kbd](kbd.md)
    - [mark](mark.md)
    - [q](q.md)
    - [ruby](ruby.md)
    - [rtc](rtc.md)
    - [rb](rb.md)
    - [rp](rp.md)
    - [rt](rt.md)
    - [s](s.md)
    - [samp](samp.md)
    - [small](small.md)
    - [span](span.md)
    - [strong](strong.md)
    - [sub](sub.md)
    - [sup](sup.md)
    - [time](time.md)
    - [u](u.md)
    - [var](var.md)
    - [wbr](wbr.md)

    </div>

## Синтаксис

```html
<code>Текст</code>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-code-element)
- [HTML5](http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.2.1)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>CODE</title>
  </head>
  <body>
    <p>Код программы</p>
    <pre>
	  <code>
		function checkParent (src, dest) {
		  while (src != null) {
			if (src.tagName == dest) return src
		      src = src.parentElement
			}
		  return null
		}
	  </code>
	</pre>
  </body>
</html>
```

## Ссылки

- Тег [`<code>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/code) <sup><small>MDN (рус.)</small></sup>
