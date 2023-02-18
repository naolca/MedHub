import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  NgControl,
  Form,
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      ID: [''], //[Validators.required]
      username: [''], // Validators.required
      password: [''], //Validators.required, Validators.minLength(8)
    });
  }

  //function to run when the form on the login page is submitted
  onSubmit() {
    let authenticated = this.loginService.login(
      this.loginForm.value.ID,
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    // console.log('form submitted');
    console.log(authenticated);
  }
}
