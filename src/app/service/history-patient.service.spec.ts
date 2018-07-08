import { TestBed, inject } from '@angular/core/testing';

import { HistoryPatientService } from './history-patient.service';

describe('HistoryPatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoryPatientService]
    });
  });

  it('should be created', inject([HistoryPatientService], (service: HistoryPatientService) => {
    expect(service).toBeTruthy();
  }));
});
