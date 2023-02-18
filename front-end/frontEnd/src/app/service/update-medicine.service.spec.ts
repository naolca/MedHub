import { TestBed } from '@angular/core/testing';

import { UpdateMedicineService } from './update-medicine.service';

describe('UpdateMedicineService', () => {
  let service: UpdateMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
