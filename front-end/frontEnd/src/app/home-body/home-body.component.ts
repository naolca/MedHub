import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyDataService } from '../service/my-data.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
})
export class HomeBodyComponent implements OnInit {
  options = ['ibuprofine', 'amoxaxiline', 'amoprazole'];
  data: any = '';

  constructor(private mydata: MyDataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getGames();
  }

  searchValue: string = '';

  changeSearchValue(eventData: Event) {
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
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
        this.data = res;
      });
  }
}
