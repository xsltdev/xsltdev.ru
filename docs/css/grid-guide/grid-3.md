# Функция repeat и свойство grid

<small markdown="1">

1. [Что такое Grid Layout. Grid Container](grid-1.md)
2. [Строки и столбцы](grid-2.md)
3. **Функция repeat и свойство grid**
4. [Размеры строк и столбцов](grid-4.md)
5. [Отступы между столбцами и строками](grid-5.md)
6. [Позиционирование элементов](grid-6.md)
7. [Наложение элементов](grid-7.md)
8. [Направление и порядок элементов](grid-8.md)
9. [Именованные grid-линии](grid-9.md)
10. [Именованные grid-линии и функция repeat](grid-10.md)
11. [Области грида](grid-11.md)
12. [Макет страницы в Grid Layout](grid-12.md)

</small>

## Повторение строк и столбцов

Если у нас столбцов и (или) строк много и они имеют одинаковые размеры, то есть смысл использовать специальную функцию `repeat()`, которая позволит настроить строки и столбцы. Так, в примере выше повторяется определение одинаковых строк и столбцов в grid-контейнере:

```css
grid-template-columns: 8em 8em 8em;
grid-template-rows: 5em 5em 5em 5em;
```

Здесь мы видим, что происходит повторение одних и тех же размеров - `8em` и `5em` для установки ширины столбцов и высоты строк. Поэтому перепишем стили, применив функцию `repeat`:

```css
.grid-container {
  border: solid 2px #000;
  display: grid;
  grid-template-columns: repeat(3, 8em);
  grid-template-rows: repeat(4, 5em);
}
```

Первый параметр функции `repeat` представляет число повторений, а второй - определение строк или столбцов. Например, свойство `grid-template-columns: repeat(3, 8em);` говорит, что необходимо определить 3 столбца шириной в `8em`.

Соответственно выражение `grid-template-rows: repeat(4, 5em)` определяет 4 строки высотой по `5em`.

Можно задавать повторение нескольких столбцов и строк:

```css
.grid-container {
  border: solid 2px #000;
  display: grid;
  grid-template-columns: repeat(2, 7em 8em);
  grid-template-rows: 6em repeat(3, 5em);
}
```

В данном случае будет создано 4 столбца: два раза будут повторяться два столбца с шириной `7em` и `8em`.

В случае со строками будет создано 4 строки. Причем первая будет иметь высоту в `6em`, а остальные три - `5em`.

## Свойство grid

Свойство `grid` объединяет свойства `grid-template-rows` и `grid-template-columns` и разом позволяет задать настройки для строк и столбцов в следующем формате:

```css
grid: grid-template-rows / grid-template-columns;
```

К примеру, у нас есть следующее определение класса grid-контейнера:

```css
.grid-container {
  border: solid 2px #000;
  display: grid;
  grid-template-columns: 8em 8em 8em;
  grid-template-rows: 5em 5em 5em 5em;
}
```

Мы можем сократить этот класс следующим образом:

```css
.grid-container {
  border: solid 2px #000;
  display: grid;
  grid: 5em 5em 5em 5em / 8em 8em 8em;
}
```

Либо опять же используя функцию `repeat()`, можно еще больше сократить определение грида:

```css
.grid-container {
  border: solid 2px #000;
  display: grid;
  grid: repeat(4, 5em) / repeat(3, 8em);
}
```

## См. также

- [grid](../grid.md)

<small markdown="1">

1. [Что такое Grid Layout. Grid Container](grid-1.md)
2. [Строки и столбцы](grid-2.md)
3. **Функция repeat и свойство grid**
4. [Размеры строк и столбцов](grid-4.md)
5. [Отступы между столбцами и строками](grid-5.md)
6. [Позиционирование элементов](grid-6.md)
7. [Наложение элементов](grid-7.md)
8. [Направление и порядок элементов](grid-8.md)
9. [Именованные grid-линии](grid-9.md)
10. [Именованные grid-линии и функция repeat](grid-10.md)
11. [Области грида](grid-11.md)
12. [Макет страницы в Grid Layout](grid-12.md)

</small>
