import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmacyFormComponent } from './add-pharmacy-form.component';

describe('AddPharmacyFormComponent', () => {
  let component: AddPharmacyFormComponent;
  let fixture: ComponentFixture<AddPharmacyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPharmacyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPharmacyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
