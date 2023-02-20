import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaOwnerComponent } from './pharma-owner.component';

describe('PharmaOwnerComponent', () => {
  let component: PharmaOwnerComponent;
  let fixture: ComponentFixture<PharmaOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
