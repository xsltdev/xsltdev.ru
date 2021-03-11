---
description: background_color определяет ожидаемый цвет фона для веб-приложения
---

# background_color

| Тип    | Обязательный |
| ------ | ------------ |
| String | Нет          |

Параметр **`background_color`** определяет ожидаемый цвет фона для веб-приложения.

Это значение повторяет то, что уже доступно в стилях приложения, но может быть использовано браузерами для отрисовки цвета фона приложения после того, как манифест станет доступен, но до того, как стили загрузятся. Это создает плавный переход между запуском приложения и загрузкой содержимого приложения.

!!! note ""

    Свойство `background_color` предназначено только для улучшения удобства пользования, пока главная таблица стилей загружается из сети или с носителя; не должно быть использовано агентом пользователя как свойство CSS [`background-color`](/css/background-color/), когда стили приложения станут доступны.

## Пример

```json
"background_color": "red"
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__background_color" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`background_color`](https://w3c.github.io/manifest/#background_color-member)

## Ссылки

- [`background_color`](https://developer.mozilla.org/ru/docs/Web/Manifest/background_color) <sup><small>MDN (рус.)</small></sup>
