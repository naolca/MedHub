import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyDataService } from '../service/my-data.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
})
export class HomeBodyComponent {
  constructor(
    private mydata: MyDataService,
    private http: HttpClient,
    private router: Router
  ) {}

  search(value: string) {
    // this.http.get(`http://localhost:3000?q=${value}`).subscribe((data: any) => {
    //   this.router.navigate(['/search-results'], { state: { data } });
    // });

    this.router.navigate(['/search-result'], { state: { value } });
  }
}
