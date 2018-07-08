import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HistoryPatientService {

  constructor(private http: HttpClient) {
  }
  getHistory() {
    return this.http.get('https://api-nanofunction.azurewebsites.net/MedicalConsultation/find');
  }
}
