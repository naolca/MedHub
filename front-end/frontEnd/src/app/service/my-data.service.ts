import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  searchKey: string;
  medicines: any = [
    { name: 'ibuprofine', price: 20, pharmacy: 'anbasa', ID: 1 },
    { name: 'ibuprofine', price: 20, pharmacy: 'lucy', ID: 2 },
    { name: 'amoxacyline', price: 40, pharmacy: 'axum', ID: 5 },
    { name: 'amoprazole', price: 25, pharmacy: 'markos', ID: 6 },
    { name: 'diclofenac', price: 10, pharmacy: 'salam', ID: 7 },
    { name: 'diclofenac', price: 10, pharmacy: 'hora', ID: 3 },
  ];
  constructor(private http: HttpClient) {}

  getMedicines(): object {
    return this.medicines;
  }
  //the following method hanldes the general search made by the name of the medicine
  searchMedicines(): any[] {
    const result: any = [];

    for (let medicine of this.medicines) {
      if (medicine.name == this.searchKey) {
        result.push(medicine);
      }
    }
    return result;
  }
  //and the following handles the retrival of the detail of the medicine that has been clicked on in the search
  //results page
  searchMedicineById(detailID: number) {
    let result: any[];
    for (let medicine of this.medicines) {
      if (medicine.ID === detailID) {
        return medicine;
      }
    }
  }
}
