import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent {
  Router: any;
  constructor(private logOut: LoginService, private router: Router) {}

  logout() {
    this.logOut.logout();
    this.router.navigate(['/HomeBody']);
  }
}
