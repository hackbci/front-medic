import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-history-patient',
  templateUrl: './detail-history-patient.component.html',
  styleUrls: ['./detail-history-patient.component.scss']
})
export class DetailHistoryPatientComponent implements OnInit {
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;

  constructor() { }

  ngOnInit() {
  }

}