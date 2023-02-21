import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  searchKey: string;

  latitude: number;
  longitude: number;

  medicines: any;
  constructor(private http: HttpClient, public API: API) {}

  getMedicines(): object {
    return this.medicines;
  }
  //the following method hanldes the general search made by the name of the medicine
  searchMedicines(): any {
    let result: any;
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });

    return this.http.get(
      this.API.api +
        'pharmacies?medicine=' +
        this.searchKey +
        '&latitude=' +
        this.latitude +
        '&longitude=' +
        this.longitude
    );
    // .subscribe((data) => {
    //   // console.log(data);
    //   this.medicines = data;
    //   return this.medicines;
    // });

    // console.log(this.medicines);

    // const result: any = [];

    // for (let medicine of this.medicines) {
    //   if (medicine.name == this.searchKey) {
    //     result.push(medicine);
    //   }
    // }
    // return result;
  }
  //and the following handles the retrival of the detail of the medicine that has been clicked on in the search
  //results page
  searchMedicineById(detailID: number) {
    console.log(this.searchKey);
    return this.http.get(this.API.api + 'pharmacies/' + detailID);
  }
  searchMedDetails(medName: string) {
    return this.http.get(this.API.api + 'medicines?medname=' + medName);
  }
}
