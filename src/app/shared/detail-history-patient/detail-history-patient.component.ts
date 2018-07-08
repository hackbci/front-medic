import { Component, OnInit } from '@angular/core';
import { HistoryPatientService } from '../../service/history-patient.service';
import {FlatTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'app-detail-history-patient',
  templateUrl: './detail-history-patient.component.html',
  styleUrls: ['./detail-history-patient.component.scss']
})
export class DetailHistoryPatientComponent {
  panelOpenState2 = false;
  panelOpenState3 = false;

  history;

  constructor(private _serviceHistory: HistoryPatientService) {
    this._serviceHistory.getHistory().subscribe((response: any) => { this.history = response; console.log(this.history);  });
  }
  panelOpenState1(event) {
    console.log(event);
  }

}
