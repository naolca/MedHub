import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(ID: string, username: string, password: string) {
    return this.http
      .post('http://192.168.46.251:3000/administrators/login', {
        ID,
        username,
        password,
      })
      .subscribe((response) => {
        console.log(response);
      });

    // if (username == 'firaol' && password == '1014') {
    //   localStorage.clear();
    //   localStorage.setItem(ID, ID);
    //   return true;
    // } else {
    //   return false;
    // }
  }
}

//
