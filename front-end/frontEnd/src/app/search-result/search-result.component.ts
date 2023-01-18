import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../service/my-data.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  results: any;
  constructor(private searchResult: MyDataService) {}

  ngOnInit(): void {
    this.results = this.searchResult.getResults();
  }
}
