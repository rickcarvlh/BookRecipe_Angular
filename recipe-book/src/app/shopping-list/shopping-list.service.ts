import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  //Defining a type
  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes', 3)
  ];

  // we only get a slice() a copy
  getIngredients () {
    return this.ingredients.slice();
  }


  // only one ingredient
  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsMore(ingredients: Ingredient[]) {
  //  viable option but not the best one
  //   for( let ingredient of ingredients){
  //     this.addIngredients(ingredient);
  //   }
    this.ingredients.push(...ingredients);
    // passing only a shallow copy
    this.ingredientsChanged.emit(this.ingredients.slice());

  }



}
