import { Component } from '@angular/core';
import { AddPharmacyService } from 'src/app/service/add-pharmacy.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  NgControl,
  Form,
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-add-pharmacy-form',
  templateUrl: './add-pharmacy-form.component.html',
  styleUrls: ['./add-pharmacy-form.component.css'],
})
export class AddPharmacyFormComponent {
  public loginForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private addPharmacyService: AddPharmacyService
  ) {
    this.loginForm = this.fb.group({
      pharmacyName: [''], //[Validators.required]
      pharmaTinNo: [''], // Validators.required
      branchNum: [''], //Validators.required, Validators.minLength(8)
      latitude: [''], //Validators.required, Validators.minLength(8)
      longitude: [''], //Validators.required, Validators.minLength(8)
    });
  }

  onSubmit() {
    let addedPharmacy = this.addPharmacyService.addPharmacy(
      this.loginForm.value.pharmacyName,
      this.loginForm.value.pharmaTinNo,
      this.loginForm.value.branchNum,
      this.loginForm.value.latitude,
      this.loginForm.value.longitude
    );
    console.log([
      this.loginForm.value.pharmacyName,
      this.loginForm.value.pharmaTinNo,
      this.loginForm.value.branchNum,
      this.loginForm.value.latitude,
      this.loginForm.value.longitude,
    ]);
  }
}
