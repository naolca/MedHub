import { Component, OnInit } from '@angular/core';
import { MedicineDetailComponent } from '../medicine-detail/medicine-detail.component';
import { MyDataService } from '../service/my-data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  data: {};
  medicines: any;
  results: any[];
  value: any;
  constructor(
    protected myService: MyDataService,
    private route: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.results = this.myService.searchMedicines();
  }
  search(value: string) {
    // this.http.get(`http://localhost:3000?q=${value}`).subscribe((data: any) => {
    //   this.router.navigate(['/search-results'], { state: { data } });
    // });
    this.results = this.myService.searchMedicines();
    this.route.navigate(['/search-results']);
  }

  //method to handle the redirection to the details page
  toDetail(detailID: number) {
    this.route.navigate(['/medicineDetails', detailID]);
  }
}
