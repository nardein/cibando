import { Recipe } from './../../../models/recipes.model';
import { Component,Input,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})

export class RecipeCardComponent {
  @Input() recipe: Recipe | undefined;
  @Input() page:string='';
  @Output() messaggio = new EventEmitter();

  inviaTitolo(titolo: string){
    this.messaggio.emit(titolo);
  }




}
