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
    this.myService.getMedicines().subscribe((response) => {
      this.medicines = response;
      console.log(this.medicines);
    });
  }
}
