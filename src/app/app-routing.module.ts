import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedInGuard } from './logged-in.guard';

//Components
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { NuovaricettaComponent } from './components/recipes/nuovaricetta/nuovaricetta.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';

const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch: 'full'}, //pathMatch controlla tutta la stringa dell'url e funziona sempre
  {path: 'home',component: HomeComponent}, //'home' rotta del url e component da caricare
  {path: 'recipes', component: RecipesComponent, children:[
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path: 'dettaglio/:_id', component: DetailComponent},
    {path: '', component: RecipesListComponent, pathMatch: 'full'}
  ]},
  {path: 'registrazione', component: RegistrationComponent},
  {path: 'login', component:LoginComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'nuovaricetta', component:NuovaricettaComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [loggedInGuard] },
  {path: '**', redirectTo: 'home'} // se l'url è sbagliato riporta alla home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

