---
description: Привязка входных и вторичных свойств директивы атрибута в Angular5.
---

# Binding свойств директив

Базовый вариант:

```html
<p
  appBetterHilight
  [defaultColor]="'green'"
  [highLightColor]="'yellow'"
>
  basic highlight style
</p>
```

Имя директивы может быть пропущено, если оно совпадает с именем входной переменной:

```typescript
@Input('appBetterHilight') highLightColor: string = 'red';
```

```html
<p [appBetterHilight]="'yellow'" [defaultColor]="'green'">
  basic highlight style
</p>
```

Существует сокращенный вариант написания имен без скобок:

```html
<p [appBetterHilight]="'yellow'" defaultColor="green">
  basic highlight style
</p>
```
