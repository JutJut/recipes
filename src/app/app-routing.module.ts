import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { RecipeFormComponent } from './pages/form/recipe-form.component';
import { RecipeListComponent } from './pages/list/recipe-list.component';
import { RecipeComponent } from './pages/view/recipe.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'view', component: RecipeComponent },
  { path: 'create', component: RecipeFormComponent },
  { path: 'edit/:recipeId', component: RecipeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
