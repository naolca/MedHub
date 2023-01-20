import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
})
export class HomeBodyComponent implements OnInit {
  options = ['ibuprofine', 'amoxaxiline', 'amoprazole'];

  constructor() {}

  ngOnInit(): void {}

  searchValue: string = '';

  changeSearchValue(eventData: any) {
    console.log(eventData);
  }
}
