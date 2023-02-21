import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class UpdateMedicineService {
  constructor(private http: HttpClient, public API: API) {}

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
      this.API.api + 'pharmacies',
      JSON.stringify({
        genericName: genericName,
        brandName: brandName,
        batchNumber: batchNumber,
        quantity: ammount,
        receivingAddress: receivingAddress,
        storageConditions: storageConditions,
        expiryDate: expiryDate,
        pharmacyId: pharmacyId,
      })
    );
  }

  //method that handles the situation when a manager or employee wants to update the amount of the medicine in the pharmacy stock

  updateStock(
    brandName: string,
    ammount: number,
    medID: number,
    pharmaID: number
  ) {
    return this.http.patch(
      this.API.api +
        'medicines/' +
        pharmaID +
        '/' +
        medID +
        '?brandname=' +
        brandName,
      { quantity: ammount }
    );
  }
}
