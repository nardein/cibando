import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // per far girare app su browser
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeIt from '@angular/common/locales/it';  // Importa la localizzazione italiana
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//PrimeNg Module
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

//NgBootstrap Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

//Component
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';

import { RecipesModule } from './components/recipes/recipes.module';

registerLocaleData(localeIt, 'it');

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationComponent,
    ContattiComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCollapseModule,
    PasswordModule,
    DividerModule,
    HttpClientModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    FloatLabelModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it' },  // Imposta la lingua predefinita su italiano
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
