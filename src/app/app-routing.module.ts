import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { RecipeFormComponent } from './pages/form/recipe-form.component';
import { RecipeListComponent } from './pages/list/recipe-list.component';
import { RecipeComponent } from './pages/view/recipe.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'view', component: RecipeComponent },
  { path: 'create', component: RecipeFormComponent },
  { path: 'edit/:recipeId', component: RecipeFormComponent },
  { path: 'bookmarks', component: BookmarkListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
