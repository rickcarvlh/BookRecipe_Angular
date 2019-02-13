import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // using the recipe model file
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe', 'This is a description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),  new Recipe(
      'A new test Recipe', 'This is a new description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
