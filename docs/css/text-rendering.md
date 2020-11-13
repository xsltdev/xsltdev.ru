---
description: Свойство text-rendering предоставляет движку рендеринга информацию о том, что оптимизировать при рендеринге текста
---

# text-rendering

Свойство **`text-rendering`** предоставляет движку рендеринга информацию о том, что оптимизировать при рендеринге текста.

Браузер делает компромисс между скоростью, удобочитаемостью и геометрической точностью.

??? info "Текст"

    <div class="col3" markdown="1">

    - [hanging-punctuation](hanging-punctuation.md)
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
    - **text-rendering**
    - [text-shadow](text-shadow.md)
    - [text-underline-position](text-underline-position.md)
    - [text-transform](text-transform.md)
    - [white-space](white-space.md)
    - [word-spacing](word-spacing.md)

    </div>

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
