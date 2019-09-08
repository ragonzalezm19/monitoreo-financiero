import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  emailErrorMessages: Map<string, string> = new Map();
  passwordErrorMessages: Map<string, string> = new Map();

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });

    this.loadErrorMessages();
  }

  onSubmit(): void {
    this.router.navigate(['/']);
  }

  loadErrorMessages() {
    const requiredMessage = 'Campo requerido';
    this.emailErrorMessages.set('required', requiredMessage);
    this.emailErrorMessages.set('email', 'Formato email requerido \'prueba@correo.com\'');
    this.passwordErrorMessages.set('required', requiredMessage);
    this.passwordErrorMessages.set('minlength', 'La contraseña debe tener un minimo de 8 caracteres');
  }

  getErrorMessage(name: string, control: AbstractControl): string {
    const keys = Object.keys(control.errors);
    const message = name === 'email' ? this.emailErrorMessages.get(keys[0]) : this.passwordErrorMessages.get(keys[0]);
    return message;
  }

  getClassInput(control: AbstractControl): string {
    let ngClass = '';

    if (control.invalid) {
      if (control.dirty || control.touched) {
        ngClass = 'is-invalid';
      }
    } else {
      ngClass = 'is-valid';
    }

    return ngClass;
  }

}
