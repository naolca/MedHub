import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddPharmacyService {
  url: string = 'http://localhost3000/pharmacies';

  constructor(private http: HttpClient) {}

  addPharmacy(
    pharmacyName: string,
    pharmaTinNo: number,
    branchNum: number,
    latitude: number,
    longitude: number
  ) {
    this.http.post(
      this.url,
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
