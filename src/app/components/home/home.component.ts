import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipes.model';
import { UserService } from '../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  evindenziato = false;
  ricette: Recipe[] = [];
  datiRegistrazione = {};
  idModale = '';
  nomeModale = '';

  @ViewChild('modaleRegistrazione', { static: false })
  modaleRegistrazione: ElementRef;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private modalService: NgbModal
  ) {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        //se la risposta è positiva fai questo
        this.ricette = res.sort((a, b) => b._id - a._id).slice(0, 4); //sort delle ultime ricette
      },
      error: (e) => console.error(e),
    });


  }

  ngAfterViewInit(): void {
    this.userService.datiUtente.subscribe((res) => {
      console.log(res);
      this.datiRegistrazione = res;
      if(res !==null){
        this.openModal(this.modaleRegistrazione)
      }
      this.openModal(this.modaleRegistrazione)
    });
  }

  onEvidenziazione() {
    this.evindenziato = !this.evindenziato;
  }

  openModal(content: any, id?: string, nome?: string, cognome?: string) {
    this.idModale = id;
    this.nomeModale = nome;
    this.modalService.open(content, { centered: true, size: 'lg' }).result
    .then((res) => {
        console.log('azione da eseguire');
        this.userService.datiUtente.next(null);
      })
    .catch((error) => console.log('Nessuna azione da eseguire'));
  }
}
