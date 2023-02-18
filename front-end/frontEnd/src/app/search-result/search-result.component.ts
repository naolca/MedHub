import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../service/my-data.service';
import { ActivatedRoute } from '@angular/router';
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
    private myService: MyDataService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.results = this.myService.searchMedicines();
  }
}
