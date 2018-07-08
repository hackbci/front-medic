import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPatientComponent } from './review-patient.component';

describe('ReviewPatientComponent', () => {
  let component: ReviewPatientComponent;
  let fixture: ComponentFixture<ReviewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
