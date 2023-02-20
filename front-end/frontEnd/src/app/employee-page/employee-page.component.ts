import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css'],
})
export class EmployeePageComponent {
  constructor(private router: Router) {}

  listMedicine() {
    this.router.navigate(['/']);
  }
}
