import { Recipe } from './../../../models/recipes.model';
import { RouterLink } from '@angular/router';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../../../services/auth.service';

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

  private sanitizer = inject(DomSanitizer);
  public authService = inject(AuthService);

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


}
