import { Recipe } from './../models/recipes.model';
import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes():Observable<Recipe[]>{
    return of (RECIPES); //Dopo si sostituisce of(RECIPES) con il percorso del backend
  }

  getDetail(id:number): Observable<Recipe | undefined>{
    const recipe = RECIPES.find(ricetta => ricetta._id === id);
    return of (recipe);
  }
}
