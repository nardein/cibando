import { Component, inject } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';
import { map, Observable, take, filter, first, BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})

export class RecipesListComponent {

  recipeService = inject(RecipeService);

  ricette: Recipe[] = [];

  titoloRicevuto: any;
  first: number = 0;
  rows: number = 10;
  page = 1;
  size = 4;

  searchRecipe$ = new BehaviorSubject<string>('');

  recipes$ = combineLatest([
    this.recipeService.getRecipes(),
    this.searchRecipe$
  ]).pipe(
    map(([ricette, searchTerm]) =>
      ricette
        .filter(ricetta => ricetta.difficulty < 6) // 🔹 Filtra per difficoltà
        .filter(ricetta => ricetta.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ricetta.description.toLowerCase().includes(searchTerm.toLowerCase())) // 🔹 Filtra per titolo
    ),
    map(response => this.totaleRicette = response)
  );

  filtraRicette(query: string) {
    this.searchRecipe$.next(query); // 🔹 Aggiorna il valore della ricerca
  }


  totaleRicette: Recipe[] = []  // --BestPractice-- $ usato per dire che la variabile è per una chiamata asincrona


  constructor(){
  //  this.getRecipes();
  }

  getRecipes(){
    this.recipeService.getRecipes().pipe(first()).subscribe({
      next: (res) => {
        console.log(res); // Controlla il formato delle date qui
        this.ricette = res.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        // this.ricette = res.sort((a, b) => b.createdAt - a.createdAt);
      },
      error: (e) => console.error(e)
    })
  }

  onPageChange(event) {
    event.page = event.page + 1;
    this.page = event.page;
    this.size = event.rows;
  }

  riceviTitolo(event: any){
    this.titoloRicevuto=event;
  }


}
