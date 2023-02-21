import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../service/my-data.service';
import { ReserveMedicineService } from '../service/reserve-medicine.service';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css'],
})
export class MedicineDetailComponent implements OnInit {
  detailID: number;
  medName: string;
  currentPharmaDetail: any;
  currentMedicineDetail: any;
  status: any;
  constructor(
    private route: ActivatedRoute,
    private myService: MyDataService,
    private reservationService: ReserveMedicineService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.detailID = +params.get('detailID');
      this.medName = params.get('medicineName');
    });
    this.myService.searchMedicineById(this.detailID).subscribe((response) => {
      this.currentPharmaDetail = response;
      console.log(this.currentPharmaDetail);
    });
    // console.log(this.currentPharmaDetail);

    this.myService.searchMedDetails(this.medName).subscribe((response) => {
      this.currentMedicineDetail = response;
      console.log(this.currentMedicineDetail);
    });
  }

  onReserve(medId: number, pharmaID: number, phoneNumber: string) {
    this.reservationService
      .reserveMedicine(medId, pharmaID, phoneNumber)
      .subscribe(
        (response) => {
          this.status = response;
          console.log(this.status.status);

          if (this.status.status === 'reserved') {
            alert('you have successfully reserved this medicine');
          } else {
            alert('invalid number,please try again');
          }
        },
        (error) => {
          alert(
            'not successfully reserved. please consider trying again later'
          );
        }
      );
  }
}
