import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({});
  }

  onSubmit(): void {
    this.router.navigate(['/']);
  }
}
