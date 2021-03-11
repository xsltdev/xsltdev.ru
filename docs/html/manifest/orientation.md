---
description: orientation определяет ориентацию по умолчанию для всех верхних уровней контекстов браузера приложения
---

# orientation

| Тип    | Обязательный |
| ------ | ------------ |
| String | Нет          |

Параметр **`orientation`** определяет ориентацию по умолчанию для всех верхних уровней контекстов браузера приложения.

!!!note

    `orientation` и/или его конкретные значения могут не поддерживаться пользовательским агентом в различных режимах отображения, поскольку их поддержка не имеет смысла для конкретного контекста.

!!!note

    Ориентация может быть изменена во время выполнения через [API Ориентации экрана](https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation).

## Значения

`orientation` может иметь одно из следующих значений:

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

## Пример

```json
"orientation": "portrait-primary"
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__orientation" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`orientation`](https://w3c.github.io/manifest/#orientation-member)

## Ссылки

- [`orientation`](https://developer.mozilla.org/ru/docs/Web/Manifest/orientation) <sup><small>MDN (рус.)</small></sup>
