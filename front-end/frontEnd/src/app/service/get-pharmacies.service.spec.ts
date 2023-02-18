import { TestBed } from '@angular/core/testing';

import { GetPharmaciesService } from './get-pharmacies.service';

describe('GetPharmaciesService', () => {
  let service: GetPharmaciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPharmaciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
