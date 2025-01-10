import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch: 'full'}, //pathMatch controlla tutta la stringa dell'url e funziona sempre
  {path: 'home',component: HomeComponent}, //'home' rotta del url e component da caricare
  {path: 'recipes', component: RecipesComponent},
  {path: '**', redirectTo: 'home'} // se l'url è sbagliato riporta alla home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

