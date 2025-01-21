import { Component, inject } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';
import { map, Observable } from 'rxjs';

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

  recipes$ = this.recipeService.getRecipes().pipe(
    map(res => res.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 3)), //il map prende la response e la trasforma "mappa" in quello che chiedo. In questo caso la filtra pure
    map(response => this.totaleRicette = response)
  )
  totaleRicette: Recipe[]  // --BestPractice-- $ usato per dire che la variabile è per una chiamata asincrona


  constructor(){
  //  this.getRecipes();
  }


  getRecipes(){
    this.recipeService.getRecipes().subscribe({
      next:(res) => {    //se la risposta è positiva fai questo
        this.ricette = res;
      },
      error: (e)  => console.error(e)
    });
  }

  riceviTitolo(event: any){
    this.titoloRicevuto=event;
  }

  onPageChange(event) {
    event.page = event.page + 1;
    this.page = event.page;
    this.size = event.rows;
  }
}
