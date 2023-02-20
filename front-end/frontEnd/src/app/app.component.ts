import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  message: any = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getGames();
  }

  onMedicineFetch() {
    this.fetchMedicine();
  }

  onMedicineCreate(medicines: { Mname: string; desc: string; price: string }) {
    console.log(medicines);

    this.http
      .post(
        'https://medhub-c17c0-default-rtdb.firebaseio.com/medicines.json',
        medicines
      )
      .subscribe((res) => {
        this.message = res;
        console.log(this.message);
      });
  }

  private fetchMedicine() {
    this.http
      .get('https://medhub-c17c0-default-rtdb.firebaseio.com/medicines.json')
      .pipe(
        map((res) => {
          const medicines = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              medicines.push({ ...res[key], id: key + 1 });
            }
          }
          return medicines;
        })
      )

      .subscribe((res) => {
        console.log(res);
      });
  }
}
