import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  evindenziato = false;

  onEvidenziazione(){
    this.evindenziato = !this.evindenziato;
  }
}
