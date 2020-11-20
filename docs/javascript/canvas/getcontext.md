---
description: Метод getContext() возвращает контекст рисования на холсте, или null, если идентификатор контекста не определен
---

# getContext()

Метод **`getContext()`** возвращает контекст рисования на холсте, или `null`, если идентификатор контекста не определен.

## Синтаксис

```
canvas.getContext(contextType, contextAttributes);
```

## Параметры

`contextType`
: идентификатор контекста, определяющий контекст рисования, связанный с холстом. Возможные значения:
: - `2d`, ведущий к созданию объекта `CanvasRenderingContext2D`, представляющий двумерный контекст.
: - `webgl` (или `experimental-webgl`), который будет создавать объект `WebGLRenderingContext`, представляющий трехмерный контекст. Этот контекст доступен только в браузерах, которые реализуют WebGL первой версии (OpenGL ES 2.0).
: - `webgl2` (или `experimental-webgl2`), который будет создавать объект `WebGL2RenderingContext`, представляющий трехмерный контекст. Этот контекст доступен только в браузерах, которые реализуют WebGL второй версии (OpenGL ES 3.0).
: - `bitmaprenderer`, который позволит создать `ImageBitmapRenderingContext`, обеспечивающий только функции для замены содержимого холста с заданным `ImageBitmap`.
: Примечание: Идентификаторы `experimental-webgl` или `experimental-webgl2` используются в новых реализациях WebGL. Эти реализации не достигли испытательного набора на соответствие или ситуация с графическими драйверами на платформе еще не стабильна.

`contextAttributes`
: Вы можете использовать несколько атрибутов контекста при создании контекста рендеринга, например:

```js
canvas.getContext('webgl', {
  antialias: false,
  depth: false,
})
```

Атрибуты контекста WebGL:
`alpha`
Логическое значение, указывающее, содержит ли холст альфа-буфер.

`depth`
Логическое значение, которое указывает, что буфер рисования имеет буфер глубины не менее 16 бит.

`stencil`
Логическое значение, которое указывает, что буфер рисования имеет буфер трафарета не менее 8 бит.

`antialias`
Логическое значение, которое указывает, следует ли выполнять сглаживание.

`premultipliedAlpha`
Логическое значение, которое указывает, что компоновщик страниц будет предполагать, что буфер рисования содержит цвета с предварительно умноженным альфа-каналом.

`preserveDrawingBuffer`
Если значение равно `true`, буферы не будут очищаться и будут сохранять свои значения до тех пор, пока автор не очистит или не перезапишет их.

`failIfMajorPerformanceCaveat`
Логическое значение, указывающее, будет ли создан контекст, если производительность системы низкая.

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-canvas-getcontext)
- [HTML5](https://www.w3.org/TR/html50/scripting-1.html#dom-canvas-getcontext)

## Пример

```js
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
console.log(ctx) // CanvasRenderingContext2D { ... }
```

## Ссылки

- Метод [`getContext()`](https://developer.mozilla.org/ru/docs/Web/API/HTMLCanvasElement/getContext) <sup><small>MDN (рус.)</small></sup>
