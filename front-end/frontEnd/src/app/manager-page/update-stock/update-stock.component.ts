import { Component } from '@angular/core';
import { UpdateMedicineService } from 'src/app/service/update-medicine.service';
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
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css'],
})
export default class UpdateStockComponent {
  public updateForm: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private updateMedicineService: UpdateMedicineService
  ) {
    this.updateForm = this.fb.group({
      brandName: [''], //[Validators.required]
      ammount: [''], // Validators.required
      pharmaID: [''], // Validators.required
      medID: [''], // Validators.required
    });
  }

  //method to be called when the update medicine form is submitted
  onSubmit() {
    return this.updateMedicineService
      .updateStock(
        this.updateForm.value.brandName,
        this.updateForm.value.ammount,
        this.updateForm.value.medID,
        this.updateForm.value.pharmaID
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
