import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http';

  constructor(private http: HttpClient, public API: API) {}

  login(role: string, pharmacyId: number, username: string, password: string) {
    return this.http.post(this.API.api + role + '/signin', {
      pharmacyId,
      username,
      password,
    });
  }
}

//
