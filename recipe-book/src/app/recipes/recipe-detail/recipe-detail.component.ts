import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;


  constructor(private recipeService: RecipeService, private  route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // react to new changes
    this.route.params
      .subscribe(
        (params: Params) => {
            // this is a string so there is a need to cast it
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  //  click event
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // just a fine way to navigate no need for an id
    this.router.navigate(['edit'], {relativeTo: this.route});
    // just for showcase
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }


}
