import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayPharmaciesComponent } from './admin-display-pharmacies.component';

describe('AdminDisplayPharmaciesComponent', () => {
  let component: AdminDisplayPharmaciesComponent;
  let fixture: ComponentFixture<AdminDisplayPharmaciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayPharmaciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDisplayPharmaciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
