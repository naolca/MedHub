import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../service/my-data.service';

@Component({
  selector: 'app-display-medicines',
  templateUrl: './display-medicines.component.html',
  styleUrls: ['./display-medicines.component.css'],
})
export class DisplayMedicinesComponent implements OnInit {
  medicines: any;

  constructor(private myService: MyDataService) {}

  ngOnInit(): void {
    this.medicines = this.myService.getMedicines();
    // console.log(this.medicines);
  }
}
