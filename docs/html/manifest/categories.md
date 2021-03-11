---
description: categories - это массив строк, определяющих имена категорий, к которым, предположительно, относится приложение
---

# categories

| Тип              | Обязательный |
| ---------------- | ------------ |
| Array of Strings | Нет          |

Параметр **`categories`** - это массив строк, определяющих имена категорий, к которым, предположительно, относится приложение.

Нет стандартного списка возможных значений, но W3C поддерживает [список известных категорий](https://github.com/w3c/manifest/wiki/Categories).

!!! note ""

    `categories` используются только в качестве подсказок для каталогов или магазинов, содержащих веб-приложения. Как и поисковые системы и `meta` ключевые слова, каталоги и магазины могут игнорировать их.

!!! note

    значения `categories` изменяются в каталогах и магазинах перед обработкой на нижний регистр, поэтому «Новости» и «новости» рассматриваются как одно и то же значение. Разработчикам рекомендуется использовать строчные буквы в первую очередь.

## Пример

```json
"categories": ["books", "education", "medical"]
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-html__manifest__categories" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Спецификация

- [`categories`](https://w3c.github.io/manifest/#categories-member)

## Ссылки

- [`categories`](https://developer.mozilla.org/ru/docs/Web/Manifest/categories) <sup><small>MDN (рус.)</small></sup>
