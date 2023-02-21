import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetPharmaciesService } from 'src/app/service/get-pharmacies.service';

@Component({
  selector: 'app-admin-display-pharmacies',
  templateUrl: './admin-display-pharmacies.component.html',
  styleUrls: ['./admin-display-pharmacies.component.css'],
})
export class AdminDisplayPharmaciesComponent implements OnInit {
  data: any;
  pharmacies: any;

  constructor(
    private http: HttpClient,
    private getPharmaciesService: GetPharmaciesService
  ) {}

  ngOnInit(): void {
    //  this.getPharmaciesService.getPharmacies().subscribe((response:any[]) => {
    //   this.pharmacies=response;
    //  })
    this.getPharmaciesService.getPharmacies().subscribe((response) => {
      this.pharmacies = response;
    });
  }
  getPharmacies() {
    // // this.http.get(`http://localhost:3000?q=${value}`).subscribe((data: any) => {
    // //   this.data = data;
    // // });
    // this.data = 'firaol is awesome';
  }
}
