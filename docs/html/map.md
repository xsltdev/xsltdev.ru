---
description: Тег map (от англ. map - карта) служит контейнером для элементов area, которые определяют активные области для карт-изображений
---

# &lt;map&gt;

Тег **`<map>`** _(от англ. **map** — карта)_ служит контейнером для элементов [`<area>`](area.md), которые определяют активные области для карт-изображений.

Такие области устанавливают невидимые зоны на изображении, являющиеся ссылками на HTML-документы. Цель использования `<map>` — в связывании элемента [`<img>`](img.md) с клиентской картой-изображением. Эта связь определяется применением единого идентификатора как в `<img>`, задаваемого атрибутом `usemap`, так и в `<map>`, устанавливаемого атрибутом `name`.

??? info "Изображения и мультимедиа"

    <div class="col3" markdown="1">

    - [area](area.md)
    - [audio](audio.md)
    - [img](img.md)
    - [figcaption](figcaption.md)
    - [figure](figure.md)
    - **map**
    - [track](track.md)
    - [video](video.md)
    - [embed](embed.md)
    - [iframe](iframe.md)
    - [object](object.md)
    - [param](param.md)
    - [picture](picture.md)
    - [source](source.md)

    </div>

## Синтаксис

```html
<map name="<имя>">
  <area />
</map>
```

Закрывающий тег обязателен.

## Атрибуты

[`name`](#name)
: Имя карты-изображения.

### name

Имя идентификатора, которое однозначно определяет карту-изображение. Значение атрибута `name` элемента `<map>` должно соответствовать имени в `usemap`. При этом значение атрибута `usemap` у [`<img>`](img.md) начинается с символа решётки.

**Синтаксис**

```html
<map name="<идентификатор>">...</map>
```

**Значения**

Любое подходящее уникальное имя, оно чувствительно к регистру.

**Значение по умолчанию**

Нет.

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-map-element)
- [HTML 5](http://www.w3.org/TR/html5/embedded-content-0.html#the-map-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/objects.html#h-13.6.1)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>MAP</title>
    <style>
      #title {
        line-height: 0; /* Изменяем межстрочное расстояние */
      }
      #title img {
        border: none; /* Убираем рамку вокруг изображения */
      }
    </style>
  </head>
  <body>
    <div id="title">
      <img
        src="image/ecctitle.png"
        width="640"
        height="158"
        alt="Детский образовательный центр"
      /><br />
      <img
        src="image/navigate.png"
        width="640"
        height="30"
        alt="Навигация по сайту"
        usemap="#Navigation"
      />
    </div>
    <p>
      <map name="Navigation">
        <area
          shape="poly"
          coords="113,24,211,24,233,0,137,0"
          href="page/inform.html"
          alt="Информация"
        />
        <area
          shape="poly"
          coords="210,24,233,0,329,0,307,24"
          href="page/activity.html"
          alt="Мероприятия"
        />
        <area
          shape="poly"
          coords="304,24,385,24,407,0,329,0"
          href="page/depart.html"
          alt="Отделения"
        />
        <area
          shape="poly"
          coords="384,24,449,24,473,0,406,0"
          href="page/techinfo.html"
          alt="Техническая информация"
        />
        <area
          shape="poly"
          coords="449,24,501,24,525,0,473,0"
          href="page/study.html"
          alt="Обучение"
        />
        <area
          shape="poly"
          coords="501,24,560,24,583,0,525,0"
          href="page/work.html"
          alt="Работа"
        />
        <area
          shape="poly"
          coords="560,24,615,24,639,0,585,0"
          href="page/misk.html"
          alt="Разное"
        />
      </map>
    </p>
  </body>
</html>
```

## Ссылки

- Тег [`<map>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/map) <sup><small>MDN (рус.)</small></sup>
