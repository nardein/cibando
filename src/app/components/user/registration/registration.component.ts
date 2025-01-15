import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})

export class RegistrationComponent {

  regexExp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,16}$/;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.regexExp)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, [Validators.requiredTrue])
  })

  onSubmit(){
    console.log(this.form.value)
  }

  passwordValid = false;

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

}
