import { Component, DoCheck, Output, EventEmitter } from '@angular/core'; //hook che controlla e fa qualcosa
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


interface User{
  id?: string,
  name: string,
  email: string,
  password: string
}
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck {

  @Output() ricerca = new EventEmitter<string>();

  isCollapsed = true;
  user;

  constructor(
    private router : Router,
    public authService : AuthService
  ){

  }

  ngDoCheck(): void {  //lifecycle hook che sta in ascolto di cambiamenti
    if(JSON.parse(localStorage.getItem('user')) !== null ){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  cercaRicetta(event: Event){
      const valore = (event.target as HTMLInputElement).value.toLowerCase();
      this.ricerca.emit(valore);
  }
}
