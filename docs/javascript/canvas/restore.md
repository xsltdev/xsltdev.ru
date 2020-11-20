---
description: Метод restore() восстанавливает предварительно сохраненное состояние канваса из стека
---

# restore()

Метод **`restore()`** восстанавливает предварительно сохраненное состояние канваса из стека.

## Синтаксис

```
void ctx.restore();
```

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-restore)

## Пример

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Save the default state
ctx.save()

ctx.fillStyle = 'green'
ctx.fillRect(10, 10, 100, 100)

// Restore the default state
ctx.restore()

ctx.fillRect(150, 40, 100, 100)
```

## Ссылки

- Метод [`restore()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/restore) <sup><small>MDN (рус.)</small></sup>
