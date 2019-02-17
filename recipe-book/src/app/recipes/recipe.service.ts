// place where we manage our recipes
import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";


// inject a service into a service
@Injectable()
export class RecipeService {

  private recipeSelected = new EventEmitter<Recipe>();

  // so this can't accessed directly from outside
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 'A super-tasty Schnitzel  - just awesome', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',[
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger', 'What else you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', [
        new Ingredient(' Buns', 2),
        new Ingredient('Meat', 1)
      ]),
  ];

  constructor(private slService: ShoppingListService) {}


//   to return this array from the outside
  getRecipes() {
    return this.recipes.slice();
  }

  // it might be this
  getRecipeSelected(){
    return this.recipeSelected;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsMore(ingredients);
  }

}
