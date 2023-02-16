import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-display-pending-registation',
  templateUrl: './admin-display-pending-registation.component.html',
  styleUrls: ['./admin-display-pending-registation.component.css'],
})
export class AdminDisplayPendingRegistationComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPendingRegistration();
  }

  getPendingRegistration() {
    // this.http.get(`http://localhost:3000?q=${value}`).subscribe((data: any) => {
    //   this.data = data;
    // });
    this.data = 'naol ca';
    console.log(this.data);
  }
}
