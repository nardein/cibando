import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; //modulo con le funzioni piu usate
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RecipeRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../shared/shared.module";

//PrimeNg Module
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { RatingModule } from "primeng/rating";

//Componenti
import { RecipesComponent } from './recipes.component';
import { NuovaricettaComponent } from './nuovaricetta/nuovaricetta.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    RecipesComponent,
    NuovaricettaComponent,
    RecipesListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    RecipeRoutingModule,
    PaginatorModule,
    ButtonModule,
    EditorModule,
    RatingModule,
    SharedModule
  ],
  exports: [] // i componenti condivisi
})

export class RecipesModule { }
