---
description: Импорт модели в компонент Angular и создание контента на основе модели.
---

# Добавление данных в Компонент

`\app\recipes\recipe-list\recipe-list.component.ts`:

```typescript
//Импорт модели:
import { Recipe } from '../recipe.model'

//Добавление массива объектов:
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is a simple test',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'
    ),
  ]
  // ...
}
```

`recipes: Recipe[]` - переменная `recipes` с типом _массив объектов класса_ `Recipe` (_Typescript_ синтаксис).

`\app\recipes\recipe-list\recipe-list.component.html`:

```html
<div class="row">
  <div class="col-xs-12">
    <button class="btn btn-success">New Recipe</button>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <a href="#" class="list-group-item clearfix">
        <div class="pull-left">
          <h4 class="list-group-item-heading">
            Recipe Name
          </h4>
          <p class="list-group-item-text">Description</p>
        </div>
        <span class="pull-right">
          <img
            src=""
            alt=""
            class="img-responsive"
            style="max-height: 50px;"
          />
        </span>
      </a>
      <app-recipe-item></app-recipe-item>
    </div>
  </div>
</div>
```
