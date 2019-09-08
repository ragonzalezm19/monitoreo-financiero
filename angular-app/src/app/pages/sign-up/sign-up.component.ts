import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  singForm: FormGroup;
  emailErrorMessages: Map<string, string> = new Map();
  passwordErrorMessages: Map<string, string> = new Map();
  confirmPasswordErrorMessages: Map<string, string> = new Map();

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.singForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirm-password': new FormControl(null, [Validators.required, this.confirmPasswordValidate.bind(this)])
    });

    this.loadErrorMessages();

    this.singForm.get('confirm-password').valueChanges.subscribe(value => {
      console.log(this.singForm.get('confirm-password').errors);
    });
  }

  confirmPasswordValidate(control: AbstractControl): ValidationErrors | null {
    if (this.singForm === undefined) {
      return null;
    }

    const password = this.singForm.get('password');

    if (password === undefined) {
      return null;
    }

    if (control.value !== password.value) {
      return {
        'same-password': true
      };
    }

    return null;
  }

  loadErrorMessages() {
    const requiredMessage = 'Campo requerido';
    this.emailErrorMessages.set('required', requiredMessage);
    this.emailErrorMessages.set('email', 'Formato email requerido \'prueba@correo.com\'');
    this.passwordErrorMessages.set('required', requiredMessage);
    this.passwordErrorMessages.set('minlength', 'La contraseña debe tener un minimo de 8 caracteres');
    this.confirmPasswordErrorMessages.set('required', requiredMessage);
    this.confirmPasswordErrorMessages.set('same-password', 'Las contraseñas no concuerdan');
  }

  getErrorMesssage(name: string, control: AbstractControl): string {
    const keys = Object.keys(control.errors);

    let message = '';

    switch (name) {
      case 'email':
        message = this.emailErrorMessages.get(keys[0]);
        break;
      case 'password':
        message = this.passwordErrorMessages.get(keys[0]);
        break;
      case 'confirm-password':
        message = this.confirmPasswordErrorMessages.get(keys[0]);
        break;
    }

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

  onSubmit(): void {
    this.router.navigate(['/']);
  }
}
