import { Component } from '@angular/core';
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
import { UpdateMedicineService } from 'src/app/service/update-medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css'],
})
export class AddMedicineComponent {
  public addForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private addMedicineService: UpdateMedicineService
  ) {
    this.addForm = this.fb.group({
      genericName: [''], //[Validators.required]
      brandName: [''], // Validators.required
      batchNumber: [''], //Validators.required, Validators.minLength(8)
      ammount: [''], //Validators.required, Validators.minLength(8)
      receivingAddress: [''], //Validators.required, Validators.minLength(8)
      storageConditions: [''], //Validators.required, Validators.minLength(8)
      expiryDate: [''], //Validators.required, Validators.minLength(8)
      pharmacyId: [''], //Validators.required, Validators.minLength(8)
    });
  }

  onSubmit() {
    let addedMedicine = this.addMedicineService.addMedicine(
      this.addForm.value.genericName,
      this.addForm.value.brandName,
      this.addForm.value.batchNumber,
      this.addForm.value.ammount,
      this.addForm.value.receivingAddress,
      this.addForm.value.storageConditions,
      this.addForm.value.expiryDate,
      this.addForm.value.pharmacyId
    );
    console.log([
      this.addForm.value.genericName,
      this.addForm.value.brandName,
      this.addForm.value.batchNumber,
      this.addForm.value.ammount,
      this.addForm.value.receivingAddress,
      this.addForm.value.storageConditions,
      this.addForm.value.expiryDate,
      this.addForm.value.pharmacyId,
    ]);
  }
}
