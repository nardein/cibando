import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  standalone: false,

  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss',
})
export class ContattiComponent {
  contactForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    oggetto: new FormControl('', Validators.required),
    messaggio: new FormControl('', Validators.required),
  });

  onSubmit() {}
}
