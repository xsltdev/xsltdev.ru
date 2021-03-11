---
description: Поле related_applications представляет собой массив объектов, определяющих собственные приложения, которые могут быть установлены или доступны для базовой платформы
---

# related_applications

| Тип              | Обязательный |
| ---------------- | ------------ |
| Array of Objects | Нет          |

Параметр **`related_applications`** представляет собой массив объектов, определяющих собственные приложения, которые могут быть установлены или доступны для базовой платформы - например, собственное приложение Android, доступное через Google Play Store.

!!!note ""

    Разработчик может указать, что нативные приложения предпочтительнее, чем веб-приложение, установив значение `prefer_related_applications` в `true`.

## Пример

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }
]
```

## Значения

Объекты приложения могут содержать следующие значения:

`platform`
: [Платформа](https://github.com/w3c/manifest/wiki/Platforms), на которой может быть найдено приложение.

`url`
: URL, по которому может быть найдено приложение.

`id`
: ID, используемое для представления приложения на определенной платформе.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__related_applications" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`related_applications`](https://w3c.github.io/manifest/#related_applications-member)

## Ссылки

- [`related_applications`](https://developer.mozilla.org/ru/docs/Web/Manifest/related_applications) <sup><small>MDN (рус.)</small></sup>
