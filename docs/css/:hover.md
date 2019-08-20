# :hover

Псевдокласс **`:hover`** срабатывает, когда пользователь наводит на элемент мышью, но не обязательно активирует его.

Этот стиль может переопределяться другими относящимися к ссылкам псевдоклассами, такими как [`:link`](:link.md), [`:visited`](:visited.md) и [`:active`](:active.md), появляющимися в соответствующем порядке. Чтобы стилизировать ссылки должным образом, вам нужно вставлять правило `:hover` до правил `:link` и `:visited`, но после `:active`, как определено в LVHA-порядке: `:link` — `:visited` — `:hover` — `:active`.

Псевдокласс `:hover` может применяться к любому псевдоэлементу.

Браузеры, такие как Firefox, Internet Explorer, Safari, Opera или Chrome, применяют соответствующий стиль, когда курсор (указатель мыши) наводится на элемент.

**Замечания по использованию:** на сенсорных экранах `:hover` проблемный или не работает. В зависимости от браузера, псевдокласс `:hover` может никогда не сработать, или сработать на некоторое время после нажатия на элемента, или может продолжать действовать даже остаться после того, как пользователь коснулся элемента до нажатия на другой элемент. Так как сенсорные устройства очень распространены, то веб-разработчикам очень важно не иметь контент, доступный только при наведении, так как такой контент неудобно или невозможно использовать на таких устройствах.

## Синтаксис

```css
/* Selects any <a> element when "hovered" */
a:hover {
  color: orange;
}
```

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html#selector-hover)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-hover-pseudo)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#the-user-action-pseudo-classes-hover-act)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/selector.html#dynamic-pseudo-classes)

## Описание и примеры

### Пример 1. Выпадающее меню

С псевдоклассом `:hover` вы можете создавать сложные каскадные алгоритмы. Эта техника часто используется, например, чтобы создать выпадающие меню на чистом CSS (только на CSS, без использования JavaScript). Сущность этой техники -- создание правил, типа следуюшего:

```css tab="CSS"
div.menu-bar ul ul {
  display: none;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

```html tab="HTML"
<div class="menu-bar">
  <ul>
    <li>
      <a href="example.html">Меню</a>
      <ul>
        <li>
          <a href="example.html">Ссылка</a>
        </li>
        <li>
          <a class="menu-nav" href="example.html">Подменю</a>
          <ul>
            <li>
              <a class="menu-nav" href="example.html">Подменю</a>
              <ul>
                <li><a href="example.html">Ссылка</a></li>
                <li><a href="example.html">Ссылка</a></li>
                <li><a href="example.html">Ссылка</a></li>
                <li><a href="example.html">Ссылка</a></li>
              </ul>
            </li>
            <li><a href="example.html">Ссылка</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

Смотрите полный [пример выпадающего меню](https://developer.mozilla.org/@api/deki/files/6238/=css_dropdown_menu.html), основанный на CSS.

### Пример 2. Галерея полноразмерных изображений и превью

Вы можете использовать псевдокласс `:hover`, чтобы создать галерею изображений с полноразмерными картинками, показываемыми при наведении на них мыши. Посмотрите это [демо](https://developer.mozilla.org/@api/deki/files/6247/=css-gallery.zip).
