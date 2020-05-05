import {
    emptyRecipe,
    exampleRecipeList,
} from 'src/app/shared/test/example-recipes';

import {
    Component,
    OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.styl'],
})
export class RecipeFormComponent implements OnInit {
  public recipe = emptyRecipe;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.params;
    const recipeId = routeParams.recipeId;

    if (recipeId) {
      this.recipe = exampleRecipeList.find((foo) => foo.id === recipeId);
    }

    console.log('RECIPE_FORM', recipeId, this.recipe);
  }
}
