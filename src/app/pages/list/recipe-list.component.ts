import { Recipe } from 'src/app/models/recipe.model';
import { exampleRecipeList } from 'src/app/shared/test/example-recipes';

import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.styl'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = exampleRecipeList;
  public indexedRecipes: { [key: string]: Recipe[] } = {};

  constructor() {}

  ngOnInit(): void {
    const indexedRecipes = {};
    this.recipes.forEach((recipe: Recipe) => {
      const key = recipe.name[0].toUpperCase();
      if (indexedRecipes.hasOwnProperty(key)) {
        indexedRecipes[key].push(recipe);
      } else {
        indexedRecipes[key] = [recipe];
      }
    });
    console.log(indexedRecipes);
    this.indexedRecipes = indexedRecipes;
  }
}
