---
description: prefer_related_applications является значением типа boolean, которое указывает, что приложения, перечисленные в related_applications, должны быть предпочтительнее веб-приложения
---

# prefer_related_applications

| Тип     | Обязательный |
| ------- | ------------ |
| Boolean | Нет          |

Параметр **`prefer_related_applications`** указывает, что приложения, перечисленные в `related_applications`, должны быть предпочтительнее веб-приложения.

Если для `prefer_related_applications` установлено значение `true`, пользовательский агент может предложить установить одно из связанных приложений вместо этого веб-приложения.

Если опущено, `prefer_related_applications` по умолчанию равно `false`.

## Пример

```json
"prefer_related_applications": true
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__prefer_related_applications" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`prefer_related_applications`](https://w3c.github.io/manifest/#prefer_related_applications-member)

## Ссылки

- [`prefer_related_applications`](https://developer.mozilla.org/ru/docs/Web/Manifest/prefer_related_applications) <sup><small>MDN (рус.)</small></sup>
