import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UpdateMedicineService {
  url: string = 'http://localhost3000/';

  constructor(private http: HttpClient) {}

  addMedicine(
    genericName: string,
    brandName: string,
    batchNumber: string,
    ammount: number,
    receivingAddress: string,
    storageConditions: string,
    expiryDate: string,
    pharmacyId: number
  ) {
    this.http.post(
      this.url,
      JSON.stringify({
        genericName: genericName,
        brandName: brandName,
        batchNumber: batchNumber,
        ammount: ammount,
        receivingAddress: receivingAddress,
        storageConditions: storageConditions,
        expiryDate: expiryDate,
        pharmacyId: pharmacyId,
      })
    );
  }
}
