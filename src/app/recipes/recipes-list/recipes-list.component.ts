import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 recipes: Recipe[]=[
   new Recipe('A Test Recipe','This is simply a test','https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'),new Recipe('A Test Recipe','This is simply a test','https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false')

 ];
  constructor() { }

  ngOnInit() {
  }

}
