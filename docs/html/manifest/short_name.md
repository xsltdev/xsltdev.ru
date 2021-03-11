---
description: Элемент short_name — это строка, которая определяет название веб-приложения показываемае пользователю, если для отображения name недостаточно места
---

# short_name

| Тип    | Обязательный |
| ------ | ------------ |
| String | Нет          |

Параметр **`short_name`** определяет название веб-приложения показываемое пользователю, если для отображения [`name`](name.md) недостаточно места (например, в качестве надписи под иконкой приложения на экране телефона).

`short_name` может отображаться слева-направо или справе-налево, в зависимости от значений элементов манифеста [`dir`](dir.md) and [`lang`](lang.md).

## Пример

Обычно `short_name` отображается слева-направо:

```json
"name": "Awesome application",
"short_name": "Awesome app"
```

`short_name` на арабском отображается справа-налево:

```json
"dir": "rtl",
"lang": "ar",
"name": "تطبيق رائع",
"short_name": "رائع"
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__short_name" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`short_name`](https://w3c.github.io/manifest/#short_name-member)

## Ссылки

- [`short_name`](https://developer.mozilla.org/ru/docs/Web/Manifest/short_name) <sup><small>MDN (рус.)</small></sup>
