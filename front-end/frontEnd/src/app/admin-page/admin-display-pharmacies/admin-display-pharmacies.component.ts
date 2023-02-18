import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-display-pharmacies',
  templateUrl: './admin-display-pharmacies.component.html',
  styleUrls: ['./admin-display-pharmacies.component.css'],
})
export class AdminDisplayPharmaciesComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(localStorage);
  }
  getPharmacies() {
    // this.http.get(`http://localhost:3000?q=${value}`).subscribe((data: any) => {
    //   this.data = data;
    // });
    this.data = 'firaol is awesome';
  }
}
