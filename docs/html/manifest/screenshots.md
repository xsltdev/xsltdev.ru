---
description: screenshots определяет массив снимков экрана, предназначенных для демонстрации приложения
---

# screenshots

| Тип              | Обязательный |
| ---------------- | ------------ |
| Array of Objects | Нет          |

Параметр **`screenshots`** определяет массив снимков экрана, предназначенных для демонстрации приложения.

Эти изображения предназначены для использования в прогрессивных веб-приложениях магазинов.

## Пример

```json
"screenshots" : [
  {
    "src": "screenshot1.webp",
    "sizes": "1280x720",
    "type": "image/webp"
  },
  {
    "src": "screenshot2.webp",
    "sizes": "1280x720",
    "type": "image/webp"
  }
]
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__screenshots" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`screenshots`](https://w3c.github.io/manifest/#screenshots-member)

## Ссылки

- [`screenshots`](https://developer.mozilla.org/ru/docs/Web/Manifest/screenshots) <sup><small>MDN (рус.)</small></sup>
