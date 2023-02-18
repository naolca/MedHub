import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  searchKey: string;
  medicines: any = [
    { name: 'ibuprofine', price: 20, pharmacy: 'anbasa' },
    { name: 'ibuprofine', price: 20, pharmacy: 'lucy' },
    { name: 'amoxacyline', price: 40, pharmacy: 'axum' },
    { name: 'amoprazole', price: 25, pharmacy: 'markos' },
    { name: 'diclofenac', price: 10, pharmacy: 'salam' },
    { name: 'diclofenac', price: 10, pharmacy: 'hora' },
  ];
  constructor(private http: HttpClient) {}

  getMedicines(): object {
    return this.medicines;
  }
  searchMedicines(): any[] {
    const result: any = [];

    for (let medicine of this.medicines) {
      if (medicine.name == this.searchKey) {
        result.push(medicine);
      }
    }
    return result;
  }
}
