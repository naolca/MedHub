import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http';
  constructor(private http: HttpClient) {}

  login(role: string, pharmacyId: number, username: string, password: string) {
    return this.http.post('http://10.6.250.17:3000/' + role + '/signin', {
      pharmacyId,
      username,
      password,
    });
  }
}

//
