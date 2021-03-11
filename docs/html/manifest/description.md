---
description: description это строка, в которой разработчики могут объяснить, что делает приложение
---

# description

| Тип    | Обязательный |
| ------ | ------------ |
| String | Нет          |

Параметр **`description`** это строка, в которой разработчики могут объяснить, что делает приложение.

`description` способно к направленности, что означает, что оно может отображаться слева направо или справа налево на основе значений свойств [`dir`](dir.md) и [`lang`](lang.md) манифеста.

## Пример

Простой `description` на языке слева направо:

```json
"description": "Приложение, которое поможет вам достичь вашей мечты."
```

`description` на арабском языке, который будет отображаться справа налево:

```json
"dir": "rtl",
"lang": "ar",
"description": ".تطبيق رائع سيساعدك على تحقيق أحلامك"
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__description" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`description`](https://w3c.github.io/manifest/#description-member)

## Ссылки

- [`description`](https://developer.mozilla.org/ru/docs/Web/Manifest/description) <sup><small>MDN (рус.)</small></sup>
