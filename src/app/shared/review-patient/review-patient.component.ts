import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-patient',
  templateUrl: './review-patient.component.html',
  styleUrls: ['./review-patient.component.scss']
})
export class ReviewPatientComponent {
  @Input() fieldsForm;

  constructor() { }


}
