import { Router } from '@angular/router';
import { Component,inject } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-nuovaricetta',
  standalone: false,

  templateUrl: './nuovaricetta.component.html',
  styleUrl: './nuovaricetta.component.scss'
})
export class NuovaricettaComponent {

  private router = inject(Router);
  private recipeService = inject(RecipeService);

  form = new FormGroup({
    title: new FormControl(''),
    image : new FormControl(''),
    description : new FormControl(''),
    difficulty : new FormControl(''),
    published : new FormControl(false)
  })



  goToRecipe(){
    this.router.navigate(['recipes'])
  }

  onSubmit(){
  this.recipeService.addRecipes(this.form.value).subscribe({
    next: (res) => {
      this.goToRecipe();
    },
    error:(e) =>{
      console.error("Errore durante il processo", e);
    }
  })
  }

}
