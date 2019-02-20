import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // binding to recipe-list-component
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  // if it works - not needed anymore
  // onSelected() {
  //   this.recipeService.getRecipeSelected().emit(this.recipe);
  // }

}
