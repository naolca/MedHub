import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UpdateMedicineService {
  url: string = 'http://localhost3000/';

  constructor(private http: HttpClient) {}

  //method that takes care of add medicine functionality
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

  //method that handles the situation when a manager or employee wants to update the amount of the medicine in the pharmacy stock

  updateStock(genericName: string, ammount: number) {
    this.http.patch(
      this.url,
      JSON.stringify({ genericName: genericName, ammount: ammount })
    );
  }
}
