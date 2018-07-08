import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
