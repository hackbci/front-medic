import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
export interface User {
  name: string;
}
@Component({
  selector: 'app-registry-patient',
  templateUrl: './registry-patient.component.html',
  styleUrls: ['./registry-patient.component.scss']
})
export class RegistryPatientComponent implements OnInit {
  clinicCase = '';
  sintoma = '';
  caseControl = new FormControl();
  sintomaControl = new FormControl();
  optionCases: User[] = [
    {name: 'Rotura de rodilla'},
    {name: 'Traumatismo general'},
    {name: 'Lesión intercostal'}
  ];
  filteredOptions: Observable<User[]>;
  optionSymptoms: User[] = [
    {name: 'Sintoma1'},
    {name: 'Traumatismo general'},
    {name: 'Lesión intercostal'}
  ];
  filteredSintomas: Observable<User[]>;
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.caseControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.optionCases.slice())
      );
      this.filteredSintomas = this.sintomaControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter2(name) : this.optionSymptoms.slice())
      );
  }
  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.optionCases.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter2(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.optionSymptoms.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
