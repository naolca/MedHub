import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../service/login.service';
import { Route, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css'],
})
export class ManagerPageComponent implements OnInit {
  Router: any;
  public updateForm: FormGroup;
  constructor(
    private http: HttpClient,
    private logOut: LoginService,
    private router: Router
  ) {}
  data: any;
  ngOnInit() {
    // this.data = history.state.value;
    this.data = 'i am the man';
    console.log(this.data);
  }
  logout() {
    this.logOut.logout();
    this.router.navigate(['/HomeBody']);
  }
}
