# animation-delay

Свойство **`animation-delay`** устанавливает время ожидания перед запуском цикла анимации. Значение `0s` или `0ms` запускает анимацию сразу же. Отрицательное значение также включает анимацию без задержек, но может привести к изменению вида начала анимации.

Допустимо указывать несколько значений, перечисляя их через запятую.

## Синтаксис

```css
/* Single animation */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Multiple animations */
animation-delay: 2.1s, 480ms;
```

## Значения

Время

Значение по-умолчанию:

```css
animation-delay: 0s;
```

Применяется к: Ко всем элементам, к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Animations](http://dev.w3.org/csswg/css-animations/#animation-delay)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-animation" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-animation">Can I Use css-animation?</a> Data on support for the css-animation feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>animation-duration</title>
    <style>
      .warn {
        background: #fc0;
        padding: 10px;
        top: -100px;
        position: absolute;
        left: 0;
        right: 0;
      }
      .fadeInTop {
        -webkit-animation-name: fadeInTop;
        -webkit-animation-duration: 1s;
        -webkit-animation-delay: 2s;
        -webkit-animation-fill-mode: forwards;
        animation-name: fadeInTop;
        animation-duration: 2s; /* Продолжительность анимации */
        animation-delay: 1s; /* Задержка */
        animation-fill-mode: forwards;
      }
      @-webkit-keyframes fadeInTop {
        from {
          top: -100px;
        }
        to {
          top: 0;
        }
      }
      @keyframes fadeInTop {
        from {
          top: -100px;
        }
        to {
          top: 0;
        }
      }
    </style>
  </head>
  <body>
    <div class="warn fadeInTop">Вы не учли, что скалярное поле необходимо и достаточно!</div>
  </body>
</html>
```

### Примечание

- Chrome, Safari и Android поддерживают свойство `-webkit-animation-delay`.
- Opera до версии 12.10 поддерживает свойство `-o-animation-delay`.
- Firefox до версии 16 поддерживает свойство `-moz-animation-delay`.
