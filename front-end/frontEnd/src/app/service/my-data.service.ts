import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  constructor() {}

  getResults(): object{
    return [
      { name: 'ibuprofine', price: 20, pharmacy: 'anbasa' },
      { name: 'ibuprofine', price: 20, pharmacy: 'lucy' },
      { name: 'amoxacyline', price: 40, pharmacy: 'axum' },
      { name: 'amoprazole', price: 25, pharmacy: 'markos' },
      { name: 'diclofenac', price: 10, pharmacy: 'salam' },
      { name: 'diclofenac', price: 10, pharmacy: 'hora' },
    ];
  }
}
