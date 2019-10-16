---
description: На мобильных устройствах свойство text-size-adjust позволяет верстальщикам контролировать, как применять алгоритм наполнения текста к текстовому содержимому элемента, к которому он и применяется
---

# text-size-adjust

На мобильных устройствах свойство **`text-size-adjust`** позволяет верстальщикам контролировать, как применять алгоритм наполнения текста к текстовому содержимому элемента, к которому он и применяется.

Так как это свойство нестандартное, нужно использовать префиксы: `-moz-text-size-adjust`, `-webkit-text-size-adjust`, и `-ms-text-size-adjust`.

Браузеры на смартфонах не отображают странички используя одни и те же алгоритмы, что и настольные компьютеры. Вместо того чтобы отобразить страничку по ширине экрана устройства, они используют `viewport`, который значительно шире экрана устройства, обычно 800 или 1000 пикселей в ширину. Один из двух возможных методов это отобразить к оригинальным координатам устройства и отображать используя меньшее окно для отображения на экране только части того что на самом деле визуализировано, или же `viewport` сжимается к размерам устройства.

В сущности, это также означает, что только маленькая, прямоугольная часть оригинальной веб страницы обычно видна на экране мобильного устройства или что на мобильном устройстве страничка выглядит "в уменьшенном масштабе" и меньше чем предполагалось.

## Синтаксис

```css
/* Text is never inflated */
text-size-adjust: none;

/* Text may be inflated */
text-size-adjust: auto;

/* Text may be inflated in this exact proportion */
text-size-adjust: 80%;

/* Глобальные значения */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: unset;
```

## Спецификация

- [CSS Mobile Text Size Adjustment Module Level 1](https://drafts.csswg.org/css-size-adjust/#adjustment-control)

## Ссылки

- [text-size-adjust](https://developer.mozilla.org/ru/docs/Web/CSS/text-size-adjust) на MDN
- [Документация](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html) от Apple
- [Описание поведения](https://dbaron.org/log/20111126-font-inflation) Gecko от L. David Baron.
- [Документация](<https://docs.microsoft.com/en-us/previous-versions/windows/apps/ff462082(v=vs.105)?redirectedfrom=MSDN>) от Microsoft
