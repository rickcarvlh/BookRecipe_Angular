import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  // variables
  id: number;
  // store information in a new variable
  editMode = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // checking if params and id are undefined witch can only happen outside of edit mode
        this.editMode = params['id'] != null;
        // console.log(this.editMode);
      }
    );
  }

}
