import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipes.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  evindenziato = false;

  ricette: Recipe[] = [];

  constructor(private recipeService: RecipeService){
    this.recipeService.getRecipes().subscribe({
      next:(res) => {    //se la risposta è positiva fai questo
        this.ricette = res.sort((a,b) => b._id - a._id).slice(0,4); //sort delle ultime ricette
      },
      error: (e)  => console.error(e)
    });
  }


  onEvidenziazione(){
    this.evindenziato = !this.evindenziato;
  }


}
