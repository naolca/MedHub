import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  demo: any = this.getGames();
  constructor(private http: HttpClient) {}

  getResults(): object {
    return [
      { name: 'ibuprofine', price: 20, pharmacy: 'anbasa' },
      { name: 'ibuprofine', price: 20, pharmacy: 'lucy' },
      { name: 'amoxacyline', price: 40, pharmacy: 'axum' },
      { name: 'amoprazole', price: 25, pharmacy: 'markos' },
      { name: 'diclofenac', price: 10, pharmacy: 'salam' },
      { name: 'diclofenac', price: 10, pharmacy: 'hora' },
    ];
  }

  getGames(): any {
    const url =
      'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

    const headers = new Headers({
      accept: 'application/json',
      'X-RapidAPI-Key': '11d5de5304mshf1d577e08b131ecp13f630jsnb1149a912b8c',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
    });
    this.http
      .get(url, {
        headers: new HttpHeaders({
          accept: 'application/json',
          'X-RapidAPI-Key':
            '11d5de5304mshf1d577e08b131ecp13f630jsnb1149a912b8c',
          'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        }),
      })
      .subscribe((res) => {
        return res;
      });
  }
}
