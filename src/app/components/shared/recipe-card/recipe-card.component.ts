import { Recipe } from './../../../models/recipes.model';
import { Component, Input, Output, EventEmitter, inject, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../../../services/auth.service';
import { DialogModule } from 'primeng/dialog';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  standalone: false,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})

export class RecipeCardComponent {
  @Input() recipe: Recipe | undefined;
  @Input() page: string = '';
  @Output() messaggio = new EventEmitter();

  visible = false;

  private sanitizer = inject(DomSanitizer);
  public authService = inject(AuthService);
  private modalService = inject(DialogModule);
  private recipeService = inject(RecipeService);

  inviaTitolo(titolo: string) {
    this.messaggio.emit(titolo);
  }

  /* getSanitizeHtml(descrizione: string): SafeHtml{
    const tagliaDescrizione = this.accorciaDescrizione(descrizione);
    const sanificaDescrizione = this.sanitizer.bypassSecurityTrustHtml(tagliaDescrizione);
    return sanificaDescrizione;
  } */

  accorciaDescrizione(descrizione: string): string {
    const lunghezzaDescrizione = 200;
    if (descrizione.length <= lunghezzaDescrizione) {
      return descrizione.slice(0, lunghezzaDescrizione);
    } else {
      const ultimaPosizioneSpazio = descrizione.lastIndexOf(' ', lunghezzaDescrizione);
      return descrizione.slice(0, ultimaPosizioneSpazio);
    }
  }

  openModal() {
    this.visible = true;
  }

  cancellaRicetta(id: string) {
    this.recipeService.deleteRecipes(id).subscribe({
      next: (res) => {
        console.log('ricetta cancellata');
        this.visible = false;
      }
    })
  }
}
