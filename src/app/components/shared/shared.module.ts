import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; //modulo con le funzioni piu usate
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

//Shared Components
import { CarouselComponent } from "./carousel/carousel.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeCardComponent } from "./recipe-card/recipe-card.component";
import { RouterLink } from "@angular/router";

//PrimeNg Module
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from "primeng/rating";
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from "primeng/inputtextarea";

//NgBootstrap Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CarouselComponent,
    HeaderComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    ButtonModule,
    RatingModule,
    RouterLink,
    NgbModule,
    NgbCollapseModule,
    DialogModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    InputTextareaModule
  ],
  exports: [RecipeCardComponent, HeaderComponent, CarouselComponent]
})

export class SharedModule { }
