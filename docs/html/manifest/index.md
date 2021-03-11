---
description: Манифесты веб-приложений являются частью набора веб-технологий, называемых прогрессивными веб-приложениями (PWA, progressive web apps), представляющими собой веб-сайты, которые можно установить на домашний экран устройства без магазина приложений.
---

# Web App Manifest

!!! info "Это экспериментальная технология"

    Так как спецификация этой технологии ещё не стабилизировалась, смотрите таблицу совместимости по поводу использования в различных браузерах. Также заметьте, что синтаксис и поведение экспериментальной технологии может измениться в будущих версиях браузеров, вслед за изменениями спецификации.

**Манифесты веб-приложений** являются частью набора веб-технологий, называемых прогрессивными веб-приложениями (PWA, progressive web apps), представляющими собой веб-сайты, которые можно установить на домашний экран устройства без магазина приложений.

В отличие от обычных веб-приложений с простыми ссылками на домашний экран или закладками, PWA можно загружать заранее и работать в автономном режиме, а также использовать обычные Web API.

Манифест веб-приложения предоставляет информацию о приложении в текстовом файле [JSON](/javascript/json/), который необходим того, чтобы веб-приложение было загружено и отображалось пользователю аналогично нативному приложению (например, для установки на домашний экран устройства, предоставляющий пользователям более быстрый доступ и больше возможностей).

## Содержимое манифеста

Манифест может содержать следующие элементы:

- [`background_color`](background_color.md)
- [`categories`](categories.md)
- [`description`](description.md)
- [`dir`](dir.md)
- [`display`](display.md)
- [`iarc_rating_id`](iarc_rating_id.md)
- [`icons`](icons.md)
- [`lang`](lang.md)
- [`name`](name.md)
- [`orientation`](orientation.md)
- [`prefer_related_applications`](prefer_related_applications.md)
- [`related_applications`](related_applications.md)
- [`scope`](scope.md)
- [`screenshots`](screenshots.md)
- [`short_name`](short_name.md)
- [`start_url`](start_url.md)
- [`theme_color`](theme_color.md)

## Пример манифеста

```json
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "A simply readable Hacker News app.",
  "icons": [
    {
      "src": "images/touch/homescreen48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen168.png",
      "sizes": "168x168",
      "type": "image/png"
    },
    {
      "src": "images/touch/homescreen192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "web"
    },
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }
  ]
}
```

## Внедрение манифеста

Манифест веб-приложения внедряется в вашу HTML-страницу, с помощью тега ссылки в заголовке вашего документа:

```html
<link rel="manifest" href="/manifest.webmanifest" />
```

!!! note ""

    Расширение `.webmanifest` указывается в разделе спецификации Media type registration section of the specification (ответ файла манифеста должен возвращать `Content-Type: application/manifest+json`). Браузеры обычно поддерживают манифесты с другими соответствующими расширениями, такими как `.json` (`Content-Type: application/json`).

!!! note ""

    Если для получения манифеста требуются учетные данные - атрибут `crossorigin` должен иметь значение `use-credentials`, даже если файл манифеста находится в том же источнике, что и текущая страница.

## Заставки

В Chrome 47 и более поздних версиях заставки отображаются при загрузке веб-приложения с домашнего экрана. Эти заставки автоматически генерируются с использованием свойств, указанных в манифесте приложения, например: `name`, `background_color` и иконки в массиве `icons`, которые ближе к `128dpi` для устройства.

## Спецификации

- [Web App Manifest](https://w3c.github.io/manifest/)

## Ссылки

- [Web App Manifest](https://developer.mozilla.org/ru/docs/Web/Manifest) <sup><small>MDN (рус.)</small></sup>
