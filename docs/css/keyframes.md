---
description: Правило @keyframes управляет промежуточными шагами в последовательности анимации CSS, определяя стили для ключевых кадров последовательности анимации
---

# @keyframes

Правило **`@keyframes`** управляет промежуточными шагами в последовательности анимации CSS, определяя стили для ключевых кадров последовательности анимации.

Это дает больший контроль над промежуточными этапами анимационной последовательности, чем [переходы](transition.md).

??? info "@-правила"

    <div class="col3" markdown="1">

    - [@charset](charset.md)
    - [@import](import.md)
    - [@namespace](namespace.md)
    - [@media](media.md)
    - [@supports](supports.md)
    - [@document](document.md)
    - [@page](page.md)
    - [@font-face](font-face.md)
    - **@keyframes**
    - [@viewport](viewport.md)
    - [@counter-style](counter-style.md)
    - [@font-feature-values](font-feature-values.md)

    </div>

??? info "Переходы и Анимации"

    <div class="col3" markdown="1">

    - **@keyframes**

    </div>

    <div class="col3" markdown="1">

    - [animation](animation.md)
    - [animation-delay](animation-delay.md)
    - [animation-direction](animation-direction.md)
    - [animation-duration](animation-duration.md)
    - [animation-fill-mode](animation-fill-mode.md)
    - [animation-iteration-count](animation-iteration-count.md)
    - [animation-name](animation-name.md)
    - [animation-play-state](animation-play-state.md)
    - [animation-timing-function](animation-timing-function.md)

    </div>

    <div class="col3" markdown="1">

    - [transition](transition.md)
    - [transition-delay](transition-delay.md)
    - [transition-duration](transition-duration.md)
    - [transition-property](transition-property.md)
    - [transition-timing-function](transition-timing-function.md)

    </div>

## Синтаксис

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  50% {
    margin-left: 50%;
    width: 200%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

## Значения

JavaScript может получить доступ к `@keyframes` правилам с помощью интерфейса объектной модели CSS `CSSKeyframesRule`.

Чтобы использовать ключевые кадры, создайте правило `@keyframes` с именем, которое затем используется свойством [`animation-name`](animation-name.md). Каждое правило `@keyframes` содержит список стилей селекторов ключевых кадров, которые определяют проценты вдоль анимации, когда происходит ключевой кадр, и блок, содержащий стили для этого ключевого кадра.

Вы можете перечислить проценты ключевого кадра в любом порядке; они будут обрабатываться в том порядке, в котором они должны произойти.

### Действительные списки ключевых кадров

Если правило `@keyframes` не определяет начальные или конечные состояния анимации (то есть `0%/from` и `100%/to`, браузеры будут использовать существующие стили этого элемента для состояний начала и конца. Это можно использовать для анимации элемента из его начального состояния и обратно.

Свойства, которые не могут быть анимированы в правилах `@keyframes`, игнорируются, но поддерживаемые свойства все равно будут анимированы.

### Обработка дубликатов

Если для данного имени существует несколько наборов ключевых кадров, используется последний, который встречается парсером. Правила `@keyframes` не каскадируются, поэтому анимации никогда не выводят ключевые кадры из нескольких наборов правил.

Если смещение времени анимации дублируется, используется последний ключевой кадр в правиле `@keyframes` для этого процента. Внутри правила `@keyframes` нет каскадирования, если несколько ключевых кадров определяют одинаковые процентные значения.

### Когда свойства не заданы в некоторых ключевых кадрах

Свойства, которые не указаны в каждом ключевом кадре, по возможности интерполируются - свойства, которые невозможно интерполировать, удаляются из анимации. Например:

```css
@keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}
```

Здесь свойство [`top`](top.md) анимирует, используя `0%`, `30%` и `100%` ключевые кадры, а анимации для [`left`](left.md) используют `0%`, `68%` и `100%` ключевые кадры.

### Когда ключевой кадр определяется несколько раз

Если ключевой кадр определен несколько раз, но не все затронутые свойства находятся в каждом ключевом кадре, учитываются только значения, указанные в последнем ключевом кадре. Например:

```css
@keyframes identifier {
  0% {
    top: 0;
  }
  50% {
    top: 30px;
    left: 20px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
```

В этом примере на 50% ключевом кадре используется значение `top: 10px`, а все остальные значения в этом ключевом кадре игнорируются.

Каскадные ключевые кадры поддерживаются начиная с Firefox 14. В приведенном выше примере это означает, что в `50%` ключевом кадре будет добавлено значение `left: 20px`. Это еще не определено в спецификации, но это обсуждается.

### !important в ключевых кадрах

Объявления в ключевых кадрах с модификатором [`!important`](important.md) игнорируются:

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important;
  } /* ignored */
  to {
    margin-top: 100px;
  }
}

@keyframes important2 {
  from {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  to {
    margin-top: 150px !important; /* ignored */
    margin-bottom: 50px;
  }
}
```

## Спецификации

- [CSS Animations](https://drafts.csswg.org/css-animations/#keyframes)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-animation" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-animation">Can I Use css-animation?</a> Data on support for the css-animation feature across the major browsers from caniuse.com.
</p>
