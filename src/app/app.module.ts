import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './pages/form/recipe-form.component';
import { RecipeListComponent } from './pages/list/recipe-list.component';
import { RecipeComponent } from './pages/view/recipe.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    RecipeListComponent,
    RecipeComponent,
    BookmarkListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
