import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHistoryPatientComponent } from './detail-history-patient.component';

describe('DetailHistoryPatientComponent', () => {
  let component: DetailHistoryPatientComponent;
  let fixture: ComponentFixture<DetailHistoryPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHistoryPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHistoryPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
