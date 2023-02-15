import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  //function to run when the form on the login page is submitted
  onSubmit(username: string, password: string, pharmacyID: string) {
    const body = { username, password, pharmacyID };
    console.log(body);

    this.http.post('http://localhost:3000/login', body).subscribe(
      (response) => {
        // Handle the response from the server
        this.router.navigate(['/search-results'], { state: { response } });
      },
      (error) => {
        // Handle any errors that occur
        console.log(error);
      }
    );
  }
}
