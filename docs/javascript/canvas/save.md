---
description: Метод save() сохраняет состояние канваса и помещает его в стек
---

# save()

Метод **`save()`** сохраняет состояние канваса и помещает его в стек.

## Синтаксис

```
void ctx.save();
```

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-save)

## Пример

Этот пример использует метод `save()` для сохранения состояния по умолчанию, и метод [`restore()`](restore.md) для восстановления состояния позже, чтобы можно было нарисовать прямоугольник с состоянием по умолчанию.

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Сохранение состояния по умолчанию
ctx.save()

ctx.fillStyle = 'green'
ctx.fillRect(10, 10, 100, 100)

// Восстановление состояния по умолчанию
ctx.restore()

ctx.fillRect(150, 40, 100, 100)
```

## Ссылки

- Метод [`save()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/save) <sup><small>MDN (рус.)</small></sup>
