import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../service/my-data.service';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css'],
})
export class MedicineDetailComponent implements OnInit {
  detailID: number;
  currentMedicine: any;
  constructor(
    private route: ActivatedRoute,
    private mySercive: MyDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.detailID = +params.get('detailID');
    });
    this.currentMedicine = this.mySercive.searchMedicineById(this.detailID);
  }
}
