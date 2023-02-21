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
    this.http.post(
      this.API.api,
      JSON.stringify({
        pharmacyName: pharmacyName,
        pharmaTinNo: pharmaTinNo,
        branchNum: branchNum,
        latitude: latitude,
        longitude: longitude,
      })
    );
  }
}
