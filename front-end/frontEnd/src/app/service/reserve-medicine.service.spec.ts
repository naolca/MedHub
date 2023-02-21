import { TestBed } from '@angular/core/testing';

import { ReserveMedicineService } from './reserve-medicine.service';

describe('ReserveMedicineService', () => {
  let service: ReserveMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
