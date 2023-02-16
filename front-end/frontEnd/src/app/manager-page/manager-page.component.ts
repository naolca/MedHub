import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css'],
})
export class ManagerPageComponent implements OnInit {
  constructor(http: HttpClient) {}
  data: any;
  ngOnInit() {
    // this.data = history.state.value;
    this.data = 'i am the man';
    console.log(this.data);
  }
}
