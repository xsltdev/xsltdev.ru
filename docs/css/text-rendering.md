---
description: Свойство text-rendering предоставляет движку рендеринга информацию о том, что оптимизировать при рендеринге текста
---

# text-rendering

Свойство **`text-rendering`** предоставляет движку рендеринга информацию о том, что оптимизировать при рендеринге текста.

Браузер делает компромисс между скоростью, удобочитаемостью и геометрической точностью.

## Синтаксис

```css
/* Keyword values */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* Global values */
text-rendering: inherit;
text-rendering: initial;
text-rendering: unset;
```

Одним из очень заметных эффектов является `optimizeLegibility`, который включает лигатуры (`ff`, `fi`, `fl` и т. д.) в тексте размером менее 20 пикселей для некоторых шрифтов (например, Microsoft Calibri, Candara, Constantia и Corbel или семейство шрифтов DejaVu).

## Значения

`auto`
Браузер делает обоснованные предположения о том, когда оптимизировать скорость, разборчивость и геометрическую точность при рисовании текста. Различия в том, как это значение интерпретируется браузером.

`optimizeSpeed`
Браузер подчеркивает скорость рендеринга, а не геометрическую точность при рисовании текста. Это отключает кернинг и лигатуры.

`optimizeLegibility`
Браузер подчеркивает удобочитаемость, а не скорость рендеринга и геометрическую точность. Это позволяет кернинг и необязательные лигатуры.

`geometricPrecision`
Браузер подчеркивает геометрическую точность над скоростью рендеринга и удобочитаемостью. Некоторые аспекты шрифтов, такие как кернинг, не масштабируются линейно. Таким образом, это значение может сделать текст с использованием этих шрифтов выглядеть хорошо.

## Спецификации

- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty)
- [Scalable Vector Graphics (SVG) 1.1 (Second Edition)](https://www.w3.org/TR/SVG11/painting.html#TextRenderingProperty)

## Ссылки

- [text-rendering](https://developer.mozilla.org/ru/docs/Web/CSS/text-rendering) <sup><small>MDN (рус.)</small></sup>
