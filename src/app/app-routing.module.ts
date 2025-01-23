import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedInGuard } from './guards/logged-in.guard';

//Components
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { isAdminGuard } from './guards/is-admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //pathMatch controlla tutta la stringa dell'url e funziona sempre
  { path: 'home', component: HomeComponent }, //'home' rotta del url e component da caricare
  { path: 'registrazione', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'ricette', loadChildren: () => import("./components/recipes/recipes.module").then(module => module.RecipesModule) },
  { path: 'profile', component: ProfileComponent, canActivate: [loggedInGuard] },
  { path: '**', redirectTo: 'home' } // se l'url è sbagliato riporta alla home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

