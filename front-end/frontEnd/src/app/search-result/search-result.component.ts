import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../service/my-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  data: {};
  constructor(
    private searchResult: MyDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.data = history.state.value;
    console.log(this.data);
  }
}
