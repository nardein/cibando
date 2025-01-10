import { RecipeService } from './../../../services/recipe.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  private RecipeService = inject(RecipeService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ricetta: Recipe | undefined;

  onGetDetail() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    if (id) {
      this.RecipeService.getDetail(id).subscribe({
        next: res => {
          this.ricetta = res;
        },
        error: e => console.log(e)
      })
    }
  }
}
