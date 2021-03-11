---
description: Определяет область навигации контекста веб-приложения
---

# scope

| Тип    | Обязательный |
| ------ | ------------ |
| String | Нет          |

Параметр **`scope`** определяет область навигации контекста веб-приложения.

Обычно ограничивается тем, какая веб-страница может быть просмотрена, пока манифест загружается. Если пользователь выходит за пределы области, приложение возвращается к нормальному виду веб-страницы.

Если область относительный URL, базовым URL будет URL манифеста.

## Пример

Если область относительная, URL манифеста используется как базовый URL:

```json
"scope": "/app/"
```

Следующая область ограничивает навигацию текущим сайтом:

```json
"scope": "https://example.com/"
```

Наконец, в следующем примере навигация ограничена подкаталогом текущего сайта:

```json
"scope": "https://example.com/subdirectory/"
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__scope" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`scope`](https://w3c.github.io/manifest/#scope-member)

## Ссылки

- [`scope`](https://developer.mozilla.org/ru/docs/Web/Manifest/scope) <sup><small>MDN (рус.)</small></sup>
