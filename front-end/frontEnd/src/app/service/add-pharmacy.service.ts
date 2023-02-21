import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class AddPharmacyService {
  constructor(private http: HttpClient, public API: API) {}

  addPharmacy(
    pharmacyName: string,
    pharmaTinNo: number,
    branchNum: number,
    latitude: number,
    longitude: number
  ) {
    return this.http.post(this.API.api + 'pharmacies', {
      pharmacyName: pharmacyName,
      pharmaTinNo: pharmaTinNo,
      branchNum: branchNum,
      latitude: latitude,
      longitude: longitude,
    });
  }
}
