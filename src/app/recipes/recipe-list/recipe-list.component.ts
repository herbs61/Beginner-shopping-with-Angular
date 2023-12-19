import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simple a test','https://i.pinimg.com/236x/82/9a/27/829a27a7b18a0ed65feea864ab810e5b.jpg'),new Recipe('A Test Recipe','This is a simple a test','https://i.pinimg.com/236x/82/9a/27/829a27a7b18a0ed65feea864ab810e5b.jpg') 
  ];

  constructor(){

  }
  ngOnInit() {
    
  }
}
