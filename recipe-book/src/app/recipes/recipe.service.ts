// place where we manage our recipes
import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {

  private recipeSelected = new EventEmitter<Recipe>();

  // so this can't accessed directly from outside
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe', 'This is a description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'), new Recipe(
      'Another test Recipe', 'This is a new description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

//   to return this array from the outside
  getRecipes() {
    return this.recipes.slice();
  }

  // it might be this
  getRecipeSelected(){
    return this.recipeSelected;
  }

}
