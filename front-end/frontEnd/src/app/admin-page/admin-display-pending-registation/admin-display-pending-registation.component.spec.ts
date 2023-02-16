import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayPendingRegistationComponent } from './admin-display-pending-registation.component';

describe('AdminDisplayPendingRegistationComponent', () => {
  let component: AdminDisplayPendingRegistationComponent;
  let fixture: ComponentFixture<AdminDisplayPendingRegistationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayPendingRegistationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDisplayPendingRegistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
