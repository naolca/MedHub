import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMedicinesComponent } from './display-medicines.component';

describe('DisplayMedicinesComponent', () => {
  let component: DisplayMedicinesComponent;
  let fixture: ComponentFixture<DisplayMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMedicinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
