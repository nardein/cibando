import { Recipe } from './../models/recipes.model';
import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl = 'api/recipes'

  recipe: Recipe;

  constructor(private http: HttpClient) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
    // return of (RECIPES); //Dopo si sostituisce of(RECIPES) con il percorso del backend
  }

  getDetail(id: string): Observable<Recipe | undefined> {
    // const recipe = RECIPES.find(ricetta => ricetta._id === id);
    // return of (recipe);
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  addRecipes(recipe): Observable<Recipe | undefined> {
    return this.http.post<Recipe>(`${this.apiBaseUrl}/`, recipe)
  }

  deleteRecipes(id: string): Observable<Recipe | undefined> {
    return this.http.delete<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  updateRecipes(id:string, updatedRecipe: Recipe): Observable<Recipe | undefined> {
    return this.http.put<Recipe>(`${this.apiBaseUrl}/${id}`, updatedRecipe)
  }
}
