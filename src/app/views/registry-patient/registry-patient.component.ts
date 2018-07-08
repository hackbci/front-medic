import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registry-patient',
  templateUrl: './registry-patient.component.html',
  styleUrls: ['./registry-patient.component.scss']
})
export class RegistryPatientComponent {
  algo = 'jjjjjjj';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor() { }

}
