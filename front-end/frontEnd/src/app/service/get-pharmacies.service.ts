import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetPharmaciesService {
  constructor(private http: HttpClient) {}

  pharmacies: any[] = [
    {
      pharmacyName: 'AA',
      pharmaTinNo: 1234567890,
      branchNum: 1,
      latitude: -300,
      longitude: 300,
    },
    {
      pharmacyName: 'Adama',
      pharmaTinNo: 324532332,
      branchNum: 4,
      latitude: -323,
      longitude: 342,
    },
    {
      pharmacyName: 'Dire Dawa',
      pharmaTinNo: 4556435,
      branchNum: 6,
      latitude: 543,
      longitude: 423,
    },
    {
      pharmacyName: 'Gonder',
      pharmaTinNo: 6546345,
      branchNum: 10,
      latitude: -546,
      longitude: 654,
    },
    {
      pharmacyName: 'Mekele',
      pharmaTinNo: 562443,
      branchNum: 3,
      latitude: 342,
      longitude: 100,
    },
  ];
  url: string = 'http://192.168.173.2:3000/medicines';

  getPharmacies(): any {
    // return this.http.get(this.url);
    return this.http.get('http://192.168.0.187:3000/medicines/1');
  }
}
