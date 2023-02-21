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
  authenticated: any;

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
  onSubmit(role: string) {
    this.loginService
      .login(
        role,
        this.loginForm.value.ID,
        this.loginForm.value.username,
        this.loginForm.value.password
      )
      .subscribe(
        (response: any) => {
          this.authenticated = response;
          // console.log(this.authenticated);
          if (this.authenticated.hasOwnProperty('accessToken')) {
            localStorage.clear();
            localStorage.setItem('token', response.accessToken);
            if (role == 'employees') {
              this.router.navigate(['/managersPage']);
            } else {
              this.router.navigate(['/adminHomePage']);
            }
          } else {
            alert('Response does not contain an accessToken key');
          }
        },
        (error) => {
          alert('username or password is incorrect,please try again');
        }
      );

    // console.log('form submitted');
  }
}
