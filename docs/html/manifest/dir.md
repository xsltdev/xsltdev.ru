---
description: Базовое направление, в котором отображаются направленные элементы манифеста
---

# dir

| Тип    | Обязательный |
| ------ | ------------ |
| String | Нет          |

Параметр **`dir`** задаёт базовое направление, в котором отображаются направленные элементы манифеста.

Вместе с [`lang`](lang.md), позволяет корректно отобразить языки, читающиеся справа налево.

`dir` может быть одним из следующих значений:

- `auto` — направление текста определяется агентом пользователя
- `ltr` — слева направо
- `rtl` — справа налево

Направленные свойства:

- [`name`](name.md)
- [`short_name`](short_name.md)
- [`description`](description.md)

!!!note ""

    Если значение опущено или установлено в `auto`, браузер будет использовать двунаправленный алгоритм Unicode, чтобы сделать наилучшее предположение о направлении текста.

## Пример

```json
"dir": "rtl",
"lang": "ar",
"short_name": "!أنا من التطبيق"
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__dir" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`dir`](https://w3c.github.io/manifest/#dir-member)

## Ссылки

- [`dir`](https://developer.mozilla.org/ru/docs/Web/Manifest/dir) <sup><small>MDN (рус.)</small></sup>
