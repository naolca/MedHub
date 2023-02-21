import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class ReserveMedicineService {
  url = 'http://10.6.250.218:3000/reservations/';

  constructor(private http: HttpClient, API: API) {}

  reserveMedicine(medId: number, pharmaID: number, phoneNumber: string) {
    return this.http.post(this.url, {
      medicineId: medId,
      pharmacyId: pharmaID,
      phoneNumber: phoneNumber,
    });
  }
}
