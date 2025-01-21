import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})

export class RegistrationComponent {

  private router = inject(Router);
  private userService = inject(UserService);

  regexExp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,16}$/;
  passwordValid = false;


  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.regexExp)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, [Validators.requiredTrue])
  })


  checkPassword(e){
    if(e === this.form.controls.password.value){
      this.passwordValid=true;
    } else{
      this.passwordValid=false;
    }
  }

  checkForm():boolean{
    if(this.form.valid && this.passwordValid){
      return false;
    } else{
      return true
    }
  }

  onSubmit(){
    console.log(this.form.value)
    const dati = {name: this.form.controls.name.value, email: this.form.controls.email.value}
    this.userService.datiUtente.next(dati);
    this.userService.saveUsers(this.form.value).subscribe({
      next:(response) => {
        console.log("utente aggiunto",response),
        this.router.navigateByUrl('home');
      },
      error:(e) => {
        console.error("Utent non aggiunto",e);
      }
    })
  }

}
